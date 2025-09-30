"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { container, item } from "@/lib/variants";
import Image from "next/image";

export default function WhatIsNazismPageView() {
  const articles = [
    {
      title: "Nguồn gốc tư tưởng của Chủ nghĩa Quốc xã",
      content: (
        <>
          <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
            {/* Cột ảnh */}
            <div className="relative group">
              <Image
                src="/versailles.png"
                alt="Hiệp ước Versailles 1919"
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover w-full"
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Hiệp ước Versailles (1919) – Nỗi nhục của nước Đức
              </div>
            </div>

            {/* Cột chữ */}
            <div>
              <p className="leading-relaxed mb-4 text-justify">
                Chủ nghĩa Quốc xã (Nazism) không phải xuất hiện ngẫu nhiên, mà
                là sản phẩm của bối cảnh lịch sử – xã hội nước Đức sau{" "}
                <span className="relative group cursor-help text-blue-700 font-semibold">
                  Thế chiến I
                  <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                    Thế chiến I (1914–1918): cuộc đại chiến toàn cầu lần đầu
                    tiên, làm hơn 15 triệu người chết và khiến nước Đức thất bại
                    nặng nề.
                  </span>
                </span>
                .{" "}
                <span className="relative group cursor-help text-blue-700 font-semibold">
                  Hiệp ước Versailles (1919)
                  <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                    Hiệp ước hòa bình ký sau Thế chiến I, buộc Đức bồi thường
                    chiến phí, cắt đất, giới hạn quân sự và chịu trách nhiệm gây
                    chiến.
                  </span>
                </span>{" "}
                đã áp đặt những điều khoản vô cùng khắc nghiệt, khiến quốc gia
                Đức bị sỉ nhục và tổn thương sâu sắc. Nhà sử học Ian Kershaw đã
                nhận xét: “Hiệp ước Versailles đã biến nước Đức thành một dân
                tộc bị xúc phạm. Chính trong môi trường ấy, sự phẫn nộ dân tộc
                và khát vọng phục thù trở thành mảnh đất màu mỡ cho sự trỗi dậy
                của chủ nghĩa Quốc xã.” (Kershaw, 2008).
              </p>

              <p className="leading-relaxed text-justify">
                Thêm vào đó,{" "}
                <span className="relative group cursor-help text-blue-700 font-semibold">
                  cuộc khủng hoảng kinh tế toàn cầu 1929–1933
                  <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                    Khủng hoảng kinh tế lớn nhất thế kỷ 20 (Great Depression),
                    bắt đầu từ Mỹ rồi lan ra toàn cầu, khiến thất nghiệp và đói
                    nghèo lan tràn.
                  </span>
                </span>{" "}
                đã khiến hàng triệu người Đức rơi vào thất nghiệp, đẩy xã hội
                vào khủng hoảng toàn diện. Richard Evans đã phân tích rằng
                “chính sự bất ổn kinh tế và thất vọng chính trị đã mở ra cơ hội
                để Hitler khai thác nỗi sợ hãi và đưa Quốc xã từ phong trào bên
                lề thành lực lượng cầm quyền” (Evans, 2003). Như vậy, nguồn gốc
                tư tưởng Quốc xã gắn liền với hoàn cảnh lịch sử đặc thù: một dân
                tộc bị tổn thương, một xã hội bất ổn, và một phong trào cực đoan
                khai thác tối đa tâm lý tập thể ấy.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Nguồn gốc tư tưởng triết học",
      content: (
        <>
          <p className="leading-relaxed mb-4 text-justify">
            Nazism là sự kết hợp méo mó của nhiều dòng tư tưởng triết học và xã
            hội. Trước hết, nó chịu ảnh hưởng mạnh mẽ từ{" "}
            <span className="relative group cursor-help text-blue-700 font-semibold">
              chủ nghĩa Darwin xã hội
              <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                Học thuyết xã hội thế kỷ 19, áp dụng sai lệch thuyết tiến hóa
                của Darwin để biện minh cho sự cạnh tranh khắc nghiệt và phân
                biệt chủng tộc.
              </span>
            </span>{" "}
            và thuyết phân biệt chủng tộc thế kỷ XIX. Hannah Arendt đã chỉ ra:
            “Chủ nghĩa phát xít vay mượn rất nhiều từ chủ nghĩa phân biệt chủng
            tộc giả khoa học của thế kỷ 19, trong đó chủng tộc Aryan được tưởng
            tượng là vượt trội về mặt sinh học.” (Arendt, 1951).
          </p>

          <p className="leading-relaxed mb-4 text-justify">
            Bên cạnh đó, triết học Nietzsche cũng bị Quốc xã xuyên tạc. Khái
            niệm{" "}
            <span className="relative group cursor-help text-blue-700 font-semibold">
              “Siêu nhân” (Übermensch)
              <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                Khái niệm trung tâm trong triết học Nietzsche, chỉ hình mẫu con
                người vượt lên giới hạn, tự tạo ra giá trị và ý nghĩa cho đời
                sống.
              </span>
            </span>
            , vốn đề cao sự vượt thoát cá nhân, đã bị biến dạng thành luận điểm
            về tính thượng đẳng sinh học của người Aryan. Georges Lukács đã phê
            phán điều này: “Khái niệm Übermensch của Nietzsche, vốn chỉ sự vượt
            lên của cá nhân, đã bị Hitler và các nhà tư tưởng Quốc xã xuyên tạc
            thành sự vượt trội sinh học của người Aryan.” (Lukács, 1952).
          </p>

          <p className="leading-relaxed text-justify">
            Ngoài ra, các yếu tố trong triết học Hegel và chủ nghĩa dân tộc Đức
            cũng bị lợi dụng. Karl Löwith nhận định rằng Quốc xã đã “thần thánh
            hóa quyền lực của nhà nước và{" "}
            <span className="relative group cursor-help text-blue-700 font-semibold">
              Führer
              <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                Tước hiệu tiếng Đức nghĩa là “lãnh tụ”, được dùng để tôn sùng
                Hitler như người đứng đầu tuyệt đối của nước Đức Quốc xã.
              </span>
            </span>
            , dựa trên hình ảnh Nhà nước như hiện thân của{" "}
            <span className="relative group cursor-help text-blue-700 font-semibold">
              Ý niệm tuyệt đối trong Hegel
              <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                Khái niệm trong triết học Hegel: Nhà nước được coi là hiện thân
                cao nhất của lý trí và tinh thần tuyệt đối trong lịch sử.
              </span>
            </span>
            ” (Löwith, 1941). Như vậy, tư tưởng Quốc xã không phải là một triết
            học hệ thống, mà là một sự pha trộn và bóp méo của nhiều dòng triết
            học, biến chúng thành công cụ ý thức hệ phục vụ bạo lực và phân biệt
            chủng tộc.
          </p>
        </>
      ),
    },
    {
      title: "Nội dung tư tưởng cốt lõi",
      content: (
        <>
          <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
            {/* Cột chữ (bên trái) */}
            <div>
              <p className="leading-relaxed mb-4 text-justify">
                Chủ nghĩa Quốc xã được xây dựng trên bốn trụ cột chính: thượng
                đẳng chủng tộc, lãnh tụ tối cao,{" "}
                <span className="relative group cursor-help text-blue-700 font-semibold">
                  không gian sinh tồn
                  <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                    Lebensraum – học thuyết cho rằng dân tộc Đức cần mở rộng
                    lãnh thổ về phía Đông để có “không gian sống”.
                  </span>
                </span>{" "}
                và{" "}
                <span className="relative group cursor-help text-blue-700 font-semibold">
                  chống Do Thái
                  <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                    Antisemitism – tư tưởng thù ghét, kỳ thị và quy kết người Do
                    Thái là “kẻ thù truyền kiếp” của dân tộc Đức.
                  </span>
                </span>{" "}
                – chống cộng sản.
              </p>

              <p className="leading-relaxed mb-4 text-justify">
                Hitler khẳng định trong{" "}
                <span className="relative group cursor-help text-blue-700 font-semibold">
                  Mein Kampf
                  <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                    Mein Kampf (tạm dịch: Cuộc đấu tranh của tôi) – cuốn tự
                    truyện và cương lĩnh chính trị do Hitler viết trong tù
                    (1924–1925).
                  </span>
                </span>
                : “Chỉ những người thuộc về dòng máu Đức mới có thể là công dân
                của Nhà nước.” Đây là cơ sở lý luận cho chính sách phân biệt
                chủng tộc và diệt chủng sau này. Đồng thời, nguyên tắc{" "}
                <span className="relative group cursor-help text-blue-700 font-semibold">
                  Führerprinzip
                  <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                    Führerprinzip – “nguyên tắc lãnh tụ”: toàn bộ quyền lực tập
                    trung vào Führer (Hitler), ý chí của ông chính là luật pháp.
                  </span>
                </span>{" "}
                đặt Hitler vào vị trí tuyệt đối. Ian Kershaw đã mô tả: “Führer
                là nguồn gốc thực sự của quyền lực, người có ý chí là luật
                pháp.” (Kershaw, 1998).
              </p>

              <p className="leading-relaxed text-justify">
                Khẩu hiệu{" "}
                <span className="relative group cursor-help text-blue-700 font-semibold">
                  Lebensraum
                  <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                    “Không gian sinh tồn” – khẩu hiệu biện minh cho các cuộc xâm
                    lược của Đức Quốc xã nhằm chiếm đất ở Đông Âu.
                  </span>
                </span>{" "}
                cho phép Quốc xã biện minh cho các cuộc xâm lược sang phía Đông
                nhằm mở rộng lãnh thổ. Hitler còn quy kết rằng “Do Thái là kẻ
                thù truyền kiếp… Chủ nghĩa Marx chỉ là công cụ của Do Thái nhằm
                phá hoại các dân tộc.”{" "}
                <span className="relative group cursor-help text-blue-700 font-semibold">
                  Mein Kampf
                  <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                    Cuốn sách của Hitler trở thành “kinh thánh” tư tưởng của
                    Quốc xã, được phát hành rộng rãi ở Đức trước 1945.
                  </span>
                </span>
                . Như vậy, nội dung tư tưởng Quốc xã vừa cực đoan, vừa toàn trị,
                vừa phân biệt chủng tộc, tạo nên một hệ thống hủy diệt.
              </p>
            </div>

            {/* Cột ảnh (bên phải) */}
            <div className="relative group">
              <Image
                src="/Hitler.png"
                alt="Adolf Hitler"
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover w-full"
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Adolf Hitler – Lãnh tụ tối cao (Führer)
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Hệ thống chính trị – xã hội Quốc xã",
      content: (
        <>
          <div className="grid md:grid-cols-3 gap-4 items-start mb-10">
            {/* Cột ảnh (1/3 bên trái) */}
            <div className="relative group md:col-span-1">
              <Image
                src="/Goebbels.png"
                alt="Joseph Goebbels"
                width={300}
                height={200}
                className="rounded-xl shadow-md object-cover w-full"
              />
              <div
                className="absolute bottom-2 left-2 bg-black/70 text-white text-sm px-3 py-1 rounded 
                     opacity-0 group-hover:opacity-100 transition"
              >
                Joseph Goebbels – Bộ trưởng Tuyên truyền Đức Quốc xã
              </div>
            </div>

            {/* Cột chữ (2/3 bên phải) */}
            <div className="md:col-span-2">
              <p className="leading-relaxed mb-4 text-justify">
                Sau khi lên nắm quyền năm 1933, Hitler và Đảng Quốc xã đã xây
                dựng một nhà nước toàn trị. Hannah Arendt nhận định: “Trong chế
                độ Quốc xã, mọi lĩnh vực từ kinh tế, văn hóa, giáo dục đến đời
                sống cá nhân đều bị kiểm soát bởi Đảng và lãnh tụ.” (The Origins
                of Totalitarianism.)
              </p>
              <p className="leading-relaxed text-justify">
                Joseph Goebbels, Bộ trưởng Tuyên truyền, nhấn mạnh: “Hãy cho tôi
                thanh niên, tôi sẽ thay đổi thế giới.” Điều này cho thấy tầm
                quan trọng của tuyên truyền và tẩy não, đặc biệt là với thế hệ
                trẻ. Song song, bộ máy bạo lực với {/* Tooltip cho SS */}
                <span className="relative group cursor-help text-blue-700 font-semibold">
                  Schutzstaffel
                  <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                    SS (Schutzstaffel) – lực lượng bán quân sự tinh nhuệ, trung
                    thành tuyệt đối với Hitler.
                  </span>
                </span>
                , {/* Tooltip cho Gestapo */}
                <span className="relative group cursor-help text-blue-700 font-semibold">
                  Gestapo
                  <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                    Gestapo (Geheime Staatspolizei) – cảnh sát mật, chuyên trấn
                    áp đối lập và kiểm soát dân chúng.
                  </span>
                </span>{" "}
                và hệ thống trại tập trung đã duy trì quyền lực bằng nỗi sợ hãi
                tuyệt đối (Evans, 2005). Hệ thống này là mô hình điển hình của
                một nhà nước toàn trị, nơi mọi tự do cá nhân bị xóa bỏ.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Kết quả trong tư tưởng",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Hệ quả nặng nề nhất của Quốc xã chính là Holocaust, cuộc diệt chủng
            khiến 6 triệu người Do Thái và hàng triệu nạn nhân khác thiệt mạng.
            Zygmunt Bauman đã nhận xét: “Holocaust là hình thức cực đoan nhất
            của tội ác trong lịch sử hiện đại, nơi logic của chủng tộc thay thế
            logic của nhân loại.” (Bauman, 1989).
          </p>
          <p className="leading-relaxed">
            Về phương diện tư tưởng và pháp lý, Quốc xã đã để lại một di sản
            nghịch lý: từ tội ác ấy, nhân loại đã hình thành khái niệm tội ác
            chống loài người tại Tòa án Nuremberg. Đây là nền tảng của luật pháp
            quốc tế hiện đại về nhân quyền (Nuremberg Trials, 1946).
          </p>
        </>
      ),
    },
    {
      title: "Sự tồn tại và ảnh hưởng về sau",
      content: (
        <>
          <p className="leading-relaxed mb-4 text-justify">
            Dù bị đánh bại vào năm 1945, tư tưởng Quốc xã không biến mất hoàn
            toàn. Roger Griffin khẳng định: “Dù bị cấm đoán, tư tưởng Quốc xã
            vẫn sống sót trong các nhóm cực hữu, như một bóng ma đen tối của quá
            khứ, phản ánh sự bất ổn của hiện tại.” (Griffin, 1991). Hiện tượng{" "}
            <span className="relative group cursor-help text-blue-700 font-semibold">
              Neo-Nazism
              <span className="absolute left-0 top-full mt-1 w-64 bg-black text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                Neo-Nazism: phong trào tân phát xít, xuất hiện sau 1945, tiếp
                tục ủng hộ hoặc mô phỏng tư tưởng, biểu tượng và chính sách của
                Đức Quốc xã.
              </span>
            </span>{" "}
            ở châu Âu, Mỹ, Nga cho thấy dư âm của hệ tư tưởng này vẫn còn.
          </p>
          <p className="leading-relaxed">
            Ảnh hưởng của Quốc xã cũng buộc thế giới hiện đại phải chú ý đến
            việc xây dựng xã hội dân chủ, chống phân biệt chủng tộc, và phát
            triển hệ thống nhân quyền toàn cầu.
          </p>
        </>
      ),
    },
    {
      title: "Liên hệ triết học",
      content: (
        <>
          <p className="leading-relaxed mb-4">
            Chủ nghĩa Quốc xã, khi nhìn từ triết học so sánh, là phản đề triệt
            để của cả chủ nghĩa Marx và dân chủ tự do. Georg Lukács viết: “Marx
            kêu gọi xóa bỏ áp bức giai cấp; Quốc xã lại xây dựng áp bức trên cơ
            sở chủng tộc. Một bên giải phóng, một bên hủy diệt.” (Lukács, 1952).
          </p>
          <p className="leading-relaxed mb-4">
            Với dân chủ tự do, Nazism phủ nhận toàn bộ giá trị của Khai sáng –
            bình đẳng, tự do, nhân quyền. Habermas cho rằng: “Quốc xã là phản đề
            triệt để của dân chủ, phủ nhận bình đẳng, tự do, nhân quyền.”
            (Habermas, 1985).
          </p>
          <p className="leading-relaxed">
            Sau Auschwitz, triết học hiện đại buộc phải đối diện với giới hạn
            của lý tính. Adorno đã nói: “Nhiệm vụ của triết học sau Auschwitz là
            ngăn ngừa tái diễn điều không thể tưởng tượng.” (Adorno, 1966). Như
            vậy, Quốc xã không chỉ là một hệ tư tưởng lịch sử, mà còn là một dấu
            mốc triết học – nhắc nhở nhân loại về sự nguy hiểm của cực đoan và
            hận thù.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <div className="relative mb-6 rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/nazism-hero.png"
          alt="Chủ nghĩa Quốc xã"
          width={2000}
          height={500}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
          <h1 className="text-5xl mb-4 drop-shadow-lg">Chủ nghĩa Quốc xã</h1>
          <p className="max-w-2xl text-lg leading-relaxed">
            Một hệ tư tưởng cực đoan đã để lại dấu ấn tăm tối trong lịch sử nhân
            loại. Hiểu để cảnh giác, để không bao giờ lặp lại.
          </p>
        </div>
      </div>

      <main className="flex-1 mx-auto px-4 py-2 w-full max-w-8xl">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar mục lục */}
          <aside className="col-span-2 hidden lg:block">
            <nav className="sticky top-20 p-4 rounded-xl bg-accent/10 border shadow-sm">
              <h2 className="text-lg font-semibold mb-3">Mục lục</h2>
              <ul className="space-y-2 text-sm">
                {articles.map((art, idx) => (
                  <li key={idx}>
                    <a
                      href={`#section-${idx}`}
                      className="text-primary hover:underline"
                    >
                      {art.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Nội dung chính */}
          <section className="col-span-12 lg:col-span-9">
            <motion.div initial="hidden" animate="show" variants={container}>
              {/* Cảnh báo */}
              <motion.div variants={item}>
                <Alert className="mb-6 border-yellow-400/30 bg-yellow-400/10">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <AlertTitle className="text-yellow-700 font-semibold">
                    Nội dung nhạy cảm
                  </AlertTitle>
                  <AlertDescription className="text-muted-foreground">
                    Đây là tài liệu học thuật, trình bày hệ tư tưởng Quốc xã với
                    mục đích giáo dục, phê phán và cảnh báo.
                  </AlertDescription>
                </Alert>
              </motion.div>

              {/* Các mục nội dung */}
              {articles.map((art, idx) => (
                <motion.section
                  key={idx}
                  id={`section-${idx}`}
                  variants={item}
                  className="mb-12 last:mb-0 scroll-mt-24"
                >
                  <h2 className="text-2xl font-semibold mb-6">{art.title}</h2>
                  {art.content}
                </motion.section>
              ))}

              {/* Card cuối */}
              <motion.section variants={item} className="pb-8">
                <Card className="border-accent shadow-lg bg-accent/10">
                  <CardHeader className="flex items-center space-x-2">
                    <BookOpen className="h-6 w-6" />
                    <CardTitle className="text-2xl font-bold">
                      Tại sao cần hiểu về Chủ nghĩa Quốc xã?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>
                        Nhận biết và ngăn chặn sự trỗi dậy của tư tưởng tương tự
                      </li>
                      <li>Tôn vinh ký ức của các nạn nhân</li>
                      <li>Bảo vệ các giá trị dân chủ và nhân quyền</li>
                      <li>Giáo dục thế hệ trẻ về nguy hiểm của cực đoan</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.section>
            </motion.div>
          </section>
        </div>
      </main>

      {/* CSS cho smooth scroll */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
