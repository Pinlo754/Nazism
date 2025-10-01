"use client";

import { useState, useEffect } from "react";
import MemoryCard from "./components/MemoryCard";
import { motion, AnimatePresence } from "framer-motion";

type CardType = {
  id: number;
  content: string;
  pairId: number;
  type: "image" | "text";
};

const initialCards: CardType[] = [
  // Level 1 - 10 cặp
  { id: 1, type: "image", content: "/anne_frank.jpg", pairId: 101 },
  { id: 2, type: "text", content: "Anne Frank", pairId: 101 },
  { id: 3, type: "image", content: "/auschwitz-birkenau-memorial-museum.jpg", pairId: 102 },
  { id: 4, type: "text", content: "Auschwitz - 1940", pairId: 102 },
  { id: 5, type: "image", content: "/Dachau.jpg", pairId: 103 },
  { id: 6, type: "text", content: "Dachau - 1933", pairId: 103 },
  { id: 7, type: "image", content: "/krystallnacht.jpg", pairId: 104 },
  { id: 8, type: "text", content: "Kristallnacht - 1938", pairId: 104 },
  { id: 9, type: "image", content: "/treblinka.jpg", pairId: 105 },
  { id: 10, type: "text", content: "Treblinka - 1942", pairId: 105 },
  { id: 11, type: "image", content: "/Sobibor.jpg", pairId: 106 },
  { id: 12, type: "text", content: "Sobibor - 1942", pairId: 106 },
  { id: 13, type: "image", content: "/elie_wiesel.jpg", pairId: 107 },
  { id: 14, type: "text", content: "Elie Wiesel", pairId: 107 },
  { id: 15, type: "image", content: "/Vienna.jpg", pairId: 108 },
  { id: 16, type: "text", content: "Vienna - 1938", pairId: 108 },
  { id: 17, type: "image", content: "/elisabeth.jpg", pairId: 109 },
  { id: 18, type: "text", content: "Elisabeth", pairId: 109 },
  { id: 19, type: "image", content: "/otto_frank.jpg", pairId: 110 },
  { id: 20, type: "text", content: "Otto Frank", pairId: 110 },
];

export default function MemoryGame() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);

  useEffect(() => {
    setCards(shuffleArray(initialCards));
  }, []);

  const shuffleArray = (array: CardType[]) => {
    return array
      .map((a) => [Math.random(), a] as [number, CardType])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  };

  const handleClick = (index: number) => {
    if (flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIdx, secondIdx] = newFlipped;
      if (cards[firstIdx].pairId === cards[secondIdx].pairId) {
        setMatched((prev) => [...prev, firstIdx, secondIdx]);
        setTimeout(() => setFlipped([]), 500);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-700">Memory Game – Holocaust</h1>
      <AnimatePresence>
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card, idx) => (
            <MemoryCard
              key={card.id}
              index={idx}
              content={card.content}
              type={card.type}
              isFlipped={flipped.includes(idx)}
              isMatched={matched.includes(idx)}
              onClick={handleClick}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      {matched.length === cards.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-green-600 text-white font-bold rounded shadow-lg"
        >
          Chúc mừng! Bạn đã tìm hết các cặp.
        </motion.div>
      )}
    </div>
  );
}
