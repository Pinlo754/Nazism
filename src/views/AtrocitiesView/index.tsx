"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useStatistics } from "@/lib/data-fetcher"
import { AlertTriangle, Users, MapPin } from "lucide-react"

export default function AtrocitiesPageView() {
  const { data: statistics, isLoading } = useStatistics()

  return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-balance">Tội ác và Hậu quả</h1>

          <Alert className="mb-8 border-destructive/20 bg-destructive/5">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertTitle className="text-destructive">Cảnh báo nội dung nghiêm trọng</AlertTitle>
            <AlertDescription>
              Phần này chứa thông tin chi tiết về các tội ác chống lại nhân loại. Nội dung có thể gây khó chịu nhưng cần
              thiết để hiểu rõ về lịch sử.
            </AlertDescription>
          </Alert>

          <div className="prose prose-lg max-w-none mb-12">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Users className="h-6 w-6" />
                Holocaust - Cuộc diệt chủng
              </h2>
              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Holocaust là cuộc diệt chủng có hệ thống được thực hiện bởi chế độ Quốc xã Đức, nhằm tiêu diệt hoàn
                  toàn người Do Thái châu Âu và các nhóm thiểu số khác.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Đây được coi là một trong những tội ác tàn khốc nhất trong lịch sử nhân loại, được thực hiện một cách
                  có kế hoạch và công nghiệp hóa.
                </p>
              </div>

              {!isLoading && statistics && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <Card className="border-destructive/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl text-destructive">
                        {(statistics.jewishVictims / 1000000).toFixed(0)} triệu
                      </CardTitle>
                      <CardDescription>Người Do Thái bị sát hại</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="border-destructive/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl text-destructive">
                        {(statistics.holocaustVictims / 1000000).toFixed(0)} triệu
                      </CardTitle>
                      <CardDescription>Tổng nạn nhân Holocaust</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="border-destructive/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl text-destructive">{statistics.concentrationCamps}+</CardTitle>
                      <CardDescription>Trại tập trung và diệt chủng</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="border-destructive/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl text-destructive">
                        {(statistics.ww2Deaths / 1000000).toFixed(0)} triệu
                      </CardTitle>
                      <CardDescription>Tổng số chết trong WWII</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              )}
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Các nhóm nạn nhân</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Người Do Thái</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Mục tiêu chính của "Giải pháp cuối cùng" - kế hoạch tiêu diệt hoàn toàn người Do Thái châu Âu.
                    </p>
                    <p className="text-xs text-destructive">Khoảng 6 triệu người bị sát hại</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Người Roma và Sinti</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Bị gọi là "Porajmos" - cuộc diệt chủng người Roma, Sinti và các nhóm du mục khác.
                    </p>
                    <p className="text-xs text-destructive">Ước tính 220,000-500,000 người</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Người khuyết tật</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Chương trình "Aktion T4" - giết hại người khuyết tật tinh thần và thể chất.
                    </p>
                    <p className="text-xs text-destructive">Khoảng 275,000 người</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Các nhóm khác</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Tù nhân chính trị, nhân chứng Jehovah, người đồng tính, và các nhóm thiểu số khác.
                    </p>
                    <p className="text-xs text-destructive">Hàng trăm nghìn người</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                Các trại diệt chủng chính
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="font-semibold">Auschwitz-Birkenau (Ba Lan)</h3>
                  <p className="text-sm text-muted-foreground">
                    Trại diệt chủng lớn nhất, nơi khoảng 1.1 triệu người bị sát hại, chủ yếu là người Do Thái.
                  </p>
                </div>
                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="font-semibold">Treblinka (Ba Lan)</h3>
                  <p className="text-sm text-muted-foreground">
                    Trại diệt chủng thuần túy, nơi khoảng 800,000-900,000 người bị sát hại.
                  </p>
                </div>
                <div className="border-l-4 border-destructive pl-4">
                  <h3 className="font-semibold">Sobibor (Ba Lan)</h3>
                  <p className="text-sm text-muted-foreground">
                    Một trong những trại diệt chủng của "Aktion Reinhard", khoảng 250,000 nạn nhân.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-accent/10 border border-accent/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Hậu quả toàn cầu</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Các tội ác của chế độ Quốc xã đã để lại những hậu quả sâu sắc và lâu dài:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Thành lập Liên Hợp Quốc và Tuyên ngôn Nhân quyền Quốc tế</li>
                  <li>Khái niệm "tội ác chống lại nhân loại" và "diệt chủng"</li>
                  <li>Các phiên tòa Nuremberg - tiền lệ cho công lý quốc tế</li>
                  <li>Sự thành lập nhà nước Israel</li>
                  <li>Cam kết "Never Again" - Không bao giờ để điều này tái diễn</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
  )
}
