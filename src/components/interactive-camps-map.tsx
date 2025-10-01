"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import type { Map as LeafletMap, DivIcon } from "leaflet"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Calendar } from "lucide-react"

// Data cho các trại tập trung
const concentrationCamps = [
  {
    id: 1,
    name: "Auschwitz-Birkenau",
    location: "Ba Lan",
    coordinates: [50.027, 19.2037] as [number, number],
    victims: "1.1 triệu",
    period: "1940-1945",
    description: "Trại diệt chủng lớn nhất của Nazi, biểu tượng của Holocaust",
    image: "/assets/camps/Auschwitz-Birkenau.png",
    type: "Trại diệt chủng",
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
    type: "Trại diệt chủng",
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
    type: "Trại diệt chủng",
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
    type: "Trại tập trung",
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
    type: "Trại tập trung",
  },
]

// mở rộng Window cho TS
declare global {
  interface Window {
    selectCamp?: (campId: number) => void
  }
}

export default function InteractiveCampsMap() {
  const [selectedCamp, setSelectedCamp] = useState<
    (typeof concentrationCamps)[0] | null
  >(null)
  const [isClient, setIsClient] = useState(false)
  const [map, setMap] = useState<LeafletMap | null>(null)
  const [mapReady, setMapReady] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const initMap = async () => {
      try {
        const L: typeof import("leaflet") = await import("leaflet")

        // fix icon default
        // @ts-expect-error private property không có trong type
        delete L.Icon.Default.prototype._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        })

        // Dọn map cũ nếu có
        if (map) map.remove()

        const mapInstance = L.map("camps-map", {
          attributionControl: false,
        }).setView([51.5, 15.0], 5)

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(mapInstance)

        // tạo icon custom
        const createCustomIcon = (
          camp: (typeof concentrationCamps)[0]
        ): DivIcon => {
          const iconColor =
            camp.type === "Trại diệt chủng" ? "#dc2626" : "#ea580c"
          const iconHtml = `
            <div style="
              background-color: ${iconColor}; 
              width: 25px; 
              height: 25px; 
              border-radius: 50%; 
              border: 3px solid white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: bold;
              font-size: 10px;
            ">
              ${camp.type === "Trại diệt chủng" ? "☠" : "⚠"}
            </div>
          `
          return L.divIcon({
            className: "custom-marker",
            html: iconHtml,
            iconSize: [25, 25],
            iconAnchor: [12.5, 12.5],
            popupAnchor: [0, -12.5],
          })
        }

        // thêm markers
        concentrationCamps.forEach((camp) => {
          const marker = L.marker(camp.coordinates, {
            icon: createCustomIcon(camp),
          }).addTo(mapInstance)

          const popupContent = `
            <div style="min-width: 200px; max-width: 300px;">
              <h3 style="margin:0;font-size:14px;font-weight:600;">${camp.name}</h3>
              <p style="margin:0;font-size:12px;color:#666;">${camp.location}</p>
              <p style="margin:8px 0;font-size:11px;color:#666;">${camp.description}</p>
              <button onclick="window.selectCamp(${camp.id})"
                style="margin-top:8px;padding:4px 8px;font-size:11px;background:#3b82f6;color:white;border:none;border-radius:4px;cursor:pointer;">
                Xem chi tiết →
              </button>
            </div>
          `
          marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: "custom-popup",
          })
          marker.on("click", () => setSelectedCamp(camp))
        })

        window.selectCamp = (campId: number) => {
          const camp = concentrationCamps.find((c) => c.id === campId)
          if (camp) setSelectedCamp(camp)
        }

        setMap(mapInstance)
        setMapReady(true)
      } catch (error) {
        console.error("Failed to initialize map:", error)
      }
    }

    initMap()

    return () => {
      map?.remove()
    }
  }, [isClient])

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
      {/* Map */}
      <div className="relative">
        <div
          id="camps-map"
          className="h-96 rounded-lg overflow-hidden border shadow-lg"
          style={{ height: "400px" }}
        />

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border">
          <h4 className="font-semibold text-sm mb-3">Chú thích</h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-xs">
                ☠
              </div>
              <span className="font-medium">Trại diệt chủng</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-orange-600 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-xs">
                ⚠
              </div>
              <span className="font-medium">Trại tập trung</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              Click vào marker để xem chi tiết
            </p>
          </div>
        </div>

        {/* Loading overlay */}
        {!mapReady && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">
                Đang tải bản đồ...
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Thông tin trại được chọn */}
      {selectedCamp && (
        <Card className="border-destructive/20">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg">{selectedCamp.name}</CardTitle>
                <CardDescription>{selectedCamp.location}</CardDescription>
              </div>
              <Badge
                variant={
                  selectedCamp.type === "Trại diệt chủng"
                    ? "destructive"
                    : "secondary"
                }
              >
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
                  <span className="text-red-600 font-bold">
                    {selectedCamp.victims}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">Thời gian hoạt động:</span>
                  <span>{selectedCamp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedCamp.description}
                </p>
              </div>
              <div>
                <Image
                  src={selectedCamp.image}
                  alt={selectedCamp.name}
                  width={300}
                  height={128}
                  className="w-full h-32 object-cover rounded-md"
                  onError={(e) => {
                    console.error("Image load error:", selectedCamp.image)
                    e.currentTarget.style.display = "none"
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
