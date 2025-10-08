"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gamepad2, Users } from "lucide-react";
import { saveCurrentPlayer, clearPlayerAnswers } from "../..//lib/quiz-data";
import { toast } from "sonner";

export default function HomePage() {
  const router = useRouter();
  const [playerName, setPlayerName] = useState("");

  const handleStartQuiz = () => {
    if (!playerName.trim()) {
      toast.error("Vui lòng nhập tên người chơi trước khi bắt đầu.");
      return;
    }

    const regex = /^[A-Za-z]{2}\d{6}$/;
    if (!regex.test(playerName.trim())) {
      toast.error("Tên phải có dạng MSSV, ví dụ: SE181770");
      return;
    }
    saveCurrentPlayer(playerName.trim().toUpperCase());
    toast.success(
      `Chào ${playerName.trim().toUpperCase()}! Bắt đầu bài quiz nào!`
    );
    clearPlayerAnswers();
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl animate-pulse">
            QuizMaster Live
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-balance">
            Trò chơi quiz trực tiếp tương tác - Học lịch sử một cách thú vị
          </p>
        </div>

        <Card className="border-4 border-white shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold text-center">
              Tham Gia Quiz
            </CardTitle>
            <CardDescription className="text-white/90 text-center text-lg">
              Nhập tên của bạn để bắt đầu
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="playerName" className="text-lg font-semibold">
                Tên của bạn
              </Label>
              <Input
                id="playerName"
                type="text"
                placeholder="Nhập tên..."
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleStartQuiz()}
                className="h-14 text-lg border-2"
              />
            </div>

            <Button
              onClick={handleStartQuiz}
              size="lg"
              className="w-full h-14 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Users className="mr-2 h-5 w-5" />
              Bắt Đầu Quiz
            </Button>
          </CardContent>
        </Card>

        <Card className="border-4 border-white/50 bg-white/10 backdrop-blur-sm">
          <CardContent className="p-6 text-center text-white">
            <p className="text-lg">
              <strong>Chủ đề:</strong> Chủ nghĩa Quốc xã - Lịch sử Thế chiến II
              <br />
              <strong>Số câu hỏi:</strong> 20 câu | <strong>Thời gian:</strong>{" "}
              ~20 giây/câu
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.push("/admin")}
            className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30"
          >
            <Gamepad2 className="mr-2 h-5 w-5" />
            Xem Bảng Xếp Hạng (Admin)
          </Button>
        </div>
      </div>
    </div>
  );
}
