"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, Target, Clock, RefreshCw, Trash2 } from "lucide-react"
import { getAllResults, clearAllResults, type PlayerResult } from "../..//lib/quiz-data"

export default function AdminPage() {
  const router = useRouter()
  const [results, setResults] = useState<PlayerResult[]>([])
  const [autoRefresh, setAutoRefresh] = useState(true)

  const loadResults = () => {
    const allResults = getAllResults()
    setResults(allResults.sort((a, b) => b.totalScore - a.totalScore))
  }

  useEffect(() => {
    loadResults()
  }, [])

  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(() => {
      loadResults()
    }, 2000)

    return () => clearInterval(interval)
  }, [autoRefresh])

  const handleClearResults = () => {
    if (confirm("Bạn có chắc muốn xóa tất cả kết quả?")) {
      clearAllResults()
      loadResults()
    }
  }

  const totalPlayers = results.length
  const avgScore = totalPlayers > 0 ? Math.round(results.reduce((sum, r) => sum + r.totalScore, 0) / totalPlayers) : 0
  const highestScore = totalPlayers > 0 ? results[0].totalScore : 0
  const avgCorrect =
    totalPlayers > 0 ? (results.reduce((sum, r) => sum + r.correctAnswers, 0) / totalPlayers).toFixed(1) : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <Card className="border-4 border-white shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-3xl font-bold">Bảng Xếp Hạng Admin</CardTitle>
                <p className="text-white/90 text-lg mt-1">Theo dõi kết quả real-time</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={loadResults}
                  className="h-12 w-12 bg-white/20 border-white text-white hover:bg-white/30"
                >
                  <RefreshCw className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setAutoRefresh(!autoRefresh)}
                  className={`h-12 w-12 border-white text-white ${autoRefresh ? "bg-green-500/50 hover:bg-green-500/70" : "bg-white/20 hover:bg-white/30"}`}
                >
                  <Clock className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleClearResults}
                  className="h-12 w-12 bg-red-500/50 border-white text-white hover:bg-red-500/70"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-2 border-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <Users className="w-10 h-10 mx-auto mb-2 text-blue-600" />
                <p className="text-3xl font-bold text-blue-600">{totalPlayers}</p>
                <p className="text-sm text-gray-600 font-medium">Người chơi</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <Trophy className="w-10 h-10 mx-auto mb-2 text-yellow-600" />
                <p className="text-3xl font-bold text-yellow-600">{highestScore.toLocaleString()}</p>
                <p className="text-sm text-gray-600 font-medium">Điểm cao nhất</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <Target className="w-10 h-10 mx-auto mb-2 text-green-600" />
                <p className="text-3xl font-bold text-green-600">{avgScore.toLocaleString()}</p>
                <p className="text-sm text-gray-600 font-medium">Điểm trung bình</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <Clock className="w-10 h-10 mx-auto mb-2 text-purple-600" />
                <p className="text-3xl font-bold text-purple-600">{avgCorrect}/15</p>
                <p className="text-sm text-gray-600 font-medium">Câu đúng TB</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-4 border-white shadow-2xl">
          <CardHeader className="bg-white">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              Bảng Xếp Hạng ({totalPlayers} người chơi)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {results.length > 0 ? (
              <div className="space-y-3">
                {results.map((result, index) => {
                  const rank = index + 1
                  const accuracy = ((result.correctAnswers / 15) * 100).toFixed(0)

                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                        rank === 1
                          ? "bg-yellow-50 border-yellow-400 shadow-lg"
                          : rank === 2
                            ? "bg-gray-50 border-gray-400 shadow-md"
                            : rank === 3
                              ? "bg-orange-50 border-orange-400 shadow-md"
                              : "bg-white border-gray-200"
                      }`}
                    >
                      {/* Rank */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                          rank === 1
                            ? "bg-yellow-400 text-yellow-900"
                            : rank === 2
                              ? "bg-gray-400 text-gray-900"
                              : rank === 3
                                ? "bg-orange-400 text-orange-900"
                                : "bg-purple-500 text-white"
                        }`}
                      >
                        {rank <= 3 ? (rank === 1 ? "🥇" : rank === 2 ? "🥈" : "🥉") : rank}
                      </div>

                      {/* Player Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-lg truncate">{result.playerName}</p>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span>
                            {result.correctAnswers}/15 đúng ({accuracy}%)
                          </span>
                          <span>•</span>
                          <span>{new Date(result.completedAt).toLocaleTimeString("vi-VN")}</span>
                        </div>
                      </div>

                      {/* Score */}
                      <div className="text-right">
                        <p className="text-2xl font-bold text-purple-600">{result.totalScore.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">điểm</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <Users className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-xl font-semibold text-gray-600 mb-2">Chưa có kết quả nào</p>
                <p className="text-gray-500">Kết quả sẽ hiển thị khi có người hoàn thành quiz</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            onClick={() => router.push("/")}
            size="lg"
            className="bg-white text-purple-600 hover:bg-white/90 font-bold"
          >
            Về Trang Chủ
          </Button>
        </div>
      </div>
    </div>
  )
}
