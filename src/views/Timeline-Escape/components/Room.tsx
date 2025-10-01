"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type RoomProps = {
  roomNumber: number;
  question: string;
  options: string[];
  correctOrder: number[];
  onComplete: () => void;
};

export default function Room({ roomNumber, question, options, correctOrder, onComplete }: RoomProps) {
  const [userOrder, setUserOrder] = useState<number[]>(options.map((_, i) => i));
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newOrder = [...userOrder];
    [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
    setUserOrder(newOrder);
  };

  const moveDown = (index: number) => {
    if (index === userOrder.length - 1) return;
    const newOrder = [...userOrder];
    [newOrder[index + 1], newOrder[index]] = [newOrder[index], newOrder[index + 1]];
    setUserOrder(newOrder);
  };

  const checkAnswer = () => {
    const correct = userOrder.every((val, idx) => val === correctOrder[idx]);
    setIsCorrect(correct);
    if (correct) setTimeout(onComplete, 800);
  };

  return (
    <motion.div
      key={roomNumber}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="p-6 border rounded-2xl shadow-2xl max-w-lg mx-auto mt-10 bg-gradient-to-br from-white to-gray-50"
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-red-700 drop-shadow-lg">Phòng {roomNumber}</h2>
      <p className="mb-6 text-center text-gray-700 font-medium">{question}</p>

      <ul>
        {userOrder.map((idx, i) => (
          <motion.li
            key={i}
            layout
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center justify-between mb-3 border rounded-lg p-4 bg-gray-50 shadow hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            <span className="text-gray-800 font-medium">{options[idx]}</span>
            <div className="flex gap-2">
              <button
                onClick={() => moveUp(i)}
                className="px-3 py-1 bg-blue-200 text-blue-800 font-semibold rounded hover:bg-blue-300"
              >
                ↑
              </button>
              <button
                onClick={() => moveDown(i)}
                className="px-3 py-1 bg-blue-200 text-blue-800 font-semibold rounded hover:bg-blue-300"
              >
                ↓
              </button>
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="mt-6 text-center">
        <button
          onClick={checkAnswer}
          className="px-8 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 shadow-lg transition-colors duration-300"
        >
          Kiểm tra
        </button>

        <AnimatePresence>
          {isCorrect === true && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-green-600 font-bold text-lg animate-bounce"
            >
              🎉 Đúng! Bạn qua phòng tiếp theo.
            </motion.p>
          )}
          {isCorrect === false && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-red-600 font-bold text-lg"
            >
              ❌ Sai, thử lại nhé.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
