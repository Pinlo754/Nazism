"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ZoomIn, Calendar, MapPin, Users } from "lucide-react"

// Gallery data
const galleryImages = [
  {
    id: 1,
    title: "Cổng vào Auschwitz",
    description: "Cổng chính của trại tập trung Auschwitz với dòng chữ 'Arbeit macht frei' (Lao động giải thoát)",
    location: "Auschwitz, Ba Lan",
    date: "1940-1945",
    category: "Trại tập trung",
    thumbnail: "/assets/camps/Auschwitz-Birkenau.png",
    fullImage: "/assets/camps/Auschwitz-Birkenau.png",
    casualties: "1.1 triệu nạn nhân"
  },
  {
    id: 2,
    title: "Đường ray tại Birkenau",
    description: "Đường sắt dẫn thẳng vào trại diệt chủng Auschwitz-Birkenau, biểu tượng của Holocaust",
    location: "Birkenau, Ba Lan", 
    date: "1942-1944",
    category: "Trại diệt chủng",
    thumbnail: "/assets/camps/railBirkenau.jpg",
    fullImage: "/assets/camps/railBirkenau.jpg",
    casualties: "960,000 nạn nhân"
  },
  {
    id: 3,
    title: "Ký ức Bergen-Belsen",
    description: "Tưởng niệm tại Bergen-Belsen, nơi Anne Frank và em gái Margot qua đời",
    location: "Bergen-Belsen, Đức",
    date: "1943-1945", 
    category: "Trại tập trung",
    thumbnail: "/assets/camps/Bergen-Belsen.jpg",
    fullImage: "/assets/camps/Bergen-Belsen.jpg",
    casualties: "50,000 nạn nhân"
  },
  {
    id: 4,
    title: "Treblinka Memorial",
    description: "Khu tưởng niệm Treblinka với những khối đá tượng trưng cho các cộng đồng bị diệt chủng",
    location: "Treblinka, Ba Lan",
    date: "1942-1943",
    category: "Trại diệt chủng", 
    thumbnail: "/assets/camps/Treblinka.png",
    fullImage: "/assets/camps/Treblinka.png",
    casualties: "870,000 nạn nhân"
  },
  {
    id: 5,
    title: "Dachau - Trại đầu tiên",
    description: "Trại tập trung Dachau, mở cửa năm 1933, là mô hình cho hệ thống trại tập trung Nazi",
    location: "Dachau, Đức",
    date: "1933-1945",
    category: "Trại tập trung",
    thumbnail: "/assets/camps/Dachau.jpg", 
    fullImage: "/assets/camps/Dachau.jpg",
    casualties: "41,500 nạn nhân"
  },
  {
    id: 6,
    title: "Ghetto Warsaw",
    description: "Hình ảnh từ Ghetto Warsaw trước khi bị thanh lọc, nơi sinh sống của hàng trăm nghìn người Do Thái",
    location: "Warsaw, Ba Lan",
    date: "1940-1943",
    category: "Ghetto",
    thumbnail: "/assets/camps/warsawghettouprising.png",
    fullImage: "/assets/camps/warsawghettouprising.png", 
    casualties: "300,000 cư dân"
  }
]

const categories = ["Tất cả", "Trại tập trung", "Trại diệt chủng", "Ghetto"]

export default function HolocaustGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState("Tất cả")
  
  const filteredImages = galleryImages.filter(img => 
    activeCategory === "Tất cả" || img.category === activeCategory
  )

  return (
    <div className="space-y-6">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-destructive text-destructive-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-lg bg-muted">
                <Image
                  src={image.thumbnail}
                  alt={image.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <Badge variant={image.category === "Trại diệt chủng" ? "destructive" : "secondary"}>
                    {image.category}
                  </Badge>
                </div>
              </div>

              {/* Image Info */}
              <div className="mt-3 space-y-1">
                <h3 className="font-medium text-sm line-clamp-1">{image.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{image.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{image.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{image.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedImage && (
            <>
              <DialogHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <DialogTitle className="text-xl">{selectedImage.title}</DialogTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedImage.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{selectedImage.date}</span>
                      </div>
                      <Badge variant={selectedImage.category === "Trại diệt chủng" ? "destructive" : "secondary"}>
                        {selectedImage.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              {/* Full Image */}
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={selectedImage.fullImage}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>

              {/* Description and Details */}
              <div className="space-y-4">
                <DialogDescription className="text-base leading-relaxed">
                  {selectedImage.description}
                </DialogDescription>
                
                <div className="flex items-center gap-2 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                  <Users className="h-5 w-5 text-destructive" />
                  <span className="font-medium text-destructive">{selectedImage.casualties}</span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}