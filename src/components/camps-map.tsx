"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Calendar } from "lucide-react"

// Dynamic import để tránh SSR issues với Leaflet
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
)

// Data cho các trại tập trung
const concentrationCamps = [
  {
    id: 1,
    name: "Auschwitz-Birkenau",
    location: "Ba Lan",
    coordinates: [50.0270, 19.2037] as [number, number],
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
    coordinates: [52.6316, 22.0432] as [number, number],
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
    coordinates: [51.4467, 23.5939] as [number, number],
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
    coordinates: [52.7586, 9.9072] as [number, number],
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
    coordinates: [48.2699, 11.4683] as [number, number],
    victims: "41k",
    period: "1933-1945",
    description: "Trại tập trung đầu tiên của Nazi, mô hình cho các trại khác",
    image: "/assets/camps/Dachau.jpg",    
    type: "Trại tập trung"
  },
]

export default function CampsMap() {
  const [selectedCamp, setSelectedCamp] = useState<typeof concentrationCamps[0] | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">Đang tải bản đồ...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="relative">
        <div className="h-96 rounded-lg overflow-hidden border shadow-lg">
          <MapContainer
            center={[51.5, 15.0]}
            zoom={5}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {concentrationCamps.map((camp) => {
              // Temporarily disable custom icons to avoid errors
              // const customIcon = createCustomIcon(camp.type);
              return (
                <Marker
                  key={camp.id}
                  position={camp.coordinates}
                  // icon={customIcon || undefined}
                  eventHandlers={{
                    click: () => setSelectedCamp(camp),
                  }}
                >
                  <Popup
                    maxWidth={300}
                    className="custom-popup"
                  >
                    <div className="min-w-64 max-w-80">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-sm">{camp.name}</h3>
                          <p className="text-xs text-muted-foreground">{camp.location}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          camp.type === "Trại diệt chủng" 
                            ? "bg-red-100 text-red-800" 
                            : "bg-orange-100 text-orange-800"
                        }`}>
                          {camp.type}
                        </span>
                      </div>
                      
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center gap-1 text-xs">
                          <Users className="h-3 w-3 text-red-600" />
                          <span className="font-medium text-red-600">{camp.victims} nạn nhân</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <Calendar className="h-3 w-3" />
                          <span>{camp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-xs mt-2 text-muted-foreground leading-relaxed">
                        {camp.description}
                      </p>
                      
                      <button
                        onClick={() => setSelectedCamp(camp)}
                        className="text-xs text-blue-600 hover:underline mt-2 font-medium"
                      >
                        Xem chi tiết và hình ảnh →
                      </button>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
        
        {/* Legend */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border">
          <h4 className="font-semibold text-sm mb-3">Chú thích</h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-xs">
                📍
              </div>
              <span className="font-medium">Trại diệt chủng</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-xs">
                📍
              </div>
              <span className="font-medium">Trại tập trung</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-gray-200">
            <p className="text-xs text-gray-600">Click vào marker để xem chi tiết</p>
          </div>
        </div>
      </div>

      {/* Selected Camp Details */}
      {selectedCamp && (
        <Card className="border-destructive/20">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg">{selectedCamp.name}</CardTitle>
                <CardDescription>{selectedCamp.location}</CardDescription>
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
                <p className="text-sm text-muted-foreground">{selectedCamp.description}</p>
              </div>
              <div>
                <Image
                  src={selectedCamp.image}
                  alt={selectedCamp.name}
                  width={300}
                  height={128}
                  className="w-full h-32 object-cover rounded-md"
                  onError={(e) => {
                    console.error('Image load error:', selectedCamp.image);
                    // Fallback to a placeholder or hide image
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}