"use client";

import { motion } from "framer-motion";
import Image from "next/image";
type MemoryCardProps = {
  index: number;
  content: string;
  type: "image" | "text";
  isFlipped: boolean;
  isMatched: boolean;
  onClick: (index: number) => void;
};

export default function MemoryCard({
  index,
  content,
  type,
  isFlipped,
  isMatched,
  onClick,
}: MemoryCardProps) {
  return (
    <motion.div
      layout
      onClick={() => !isMatched && onClick(index)}
      className="cursor-pointer relative w-32 h-32 md:w-36 md:h-36"
      whileHover={{ scale: 1.05 }}
    >
      {/* Card Container với perspective */}
      <div style={{ perspective: "1000px" }} className="w-full h-full relative">
        {/* Front */}
        <motion.div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute w-full h-full rounded-lg shadow-md flex items-center justify-center text-center text-sm font-semibold text-gray-800 bg-gray-300"
          animate={{ rotateY: isFlipped || isMatched ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="select-none">?</span>
        </motion.div>

        {/* Back */}
        <motion.div
          style={{ backfaceVisibility: "hidden", rotateY: "180deg" }}
          className="absolute w-full h-full rounded-lg shadow-md flex items-center justify-center text-center text-sm font-semibold text-gray-800 bg-white"
          animate={{ rotateY: isFlipped || isMatched ? 0 : -180 }}
          transition={{ duration: 0.5 }}
        >
          {type === "image" ? (
            <Image
              src={content}
              alt="card"
              fill
              className="object-cover rounded"
            />
          ) : (
            <span>{content}</span>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
