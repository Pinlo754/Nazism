"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Globe,
  Film,
  Building2,
  Database,
  Archive,
  BookOpen,
  ExternalLink,
  Search,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fadeInUp } from "@/lib/variants";

// Hàm tiện ích để tạo slug từ tiêu đề
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// ------------------ Mini Sidebar Component ------------------
interface SectionLink {
  title: string;
  slug: string;
  icon: React.ElementType;
}

function MiniSidebar({ sections }: { sections: SectionLink[] }) {
  const [activeSlug, setActiveSlug] = React.useState(sections[0].slug);

  React.useEffect(() => {
    const handleScroll = () => {
      let currentActive = activeSlug;
      const threshold = 150;

      sections.forEach((section) => {
        const element = document.getElementById(section.slug);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom >= threshold) {
            currentActive = section.slug;
          }
        }
      });

      if (currentActive !== activeSlug) {
        setActiveSlug(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeSlug]);

  return (
    <div className="hidden lg:block fixed left-4 top-1/2 transform -translate-y-1/2 z-50 p-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg">
      <nav className="flex flex-col space-y-3">
        {sections.map(({ title, slug, icon }) => (
          <a
            key={slug}
            href={`#${slug}`}
            title={title}
            className={`
              p-2 rounded-lg transition-all duration-300 relative group
              ${
                activeSlug === slug
                  ? "bg-gray-800 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              }
            `}
            onClick={() => setActiveSlug(slug)}
          >
            {/* Icon */}
            {React.createElement(icon, {
              className: `h-5 w-5 transition-colors duration-300 ${
                activeSlug === slug ? "text-white" : "text-gray-800"
              }`,
            })}

            {/* Tooltip */}
            <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {title}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}
// ------------------ End Sidebar ------------------

export default function ReferencesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // ---------- Sections Data ----------
  const websites = [
    {
      title: "United States Holocaust Memorial Museum",
      url: "https://www.ushmm.org",
      description:
        "Kho lưu trữ số toàn diện với hàng nghìn tài liệu, ảnh và lời khai của những người sống sót qua Holocaust.",
      image: "/holocaust-museum-archive-documents.jpg",
    },
    {
      title: "Yad Vashem - Trung tâm Tưởng niệm Holocaust Thế giới",
      url: "https://www.yadvashem.org",
      description:
        "Đài tưởng niệm chính thức của Israel dành cho nạn nhân Holocaust, với nguồn tài liệu giáo dục và lịch sử phong phú.",
      image: "/yad-vashem-memorial-jerusalem.jpg",
    },
    {
      title: "The Avalon Project - Trường Luật Yale",
      url: "https://avalon.law.yale.edu",
      description:
        "Thư viện số các tài liệu liên quan đến luật pháp, lịch sử và ngoại giao, bao gồm các thủ tục tòa án Nuremberg.",
      image: "/nuremberg-trials-legal-documents.jpg",
    },
    {
      title: "Lịch sử Đức qua Tài liệu và Hình ảnh",
      url: "https://www.germanhistorydocs.org",
      description:
        "Bộ sưu tập toàn diện các nguồn tài liệu gốc và hình ảnh ghi chép lịch sử Đức từ năm 1500 đến nay.",
      image: "/german-historical-documents-archive.jpg",
    },
  ];

  const documentaries = [
    {
      title: "Shoah (1985)",
      director: "Claude Lanzmann",
      description:
        "Phim tài liệu dài 9 tiếng với các cuộc phỏng vấn những người sống sót, nhân chứng và thủ phạm của Holocaust.",
      duration: "566 phút",
      image: "/shoah-documentary-film-1985.jpg",
      url: "https://www.imdb.com/title/tt0090015/",
    },
    {
      title: "The World at War (1973)",
      director: "Thames Television",
      description:
        "Series toàn diện 26 tập bao gồm tất cả các khía cạnh của Thế chiến II, kể cả sự trỗi dậy của Chủ nghĩa Quốc xã.",
      duration: "26 tập",
      image: "/world-at-war-documentary-series.jpg",
      url: "https://www.imdb.com/title/tt0071075/",
    },
    {
      title: "Night and Fog (1956)",
      director: "Alain Resnais",
      description:
        "Phim tài liệu ngắn mạnh mẽ đối chiếu cảnh bình yên hiện tại với cảnh quay kinh hoàng từ trại tập trung.",
      duration: "32 phút",
      image: "/night-and-fog-documentary-concentration-camp.jpg",
      url: "https://www.imdb.com/title/tt0048434/",
    },
    {
      title: "The Nazis: A Warning from History (1997)",
      director: "BBC",
      description:
        "Series 6 tập xem xét làm thế nào một quốc gia văn minh có thể rơi vào tình trạng man rợ.",
      duration: "6 tập",
      image: "/nazis-warning-from-history-bbc.jpg",
      url: "https://www.imdb.com/title/tt0169152/",
    },
  ];

  const museums = [
    {
      name: "Bảo tàng và Đài tưởng niệm Auschwitz-Birkenau",
      location: "Oświęcim, Ba Lan",
      description:
        "Địa điểm được bảo tồn của trại tập trung và diệt chủng lớn nhất của Đức Quốc xã, hiện là Di sản Thế giới UNESCO.",
      established: "1947",
      image: "/auschwitz-birkenau-memorial-museum.jpg",
    },
    {
      name: "Topography of Terror",
      location: "Berlin, Đức",
      description:
        "Trung tâm tài liệu nằm tại trụ sở cũ của Gestapo và SS, ghi chép các tội ác của Đức Quốc xã.",
      established: "1987",
      image: "/topography-of-terror-berlin-museum.jpg",
    },
    {
      name: "Bảo tàng Chiến tranh Hoàng gia",
      location: "London, Vương quốc Anh",
      description:
        "Triển lãm Holocaust rộng lớn và kho lưu trữ ghi chép sự tham gia của Anh trong Thế chiến II.",
      established: "1917",
      image: "/imperial-war-museum-london-holocaust.jpg",
    },
  ];

  // Thêm các section khác (researchCenters, archives, databases) tương tự...
  const researchCenters = [
    {
      name: "Thư viện Holocaust Wiener",
      location: "London, Anh",
      description:
        "Tổ chức tưởng niệm Holocaust lâu đời nhất thế giới và bộ sưu tập lớn nhất của Anh về thời kỳ Quốc xã.",
      focus: "Nghiên cứu và giáo dục về Holocaust",
      image: "/wiener-holocaust-library-research.jpg",
    },
    {
      name: "Trung tâm Nghiên cứu Holocaust Nâng cao",
      location: "Washington, D.C., Hoa Kỳ",
      description:
        "Hỗ trợ nghiên cứu, xuất bản và giáo dục về Holocaust và các vụ diệt chủng liên quan.",
      focus: "Nghiên cứu học thuật và học bổng",
      image: "/holocaust-research-center-washington.jpg",
    },
    {
      name: "Viện Fritz Bauer",
      location: "Frankfurt, Đức",
      description:
        "Trung tâm nghiên cứu và tài liệu tập trung vào lịch sử và tác động của Holocaust.",
      focus: "Lịch sử pháp lý và nghiên cứu ký ức",
      image: "/fritz-bauer-institute-frankfurt.jpg",
    },
  ];

  const archives = [
    {
      name: "Thủ tục Tòa án Nuremberg",
      type: "Tài liệu Pháp lý",
      description:
        "Bản ghi đầy đủ, bằng chứng và phán quyết từ Tòa án Quân sự Quốc tế.",
      volume: "42 tập",
      image: "/nuremberg-trials-documents-archive.jpg",
    },
    {
      name: "Kho lưu trữ Video Fortunoff",
      type: "Lịch sử Truyền khẩu",
      description:
        "Hơn 4.400 cuộc phỏng vấn video với nhân chứng và người sống sót qua Holocaust.",
      volume: "4.400+ lời khai",
      image: "/story3.jpg?height=200&width=300",
    },
    {
      name: "Bundesarchiv",
      type: "Lưu trữ Quốc gia",
      description:
        "Lưu trữ Liên bang Đức chứa hàng triệu tài liệu từ thời kỳ Quốc xã.",
      volume: "Bộ sưu tập rộng lớn",
      image: "/images.jpg?height=200&width=300",
    },
  ];

  const databases = [
    {
      name: "Cơ sở dữ liệu Người sống sót và Nạn nhân Holocaust",
      provider: "USHMM",
      description:
        "Cơ sở dữ liệu có thể tìm kiếm tên và thông tin về nạn nhân và người sống sót qua Holocaust.",
      records: "Hàng triệu hồ sơ",
      image:
        "/Ebensee_concentration_camp_prisoners_1945.jpg?height=200&width=300",
    },
    {
      name: "Cơ sở dữ liệu Trung tâm Tên Nạn nhân Shoah",
      provider: "Yad Vashem",
      description:
        "Cơ sở dữ liệu toàn diện ghi chép tên của nạn nhân Holocaust.",
      records: "4,8+ triệu tên",
      image:
        "/congly-vn_noi-co-don-cua-nan-nhan-song-sot-sau-tham-hoa-holocaust-trong-dich-covid-19-hinh-anh01042365712.jpg/?height=200&width=300",
    },
    {
      name: "Kho lưu trữ Arolsen",
      provider: "Trung tâm Quốc tế về Bức hại Quốc xã",
      description:
        "Kho lưu trữ số với tài liệu về nạn nhân và người sống sót qua sự bức hại của Quốc xã.",
      records: "30+ triệu tài liệu",
      image: "/ITS_Arolsen_main_building.jpg?height=200&width=300",
    },
  ];

  // ------------------ Sections Config ------------------
  const sectionsConfig = [
    { title: "Nguồn Tài nguyên Số", icon: Globe, items: websites, type: "website" },
    { title: "Phim Tài liệu", icon: Film, items: documentaries, type: "documentary" },
    { title: "Bảo tàng & Đài tưởng niệm", icon: Building2, items: museums, type: "museum" },
    { title: "Trung tâm Nghiên cứu", icon: Search, items: researchCenters, type: "research" },
    { title: "Lưu trữ Số", icon: Archive, items: archives, type: "archive" },
    { title: "Cơ sở Dữ liệu Nghiên cứu", icon: Database, items: databases, type: "database" },
  ].map((section) => ({ ...section, slug: slugify(section.title) }));

  // Tạo cấu hình Sidebar
  const sidebarLinks = sectionsConfig.map(({ title, slug, icon }) => ({
    title,
    slug,
    icon,
  }));

  // ------------------ Render ------------------
  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-white text-black overflow-x-hidden"
    >
      <MiniSidebar sections={sidebarLinks} />

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl animate-float"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-40 right-20 w-96 h-96 bg-gray-50 rounded-full blur-3xl animate-float-slow"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gray-100 rounded-full blur-3xl animate-float-reverse"
        />
      </div>

      {/* Hero Banner */}
      <div className="relative z-10 h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/banner.jpg?height=800&width=1600"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-white" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center text-[#FFF5E0] px-4 max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <BookOpen className="h-12 w-12 md:h-16 md:w-16 " />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold">
              Tài liệu Tham khảo
            </h1>
          </div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Bộ sưu tập các nguồn tài liệu uy tín để nghiên cứu về Chủ nghĩa Quốc
            xã và Holocaust thông qua nghiên cứu học thuật, tài liệu và bảo tồn
            lịch sử.
          </p>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="relative z-20 container mx-auto px-4 py-16 max-w-7xl space-y-24">
        {sectionsConfig.map((section) => (
          <Section key={section.slug} title={section.title} icon={section.icon} id={section.slug}>
            <div
              className={`grid gap-6 ${
                section.type === "documentary" ? "md:grid-cols-2" : "md:grid-cols-3"
              }`}
            >
              {section.items.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <CardItem item={item} type={section.type} />
                    </a>
                  ) : (
                    <CardItem item={item} type={section.type} />
                  )}
                </motion.div>
              ))}
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}

// ------------------ Helper Components ------------------
function Section({
  title,
  icon,
  children,
  id,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="pt-16 -mt-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-6"
      >
        {React.createElement(icon, { className: "h-6 w-6 text-gray-800" })}
        <h2 className="text-3xl font-montserrat font-bold text-black">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

function CardItem({ item, type }: { item: any; type: string }) {
  return (
    <Card className="h-full bg-white border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:border-gray-400 overflow-hidden group hover:shadow-lg flex flex-col">
      <div
        className={`relative overflow-hidden ${
          type === "documentary" ? "h-56" : type === "museum" ? "h-48" : "h-40"
        }`}
      >
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name || item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
        {type === "documentary" && item.duration && (
          <span className="absolute top-4 right-4 text-xs bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full font-mono text-black">
            {item.duration}
          </span>
        )}
        {item.url && (
          <ExternalLink className="absolute top-4 left-4 h-5 w-5 text-white drop-shadow-lg" />
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-montserrat text-black">
          {item.title || item.name}
        </CardTitle>
        {item.director && <CardDescription className="text-gray-600">{item.director}</CardDescription>}
        {item.location && <CardDescription className="text-gray-600">{item.location}</CardDescription>}
        {item.provider && <CardDescription className="text-gray-600">{item.provider}</CardDescription>}
        {item.type && <CardDescription className="text-gray-600">{item.type}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-2 flex-grow">
        <p className="text-sm text-gray-700">{item.description}</p>
        {item.established && (
          <div className="text-xs text-gray-600">
            Thành lập: <span className="text-black">{item.established}</span>
          </div>
        )}
        {item.volume && (
          <div className="text-xs text-gray-600">
            Số lượng: <span className="text-black">{item.volume}</span>
          </div>
        )}
        {item.records && (
          <div className="text-xs text-gray-600">
            Hồ sơ: <span className="text-black">{item.records}</span>
          </div>
        )}
        {item.focus && (
          <div className="text-xs text-gray-600">
            Chuyên môn: <span className="text-black">{item.focus}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
