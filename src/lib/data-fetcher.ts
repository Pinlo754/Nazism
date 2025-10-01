export interface SubEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface TimelineEvent {
  year: number;
  event: string;
  description: string;
  image?: string;
  subEvents?: SubEvent[];
}

export interface Statistics {
  holocaustVictims: number;
  jewishVictims: number;
  ww2Deaths: number;
  concentrationCamps: number;
}

export interface Reference {
  title: string;
  author: string;
  type: "book" | "primary_source";
  year: number;
  note?: string;
}

import useSWR from "swr";

const mockData: {
  "/api/timeline": TimelineEvent[];
  "/api/statistics": Statistics;
  "/api/references": Reference[];
} = {
  "/api/timeline": [
    {
      year: 1919,
      event: "Thành lập Đảng Công nhân Đức (DAP)",
      image: "https://e547kfpxfrd.exactdn.com/wp-content/uploads/2013/02/Hitler-and-party-members.jpg",
      description: "Anton Drexler thành lập Đảng Công nhân Đức tại Munich",
      subEvents: [
        {
          date: "5 tháng 1, 1919",
          title: "Anton Drexler thành lập DAP",
          description: "Đảng được thành lập với 25 thành viên ban đầu",
          image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Anton_Drexler_at_desk.jpg",
        },
        {
          date: "12 tháng 9, 1919",
          title: "Hitler tham gia cuộc họp đầu tiên",
          description: "Adolf Hitler được cử đến theo dõi một cuộc họp của DAP",
          image: "https://dsvfmvr182ibt.cloudfront.net/prod/uploads/2019/01/WL12381_1200x800_acf_cropped.jpg",
        },
      ],
    },
    // ... các event khác
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
};

const fetcher = async <T>(url: keyof typeof mockData): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, 100)); // simulate delay
  return mockData[url] as unknown as T;
};

export function useHistoricalData<T>(endpoint: keyof typeof mockData) {
  const { data, error, isLoading } = useSWR<T>(endpoint, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}

export function useTimeline() {
  return useHistoricalData<TimelineEvent[]>("/api/timeline");
}

export function useStatistics() {
  return useHistoricalData<Statistics>("/api/statistics");
}

export function useReferences() {
  return useHistoricalData<Reference[]>("/api/references");
}
