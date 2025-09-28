"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Eye, Shield, BookOpen } from "lucide-react"

export default function AnalysisPageView() {
  return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-balance">Phân tích và Phê phán</h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-foreground mb-8">
              Bản chất nguy hiểm của hệ tư tưởng và bài học cho hiện tại
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Eye className="h-6 w-6" />
                Tại sao Chủ nghĩa Quốc xã lại nguy hiểm?
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive">Tính hệ thống</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Không phải chỉ là bạo lực ngẫu nhiên, mà là một hệ thống tư tưởng hoàn chỉnh với kế hoạch chi tiết
                      để tiêu diệt các nhóm người.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive">Tính công nghiệp</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Sử dụng công nghệ và tổ chức hiện đại để thực hiện diệt chủng một cách hiệu quả và quy mô lớn.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive">Tính lây lan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Khả năng lan truyền nhanh chóng trong xã hội thông qua tuyên truyền và khai thác những bất mãn xã
                      hội.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive">Tính phá hoại</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Phá hoại hoàn toàn các giá trị nhân văn, dân chủ và pháp quyền từ bên trong hệ thống.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Bài học lịch sử
              </h2>

              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">1. Dân chủ có thể bị phá hoại từ bên trong</h3>
                  <p className="text-muted-foreground">
                    Hitler lên nắm quyền thông qua các thủ tục dân chủ, sau đó từ từ phá hoại hệ thống từ bên trong.
                    Điều này cho thấy tầm quan trọng của việc bảo vệ các thể chế dân chủ.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">2. Sự thờ ơ của đa số có thể dẫn đến thảm họa</h3>
                  <p className="text-muted-foreground">
                    Nhiều người Đức thường không ủng hộ tích cực chế độ Quốc xã, nhưng sự thờ ơ và không hành động đã
                    cho phép chế độ này thực hiện các tội ác.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">3. Tuyên truyền có sức mạnh khủng khiếp</h3>
                  <p className="text-muted-foreground">
                    Việc kiểm soát thông tin và sử dụng tuyên truyền có thể thay đổi hoàn toàn nhận thức của xã hội về
                    thực tế và đạo đức.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">4. Khủng hoảng kinh tế tạo đất cho cực đoan</h3>
                  <p className="text-muted-foreground">
                    Khủng hoảng kinh tế và xã hội tạo điều kiện cho các tư tưởng cực đoan phát triển, khi người dân tìm
                    kiếm "kẻ thù" để đổ lỗi.
                  </p>
                </div>
              </div>
            </section>

            <Alert className="mb-12 border-warning/20 bg-warning/5">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <AlertTitle className="text-warning">Chủ nghĩa Tân Quốc xã hiện đại</AlertTitle>
              <AlertDescription>
                <p className="mb-3">Ngày nay, các tư tưởng tương tự vẫn tồn tại dưới nhiều hình thức khác nhau:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Các nhóm cực hữu và tân phát xít</li>
                  <li>Chủ nghĩa dân tộc cực đoan và bài ngoại</li>
                  <li>Thuyết âm mưu và tin giả trên mạng xã hội</li>
                  <li>Các phong trào phủ nhận Holocaust</li>
                </ul>
              </AlertDescription>
            </Alert>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6" />
                Làm thế nào để ngăn chặn?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Giáo dục</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Giáo dục lịch sử chính xác và đầy đủ</li>
                      <li>• Phát triển tư duy phản biện</li>
                      <li>• Dạy về nhân quyền và dân chủ</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Thể chế</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Bảo vệ các thể chế dân chủ</li>
                      <li>• Luật pháp chống phân biệt đối xử</li>
                      <li>• Tòa án độc lập và báo chí tự do</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Xã hội dân sự</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Các tổ chức nhân quyền mạnh mẽ</li>
                      <li>• Đối thoại liên tôn giáo và văn hóa</li>
                      <li>• Mạng lưới hỗ trợ các nhóm dễ bị tổn thương</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Cá nhân</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Không thờ ơ trước bất công</li>
                      <li>• Kiểm tra thông tin trước khi chia sẻ</li>
                      <li>• Tôn trọng và bảo vệ người khác</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-accent/10 border border-accent/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Kết luận</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Chủ nghĩa Quốc xã không phải chỉ là một chương trong sách lịch sử, mà là một cảnh báo về những gì có thể
                xảy ra khi chúng ta không bảo vệ các giá trị nhân văn và dân chủ.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Việc nghiên cứu và hiểu rõ về nó không phải để tôn vinh, mà để đảm bảo rằng "Never Again" - những tội ác
                như vậy sẽ không bao giờ tái diễn.
              </p>
            </section>
          </div>
        </div>
      </div>
  )
}
