"use client"

import { useState, useEffect } from "react"

const years = [
  1920, 1923, 1924, 1925, 1926, 1927, 1929, 1931, 1932, 1933, 1934, 1935, 1936, 
  1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1952, 
  1953, 1954, 1955, 1959, 1960, 1961, 1963, 1968, 1980, 1914, 1915, 1916, 1917, 
  1918, 1919
]

export const useScrollspy = () => {
  const [activeYear, setActiveYear] = useState(1933)
  const [handlePosition, setHandlePosition] = useState(0)

  const scrollToYear = (year: number) => {
    setActiveYear(year)
    
    // Tìm section tương ứng với năm
    const targetSection = document.querySelector(`[data-year="${year}"]`) || 
                         document.querySelector(`.timeline-event[data-year="${year}"]`) ||
                         document.querySelector(`#year-${year}`)
    
    if (targetSection) {
      const headerOffset = 100 // Offset cho sticky header
      const elementPosition = targetSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const scrollUp = () => {
    const currentIndex = years.indexOf(activeYear)
    if (currentIndex > 0) {
      scrollToYear(years[currentIndex - 1])
    }
  }

  const scrollDown = () => {
    const currentIndex = years.indexOf(activeYear)
    if (currentIndex < years.length - 1) {
      scrollToYear(years[currentIndex + 1])
    }
  }

  // Update handle position when active year changes
  useEffect(() => {
    const currentIndex = years.indexOf(activeYear)
    const position = (currentIndex / (years.length - 1)) * 150
    setHandlePosition(position)
  }, [activeYear])

  // Listen to scroll events to update active year based on visible sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      // Find which timeline event is currently in view
      const timelineEvents = document.querySelectorAll('.timeline-event')
      let closestYear = activeYear

      timelineEvents.forEach((event) => {
        const element = event as HTMLElement
        const yearData = element.getAttribute('data-year')
        if (!yearData) return

        const year = parseInt(yearData)
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + window.scrollY
        const elementCenter = elementTop + rect.height / 2

        // If this element's center is close to our scroll position
        if (Math.abs(elementCenter - scrollPosition) < Math.abs(
          (document.querySelector(`[data-year="${closestYear}"]`)?.getBoundingClientRect().top || 0) + 
          window.scrollY - scrollPosition
        )) {
          closestYear = year
        }
      })

      if (years.includes(closestYear) && closestYear !== activeYear) {
        setActiveYear(closestYear)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeYear])

  return {
    activeYear,
    handlePosition,
    scrollToYear,
    scrollUp,
    scrollDown,
    years
  }
}