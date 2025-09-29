"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useStatistics } from "@/lib/data-fetcher"
import { AlertTriangle, MapPin, Camera } from "lucide-react"
import InteractiveCampsMap from "@/components/interactive-camps-map"
import HolocaustGallery from "@/components/holocaust-gallery"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export default function AtrocitiesPageView() {
  const { data: statistics, isLoading } = useStatistics()

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Image */}
        <Image 
          src="https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2017-06/holocaust-066.jpg?h=6ff83b63"
          alt="Historical background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />
           
        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-4 py-16 space-y-20">
          {/* Hero */}
          <motion.section
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto pt-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Tội ác và Hậu quả
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              Một cái nhìn toàn diện về những tội ác khủng khiếp nhất của thế kỷ 20
              và bài học nhân loại phải ghi nhớ.
            </p>
          </motion.section>

          {/* Alert */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Alert className="mb-8 border-destructive/30 bg-destructive/10 backdrop-blur-sm shadow-xl">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              <AlertTitle className="text-red-400">
                Cảnh báo nội dung nghiêm trọng
              </AlertTitle>
              <AlertDescription className="text-slate-200">
                Phần này chứa thông tin chi tiết về các tội ác chống lại nhân loại.
                Nội dung có thể gây khó chịu nhưng cần thiết để hiểu rõ về lịch sử.
              </AlertDescription>
            </Alert>
          </motion.div>

          {/* Stats */}
          {!isLoading && statistics && (
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20"
            >
              {[
                {
                  title: `${(statistics.jewishVictims / 1e6).toFixed(0)} triệu`,
                  desc: "Người Do Thái bị sát hại",
                },
                {
                  title: `${(statistics.holocaustVictims / 1e6).toFixed(0)} triệu`,
                  desc: "Tổng nạn nhân Holocaust",
                },
                {
                  title: `${statistics.concentrationCamps}+`,
                  desc: "Trại tập trung & diệt chủng",
                },
                {
                  title: `${(statistics.ww2Deaths / 1e6).toFixed(0)} triệu`,
                  desc: "Tổng số chết trong WWII",
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ delay: i * 0.2 }}
                >
                  <Card className="border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-center hover:shadow-xl transition-all duration-300 hover:bg-slate-700/40">
                    <CardHeader>
                      <CardTitle className="text-2xl text-red-400">
                        {s.title}
                      </CardTitle>
                      <CardDescription className="text-slate-300">{s.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.section>
          )}
        </div>
      </div>

      {/* Content Section - White Background */}
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 space-y-20">
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Các nhóm nạn nhân
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Người Do Thái",
              desc: 'Mục tiêu chính của "Giải pháp cuối cùng".',
              note: "Khoảng 6 triệu người bị sát hại",
            },
            {
              title: "Người Roma và Sinti",
              desc: "Cuộc diệt chủng Porajmos.",
              note: "220,000 - 500,000 người",
            },
            {
              title: "Người khuyết tật",
              desc: 'Chương trình "Aktion T4".',
              note: "Khoảng 275,000 người",
            },
            {
              title: "Các nhóm khác",
              desc: "Tù chính trị, Jehovah, đồng tính, thiểu số khác.",
              note: "Hàng trăm nghìn người",
            },
          ].map((g, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ delay: i * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{g.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {g.desc}
                  </p>
                  <p className="text-xs text-destructive">{g.note}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Camps Timeline */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <MapPin className="h-6 w-6" /> Bản đồ các trại tập trung chính
        </h2>
        <InteractiveCampsMap />
      </motion.section>

      {/* Historical Gallery */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <Camera className="h-6 w-6" /> Thư viện hình ảnh lịch sử
        </h2>
        <HolocaustGallery />
      </motion.section>

      {/* Global Impact */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="bg-accent/10 border border-accent/20 rounded-lg p-8 shadow-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Hậu quả toàn cầu
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Thành lập Liên Hợp Quốc & Tuyên ngôn Nhân quyền</li>
          <li>Khái niệm &ldquo;tội ác chống lại nhân loại&rdquo; & &ldquo;diệt chủng&rdquo;</li>
          <li>Các phiên tòa Nuremberg - tiền lệ công lý quốc tế</li>
          <li>Thành lập nhà nước Israel</li>
          <li>Cam kết &ldquo;Never Again&rdquo;</li>
        </ul>
      </motion.section>
        </div>
      </div>
    </div>
  )
}
