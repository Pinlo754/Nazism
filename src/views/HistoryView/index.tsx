"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTimeline } from "@/lib/data-fetcher"
import { Calendar, Clock } from "lucide-react"

export default function HistoryPageView() {
  const { data: timeline, isLoading } = useTimeline()

  return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-balance">Lịch sử Chủ nghĩa Quốc xã</h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-foreground mb-8">
              Từ sự ra đời đến sự sụp đổ của chế độ Quốc xã Đức (1919-1945)
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                Dòng thời gian chính
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
                  {timeline?.map((event: any, index: number) => (
                    <div key={index} className="flex gap-4 border-l-2 border-primary/20 pl-6 pb-6">
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
                    </div>
                  ))}
                </div>
              )}
            </section>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Giai đoạn 1919-1933</CardTitle>
                  <CardDescription>Sự hình thành và phát triển</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Từ việc thành lập Đảng Công nhân Đức đến khi Hitler lên nắm quyền Thủ tướng.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Giai đoạn 1933-1939</CardTitle>
                  <CardDescription>Củng cố quyền lực</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Thiết lập chế độ độc tài, ban hành các luật phân biệt chủng tộc và chuẩn bị chiến tranh.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Giai đoạn 1939-1945</CardTitle>
                  <CardDescription>Chiến tranh và sụp đổ</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Thế chiến II, Holocaust và sự kết thúc của chế độ Quốc xã.
                  </p>
                </CardContent>
              </Card>
            </div>

            <section className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Các sự kiện quan trọng</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Đảo chính Munich (1923)</h3>
                  <p className="text-muted-foreground">
                    Nỗ lực đảo chính thất bại của Hitler tại Munich, dẫn đến việc ông bị bắt giữ và viết cuốn "Mein
                    Kampf" trong tù.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Đêm dao găm dài (1934)</h3>
                  <p className="text-muted-foreground">
                    Hitler thanh trừng các đối thủ trong nội bộ đảng, củng cố quyền lực tuyệt đối.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Luật Nuremberg (1935)</h3>
                  <p className="text-muted-foreground">
                    Các luật phân biệt chủng tộc chính thức, tước bỏ quyền công dân của người Do Thái.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
  )
}
