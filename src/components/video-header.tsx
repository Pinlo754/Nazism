"use client"

import { useEffect, useRef, useState } from "react"
import Scrollspy from "./scrollspy"

interface VideoHeaderProps {
  videoSrc: string
  posterImage: string
  title?: string
  subtitle?: string
  className?: string
}

const VideoHeader = ({ 
  videoSrc, 
  posterImage, 
  title, 
  subtitle, 
  className = "" 
}: VideoHeaderProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`relative min-h-screen overflow-hidden bg-black ${className}`}>
      <figure className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted
          poster={posterImage}
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </figure>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      {(title || subtitle) && (
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="max-w-4xl mx-auto px-4">
            {title && (
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-xl md:text-2xl opacity-90 drop-shadow-md">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Triangle Overlay with Scroll Arrow */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Triangle SVG */}
        <svg 
          className="w-full h-32 fill-white" 
          viewBox="0 0 720 130" 
          preserveAspectRatio="none" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,130 L720,130 V0 Z"></path>
        </svg>
        
        {/* Scroll Arrow */}
        <a 
          href="#main-content" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black hover:text-gray-600 transition-colors duration-300 animate-bounce"
          aria-label="Cuộn đến nội dung chính"
          onClick={(e) => {
            e.preventDefault()
            const mainContent = document.getElementById('main-content')
            if (mainContent) {
              mainContent.scrollIntoView({ behavior: 'smooth' })
            } else {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
            }
          }}
        >
          <svg 
            viewBox="0 0 39 38" 
            className="w-8 h-8" 
            aria-hidden="true"
          >
            <line 
              x1="19.5" 
              y1="0" 
              x2="19.5" 
              y2="15" 
              stroke="currentColor" 
              strokeWidth="3"
            />
            <path 
              d="M22.4,28.5l12-12l3.4,3.4L19.3,38.4L0.8,19.9l3.4-3.4l12.2,12.2V-0.2h6V28.5z" 
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      {/* Scrollspy - Fixed position on the right */}
      <Scrollspy />
    </div>
  )
}

export default VideoHeader