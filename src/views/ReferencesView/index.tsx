"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useReferences } from "@/lib/data-fetcher"
import { Book, Film, Globe, Archive } from "lucide-react"

export default function ReferencesPageView() {
  const { data: references, isLoading } = useReferences()

  return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-balance">Tài liệu tham khảo</h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-foreground mb-8">
              Các nguồn tài liệu uy tín để tìm hiểu sâu hơn về lịch sử Chủ nghĩa Quốc xã
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Book className="h-6 w-6" />
                Sách và Tài liệu học thuật
              </h2>

              {isLoading ? (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-muted rounded w-1/2 mb-1"></div>
                      <div className="h-3 bg-muted rounded w-1/4"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {references?.map((ref: any, index: number) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{ref.title}</CardTitle>
                        <CardDescription>
                          {ref.author} ({ref.year})
                          {ref.note && <span className="block text-xs text-warning mt-1">{ref.note}</span>}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-muted text-muted-foreground">
                          {ref.type === "book" ? "Sách" : ref.type === "primary_source" ? "Tài liệu gốc" : "Khác"}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Film className="h-6 w-6" />
                Phim tài liệu
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Shoah (1985)</CardTitle>
                    <CardDescription>Claude Lanzmann</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Phim tài liệu 9 tiếng về Holocaust, được coi là một trong những tác phẩm quan trọng nhất về chủ đề
                      này.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">The World at War (1973)</CardTitle>
                    <CardDescription>Thames Television</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Series tài liệu toàn diện về Thế chiến II, bao gồm nhiều tập về chế độ Quốc xã.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Night and Fog (1956)</CardTitle>
                    <CardDescription>Alain Resnais</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Phim tài liệu ngắn nhưng mạnh mẽ về các trại tập trung Quốc xã.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">The Rise and Fall of the Third Reich (1968)</CardTitle>
                    <CardDescription>Dựa trên sách của William L. Shirer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Phim tài liệu về sự trỗi dậy và sụp đổ của chế độ Quốc xã.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Globe className="h-6 w-6" />
                Bảo tàng và Trung tâm nghiên cứu
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">United States Holocaust Memorial Museum</CardTitle>
                    <CardDescription>Washington, D.C., Hoa Kỳ</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Bảo tàng và trung tâm nghiên cứu hàng đầu về Holocaust với bộ sưu tập tài liệu khổng lồ.
                    </p>
                    <a href="https://www.ushmm.org" className="text-primary hover:underline text-sm">
                      ushmm.org
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Yad Vashem</CardTitle>
                    <CardDescription>Jerusalem, Israel</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Cơ quan chính thức của Israel về tưởng niệm Holocaust và nghiên cứu về diệt chủng.
                    </p>
                    <a href="https://www.yadvashem.org" className="text-primary hover:underline text-sm">
                      yadvashem.org
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Auschwitz-Birkenau Memorial</CardTitle>
                    <CardDescription>Oświęcim, Ba Lan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Bảo tàng tại địa điểm của trại diệt chủng lớn nhất, được UNESCO công nhận.
                    </p>
                    <a href="http://auschwitz.org" className="text-primary hover:underline text-sm">
                      auschwitz.org
                    </a>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Archive className="h-6 w-6" />
                Lưu trữ số và Cơ sở dữ liệu
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Nuremberg Trial Proceedings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Tài liệu đầy đủ về các phiên tòa Nuremberg, bao gồm lời khai và bằng chứng.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Fortunoff Video Archive</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Bộ sưu tập lời khai video của những người sống sót qua Holocaust.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Wiener Holocaust Library</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Thư viện nghiên cứu về Holocaust và diệt chủng lâu đời nhất thế giới.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Bundesarchiv</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Lưu trữ quốc gia Đức với nhiều tài liệu về thời kỳ Quốc xã.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Lưu ý quan trọng</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Khi nghiên cứu về chủ đề này, hãy luôn:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Sử dụng các nguồn uy tín và được kiểm chứng</li>
                  <li>Tránh các trang web phủ nhận Holocaust hoặc tôn vinh Quốc xã</li>
                  <li>Tiếp cận với thái độ nghiêm túc và tôn trọng nạn nhân</li>
                  <li>Tham khảo nhiều nguồn để có cái nhìn toàn diện</li>
                  <li>Nhớ rằng mục đích là học hỏi để ngăn chặn tái diễn</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
  )
}
