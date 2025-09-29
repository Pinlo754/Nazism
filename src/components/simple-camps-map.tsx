"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Calendar, ExternalLink } from "lucide-react"

// Data cho các trại tập trung
const concentrationCamps = [
  {
    id: 1,
    name: "Auschwitz-Birkenau",
    location: "Ba Lan",
    coordinates: "50.0270°N, 19.2037°E",
    victims: "1.1 triệu",
    period: "1940-1945",
    description: "Trại diệt chủng lớn nhất của Nazi, biểu tượng của Holocaust",
    image: "/assets/camps/Auschwitz-Birkenau.png",
    type: "Trại diệt chủng"
  },
  {
    id: 2,
    name: "Treblinka",
    location: "Ba Lan",
    coordinates: "52.6316°N, 22.0432°E",
    victims: "800k - 900k",
    period: "1942-1943",
    description: "Trại diệt chủng thuần túy, một phần của Aktion Reinhard",
    image: "/assets/camps/Treblinka.png",
    type: "Trại diệt chủng"
  },
  {
    id: 3,
    name: "Sobibor",
    location: "Ba Lan",
    coordinates: "51.4467°N, 23.5939°E",
    victims: "250k",
    period: "1942-1943",
    description: "Trại diệt chủng, nổi tiếng với cuộc nổi dậy năm 1943",
    image: "/assets/camps/Sobibor.jpg",
    type: "Trại diệt chủng"
  },
  {
    id: 4,
    name: "Bergen-Belsen",
    location: "Đức",
    coordinates: "52.7586°N, 9.9072°E",
    victims: "50k",
    period: "1943-1945",
    description: "Trại tập trung, nơi Anne Frank qua đời",
    image: "/assets/camps/Bergen-Belsen.jpg",
    type: "Trại tập trung"
  },
  {
    id: 5,
    name: "Dachau",
    location: "Đức",
    coordinates: "48.2699°N, 11.4683°E",
    victims: "41k",
    period: "1933-1945",
    description: "Trại tập trung đầu tiên của Nazi, mô hình cho các trại khác",
    image: "/assets/camps/Dachau.jpg",
    type: "Trại tập trung"
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function SimpleCampsMap() {
  const [selectedCamp, setSelectedCamp] = useState<typeof concentrationCamps[0] | null>(null)

  return (
    <div className="space-y-6">
      {/* Static Map Placeholder with Camp Locations */}
      <div className="relative">
        <div className="h-96 rounded-lg overflow-hidden border shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg font-semibold mb-2">Bản đồ các trại tập trung</h3>
            <p className="text-sm text-muted-foreground mb-4">Chọn một trại từ danh sách bên dưới để xem chi tiết</p>
            <ExternalLink className="h-4 w-4 inline mr-1" />
            <span className="text-xs text-blue-600">Xem trên Google Maps</span>
          </div>
        </div>
        
        {/* Legend */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border">
          <h4 className="font-semibold text-sm mb-3">Chú thích</h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              <span className="font-medium">Trại diệt chủng</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
              <span className="font-medium">Trại tập trung</span>
            </div>
          </div>
        </div>
      </div>

      {/* Camps Grid */}
      <motion.div 
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {concentrationCamps.map((camp, index) => (
          <motion.div
            key={camp.id}
            variants={fadeUp}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-l-4 ${
                camp.type === "Trại diệt chủng" 
                  ? "border-l-red-600 hover:border-red-600" 
                  : "border-l-orange-600 hover:border-orange-600"
              } ${selectedCamp?.id === camp.id ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setSelectedCamp(selectedCamp?.id === camp.id ? null : camp)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-base">{camp.name}</CardTitle>
                    <CardDescription className="text-sm">{camp.location}</CardDescription>
                  </div>
                  <Badge variant={camp.type === "Trại diệt chủng" ? "destructive" : "secondary"}>
                    {camp.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-red-600" />
                    <span className="font-medium text-red-600">{camp.victims} nạn nhân</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{camp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs text-muted-foreground">{camp.coordinates}</span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {camp.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Selected Camp Details */}
      {selectedCamp && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Card className="border-destructive/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{selectedCamp.name}</CardTitle>
                  <CardDescription className="text-base">{selectedCamp.location}</CardDescription>
                </div>
                <Badge variant={selectedCamp.type === "Trại diệt chủng" ? "destructive" : "secondary"}>
                  {selectedCamp.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-red-600" />
                    <span className="font-medium">Số nạn nhân:</span>
                    <span className="text-red-600 font-bold">{selectedCamp.victims}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">Thời gian hoạt động:</span>
                    <span>{selectedCamp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium">Tọa độ:</span>
                    <span className="text-xs">{selectedCamp.coordinates}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedCamp.description}</p>
                </div>
                <div>
                  <Image
                    src={selectedCamp.image}
                    alt={selectedCamp.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                    onError={(e) => {
                      console.error('Image load error:', selectedCamp.image);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}