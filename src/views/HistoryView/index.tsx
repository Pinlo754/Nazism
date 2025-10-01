"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { useTimeline } from "@/lib/data-fetcher"
import { Calendar, Clock, ChevronDown, ChevronRight, X } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/variants"
import VideoHeader from "@/components/video-header"
import Image from "next/image"
import { useState } from "react"


export default function HistoryPageView() {
  const { data: timeline, isLoading } = useTimeline()
  const [expandedEvents, setExpandedEvents] = useState<number[]>([])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [selectedSubEvent, setSelectedSubEvent] = useState<any>(null)

  const toggleEvent = (eventIndex: number) => {
    setExpandedEvents(prev => 
      prev.includes(eventIndex) 
        ? prev.filter(i => i !== eventIndex)
        : [...prev, eventIndex]
    )
  }

  const openEventDialog = (event: any, subEvent?: any) => {
    setSelectedEvent(event)
    setSelectedSubEvent(subEvent || null)
    setDialogOpen(true)
  }

  const closeDialog = () => {
    setDialogOpen(false)
    setSelectedEvent(null)
    setSelectedSubEvent(null)
  }

  const TimelineEvent = ({ event, index }: { event: any, index: number }) => {
    const isExpanded = expandedEvents.includes(index)
    const hasSubEvents = event.subEvents && event.subEvents.length > 0

    return (
      <motion.div
        className="timeline-event flex gap-6 border-l-2 border-primary/20 pl-8 pb-8 relative"
        data-year={event.year}
        id={`year-${event.year}`}
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        custom={index}
      >
        {/* Timeline dot */}
        <div className="absolute -left-2 top-4">
          <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
        </div>

        {/* Timeline image */}
        <div className="flex-shrink-0">
          <figure 
            className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-muted relative cursor-pointer hover:ring-2 hover:ring-primary transition-all"
            onClick={() => openEventDialog(event)}
          >
            <Image
              src={event.image}
              alt={`Sự kiện năm ${event.year}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 96px, 128px"
            />
          </figure>
        </div>

        {/* Timeline content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="font-bold text-lg text-primary">{event.year}</span>
            {hasSubEvents && (
              <button
                onClick={() => toggleEvent(index)}
                className="ml-auto p-1 hover:bg-muted rounded-md transition-colors"
                aria-label={isExpanded ? "Thu gọn" : "Mở rộng"}
              >
                {isExpanded ? (
                  <ChevronDown className="h-6 w-6 text-muted-foreground border-1 border-muted-foreground rounded-full"/>
                ) : (
                  <ChevronRight className="h-6 w-6 text-muted-foreground border-1 border-muted-foreground rounded-full" />
                )}
              </button>
            )}
          </div>
          
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-foreground leading-tight">
              {event.title || event.event}
            </h3>
            {event.description && (
              <p className="text-sm text-muted-foreground line-clamp-3">
                {event.description}
              </p>
            )}
            <p className="text-sm text-muted-foreground">
              {event.event}
            </p>
          </div>

          {/* Sub Events */}
          {hasSubEvents && isExpanded && (
            <motion.div
              className="mt-6 space-y-4 pl-4 border-l-2 border-muted-foreground "
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {event.subEvents.map((subEvent: any, subIndex: number) => (
                <motion.div
                  key={subIndex}
                  className="flex gap-4 relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: subIndex * 0.1 }}
                >
                  {/* Sub-timeline dot */}
                  <div className="absolute -left-5 top-2 bg-white w-fit h-fit py-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  </div>
                  
                  {/* Sub-event image (smaller) */}
                  {subEvent.image && (
                    <div className="flex-shrink-0">
                      <figure 
                        className="w-12 h-12 rounded-md overflow-hidden bg-muted relative cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                        onClick={() => openEventDialog(event, subEvent)}
                      >
                        <Image
                          src={subEvent.image}
                          alt={`${subEvent.title || subEvent.event}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-200"
                          sizes="48px"
                        />
                      </figure>
                    </div>
                  )}
                  
                  {/* Sub-event content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {subEvent.date && (
                        <span className="text-xs font-medium text-primary">
                          {subEvent.date}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-medium text-foreground mb-1">
                      {subEvent.title || subEvent.event}
                    </h4>
                    {subEvent.description && (
                      <p className="text-xs text-muted-foreground">
                        {subEvent.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    )
  }

  return (
    <>
      {/* Video Header */}
      <VideoHeader
        videoSrc="https://www.annefrank.org/media/filer_public/04/8c/048cdcf4-fd90-44af-93e0-1203e213e818/zoom_video_header_-_landingspagina_tijdlijn.mp4"
        posterImage="https://www.annefrank.org/media/filer_public_thumbnails/filer_public/d1/14/d1145da8-3ceb-4422-8054-0414a1afe77e/zoom_video_header_still_-_landingspagina_tijdlijn.jpg__1280x1280_q85_subsampling-2.jpg"
        title="Lịch sử Chủ nghĩa Quốc xã"
        subtitle="Từ sự ra đời đến sự sụp đổ của chế độ Quốc xã Đức (1919-1945)"
      />
      
      <div id="main-content" className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-16">

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Calendar className="h-6 w-6" /> Dòng thời gian chính
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
            <div className="space-y-8">
              {timeline?.map((event: any, i: number) => (
                <TimelineEvent
                  key={i}
                  event={event}
                  index={i}
                />
              ))}
            </div>
          )}
        </section>

        {/* Các giai đoạn */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Giai đoạn 1919-1933",
              desc: "Sự hình thành và phát triển",
              detail: "Từ việc thành lập Đảng Công nhân Đức đến khi Hitler lên nắm quyền Thủ tướng.",
              year: 1919
            },
            {
              title: "Giai đoạn 1933-1939",
              desc: "Củng cố quyền lực",
              detail: "Thiết lập chế độ độc tài, ban hành các luật phân biệt chủng tộc và chuẩn bị chiến tranh.",
              year: 1933
            },
            {
              title: "Giai đoạn 1939-1945",
              desc: "Chiến tranh và sụp đổ",
              detail: "Thế chiến II, Holocaust và sự kết thúc của chế độ Quốc xã.",
              year: 1939
            },
          ].map((phase, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp} 
              custom={i}
              className="timeline-event"
              data-year={phase.year}
              id={`year-${phase.year}`}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                  <CardDescription>{phase.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{phase.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Sự kiện quan trọng */}
        <motion.section
          className="bg-muted/30 rounded-lg p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">Các sự kiện quan trọng</h2>
          <div className="space-y-6">
            {[
              {
                title: "Đảo chính Munich (1923)",
                detail:
                  'Nỗ lực đảo chính thất bại của Hitler tại Munich, dẫn đến việc ông bị bắt giữ và viết cuốn "Mein Kampf" trong tù.',
                year: 1923
              },
              {
                title: "Đêm dao găm dài (1934)",
                detail: "Hitler thanh trừng các đối thủ trong nội bộ đảng, củng cố quyền lực tuyệt đối.",
                year: 1934
              },
              {
                title: "Luật Nuremberg (1935)",
                detail: "Các luật phân biệt chủng tộc chính thức, tước bỏ quyền công dân của người Do Thái.",
                year: 1935
              },
            ].map((e, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                initial="hidden" 
                whileInView="show" 
                custom={i}
                className="timeline-event"
                data-year={e.year}
                id={`year-${e.year}`}
              >
                <h3 className="text-lg font-semibold mb-2">{e.title}</h3>
                <p className="text-muted-foreground">{e.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>

    {/* Event Detail Dialog */}
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <span>
              {selectedSubEvent 
                ? `${selectedEvent?.year} - ${selectedSubEvent?.date}`
                : selectedEvent?.year
              }
            </span>
          </DialogTitle>
          <DialogClose 
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            onClick={closeDialog}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>

        {selectedEvent && (
          <div className="mt-6 space-y-6">
            {/* Main Image */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={selectedSubEvent?.image || selectedEvent.image}
                alt={selectedSubEvent?.title || selectedEvent.title || selectedEvent.event}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {selectedSubEvent?.title || selectedEvent.title || selectedEvent.event}
                </h2>
                {selectedSubEvent?.description && (
                  <p className="text-muted-foreground mb-4">
                    {selectedSubEvent.description}
                  </p>
                )}
                {selectedEvent.description && !selectedSubEvent && (
                  <p className="text-muted-foreground mb-4">
                    {selectedEvent.description}
                  </p>
                )}
              </div>

              {/* Main Event Info (when viewing sub-event) */}
              {selectedSubEvent && (
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Bối cảnh sự kiện:</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedEvent.event}
                  </p>
                  {selectedEvent.description && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {selectedEvent.description}
                    </p>
                  )}
                </div>
              )}

              {/* Sub Events List (when viewing main event) */}
              {!selectedSubEvent && selectedEvent.subEvents && selectedEvent.subEvents.length > 0 && (
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold mb-4">Các sự kiện liên quan:</h3>
                  <div className="space-y-3">
                    {selectedEvent.subEvents.map((subEvent: any, index: number) => (
                      <div key={index} className="flex gap-3 p-2 hover:bg-background rounded-md transition-colors">
                        {subEvent.image && (
                          <div className="flex-shrink-0">
                            <Image
                              src={subEvent.image}
                              alt={subEvent.title}
                              width={48}
                              height={48}
                              className="rounded object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-medium text-primary mb-1">
                            {subEvent.date}
                          </div>
                          <div className="text-sm font-medium mb-1">
                            {subEvent.title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {subEvent.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
    </>
  )
}
