"use client"

import Link from "next/link"
import { AlertTriangle, BookOpen, History, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { motion } from "motion/react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const heroContent = {
  title: "Chủ nghĩa Quốc xã: Lịch sử, Tội ác và Bài học",
  desc: "Một cái nhìn sâu sắc và phê phán về một trong những chương đen tối nhất của lịch sử nhân loại.",
  btn: { label: "Bắt đầu tìm hiểu", href: "/what-is-nazism" },
}

const cards = [
  {
    icon: BookOpen,
    title: "Định nghĩa và Nguồn gốc",
    desc: "Tìm hiểu về bản chất, nguồn gốc và các yếu tố cốt lõi của hệ tư tưởng Quốc xã.",
    href: "/what-is-nazism",
  },
  {
    icon: History,
    title: "Lịch sử Phát triển",
    desc: "Từ sự ra đời đến sự sụp đổ của chế độ Quốc xã Đức (1933-1945).",
    href: "/history",
  },
  {
    icon: Scale,
    title: "Tội ác và Hậu quả",
    desc: "Holocaust và các tội ác khác của chế độ Quốc xã, cùng hậu quả toàn cầu.",
    href: "/atrocities",
  },
]

const stats = [
  { number: "6 triệu", text: "Người Do Thái bị sát hại trong Holocaust" },
  { number: "11 triệu", text: "Tổng số nạn nhân của Holocaust" },
  { number: "70-85 triệu", text: "Người chết trong Thế chiến II" },
]

export default function HomePageView() {
  return (
    <div className="container mx-auto px-4 py-12 scrollbar-hide min-h-max">
      {/* Hero Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.8 }}
        className="text-center py-20 bg-gradient-to-b from-muted/50 to-background rounded-lg mb-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-balance"
          >
            {heroContent.title}
          </motion.h1>
          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.6 }}
            className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto"
          >
            {heroContent.desc}
          </motion.p>
          <motion.div variants={fadeUp} transition={{ delay: 1 }}>
            <Link href={heroContent.btn.href}>
              <Button size="lg" className="text-lg px-8 py-3">
                {heroContent.btn.label}
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Warning */}
      <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 1.2 }}>
        <Alert className="mb-16 border-warning/20 bg-warning/5">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <AlertTitle className="text-warning">Lưu ý quan trọng</AlertTitle>
          <AlertDescription className="text-sm">
            Website này được tạo ra với mục đích giáo dục và nghiên cứu lịch sử. Nội dung có thể chứa những hình ảnh và
            thông tin gây khó chịu về các tội ác lịch sử. Chúng tôi hoàn toàn lên án mọi hình thức phân biệt chủng tộc,
            bài Do Thái và chủ nghĩa cực đoan.
          </AlertDescription>
        </Alert>
      </motion.div>

      {/* Cards */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {cards.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <item.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={item.href} className="text-primary hover:underline">
                  Đọc thêm →
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Stats */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold text-center mb-8">Những con số không thể quên</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-destructive mb-2">{s.number}</div>
              <p className="text-muted-foreground">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
