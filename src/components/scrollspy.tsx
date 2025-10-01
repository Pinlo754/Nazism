"use client"

import { useState } from "react"
import { useScrollspy } from "@/hooks/use-scrollspy"

interface ScrollspyProps {
  className?: string
}

const Scrollspy = ({ className = "" }: ScrollspyProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const { activeYear, handlePosition, scrollToYear, scrollUp, scrollDown, years } = useScrollspy()

  return (
    <div className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-30 ${className}`}>
      <div className="scrollspy" style={{ marginTop: '0px' }}>
        {/* SVG Track with Up/Down buttons */}
        <svg 
          className="scrollspy__track" 
          width="100px" 
          height="300px" 
          viewBox="0 0 43 300" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Up Button */}
          <g 
            className="scrollspy__up cursor-pointer hover:opacity-80" 
            onClick={scrollUp}
          >
            <circle 
              cx="20" 
              cy="20" 
              r="18" 
              fill="transparent" 
              stroke="#A69B91" 
              strokeWidth="2px"
            />
            <g transform="translate(14, 22)">
              <polyline 
                points="0 0 8 0 8 8" 
                transform="rotate(-45)" 
                fill="none" 
                stroke="#A69B91" 
                strokeWidth="2px"
              />
            </g>
          </g>
          
          {/* Down Button */}
          <g 
            className="scrollspy__down cursor-pointer hover:opacity-80" 
            transform="translate(0, 300) scale(1, -1)"
            onClick={scrollDown}
          >
            <circle 
              cx="20" 
              cy="20" 
              r="18" 
              fill="transparent" 
              stroke="#A69B91" 
              strokeWidth="2px"
            />
            <g transform="translate(14, 22)">
              <polyline 
                points="0 0 8 0 8 8" 
                transform="rotate(-45)" 
                fill="none" 
                stroke="#A69B91" 
                strokeWidth="2px"
              />
            </g>
          </g>
        </svg>

        {/* Scrollspy Path */}
        <div 
          className="scrollspy__path"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%)',
            width: '100%',
            height: '220px',
            overflow: 'hidden',
            top: '45px'
          }}
        >
          <div 
            className="scrollspy__handle"
            style={{ 
              transform: `translateY(${handlePosition}px)`,
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-31px',
              marginLeft: '-31px',
              border: '1px solid #a69b91',
              borderRadius: '100%',
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              transition: '0.8s cubic-bezier(0, 0.7, 0.4, 1)',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Handle lines (before and after) */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%)',
                content: '""',
                background: 'repeating-linear-gradient(transparent, transparent 2.5px, #a69b91 0, #a69b91 5px)',
                width: '1px',
                height: '200px',
                bottom: '100%'
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%)',
                content: '""',
                background: 'repeating-linear-gradient(transparent, transparent 2.5px, #a69b91 0, #a69b91 5px)',
                width: '1px',
                height: '200px',
                top: '100%'
              }}
            />
            
            <ul 
              className="scrollspy__years"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                clipPath: 'ellipse(30px 30px at 30px 30px)',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                listStyle: 'none',
                margin: '0',
                padding: '0'
              }}
            >
              {/* Background circle on hover */}
              <div
                style={{
                  backgroundColor: '#a69b91',
                  borderRadius: '100%',
                  content: '""',
                  width: '101%',
                  height: '101%',
                  opacity: isHovered ? 1 : 0,
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  transform: isHovered ? 'scale(1)' : 'scale(0)',
                  transition: '0.8s cubic-bezier(0, 0.7, 0.4, 1)'
                }}
              />
              
              {years.map((year) => (
                <li
                  key={year}
                  className={`scrollspy__year ${
                    activeYear === year ? 'scrollspy__year--active' : ''
                  }`}
                  data-year={year}
                  onClick={() => scrollToYear(year)}
                  style={{
                    color: isHovered ? '#f2e8d2' : (activeYear === year ? '#ABABAB' : '#a69b91'),
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: '14px',
                    fontWeight: '400',
                    letterSpacing: '0',
                    lineHeight: '60px',
                    display: 'block',
                    width: '60px',
                    opacity: activeYear === year ? 1 : 0,
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    textAlign: 'center',
                    transition: 'transform 0.8s cubic-bezier(0, 0.7, 0.4, 1), opacity 0.8s cubic-bezier(0, 0.7, 0.4, 1)',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    MozUserSelect: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {year}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scrollspy