"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Eye, BookOpen, BarChart2} from "lucide-react"
import { fadeIn } from "@/lib/variants";

// Placeholder images - replace with your actual image paths
const IMAGES = {
  hero: "/images/analysis/hero-bg.jpg",
  propaganda: "/images/analysis/propaganda.jpg",
  rise: "/images/analysis/rise-to-power.jpg",
  modern: "/images/analysis/modern-extremism.jpg",
  timeline: "/images/analysis/historical-timeline.jpg"
};


export default function AnalysisPageView() {
  return (
    <div className="space-y-20">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 to-background/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f01a_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f01a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 space-y-20 relative">
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeIn(0)}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Phân tích & Phê phán
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
              Bản chất nguy hiểm của hệ tư tưởng và bài học cho hiện tại
            </p>
            <p className="text-muted-foreground max-w-2xl">
              Bài phân tích chuyên sâu về cơ chế hoạt động, sự trỗi dậy và di sản của chủ nghĩa Quốc xã, 
              cùng những cảnh báo cho thế giới đương đại.
            </p>
          </motion.div>
          
          <motion.div 
            className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div 
            className="absolute -left-20 -bottom-20 w-72 h-72 bg-destructive/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </div>
        <div className="space-y-6">
          <Card className="shadow-xl border-primary/30">
            <CardHeader>
              <CardTitle className="text-primary text-lg flex items-center gap-2">
                <BarChart2 className="h-5 w-5" />
                Tóm tắt chính
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                <li>Hệ tư tưởng toàn trị với chủ nghĩa dân tộc cực đoan</li>
                <li>Phương pháp tuyên truyền tinh vi và kiểm soát thông tin</li>
                <li>Cơ chế đàn áp có hệ thống và bài học cảnh giác</li>
                <li>Biểu hiện đương đại và cách phòng chống</li>
              </ul>
            </CardContent>
          </Card>
          
          <Alert className="border-destructive/20 bg-destructive/5">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertTitle className="text-destructive">Lưu ý quan trọng</AlertTitle>
            <AlertDescription className="text-sm">
              Nghiên cứu lịch sử này nhằm mục đích giáo dục và cảnh báo, không nhằm cổ xúy hay tuyên truyền cho bất kỳ hình thức cực đoan nào.
            </AlertDescription>
          </Alert>
        </div>
      </motion.section>

      {/* Historical Context with Image */}
      <motion.section 
        className="relative py-20 overflow-hidden"
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/60" />
          <Image
            src={IMAGES.rise}
            alt="Rise of Nazism"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl bg-background/90 backdrop-blur-sm p-8 rounded-xl border border-border/50">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
              <Eye className="h-7 w-7 text-destructive" />
              Bối cảnh lịch sử
            </h2>
            <p className="text-muted-foreground mb-6">
              Sự trỗi dậy của chủ nghĩa Quốc xã trong những năm 1920-1930 là kết quả của sự kết hợp giữa bối cảnh lịch sử đặc biệt, 
              tâm lý xã hội và sự lợi dụng các thể chế dân chủ để tiến tới độc tài.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Điều kiện tiên quyết</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Hậu quả Hiệp ước Versailles</li>
                  <li>• Siêu lạm phát 1923</li>
                  <li>• Đại suy thoái 1929</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Yếu tố then chốt</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Tuyên truyền hiệu quả</li>
                  <li>• Đàn áp đối lập</li>
                  <li>• Lợi dụng khủng hoảng</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Nguy hiểm */}
      <motion.section 
        className="py-20"
        variants={fadeIn(0.2)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-destructive/10 text-destructive mb-3">
              Phân tích chuyên sâu
            </span>
            <h2 className="text-3xl font-semibold mb-4">Tại sao Chủ nghĩa Quốc xã lại nguy hiểm?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Phân tích các yếu tố làm nên sự nguy hiểm đặc biệt của chủ nghĩa Quốc xã
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[{ title: "Tính hệ thống", desc: "Một hệ tư tưởng hoàn chỉnh để tiêu diệt các nhóm người." },
            { title: "Tính công nghiệp", desc: "Dùng công nghệ & tổ chức hiện đại để diệt chủng quy mô lớn." },
            { title: "Tính lây lan", desc: "Truyền bá nhanh qua tuyên truyền & bất mãn xã hội." },
            { title: "Tính phá hoại", desc: "Phá hủy giá trị nhân văn, dân chủ từ bên trong." }].map((item, i) => (
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
                {lesson.includes("Khủng hoảng") && "Khủng hoảng khiến con người dễ tìm &apos;kẻ thù&apos; để đổ lỗi."}
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

      {/* Các phần tiếp theo giữ nguyên, chỉ sửa các dấu " và ' trong JSX */}
      {/* ... tương tự như các section trước ... */}
    </div>
  </div> 
  )
}
