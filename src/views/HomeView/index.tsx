"use client"

import Link from "next/link"
import { AlertTriangle, BookOpen, History, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function HomePageView() {
  return (
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-b from-muted/50 to-background rounded-lg mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Chủ nghĩa Quốc xã: Lịch sử, Tội ác và Bài học
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Một cái nhìn sâu sắc và phê phán về một trong những chương đen tối nhất của lịch sử nhân loại.
            </p>
            <Link href="/what-is-nazism">
              <Button size="lg" className="text-lg px-8 py-3">
                Bắt đầu tìm hiểu
              </Button>
            </Link>
          </div>
        </section>

        {/* Warning Notice */}
        <Alert className="mb-16 border-warning/20 bg-warning/5">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <AlertTitle className="text-warning">Lưu ý quan trọng</AlertTitle>
          <AlertDescription className="text-sm">
            Website này được tạo ra với mục đích giáo dục và nghiên cứu lịch sử. Nội dung có thể chứa những hình ảnh và
            thông tin gây khó chịu về các tội ác lịch sử. Chúng tôi hoàn toàn lên án mọi hình thức phân biệt chủng tộc,
            bài Do Thái và chủ nghĩa cực đoan.
          </AlertDescription>
        </Alert>

        {/* Featured Content */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Định nghĩa và Nguồn gốc</CardTitle>
              <CardDescription>
                Tìm hiểu về bản chất, nguồn gốc và các yếu tố cốt lõi của hệ tư tưởng Quốc xã.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/what-is-nazism" className="text-primary hover:underline">
                Đọc thêm →
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <History className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Lịch sử Phát triển</CardTitle>
              <CardDescription>Từ sự ra đời đến sự sụp đổ của chế độ Quốc xã Đức (1933-1945).</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/history" className="text-primary hover:underline">
                Đọc thêm →
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Scale className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Tội ác và Hậu quả</CardTitle>
              <CardDescription>Holocaust và các tội ác khác của chế độ Quốc xã, cùng hậu quả toàn cầu.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/atrocities" className="text-primary hover:underline">
                Đọc thêm →
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Quick Stats */}
        <section className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Những con số không thể quên</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">6 triệu</div>
              <p className="text-muted-foreground">Người Do Thái bị sát hại trong Holocaust</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">11 triệu</div>
              <p className="text-muted-foreground">Tổng số nạn nhân của Holocaust</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">70-85 triệu</div>
              <p className="text-muted-foreground">Người chết trong Thế chiến II</p>
            </div>
          </div>
        </section>
      </div>
  )
}
