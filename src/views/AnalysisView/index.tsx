"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Eye, Shield, BookOpen } from "lucide-react"
import { fadeIn  } from "@/lib/variants";


export default function AnalysisPageView() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-20">
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeIn(0)}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h1 className="text-5xl font-bold mb-6">Phân tích & Phê phán</h1>
          <p className="text-xl text-muted-foreground">
            Bản chất nguy hiểm của hệ tư tưởng và bài học cho hiện tại
          </p>
        </div>
        <Card className="shadow-xl border-primary/30">
          <CardHeader>
            <CardTitle className="text-primary text-lg">Tóm tắt nhanh</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
              <li>Nguy hiểm bởi tính hệ thống và công nghiệp hóa</li>
              <li>Khả năng lây lan xã hội cực nhanh</li>
              <li>Bài học: dân chủ có thể bị phá hoại từ bên trong</li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* Nguy hiểm */}
      <motion.section variants={fadeIn(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-semibold mb-10 flex items-center gap-2">
          <Eye className="h-7 w-7 text-destructive" />
          Tại sao Chủ nghĩa Quốc xã lại nguy hiểm?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Tính hệ thống", desc: "Một hệ tư tưởng hoàn chỉnh để tiêu diệt các nhóm người." },
            { title: "Tính công nghiệp", desc: "Dùng công nghệ & tổ chức hiện đại để diệt chủng quy mô lớn." },
            { title: "Tính lây lan", desc: "Truyền bá nhanh qua tuyên truyền & bất mãn xã hội." },
            { title: "Tính phá hoại", desc: "Phá hủy giá trị nhân văn, dân chủ từ bên trong." },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeIn(0.1 * i)}>
              <Card className="hover:shadow-lg hover:-translate-y-1 transition">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Bài học lịch sử */}
      <motion.section
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-muted/40 rounded-xl p-10"
      >
        <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
          <BookOpen className="h-7 w-7 text-primary" />
          Bài học lịch sử
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Dân chủ có thể bị phá hoại từ bên trong",
            "Sự thờ ơ của đa số dẫn đến thảm họa",
            "Tuyên truyền có sức mạnh khủng khiếp",
            "Khủng hoảng kinh tế nuôi dưỡng cực đoan",
          ].map((lesson, i) => (
            <motion.div
              key={i}
              variants={fadeIn(0.1 * i)}
              className="bg-background rounded-lg p-6 border hover:bg-muted/20 transition"
            >
              <h3 className="font-semibold mb-2">{i + 1}. {lesson}</h3>
              <p className="text-sm text-muted-foreground">
                {lesson.includes("Dân chủ") && "Hitler lên nắm quyền qua con đường dân chủ nhưng phá hoại từ bên trong."}
                {lesson.includes("thờ ơ") && "Người dân thờ ơ, không hành động, tạo cơ hội cho tội ác."}
                {lesson.includes("Tuyên truyền") && "Kiểm soát thông tin có thể thay đổi nhận thức cả xã hội."}
                {lesson.includes("Khủng hoảng") && "Khủng hoảng khiến con người dễ tìm 'kẻ thù' để đổ lỗi."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Alert */}
      <motion.div variants={fadeIn(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Alert className="border-warning/20 bg-warning/5 shadow-md">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <AlertTitle className="text-warning">Chủ nghĩa Tân Quốc xã hiện đại</AlertTitle>
          <AlertDescription>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Các nhóm cực hữu & tân phát xít</li>
              <li>Chủ nghĩa dân tộc cực đoan, bài ngoại</li>
              <li>Tin giả & thuyết âm mưu trên mạng</li>
              <li>Phong trào phủ nhận Holocaust</li>
            </ul>
          </AlertDescription>
        </Alert>
      </motion.div>

      {/* Kết luận */}
      <motion.section
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center bg-accent/10 border border-accent/30 rounded-xl p-12"
      >
        <h2 className="text-3xl font-bold mb-6">Kết luận</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Chủ nghĩa Quốc xã không chỉ là một chương lịch sử, mà là một lời cảnh báo. 
          Hiểu về nó để đảm bảo rằng <span className="font-semibold text-primary">"Never Again"</span> – 
          những tội ác như vậy sẽ không bao giờ tái diễn.
        </p>
      </motion.section>
    </div>
  )
}
