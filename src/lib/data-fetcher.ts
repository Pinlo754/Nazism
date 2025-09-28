import useSWR from "swr"

// Mock data fetcher for historical content
const fetcher = async (url: string) => {
  // In a real app, this would fetch from an API
  await new Promise((resolve) => setTimeout(resolve, 100)) // Simulate network delay

  const mockData: Record<string, any> = {
    "/api/timeline": [
      { year: 1919, event: "Thành lập Đảng Công nhân Đức (DAP)" },
      { year: 1920, event: "Đổi tên thành Đảng Quốc xã (NSDAP)" },
      { year: 1933, event: "Hitler lên làm Thủ tướng Đức" },
      { year: 1939, event: "Bắt đầu Thế chiến II" },
      { year: 1941, event: 'Bắt đầu "Giải pháp cuối cùng"' },
      { year: 1945, event: "Kết thúc chiến tranh và chế độ Quốc xã" },
    ],
    "/api/statistics": {
      holocaustVictims: 11000000,
      jewishVictims: 6000000,
      ww2Deaths: 75000000,
      concentrationCamps: 1200,
    },
    "/api/references": [
      {
        title: "The Rise and Fall of the Third Reich",
        author: "William L. Shirer",
        type: "book",
        year: 1960,
      },
      {
        title: "Mein Kampf",
        author: "Adolf Hitler",
        type: "primary_source",
        year: 1925,
        note: "Tài liệu gốc - chỉ để nghiên cứu lịch sử",
      },
    ],
  }

  return mockData[url] || null
}

export function useHistoricalData(endpoint: string) {
  const { data, error, isLoading } = useSWR(endpoint, fetcher)

  return {
    data,
    isLoading,
    isError: error,
  }
}

export function useTimeline() {
  return useHistoricalData("/api/timeline")
}

export function useStatistics() {
  return useHistoricalData("/api/statistics")
}

export function useReferences() {
  return useHistoricalData("/api/references")
}
