"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useStatistics } from "@/lib/data-fetcher"
import { AlertTriangle, MapPin, Camera, Quote, User } from "lucide-react"
import InteractiveCampsMap from "@/components/interactive-camps-map"
import HolocaustGallery from "@/components/holocaust-gallery"
import SurvivorAvatar from "@/components/survivor-avatar"

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
                <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-slate-200">
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

      {/* Survivor Testimonies */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <Quote className="h-6 w-6" /> Lời chứng của những người sống sót
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Elie Wiesel */}
          <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-start gap-4">
              <SurvivorAvatar 
                name="Elie Wiesel"
                src="https://www.neh.gov/sites/default/files/styles/featured_image_page/public/2020-01/wiesel.jpg?h=cb04071e&itok=wzRKC05I"
              />
              <div className="flex-1">
                <CardTitle className="text-lg text-slate-900">Elie Wiesel</CardTitle>
                <CardDescription className="text-slate-600">
                  Sống sót từ Auschwitz và Buchenwald
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="text-slate-700 italic mb-4 border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 rounded-r">
                &ldquo;Đối nghịch với quên lãng không phải là ký ức mà là công lý. Chúng ta phải nói lên sự thật, 
                không chỉ để tôn vinh người chết, mà còn để cảnh báo người sống.&rdquo;
              </blockquote>
              <p className="text-sm text-slate-500">
                <strong>Nguồn:</strong> &ldquo;Night&rdquo; (1958) - Tác phẩm tự truyện về trải nghiệm trong Holocaust
              </p>
            </CardContent>
          </Card>

          {/* Primo Levi */}
          <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-start gap-4">
              <SurvivorAvatar 
                name="Primo Levi"
                src="https://www.repstatic.it/content/localirep/img/rep/2018/05/28/204229020-e51f053e-dd1e-4a81-b60a-a39856ad3789.jpg"
              />
              <div className="flex-1">
                <CardTitle className="text-lg text-slate-900">Primo Levi</CardTitle>
                <CardDescription className="text-slate-600">
                  Nhà hóa học Italy, sống sót từ Auschwitz
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="text-slate-700 italic mb-4 border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 rounded-r">
                &ldquo;Những người không nhớ quá khứ bị lên án phải lặp lại nó. Chúng ta có nghĩa vụ 
                phải nhớ; chúng ta không có quyền quên.&rdquo;
              </blockquote>
              <p className="text-sm text-slate-500">
                <strong>Nguồn:</strong> &ldquo;If This Is a Man&rdquo; (1947) - Hồi ký về cuộc sống tại Auschwitz
              </p>
            </CardContent>
          </Card>

          {/* Viktor Frankl */}
          <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-start gap-4">
              <SurvivorAvatar 
                name="Viktor Frankl"
                src="https://historiahoy.com.ar/wp-content/uploads/2019/09/0000038890.jpg"
              />
              <div className="flex-1">
                <CardTitle className="text-lg text-slate-900">Viktor Frankl</CardTitle>
                <CardDescription className="text-slate-600">
                  Nhà tâm lý học, sống sót từ 4 trại tập trung
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="text-slate-700 italic mb-4 border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 rounded-r">
                &ldquo;Mọi thứ có thể bị tước đoạt từ con người trừ một điều: tự do cuối cùng của con người 
                - khả năng chọn thái độ của mình trong bất kỳ hoàn cảnh nào.&rdquo;
              </blockquote>
              <p className="text-sm text-slate-500">
                <strong>Nguồn:</strong> &ldquo;Man&apos;s Search for Meaning&rdquo; (1946) - Triết lý sống qua Holocaust
              </p>
            </CardContent>
          </Card>

          {/* Simone Veil */}
          <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-start gap-4">
              <SurvivorAvatar 
                name="Simone Veil"
                src="https://www.polka.paris/docs/Le_store/Collections/Simone_Veil/GRK7042757.jpg"
              />
              <div className="flex-1">
                <CardTitle className="text-lg text-slate-900">Simone Veil</CardTitle>
                <CardDescription className="text-slate-600">
                  Chính trị gia Pháp, sống sót từ Auschwitz-Birkenau
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="text-slate-700 italic mb-4 border-l-4 border-blue-500 pl-4 bg-blue-50 py-3 rounded-r">
                &ldquo;Holocaust không phải chỉ là bi kịch của người Do Thái, mà là bi kịch của toàn nhân loại. 
                Điều quan trọng là phải truyền đạt ký ức này cho thế hệ tương lai.&rdquo;
              </blockquote>
              <p className="text-sm text-slate-500">
                <strong>Nguồn:</strong> Phát biểu tại Nghị viện Châu Âu (2005) về giáo dục Holocaust
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Alert className="bg-blue-50 border-blue-200">
            <User className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-800">Bảo tồn ký ức</AlertTitle>
            <AlertDescription className="text-blue-700">
              Những lời chứng này nhắc nhở chúng ta về tầm quan trọng của việc ghi nhớ lịch sử 
              để không bao giờ để bi kịch tương tự tái diễn.
            </AlertDescription>
          </Alert>
        </motion.div>
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
