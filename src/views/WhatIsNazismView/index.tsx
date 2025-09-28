"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, BookOpen } from "lucide-react"

export default function WhatIsNazismPageView() {
  return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-balance">Chủ nghĩa Quốc xã là gì?</h1>

          <Alert className="mb-8 border-warning/20 bg-warning/5">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <AlertTitle className="text-warning">Nội dung nhạy cảm</AlertTitle>
            <AlertDescription>
              Phần này chứa thông tin về hệ tư tưởng cực đoan và nguy hiểm. Nội dung được trình bày với mục đích giáo
              dục và phê phán.
            </AlertDescription>
          </Alert>

          <div className="prose prose-lg max-w-none mb-12">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Định nghĩa
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chủ nghĩa Quốc xã (Nazism) là một hệ tư tưởng chính trị cực đoan, được phát triển bởi Đảng Công nhân
                Quốc xã Đức (NSDAP) dưới sự lãnh đạo của Adolf Hitler từ những năm 1920. Đây là một dạng của chủ nghĩa
                phát xít với những đặc điểm riêng biệt và cực kỳ nguy hiểm.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Các yếu tố cốt lõi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-destructive mb-2">Chủ nghĩa bài Do Thái</h4>
                    <p className="text-sm text-muted-foreground">
                      Thù hận và phân biệt đối xử cực đoan với người Do Thái, được coi là nguyên nhân của mọi vấn đề xã
                      hội.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-destructive mb-2">Chủ nghĩa phân biệt chủng tộc</h4>
                    <p className="text-sm text-muted-foreground">
                      Tin tưởng vào sự "ưu việt" của chủng tộc Aryan và sự "thấp kém" của các chủng tộc khác.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-destructive mb-2">Chủ nghĩa toàn trị</h4>
                    <p className="text-sm text-muted-foreground">
                      Kiểm soát tuyệt đối mọi khía cạnh của đời sống xã hội, chính trị, kinh tế và văn hóa.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Phương thức hoạt động</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Tuyên truyền</h4>
                    <p className="text-sm text-muted-foreground">
                      Sử dụng các phương tiện truyền thông để lan truyền hệ tư tưởng và thao túng dư luận.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Bạo lực</h4>
                    <p className="text-sm text-muted-foreground">
                      Sử dụng bạo lực có tổ chức để đàn áp đối thủ chính trị và các nhóm thiểu số.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Thờ phụng lãnh tụ</h4>
                    <p className="text-sm text-muted-foreground">
                      Tôn sùng cá nhân lãnh đạo (Führerprinzip) và yêu cầu lòng trung thành tuyệt đối.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Nguồn gốc và Bối cảnh</h2>
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Chủ nghĩa Quốc xã nảy sinh trong bối cảnh nước Đức sau Thế chiến I, khi đất nước phải đối mặt với:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Khủng hoảng kinh tế nghiêm trọng và lạm phát</li>
                  <li>Sự bất ổn chính trị và xã hội</li>
                  <li>Cảm giác bị sỉ nhục bởi Hiệp ước Versailles</li>
                  <li>Sự gia tăng của các tư tưởng dân tộc chủ nghĩa cực đoan</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Tại sao cần hiểu về Chủ nghĩa Quốc xã?</h2>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Việc hiểu rõ về chủ nghĩa Quốc xã không phải để tôn vinh hay bào chữa, mà để:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                  <li>Nhận biết và ngăn chặn sự trỗi dậy của các tư tưởng tương tự</li>
                  <li>Tôn vinh ký ức của các nạn nhân</li>
                  <li>Bảo vệ các giá trị dân chủ và nhân quyền</li>
                  <li>Giáo dục thế hệ trẻ về những nguy hiểm của chủ nghĩa cực đoan</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
  )
}
