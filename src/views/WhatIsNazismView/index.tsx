"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { container, item } from "@/lib/variants"

export default function WhatIsNazismPageView() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Tiêu đề */}
        <motion.h1
          className="text-4xl font-bold mb-10 text-center"
          variants={item}
        >
          Chủ nghĩa Quốc xã là gì?
        </motion.h1>

        {/* Cảnh báo */}
        <motion.div variants={item}>
          <Alert className="mb-12 border-warning/20 bg-warning/5">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <AlertTitle className="text-warning">Nội dung nhạy cảm</AlertTitle>
            <AlertDescription>
              Phần này chứa thông tin về hệ tư tưởng cực đoan và nguy hiểm. Nội dung
              được trình bày với mục đích giáo dục và phê phán.
            </AlertDescription>
          </Alert>
        </motion.div>

        <div className="prose prose-lg max-w-none">
          {/* Định nghĩa */}
          <motion.section className="mb-12" variants={item}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Định nghĩa
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Chủ nghĩa Quốc xã (Nazism) là một hệ tư tưởng chính trị cực đoan,
              được phát triển bởi Đảng Công nhân Quốc xã Đức (NSDAP) dưới sự lãnh
              đạo của Adolf Hitler từ những năm 1920. Đây là một dạng của chủ nghĩa
              phát xít với những đặc điểm riêng biệt và cực kỳ nguy hiểm.
            </p>
          </motion.section>

          {/* Grid: Yếu tố & Phương thức */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            variants={container}
          >
            <motion.div variants={item}>
              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="text-xl">Các yếu tố cốt lõi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Chủ nghĩa bài Do Thái",
                      desc: "Thù hận và phân biệt đối xử cực đoan với người Do Thái...",
                    },
                    {
                      title: "Chủ nghĩa phân biệt chủng tộc",
                      desc: "Tin tưởng vào sự 'ưu việt' của chủng tộc Aryan...",
                    },
                    {
                      title: "Chủ nghĩa toàn trị",
                      desc: "Kiểm soát tuyệt đối mọi khía cạnh đời sống xã hội...",
                    },
                  ].map((el, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-destructive mb-2">
                        {el.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{el.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="text-xl">Phương thức hoạt động</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Tuyên truyền",
                      desc: "Sử dụng phương tiện truyền thông để thao túng dư luận.",
                    },
                    {
                      title: "Bạo lực",
                      desc: "Đàn áp đối thủ chính trị và các nhóm thiểu số.",
                    },
                    {
                      title: "Thờ phụng lãnh tụ",
                      desc: "Tôn sùng lãnh đạo và yêu cầu trung thành tuyệt đối.",
                    },
                  ].map((el, i) => (
                    <div key={i}>
                      <h4 className="font-semibold mb-2">{el.title}</h4>
                      <p className="text-sm text-muted-foreground">{el.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Nguồn gốc */}
          <motion.section variants={item} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Nguồn gốc và Bối cảnh</h2>
            <div className="bg-muted/30 rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Chủ nghĩa Quốc xã nảy sinh trong bối cảnh nước Đức sau Thế chiến I:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Khủng hoảng kinh tế nghiêm trọng và lạm phát</li>
                <li>Sự bất ổn chính trị và xã hội</li>
                <li>Cảm giác bị sỉ nhục bởi Hiệp ước Versailles</li>
                <li>Sự gia tăng của tư tưởng dân tộc chủ nghĩa cực đoan</li>
              </ul>
            </div>
          </motion.section>

          {/* Tại sao cần hiểu */}
          <motion.section variants={item}>
            <h2 className="text-2xl font-semibold mb-6">
              Tại sao cần hiểu về Chủ nghĩa Quốc xã?
            </h2>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed">
                Việc hiểu rõ về chủ nghĩa Quốc xã không phải để tôn vinh, mà để:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>Nhận biết và ngăn chặn sự trỗi dậy của tư tưởng tương tự</li>
                <li>Tôn vinh ký ức của các nạn nhân</li>
                <li>Bảo vệ các giá trị dân chủ và nhân quyền</li>
                <li>Giáo dục thế hệ trẻ về nguy hiểm của cực đoan</li>
              </ul>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  )
}
