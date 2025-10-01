"use client";

import { useState } from "react";
import Room from "./components/Room";
import { motion, AnimatePresence } from "framer-motion";

type QuizRoom = {
  question: string;
  options: string[];
  correctOrder: number[];
};

const rooms: QuizRoom[] = [
  {
    question: "Sắp xếp các sự kiện đầu Thế chiến II theo thứ tự xảy ra:",
    options: [
      "Thành lập trại tập trung Auschwitz",
      "Bắt đầu Thế chiến II",
      "Kristallnacht (Đêm pha lê)",
    ],
    correctOrder: [1, 2, 0],
  },
  {
    question: "Sắp xếp các sự kiện nổi bật khác:",
    options: [
      "Chiến dịch Normandy (D-Day)",
      "Cuộc họp Wannsee quyết định 'Giải pháp cuối cùng'",
      "Giải phóng trại Dachau",
    ],
    correctOrder: [1, 0, 2],
  },
  {
    question: "Sắp xếp các sự kiện liên quan Holocaust:",
    options: [
      "Hội nghị Yalta",
      "Sự kiện Einsatzgruppen (đội đặc nhiệm giết người)",
      "Phong trào kháng chiến chống phát xít",      
    ],
    correctOrder: [2, 0, 1,],
  },
  {
    question: "Sắp xếp các sự kiện cuối Thế chiến II:",
    options: [
      "Giải phóng trại Bergen-Belsen",
      "Đức đầu hàng vô điều kiện",
      "Tòa án Nuremberg",
    ],
    correctOrder: [0, 1, 2],
  },
  {
    question: "Sắp xếp các sự kiện nổi bật về nạn nhân Holocaust:",
    options: [
      "Xuất bản nhật ký Anne Frank",
      "Hội nghị Geneva về quyền con người",
      "Elie Wiesel nhận giải Nobel hòa bình",      
    ],
    correctOrder: [0, 2, 1],
  },
];

export default function TimelineEscape() {
  const [currentRoom, setCurrentRoom] = useState(0);

  const handleComplete = () => {
    setCurrentRoom((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <AnimatePresence mode="wait">
        {currentRoom >= rooms.length ? (
          <motion.div
            key="end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-10 bg-white rounded-2xl shadow-2xl border border-green-300"
          >
            <h1 className="text-4xl font-bold mb-4 text-green-700 animate-bounce">🎉 Chúc mừng!</h1>
            <p className="text-lg text-gray-700">Bạn đã vượt qua tất cả các phòng và tìm ra lối thoát.</p>
          </motion.div>
        ) : (
          <Room
            key={currentRoom}
            roomNumber={currentRoom + 1}
            question={rooms[currentRoom].question}
            options={rooms[currentRoom].options}
            correctOrder={rooms[currentRoom].correctOrder}
            onComplete={handleComplete}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
