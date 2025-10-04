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
    { 
        year: 1920, 
        event: "Đổi tên thành Đảng Quốc xã (NSDAP)", 
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Parteiadler_Nationalsozialistische_Deutsche_Arbeiterpartei_%281933%E2%80%931945%29.svg",
        description: "Đảng chính thức đổi tên và công bố 25 điều cương lĩnh",
        subEvents: [
          {
            date: "24 tháng 2, 1920",
            title: "Công bố 25 điều cương lĩnh",
            description: "Tại Hofbräuhaus, Munich, Hitler trình bày cương lĩnh của đảng",
            image:"https://c8.alamy.com/compde/c45b3r/hitler-auf-dem-hofbrauhaus-1941-c45b3r.jpg"
          },
          {
            date: "1 tháng 8, 1920",
            title: "Ra mắt báo Völkischer Beobachter", 
            description: "Tờ báo chính thức của đảng được xuất bản",
            image : "https://c8.alamy.com/compde/db7r77/nationalsozialismus-presse-medien-voelkischer-beobachter-nummer-247-franz-eher-verlag-munchen-1101942-zusatzrechte-clearences-nicht-vorhanden-db7r77.jpg"
          }
        ]
      },
      { 
        year: 1933, 
        event: "Hitler lên làm Thủ tướng Đức",
        image: "https://c8.alamy.com/compde/c3gxgx/adolf-hitler-und-paul-von-hindenburg-am-labor-day-1933-c3gxgx.jpg",
        description: "Paul von Hindenburg bổ nhiệm Hitler làm Thủ tướng",
      
        subEvents: [
          {
            date: "30 tháng 1, 1933",
            title: "Hitler được bổ nhiệm Thủ tướng",
            description: "Tổng thống Hindenberg bổ nhiệm Hitler làm Thủ tướng"
          },
          {
            date: "27 tháng 2, 1933",
            title: "Vụ cháy Reichstag",
            description: "Tòa nhà Quốc hội bị cháy, cớ để trấn áp đối lập",
            image : "https://i0.wp.com/lost-in-history.com/wp-content/uploads/2024/09/Reichstag1.png?w=713&ssl=1"
          },
          {
            date: "23 tháng 3, 1933",
            title: "Thông qua Đạo luật Ủy quyền",
            description: "Hitler được toàn quyền ban hành luật mà không cần Quốc hội",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwCfByOQ_k1wImobMATzd0ouifcFvR3vBuDOBni1zDbOzYiQS-zm-hcxfv8wXuPdHgVBL618WMgRmr5R-v9KxlOn0-z1AzH1D0r-nij10snA_bs2mpiKxsC6vmLOo8WJQCDvdzielFO8K0VC2qoICCYU5Qp2nMoGt3Bjddv1t5-tzPR6kFc0Ce7vtkwno/w559-h314/img1.jpg"
          }
        ]
      },
      { 
        year: 1939, 
        event: "Bắt đầu Thế chiến II", 
        image: "https://cdn.britannica.com/39/185239-050-ACC5D1A6/soldiers-German-vehicles-Poland-September-1939.jpg",
        description: "Đức tấn công Ba Lan, khởi đầu Thế chiến II",
        subEvents: [
          {
            date: "1 tháng 9, 1939",
            title: "Tấn công Ba Lan",
            description: "Quân đội Đức xâm lược Ba Lan",
            image: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1920,h_1254,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-98511184?_a=BAVAZGID0"
          },
          {
            date: "3 tháng 9, 1939",
            title: "Anh và Pháp tuyên chiến",
            description: "Anh và Pháp tuyên chiến với Đức",
            image: "https://cdn.theatlantic.com/thumbor/yOeMOwJcxXwhHX78b9h4qeLQpIU=/0x217:2500x1623/960x540/media/img/mt/2017/08/GettyImages_142436574/original.jpg"
          }
        ]
      },
      { 
        year: 1941, 
        event: 'Bắt đầu "Giải pháp cuối cùng"', 
        image: "https://vcdn1-vnexpress.vnecdn.net/2022/01/21/s200123-auschwitz-mc-8473-1588-1642756978.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=SMqe_qTy7-lWlARAOX3xFg",
        description: "Kế hoạch diệt chủng người Do Thái được thực hiện có hệ thống",
        subEvents: [
          {
            date: "20 tháng 1, 1942",
            title: "Hội nghị Wannsee",
            description: "Các quan chức Nazi họp bàn về 'Giải pháp cuối cùng'",
            image: "https://media.vov.vn/sites/default/files/styles/large/public/2022-01/Hitler%20va%20cac%20quan%20chuc%20chop%20bu%20cua%20Duc%20Quoc%20xa%20-ushmm.jpg"
          },
          {
            date: "22 tháng 6, 1941", 
            title: "Chiến dịch Barbarossa",
            description: "Đức tấn công Liên Xô, mở rộng Holocaust",
            image : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/RIAN_archive_%2B662733_Recruits_leave_for_front_during_mobilization.jpg/250px-RIAN_archive_%2B662733_Recruits_leave_for_front_during_mobilization.jpg"
          }
        ]
      },
      { 
        year: 1945, 
        event: "Kết thúc chiến tranh và chế độ Quốc xã", 
        image: "https://nghiencuuquocte.org/wp-content/uploads/2016/05/Germany-Surrenders.jpg",
        description: "Hitler tự sát, Đức đầu hàng vô điều kiện",
        subEvents: [
          {
            date: "30 tháng 4, 1945",
            title: "Hitler tự sát",
            description: "Hitler và Eva Braun tự sát trong bunker ở Berlin",
            image: "https://media.gettyimages.com/id/615311608/photo/american-gis-on-leave-in-paris-reading-the-u-s-military-newspaper-stars-and-stripes-which-has.jpg?s=612x612&w=gi&k=20&c=IBUjA0WD_z-YZBdZvvy7C1UNkZ3kRE-EvNnJ1JCfmGU="  
          },
          {
            date: "8 tháng 5, 1945",
            title: "Đức đầu hàng vô điều kiện",
            description: "Chính thức kết thúc chiến tranh ở châu Âu",
            image: "https://cmsm.co.uk/wp-content/uploads/2022/05/German-signing-3.jpg"
          }
        ]
      },
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
