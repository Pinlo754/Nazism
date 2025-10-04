"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  getCurrentPlayer,
  getPlayerAnswers,
  calculateScore,
  clearPlayerAnswers,
  QUIZ_QUESTIONS,
  type PlayerAnswer,
} from "../..//lib/quiz-data"
import { Trophy, Target, Clock, Home } from "lucide-react"

export default function ResultsPage() {
  const router = useRouter()
  const [playerName, setPlayerName] = useState<string>("")
  const [score, setScore] = useState<number>(0)
  const [correctCount, setCorrectCount] = useState<number>(0)
  const [totalTime, setTotalTime] = useState<number>(0)

  useEffect(() => {
    const name = getCurrentPlayer()
    const answers: PlayerAnswer[] = getPlayerAnswers()

    if (!name || answers.length === 0) {
      router.push("/")
      return
    }

    setPlayerName(name)
    setScore(calculateScore(answers))
    setCorrectCount(answers.filter((a) => a.isCorrect).length)
    setTotalTime(answers.reduce((sum, a) => sum + a.timeSpent, 0))
  }, [router])

  const handlePlayAgain = () => {
    clearPlayerAnswers()
    router.push("/")
  }

  const accuracy = ((correctCount / QUIZ_QUESTIONS.length) * 100).toFixed(1)
  const maxScore = QUIZ_QUESTIONS.length * 1500
  const scorePercentage = ((score / maxScore) * 100).toFixed(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-6">
        {/* Trophy Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-2xl animate-bounce">
            <Trophy className="w-12 h-12 text-yellow-500" />
          </div>
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Hoàn Thành!</h1>
          <p className="text-2xl text-white/90 font-semibold">{playerName}</p>
        </div>

        {/* Score Card */}
        <Card className="border-4 border-white shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-t-lg text-center">
            <CardTitle className="text-4xl font-bold">{score.toLocaleString()} điểm</CardTitle>
            <p className="text-lg opacity-90">{scorePercentage}% điểm tối đa</p>
          </CardHeader>
          <CardContent className="p-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-green-50 rounded-xl border-2 border-green-200">
                <Target className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-green-600">
                  {correctCount}/{QUIZ_QUESTIONS.length}
                </p>
                <p className="text-sm text-gray-600 font-medium mt-1">Câu đúng</p>
                <p className="text-lg font-bold text-green-600 mt-2">{accuracy}%</p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                <Clock className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-blue-600">{Math.round(totalTime)}s</p>
                <p className="text-sm text-gray-600 font-medium mt-1">Tổng thời gian</p>
                <p className="text-lg font-bold text-blue-600 mt-2">
                  {(totalTime / QUIZ_QUESTIONS.length).toFixed(1)}s/câu
                </p>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
                <Trophy className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-purple-600">
                  {correctCount >= 12
                    ? "Xuất sắc"
                    : correctCount >= 9
                      ? "Tốt"
                      : correctCount >= 6
                        ? "Khá"
                        : "Cần cố gắng"}
                </p>
                <p className="text-sm text-gray-600 font-medium mt-1">Xếp loại</p>
                <p className="text-lg font-bold text-purple-600 mt-2">
                  {correctCount >= 12 ? "🏆" : correctCount >= 9 ? "🥇" : correctCount >= 6 ? "🥈" : "📚"}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={handlePlayAgain}
                size="lg"
                className="h-14 text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                <Home className="w-5 h-5 mr-2" />
                Chơi Lại
              </Button>
              <Button
                onClick={() => router.push("/admin")}
                size="lg"
                variant="outline"
                className="h-14 text-lg font-bold border-2"
              >
                Xem Bảng Xếp Hạng
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
