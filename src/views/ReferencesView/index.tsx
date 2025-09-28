"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useReferences } from "@/lib/data-fetcher"
import { Book, Film, Globe, Archive } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/variants"


export default function ReferencesPageView() {
  const { data: references, isLoading } = useReferences()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Tài liệu tham khảo</h1>
          <p className="text-xl text-muted-foreground">
            Các nguồn tài liệu uy tín để tìm hiểu sâu hơn về lịch sử Chủ nghĩa Quốc xã
          </p>
        </motion.div>

        {/* Sách & tài liệu học thuật */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Book className="h-6 w-6" /> Sách và Tài liệu học thuật
          </h2>
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-muted rounded w-1/2 mb-1"></div>
                  <div className="h-3 bg-muted rounded w-1/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div className="grid md:grid-cols-2 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }}>
              {references?.map((ref: any, i: number) => (
                <motion.div key={i} variants={fadeInUp} custom={i}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{ref.title}</CardTitle>
                      <CardDescription>
                        {ref.author} ({ref.year})
                        {ref.note && <span className="block text-xs text-warning mt-1">{ref.note}</span>}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted text-muted-foreground">
                        {ref.type === "book"
                          ? "Sách"
                          : ref.type === "primary_source"
                          ? "Tài liệu gốc"
                          : "Khác"}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>

        {/* Phim tài liệu */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Film className="h-6 w-6" /> Phim tài liệu
          </h2>
          <motion.div className="grid md:grid-cols-2 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }}>
            {[
              {
                title: "Shoah (1985)",
                desc: "Claude Lanzmann",
                detail: "Phim tài liệu 9 tiếng về Holocaust, được coi là một trong những tác phẩm quan trọng nhất.",
              },
              {
                title: "The World at War (1973)",
                desc: "Thames Television",
                detail: "Series toàn diện về Thế chiến II, bao gồm nhiều tập về chế độ Quốc xã.",
              },
              {
                title: "Night and Fog (1956)",
                desc: "Alain Resnais",
                detail: "Phim tài liệu ngắn nhưng mạnh mẽ về các trại tập trung Quốc xã.",
              },
              {
                title: "The Rise and Fall of the Third Reich (1968)",
                desc: "Dựa trên sách của William L. Shirer",
                detail: "Phim về sự trỗi dậy và sụp đổ của chế độ Quốc xã.",
              },
            ].map((film, i) => (
              <motion.div key={i} variants={fadeInUp} custom={i}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{film.title}</CardTitle>
                    <CardDescription>{film.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{film.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Bảo tàng */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Globe className="h-6 w-6" /> Bảo tàng và Trung tâm nghiên cứu
          </h2>
          <motion.div className="grid md:grid-cols-3 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }}>
            {[
              {
                title: "United States Holocaust Memorial Museum",
                desc: "Washington, D.C., Hoa Kỳ",
                detail: "Bảo tàng và trung tâm nghiên cứu hàng đầu về Holocaust.",
                link: "https://www.ushmm.org",
              },
              {
                title: "Yad Vashem",
                desc: "Jerusalem, Israel",
                detail: "Cơ quan chính thức của Israel về tưởng niệm Holocaust.",
                link: "https://www.yadvashem.org",
              },
              {
                title: "Auschwitz-Birkenau Memorial",
                desc: "Oświęcim, Ba Lan",
                detail: "Bảo tàng tại địa điểm trại diệt chủng lớn nhất, được UNESCO công nhận.",
                link: "http://auschwitz.org",
              },
            ].map((museum, i) => (
              <motion.div key={i} variants={fadeInUp} custom={i}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{museum.title}</CardTitle>
                    <CardDescription>{museum.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{museum.detail}</p>
                    <a href={museum.link} className="text-primary hover:underline text-sm">
                      {museum.link.replace("https://", "").replace("http://", "")}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Lưu trữ số */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Archive className="h-6 w-6" /> Lưu trữ số và Cơ sở dữ liệu
          </h2>
          <motion.div className="grid md:grid-cols-2 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }}>
            {[
              {
                title: "Nuremberg Trial Proceedings",
                detail: "Tài liệu đầy đủ về các phiên tòa Nuremberg, bao gồm lời khai và bằng chứng.",
              },
              {
                title: "Fortunoff Video Archive",
                detail: "Bộ sưu tập lời khai video của những người sống sót qua Holocaust.",
              },
              {
                title: "Wiener Holocaust Library",
                detail: "Thư viện nghiên cứu về Holocaust và diệt chủng lâu đời nhất thế giới.",
              },
              {
                title: "Bundesarchiv",
                detail: "Lưu trữ quốc gia Đức với nhiều tài liệu về thời kỳ Quốc xã.",
              },
            ].map((archive, i) => (
              <motion.div key={i} variants={fadeInUp} custom={i}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{archive.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{archive.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Lưu ý */}
        <motion.section
          className="bg-muted/30 rounded-lg p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">Lưu ý quan trọng</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Sử dụng các nguồn uy tín và được kiểm chứng</li>
            <li>Tránh các trang web phủ nhận Holocaust hoặc tôn vinh Quốc xã</li>
            <li>Tiếp cận với thái độ nghiêm túc và tôn trọng nạn nhân</li>
            <li>Tham khảo nhiều nguồn để có cái nhìn toàn diện</li>
            <li>Nhớ rằng mục đích là học hỏi để ngăn chặn tái diễn</li>
          </ul>
        </motion.section>
      </div>
    </div>
  )
}
