"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  QUIZ_QUESTIONS,
  getCurrentPlayer,
  saveAnswer,
  getPlayerAnswers,
  saveResult,
  calculateScore,
  type PlayerAnswer,
} from "../..//lib/quiz-data"
import { Clock, CheckCircle2, XCircle } from "lucide-react"

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState(QUIZ_QUESTIONS[0].timeLimit)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100

  // Kiểm tra player
  useEffect(() => {
    const playerName = getCurrentPlayer()
    if (!playerName) {
      router.push("/")
    }
  }, [router])

  // Reset thời gian khi chuyển câu hỏi
  useEffect(() => {
    setTimeLeft(currentQuestion.timeLimit)
    setQuestionStartTime(Date.now())
    setSelectedAnswer(null)
    setShowResult(false)
  }, [currentQuestionIndex, currentQuestion.timeLimit])

  // Xử lý timeout bằng useCallback
  const handleTimeout = useCallback(() => {
    if (selectedAnswer === null) {
      const timeSpent = (Date.now() - questionStartTime) / 1000
      const answer: PlayerAnswer = {
        questionId: currentQuestion.id,
        selectedAnswer: -1,
        isCorrect: false,
        timeSpent,
        timestamp: Date.now(),
      }
      saveAnswer(answer)
      setIsCorrect(false)
      setShowResult(true)
    }
  }, [selectedAnswer, questionStartTime, currentQuestion.id])

  // Timer countdown
  useEffect(() => {
    if (showResult) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeout()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [showResult, currentQuestionIndex, handleTimeout])

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const timeSpent = (Date.now() - questionStartTime) / 1000
    const correct = selectedAnswer === currentQuestion.correctAnswer

    const answer: PlayerAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect: correct,
      timeSpent,
      timestamp: Date.now(),
    }

    saveAnswer(answer)
    setIsCorrect(correct)
    setShowResult(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Quiz hoàn tất
      const playerName = getCurrentPlayer()
      const answers = getPlayerAnswers()
      const totalScore = calculateScore(answers)
      const correctAnswers = answers.filter((a) => a.isCorrect).length

      if (playerName) {
        saveResult({
          playerName,
          answers,
          totalScore,
          correctAnswers,
          completedAt: Date.now(),
        })
      }

      router.push("/results")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-6">
        {/* Progress Bar */}
        <div className="bg-white rounded-full p-2 shadow-lg">
          <Progress value={progress} className="h-3" />
          <p className="text-center mt-2 font-bold text-gray-700">
            Câu {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length}
          </p>
        </div>

        {/* Question Card */}
        <Card className="border-4 border-white shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">Câu hỏi {currentQuestion.id}</CardTitle>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span className="text-xl font-bold">{timeLeft}s</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-balance">{currentQuestion.question}</h2>

            <div className="grid gap-4">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrectAnswer = index === currentQuestion.correctAnswer
                const showCorrect = showResult && isCorrectAnswer
                const showWrong = showResult && isSelected && !isCorrect

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`
                      p-6 rounded-xl text-left text-lg font-semibold transition-all
                      border-4 hover:scale-[1.02] active:scale-[0.98]
                      ${
                        showCorrect
                          ? "bg-green-100 border-green-500 text-green-800"
                          : showWrong
                            ? "bg-red-100 border-red-500 text-red-800"
                            : isSelected
                              ? "bg-purple-100 border-purple-500 text-purple-800"
                              : "bg-gray-50 border-gray-300 text-gray-800 hover:border-purple-400"
                      }
                      ${showResult ? "cursor-not-allowed" : "cursor-pointer"}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showCorrect && <CheckCircle2 className="w-6 h-6 text-green-600" />}
                      {showWrong && <XCircle className="w-6 h-6 text-red-600" />}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              {!showResult ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  size="lg"
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Xác Nhận
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  size="lg"
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? "Câu Tiếp Theo" : "Xem Kết Quả"}
                </Button>
              )}
            </div>

            {/* Result Message */}
            {showResult && (
              <div
                className={`mt-6 p-4 rounded-lg text-center font-bold text-lg ${
                  isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {isCorrect ? "🎉 Chính xác!" : "❌ Sai rồi!"}
                {!isCorrect && selectedAnswer === -1 && " (Hết giờ)"}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
