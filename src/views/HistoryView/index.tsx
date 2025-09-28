"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTimeline } from "@/lib/data-fetcher"
import { Calendar, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/variants"


export default function HistoryPageView() {
  const { data: timeline, isLoading } = useTimeline()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Tiêu đề */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold mb-4 text-center">Lịch sử Chủ nghĩa Quốc xã</h1>
          <p className="text-xl text-muted-foreground text-center">
            Từ sự ra đời đến sự sụp đổ của chế độ Quốc xã Đức (1919-1945)
          </p>
        </motion.div>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Calendar className="h-6 w-6" /> Dòng thời gian chính
          </h2>

          {isLoading ? (
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {timeline?.map((event: any, i: number) => (
                <motion.div
                  key={i}
                  className="flex gap-4 border-l-2 border-primary/20 pl-6 pb-6"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="show"
                  custom={i}
                >
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-primary rounded-full -ml-8 mt-2"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="font-semibold text-primary">{event.year}</span>
                    </div>
                    <p className="text-muted-foreground">{event.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Các giai đoạn */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Giai đoạn 1919-1933",
              desc: "Sự hình thành và phát triển",
              detail: "Từ việc thành lập Đảng Công nhân Đức đến khi Hitler lên nắm quyền Thủ tướng.",
            },
            {
              title: "Giai đoạn 1933-1939",
              desc: "Củng cố quyền lực",
              detail: "Thiết lập chế độ độc tài, ban hành các luật phân biệt chủng tộc và chuẩn bị chiến tranh.",
            },
            {
              title: "Giai đoạn 1939-1945",
              desc: "Chiến tranh và sụp đổ",
              detail: "Thế chiến II, Holocaust và sự kết thúc của chế độ Quốc xã.",
            },
          ].map((phase, i) => (
            <motion.div key={i} variants={fadeInUp} custom={i}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                  <CardDescription>{phase.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{phase.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Sự kiện quan trọng */}
        <motion.section
          className="bg-muted/30 rounded-lg p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">Các sự kiện quan trọng</h2>
          <div className="space-y-6">
            {[
              {
                title: "Đảo chính Munich (1923)",
                detail:
                  'Nỗ lực đảo chính thất bại của Hitler tại Munich, dẫn đến việc ông bị bắt giữ và viết cuốn "Mein Kampf" trong tù.',
              },
              {
                title: "Đêm dao găm dài (1934)",
                detail: "Hitler thanh trừng các đối thủ trong nội bộ đảng, củng cố quyền lực tuyệt đối.",
              },
              {
                title: "Luật Nuremberg (1935)",
                detail: "Các luật phân biệt chủng tộc chính thức, tước bỏ quyền công dân của người Do Thái.",
              },
            ].map((e, i) => (
              <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="show" custom={i}>
                <h3 className="text-lg font-semibold mb-2">{e.title}</h3>
                <p className="text-muted-foreground">{e.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
