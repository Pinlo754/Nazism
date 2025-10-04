export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  timeLimit: number
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Chủ nghĩa Quốc xã (Nazism) xuất hiện ở quốc gia nào?",
    options: ["Ý", "Đức", "Nhật Bản", "Tây Ban Nha"],
    correctAnswer: 1,
    timeLimit: 20,
  },
  {
    id: 2,
    question: "Ai là người sáng lập và lãnh đạo Đảng Công nhân Quốc xã Đức?",
    options: ["Joseph Goebbels", "Hermann Göring", "Adolf Hitler", "Heinrich Himmler"],
    correctAnswer: 2,
    timeLimit: 20,
  },
  {
    id: 3,
    question: "Cuốn sách 'Mein Kampf' (Cuộc đấu tranh của tôi) được viết bởi ai?",
    options: ["Adolf Hitler", "Benito Mussolini", "Joseph Stalin", "Winston Churchill"],
    correctAnswer: 0,
    timeLimit: 20,
  },
  {
    id: 4,
    question: "Sự kiện nào đánh dấu sự trỗi dậy của Đảng Quốc xã ở Đức?",
    options: ["Cuộc đảo chính Munich 1923", "Bầu cử 1933", "Đêm dao găm dài 1934", "Hội nghị Nuremberg 1935"],
    correctAnswer: 1,
    timeLimit: 25,
  },
  {
    id: 5,
    question: "Reichstag (Tòa nhà Quốc hội Đức) bị cháy vào năm nào?",
    options: ["1931", "1933", "1935", "1939"],
    correctAnswer: 1,
    timeLimit: 20,
  },
  {
    id: 6,
    question: "Đêm Pha lê (Kristallnacht) diễn ra vào năm nào?",
    options: ["1936", "1938", "1940", "1942"],
    correctAnswer: 1,
    timeLimit: 20,
  },
  {
    id: 7,
    question: "Thế chiến II bắt đầu khi Đức xâm lược quốc gia nào?",
    options: ["Pháp", "Ba Lan", "Áo", "Tiệp Khắc"],
    correctAnswer: 1,
    timeLimit: 20,
  },
  {
    id: 8,
    question: "Hiệp ước nào cho phép Đức sáp nhập vùng Sudetenland?",
    options: ["Hiệp ước Versailles", "Hiệp ước Munich", "Hiệp ước Molotov-Ribbentrop", "Hiệp ước Locarno"],
    correctAnswer: 1,
    timeLimit: 25,
  },
  {
    id: 9,
    question: "Chiến dịch Barbarossa là gì?",
    options: ["Xâm lược Pháp", "Xâm lược Liên Xô", "Tấn công Anh", "Xâm lược Ba Lan"],
    correctAnswer: 1,
    timeLimit: 20,
  },
  {
    id: 10,
    question: "Trại tập trung Auschwitz nằm ở quốc gia nào ngày nay?",
    options: ["Đức", "Ba Lan", "Áo", "Tiệp Khắc"],
    correctAnswer: 1,
    timeLimit: 20,
  },
  {
    id: 11,
    question: "Hội nghị Wannsee năm 1942 bàn về vấn đề gì?",
    options: [
      "Kế hoạch xâm lược Anh",
      "'Giải pháp cuối cùng' cho người Do Thái",
      "Chiến lược Đông Âu",
      "Đầu hàng Pháp",
    ],
    correctAnswer: 1,
    timeLimit: 25,
  },
  {
    id: 12,
    question: "Trận Stalingrad kết thúc vào năm nào?",
    options: ["1941", "1942", "1943", "1944"],
    correctAnswer: 2,
    timeLimit: 20,
  },
  {
    id: 13,
    question: "Ngày D-Day (Đổ bộ Normandy) diễn ra vào ngày nào?",
    options: ["6/6/1944", "8/5/1945", "7/12/1941", "1/9/1939"],
    correctAnswer: 0,
    timeLimit: 20,
  },
  {
    id: 14,
    question: "Adolf Hitler tự sát vào năm nào?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: 2,
    timeLimit: 20,
  },
  {
    id: 15,
    question: "Đức Quốc xã đầu hàng vô điều kiện vào ngày nào?",
    options: ["30/4/1945", "8/5/1945", "2/9/1945", "15/8/1945"],
    correctAnswer: 1,
    timeLimit: 20,
  },
]

export interface PlayerAnswer {
  questionId: number
  selectedAnswer: number
  isCorrect: boolean
  timeSpent: number
  timestamp: number
}

export interface PlayerResult {
  playerName: string
  answers: PlayerAnswer[]
  totalScore: number
  correctAnswers: number
  completedAt: number
}

// LocalStorage keys
export const STORAGE_KEYS = {
  CURRENT_PLAYER: "quiz_current_player",
  PLAYER_ANSWERS: "quiz_player_answers",
  ALL_RESULTS: "quiz_all_results",
}

// Helper functions
export function saveCurrentPlayer(name: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEYS.CURRENT_PLAYER, name)
  }
}

export function getCurrentPlayer(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem(STORAGE_KEYS.CURRENT_PLAYER)
  }
  return null
}

export function saveAnswer(answer: PlayerAnswer) {
  if (typeof window !== "undefined") {
    const answers = getPlayerAnswers()
    answers.push(answer)
    localStorage.setItem(STORAGE_KEYS.PLAYER_ANSWERS, JSON.stringify(answers))
  }
}

export function getPlayerAnswers(): PlayerAnswer[] {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(STORAGE_KEYS.PLAYER_ANSWERS)
    return data ? JSON.parse(data) : []
  }
  return []
}

export function clearPlayerAnswers() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEYS.PLAYER_ANSWERS)
  }
}

export function saveResult(result: PlayerResult) {
  if (typeof window !== "undefined") {
    const results = getAllResults()
    results.push(result)
    localStorage.setItem(STORAGE_KEYS.ALL_RESULTS, JSON.stringify(results))
  }
}

export function getAllResults(): PlayerResult[] {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(STORAGE_KEYS.ALL_RESULTS)
    return data ? JSON.parse(data) : []
  }
  return []
}

export function clearAllResults() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEYS.ALL_RESULTS)
  }
}

export function calculateScore(answers: PlayerAnswer[]): number {
  let score = 0
  answers.forEach((answer) => {
    if (answer.isCorrect) {
      // Base score: 1000 points
      // Time bonus: up to 500 points (faster = more points)
      const question = QUIZ_QUESTIONS.find((q) => q.id === answer.questionId)
      if (question) {
        const timeBonus = Math.max(0, 500 * (1 - answer.timeSpent / question.timeLimit))
        score += 1000 + Math.round(timeBonus)
      }
    }
  })
  return score
}
