"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Eye, Shield, BookOpen, BarChart2, Users, Globe, Scale, Brain, ExternalLink } from "lucide-react"
import { fadeIn } from "@/lib/variants";

// Placeholder images - replace with your actual image paths
const IMAGES = {
  hero: "/images/analysis/hero-bg.jpg",
  propaganda: "/images/analysis/propaganda.jpg",
  rise: "/images/analysis/rise-to-power.jpg",
  modern: "/images/analysis/modern-extremism.jpg",
  timeline: "/images/analysis/historical-timeline.jpg"
};

const riskFactors = [
  {
    title: "Bối cảnh lịch sử",
    description: "Đức sau Thế chiến I với Hiệp ước Versailles khắc nghiệt, siêu lạm phát năm 1923, và Đại suy thoái 1929 tạo mảnh đất màu mỡ cho chủ nghĩa cực đoan.",
    icon: <BookOpen className="h-5 w-5 text-primary" />
  },
  {
    title: "Tâm lý đám đông",
    description: "Sử dụng tâm lý đám đông, tạo kẻ thù chung và hứa hẹn phục hồi vị thế dân tộc.",
    icon: <Users className="h-5 w-5 text-primary" />
  },
  {
    title: "Tuyên truyền hiệu quả",
    description: "Bộ máy tuyên truyền của Joseph Goebbels kiểm soát toàn bộ thông tin đại chúng.",
    icon: <Globe className="h-5 w-5 text-primary" />
  },
  {
    title: "Đàn áp đối lập",
    description: "Thiết lập nhà nước cảnh sát, xóa bỏ các quyền tự do dân sự và đàn áp bất đồng chính kiến.",
    icon: <Shield className="h-5 w-5 text-primary" />
  }
];

const modernManifestations = [
  {
    title: "Chủ nghĩa dân tộc cực đoan",
    description: "Bài ngoại và bài nhập cư dưới danh nghĩa bảo vệ bản sắc dân tộc.",
    examples: "Các phong trào cực hữu ở châu Âu, chủ nghĩa da trắng thượng đẳng."
  },
  {
    title: "Thuyết âm mưu",
    description: "Phổ biến các thuyết âm mưu về kiểm soát toàn cầu, phủ nhận Holocaust.",
    examples: "QAnon, các nhóm phủ nhận tội ác diệt chủng."
  },
  {
    title: "Bạo lực chính trị",
    description: "Sử dụng bạo lực nhằm vào các nhóm thiểu số và đối thủ chính trị.",
    examples: "Các vụ tấn công khủng bố của các nhóm cực hữu."
  }
];

export default function AnalysisPageView() {
  return (
    <div className="space-y-20">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 to-background/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f01a_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f01a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 space-y-20 relative">
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeIn(0)}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Phân tích & Phê phán
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
              Bản chất nguy hiểm của hệ tư tưởng và bài học cho hiện tại
            </p>
            <p className="text-muted-foreground max-w-2xl">
              Bài phân tích chuyên sâu về cơ chế hoạt động, sự trỗi dậy và di sản của chủ nghĩa Quốc xã, 
              cùng những cảnh báo cho thế giới đương đại.
            </p>
          </motion.div>
          
          <motion.div 
            className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div 
            className="absolute -left-20 -bottom-20 w-72 h-72 bg-destructive/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </div>
        <div className="space-y-6">
          <Card className="shadow-xl border-primary/30">
            <CardHeader>
              <CardTitle className="text-primary text-lg flex items-center gap-2">
                <BarChart2 className="h-5 w-5" />
                Tóm tắt chính
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                <li>Hệ tư tưởng toàn trị với chủ nghĩa dân tộc cực đoan</li>
                <li>Phương pháp tuyên truyền tinh vi và kiểm soát thông tin</li>
                <li>Cơ chế đàn áp có hệ thống và bài học cảnh giác</li>
                <li>Biểu hiện đương đại và cách phòng chống</li>
              </ul>
            </CardContent>
          </Card>
          
          <Alert className="border-destructive/20 bg-destructive/5">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertTitle className="text-destructive">Lưu ý quan trọng</AlertTitle>
            <AlertDescription className="text-sm">
              Nghiên cứu lịch sử này nhằm mục đích giáo dục và cảnh báo, không nhằm cổ xúy hay tuyên truyền cho bất kỳ hình thức cực đoan nào.
            </AlertDescription>
          </Alert>
        </div>
      </motion.section>

      {/* Historical Context with Image */}
      <motion.section 
        className="relative py-20 overflow-hidden"
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/60" />
          <Image
            src={IMAGES.rise}
            alt="Rise of Nazism"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl bg-background/90 backdrop-blur-sm p-8 rounded-xl border border-border/50">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
              <Eye className="h-7 w-7 text-destructive" />
              Bối cảnh lịch sử
            </h2>
            <p className="text-muted-foreground mb-6">
              Sự trỗi dậy của chủ nghĩa Quốc xã trong những năm 1920-1930 là kết quả của sự kết hợp giữa bối cảnh lịch sử đặc biệt, 
              tâm lý xã hội và sự lợi dụng các thể chế dân chủ để tiến tới độc tài.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Điều kiện tiên quyết</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Hậu quả Hiệp ước Versailles</li>
                  <li>• Siêu lạm phát 1923</li>
                  <li>• Đại suy thoái 1929</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Yếu tố then chốt</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Tuyên truyền hiệu quả</li>
                  <li>• Đàn áp đối lập</li>
                  <li>• Lợi dụng khủng hoảng</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Nguy hiểm */}
      <motion.section 
        className="py-20"
        variants={fadeIn(0.2)} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-xs font-medium rounded-full bg-destructive/10 text-destructive mb-3">
              Phân tích chuyên sâu
            </span>
            <h2 className="text-3xl font-semibold mb-4">Tại sao Chủ nghĩa Quốc xã lại nguy hiểm?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Phân tích các yếu tố làm nên sự nguy hiểm đặc biệt của chủ nghĩa Quốc xã
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Tính hệ thống", desc: "Một hệ tư tưởng hoàn chỉnh để tiêu diệt các nhóm người." },
            { title: "Tính công nghiệp", desc: "Dùng công nghệ & tổ chức hiện đại để diệt chủng quy mô lớn." },
            { title: "Tính lây lan", desc: "Truyền bá nhanh qua tuyên truyền & bất mãn xã hội." },
            { title: "Tính phá hoại", desc: "Phá hủy giá trị nhân văn, dân chủ từ bên trong." },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeIn(0.1 * i)}>
              <Card className="hover:shadow-lg hover:-translate-y-1 transition">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Bài học lịch sử */}
      <motion.section
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-muted/40 rounded-xl p-10"
      >
        <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
          <BookOpen className="h-7 w-7 text-primary" />
          Bài học lịch sử
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Dân chủ có thể bị phá hoại từ bên trong",
            "Sự thờ ơ của đa số dẫn đến thảm họa",
            "Tuyên truyền có sức mạnh khủng khiếp",
            "Khủng hoảng kinh tế nuôi dưỡng cực đoan",
          ].map((lesson, i) => (
            <motion.div
              key={i}
              variants={fadeIn(0.1 * i)}
              className="bg-background rounded-lg p-6 border hover:bg-muted/20 transition"
            >
              <h3 className="font-semibold mb-2">{i + 1}. {lesson}</h3>
              <p className="text-sm text-muted-foreground">
                {lesson.includes("Dân chủ") && "Hitler lên nắm quyền qua con đường dân chủ nhưng phá hoại từ bên trong."}
                {lesson.includes("thờ ơ") && "Người dân thờ ơ, không hành động, tạo cơ hội cho tội ác."}
                {lesson.includes("Tuyên truyền") && "Kiểm soát thông tin có thể thay đổi nhận thức cả xã hội."}
                {lesson.includes("Khủng hoảng") && "Khủng hoảng khiến con người dễ tìm 'kẻ thù' để đổ lỗi."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Alert */}
      <motion.div variants={fadeIn(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <Alert className="border-warning/20 bg-warning/5 shadow-md">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <AlertTitle className="text-warning">Chủ nghĩa Tân Quốc xã hiện đại</AlertTitle>
          <AlertDescription>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Các nhóm cực hữu & tân phát xít</li>
              <li>Chủ nghĩa dân tộc cực đoan, bài ngoại</li>
              <li>Tin giả & thuyết âm mưu trên mạng</li>
              <li>Phong trào phủ nhận Holocaust</li>
            </ul>
          </AlertDescription>
        </Alert>
      </motion.div>

      {/* Propaganda Section with Image */}
      <motion.section 
        className="py-20 bg-muted/30"
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src={IMAGES.propaganda}
                alt="Nazi Propaganda"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-background/80 text-foreground mb-2">
                    Tuyên truyền
                  </span>
                  <p className="text-background text-sm">
                    Bộ máy tuyên truyền của Goebbels kiểm soát toàn bộ thông tin đại chúng
                  </p>
                </div>
              </div>
            </motion.div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">Nghệ thuật tuyên truyền</h2>
              <p className="text-muted-foreground mb-6">
                Chủ nghĩa Quốc xã đã phát triển một hệ thống tuyên truyền tinh vi dưới sự chỉ đạo của Joseph Goebbels, 
                tận dụng tối đa các phương tiện truyền thông đại chúng để định hình nhận thức và kiểm soát tư tưởng.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Kiểm soát toàn bộ phương tiện truyền thông</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Sử dụng biểu tượng, khẩu hiệu đơn giản, dễ nhớ</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Tạo kẻ thù chung để đoàn kết quần chúng</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Yếu tố nguy cơ */}
      <motion.section
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
          <Scale className="h-7 w-7 text-primary" />
          Các yếu tố tạo điều kiện cho sự trỗi dậy
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {riskFactors.map((factor, index) => (
            <motion.div
              key={index}
              variants={fadeIn(0.1 * index)}
              whileHover={{ y: -5 }}
              className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {factor.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{factor.title}</h3>
              <p className="text-sm text-muted-foreground">{factor.description}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </motion.section>

      {/* Biểu hiện đương đại */}
      <motion.section
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-muted/30 rounded-xl p-10"
      >
        <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
          <Brain className="h-7 w-7 text-primary" />
          Biểu hiện đương đại cần cảnh giác
        </h2>
        <div className="space-y-6">
          {modernManifestations.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn(0.1 * index)}
              className="bg-background p-6 rounded-lg border hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="mb-2">{item.description}</p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Ví dụ:</span> {item.examples}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Kết luận */}
      <motion.section
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-12"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Bài học lịch sử và cảnh giác</h2>
          <div className="prose prose-sm sm:prose-base text-muted-foreground text-left mx-auto">
            <p className="mb-4">
              Chủ nghĩa Quốc xã không đơn thuần là một chương lịch sử đã khép lại, mà là một lời cảnh tỉnh cho nhân loại. 
              Nó cho thấy cách một xã hội văn minh có thể tuột dốc vào bạo lực và phân biệt đối xử khi các giá trị nhân văn bị xói mòn.
            </p>
            <p className="mb-4">
              <span className="font-semibold text-primary">&quot;Never Again&quot;</span> - Không bao giờ được lặp lại - 
              không chỉ là khẩu hiệu mà phải là kim chỉ nam cho hành động. Điều này đòi hỏi:
            </p>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li>Giáo dục lịch sử toàn diện và trung thực</li>
              <li>Bảo vệ các thể chế dân chủ và pháp quyền</li>
              <li>Đấu tranh chống phân biệt chủng tộc và bài ngoại</li>
              <li>Phát triển tư duy phản biện và khả năng chống lại tuyên truyền</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Nguồn tham khảo */}
      <motion.section
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-sm text-muted-foreground border-t pt-8"
      >
        <h3 className="font-medium mb-2">Tài liệu tham khảo:</h3>
        <ul className="space-y-1 list-disc list-inside">
          <li>Kershaw, I. (2008). Hitler: A Biography. W.W. Norton & Company.</li>
          <li>Evans, R. J. (2003). The Coming of the Third Reich. Penguin Books.</li>
          <li>Arendt, H. (1963). Eichmann in Jerusalem: A Report on the Banality of Evil. Viking Press.</li>
          <li>Browning, C. R. (1992). Ordinary Men: Reserve Police Battalion 101 and the Final Solution in Poland. Harper Perennial.</li>
        </ul>
      </motion.section>

      {/* Modern Context */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-background to-muted/30"
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Tại sao vẫn cần nghiên cứu về chủ nghĩa Quốc xã ngày nay?</h2>
            <p className="text-muted-foreground">
              Hiểu biết về quá khứ là chìa khóa để ngăn chặn những thảm kịch tương tự trong tương lai
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Nhận diện dấu hiệu cảnh báo",
                description: "Hiểu các dấu hiệu cảnh báo sớm giúp ngăn chặn sự trỗi dậy của các hệ tư tưởng cực đoan.",
                icon: <Eye className="w-6 h-6 text-primary" />
              },
              {
                title: "Bảo vệ dân chủ",
                description: "Dân chủ có thể bị phá hoại từ bên trong nếu không được bảo vệ tích cực.",
                icon: <Shield className="w-6 h-6 text-primary" />
              },
              {
                title: "Giáo dục thế hệ tương lai",
                description: "Truyền đạt bài học lịch sử cho thế hệ trẻ để xây dựng một tương lai tốt đẹp hơn.",
                icon: <BookOpen className="w-6 h-6 text-primary" />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn(0.1 * index)}
                className="bg-background p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 bg-primary/5"
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Tìm hiểu sâu hơn</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Khám phá thêm tài liệu và nguồn tham khảo để hiểu sâu hơn về chủ đề này
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Tài liệu tham khảo
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent/50 transition-colors"
            >
              Xem thư viện ảnh
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.section>
    </div>
    </div> 
  )
}
