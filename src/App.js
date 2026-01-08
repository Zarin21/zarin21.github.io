import React, { useState, useEffect, useRef } from 'react'

// Portfolio data structure
export const portfolio = {
  'about.md': {
    isFolder: false,
    content: (
      <div className="max-w-xl text-xs sm:text-sm">
        <p className="text-blackz">Zarin Subah</p>
        <p className="text-gray-400 mt-1">Software Developer</p>
        <p className="text-gray-400 mt-1">Interested in:</p>
        <ul className="list-disc list-inside text-gray-400">
          <li>Backend Development & APIs</li>
          <li>Machine Learning</li>
        </ul>
      </div>
    ),
  },
  'experience.txt': {
    isFolder: false,
    content: (
      <div className="space-y-4 text-xs sm:text-sm">
        <div>
          <span className="text-yellow-500 block sm:inline">
            Project Developer @ Blueprint
          </span>
          <p className="text-gray-400 text-xs sm:text-sm">
            Oct. 2025 - Present
          </p>
          <p className="text-gray-300">
            - Go, PostgreSQL. Deployed on Supabase.
          </p>
          <p className="text-gray-300">
            - Developing the backend of an application portal.
          </p>
        </div>
        <div>
          <span className="text-yellow-500 block sm:inline">
            Research Assistant @ University of Alberta
          </span>
          <p className="text-gray-400 text-xs sm:text-sm">
            May 2025 - Aug. 2025
          </p>
          <p className="text-gray-300">
            - Developed a Java/C++ graphics rendering application.
          </p>
          <p className="text-gray-300">
            - Research project: Finding Periodic trajectories on a billards
            table.
          </p>
        </div>
      </div>
    ),
  },
  projects: {
    isFolder: true,
    children: {
      tinker: {
        isFolder: true,
        children: {
          'README.md': {
            isFolder: false,
            content: (
              <div className="text-xs sm:text-sm space-y-4">
                <h2 className="text-green-500 text-lg font-semibold">
                  Tinker - Recommendation System
                </h2>
                <p className="text-gray-400">
                  A comprehensive recommendation system using Stochastic
                  Gradient Descent
                </p>
                <div className="space-y-2">
                  <h3 className="text-white font-medium">Technologies Used:</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Python with machine learning algorithms</li>
                    <li>Selenium for web scraping</li>
                    <li>Java backend services</li>
                    <li>Android Studio for mobile app</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <a
                    href="https://github.com/tinker-app/tinker"
                    className="text-blue-500 underline break-all"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            ),
          },
          'architecture.txt': {
            isFolder: false,
            content: (
              <div className="text-xs sm:text-sm space-y-4">
                <h3 className="text-white font-medium">System Architecture</h3>
                <div className="bg-gray-800 p-3 rounded text-gray-300 font-mono text-xs">
                  <div>Mobile App (Android) → API Gateway → ML Engine</div>
                  <div>Web Scraper → Data Pipeline → Recommendation Model</div>
                  <div>Real-time sync via REST APIs</div>
                </div>
                <p className="text-gray-400">
                  The system combines web scraping, machine learning, and mobile
                  development to provide personalized recommendations.
                </p>
              </div>
            ),
          },
        },
      },
      'web-crawler': {
        isFolder: true,
        children: {
          'README.md': {
            isFolder: false,
            content: (
              <div className="text-xs sm:text-sm space-y-4">
                <h2 className="text-green-500 text-lg font-semibold">
                  Web Crawler & Search Engine
                </h2>
                <p className="text-gray-400">
                  Full-stack search engine with distributed crawling and
                  indexing capabilities
                </p>
                <div className="space-y-2">
                  <h3 className="text-white font-medium">Technologies Used:</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>React frontend with modern UI</li>
                    <li>Spring Boot backend with microservices</li>
                    <li>MongoDB for document storage</li>
                    <li>Distributed crawling architecture</li>
                    <li>Inverted index for fast search queries</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-medium">Key Features:</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Distributed web crawling</li>
                    <li>Real-time search indexing</li>
                    <li>Advanced query processing</li>
                    <li>Scalable document storage</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <a
                    href="https://github.com/Zarin21/Web-Crawler"
                    className="text-blue-500 underline break-all"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            ),
          },
          'architecture.txt': {
            isFolder: false,
            content: (
              <div className="text-xs sm:text-sm space-y-4">
                <h3 className="text-white font-medium">System Architecture</h3>
                <div className="bg-gray-800 p-3 rounded text-gray-300 font-mono text-xs">
                  <div>Crawler Service → Queue → Indexer → Search API</div>
                  <div>React UI ← REST API ← Spring Backend ← MongoDB</div>
                  <div>Load Balancer → Multiple Crawler Instances</div>
                </div>
                <p className="text-gray-400">
                  Distributed architecture supporting horizontal scaling and
                  high availability.
                </p>
              </div>
            ),
          },
        },
      },
      'regression-model': {
        isFolder: true,
        children: {
          'README.md': {
            isFolder: false,
            content: (
              <div className="text-xs sm:text-sm space-y-4">
                <h2 className="text-green-500 text-lg font-semibold">
                  LeFocus - Focus Tracking Service
                </h2>
                <p className="text-gray-400">
                  AI-powered productivity tracking using brainwave analysis and
                  computer vision
                </p>
                <div className="space-y-2">
                  <h3 className="text-white font-medium">Technologies Used:</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Machine Learning with EEG data processing</li>
                    <li>Computer vision for pupil tracking</li>
                    <li>React frontend with real-time dashboards</li>
                    <li>FastAPI backend for ML inference</li>
                    <li>Node.js for real-time communication</li>
                    <li>Pocketbase with SQLite for data storage</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-medium">Key Features:</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li>Real-time brainwave analysis</li>
                    <li>Pupil diameter tracking</li>
                    <li>Productivity score calculation</li>
                    <li>Historical trend analysis</li>
                    <li>WebSocket-based live updates</li>
                  </ul>
                </div>
                <div className="pt-4">
                  <a
                    href="https://github.com/LeFocus/regression-model"
                    className="text-blue-500 underline break-all"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            ),
          },
          'architecture.txt': {
            isFolder: false,
            content: (
              <div className="text-xs sm:text-sm space-y-4">
                <h3 className="text-white font-medium">System Architecture</h3>
                <div className="bg-gray-800 p-3 rounded text-gray-300 font-mono text-xs">
                  <div>EEG Device → ML Pipeline → FastAPI → WebSocket</div>
                  <div>
                    Camera → CV Pipeline → Pupil Tracking → Real-time Analysis
                  </div>
                  <div>
                    React Dashboard ← WebSocket ← Node.js Server ← Pocketbase
                  </div>
                </div>
                <p className="text-gray-400">
                  Multi-modal AI system combining neuroscience, computer vision,
                  and real-time data processing.
                </p>
              </div>
            ),
          },
          'demo.mp4': {
            isFolder: false,
            content: (
              <div className="text-xs sm:text-sm space-y-4">
                <h3 className="text-white font-medium">Demo Video</h3>
                <div className="bg-gray-800 p-4 rounded text-center">
                  <p className="text-gray-400 mb-2">
                    Live demonstration of focus tracking
                  </p>
                  <div className="text-yellow-500 text-sm">
                    🎥 Video demo would be embedded here
                  </div>
                  <p className="text-gray-500 text-xs mt-2">
                    Shows real-time productivity analysis using EEG and computer
                    vision
                  </p>
                </div>
              </div>
            ),
          },
        },
      },
    },
  },
  'links.txt': {
    isFolder: false,
    content: (
      <div className="flex flex-col text-xs sm:text-sm">
        <a
          href="https://github.com/Zarin21"
          className="text-blue-500 hover:underline break-all"
        >
          github.com/Zarin21
        </a>
        <a
          href="https://linkedin.com/in/zsubah"
          className="text-blue-500 hover:underline break-all"
        >
          linkedin.com/in/zsubah
        </a>
        <a
          href="mailto:zszarin021@gmail.com"
          className="text-blue-500 hover:underline break-all"
        >
          zszarin021@gmail.com
        </a>
      </div>
    ),
  },
}

const AVAILABLE_COMMANDS = [
  'ls',
  'cat',
  'cd',
  'clear',
  'help',
  'open',
  'neofetch',
]

const BOOT_TIME = new Date('2025-11-28T17:00:00')

const calculateUptime = () => {
  const now = new Date()
  const diff = now - BOOT_TIME
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const mins = Math.floor((diff / (1000 * 60)) % 60)

  return `${days} days, ${hours} hours, ${mins} mins`
}

// macOS Monterey colors
const MONTEREY_COLORS = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Monterey default gradient
  windowBg: '#f5f5f7',
  windowBorder: '#d1d1d6',
  text: '#1d1d1f',
  textSecondary: '#86868b',
  dock: 'rgba(255, 255, 255, 0.8)',
  menuBar: 'rgba(255, 255, 255, 0.7)',
}

// Desktop Icon Component
const DesktopIcon = ({
  name,
  isFolder,
  isSubfolder = false,
  position,
  onDrag,
  onDoubleClick,
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [lastClickTime, setLastClickTime] = useState(0)
  const iconRef = useRef(null)

  const handleMouseDown = (e) => {
    const now = Date.now()
    if (now - lastClickTime < 300) {
      onDoubleClick()
      setLastClickTime(0)
      return
    }
    setLastClickTime(now)
    setIsDragging(true)
    const rect = iconRef.current.getBoundingClientRect()
    setDragOffset({
      x: (e.clientX || e.touches?.[0]?.clientX) - rect.left,
      y: (e.clientY || e.touches?.[0]?.clientY) - rect.top,
    })
  }

  const handleTouchStart = (e) => {
    e.preventDefault()
    handleMouseDown(e)
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      onDrag({
        x: (e.clientX || e.touches?.[0]?.clientX) - dragOffset.x,
        y: (e.clientY || e.touches?.[0]?.clientY) - dragOffset.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('touchmove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchend', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('touchmove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchend', handleMouseUp)
      }
    }
  }, [isDragging, dragOffset])

  return (
    <div
      ref={iconRef}
      className="absolute flex flex-col items-center cursor-pointer select-none touch-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: window.innerWidth < 640 ? '60px' : '80px',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div
        className={`${
          window.innerWidth < 640 ? 'w-12 h-12' : 'w-16 h-16'
        } flex items-center justify-center mb-1`}
      >
        {isFolder ? (
          <svg
            className={`${window.innerWidth < 640 ? 'w-12 h-12' : 'w-16 h-16'}`}
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M8 12h20l4 8h24c4 0 8 4 8 8v20c0 4-4 8-8 8H8c-4 0-8-4-8-8V20c0-4 4-8 8-8z"
              fill={isSubfolder ? '#34C759' : '#FFD60A'}
              stroke={isSubfolder ? '#28A745' : '#FFB800'}
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg
            className={`${window.innerWidth < 640 ? 'w-12 h-12' : 'w-16 h-16'}`}
            viewBox="0 0 64 64"
            fill="none"
          >
            <rect
              x="12"
              y="8"
              width="40"
              height="48"
              rx="2"
              fill="#007AFF"
              stroke="#0051D5"
              strokeWidth="2"
            />
            <path d="M12 20h40" stroke="#0051D5" strokeWidth="2" />
          </svg>
        )}
      </div>
      <div
        className={`${
          window.innerWidth < 640 ? 'text-[10px]' : 'text-xs'
        } text-white text-center px-1 py-0.5 rounded break-words`}
        style={{
          backgroundColor: isDragging ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
          textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
          maxWidth: window.innerWidth < 640 ? '60px' : '80px',
        }}
      >
        {name}
      </div>
    </div>
  )
}

// macOS Window Component
const Window = ({
  id,
  title,
  content,
  position,
  size,
  isMinimized,
  isFocused,
  onClose,
  onMinimize,
  onFocus,
  onDrag,
  onResize,
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const windowRef = useRef(null)
  const isMobile = window.innerWidth < 640

  const handleTitleMouseDown = (e) => {
    if (e.target.closest('.window-control')) return
    setIsDragging(true)
    const clientX = e.clientX || e.touches?.[0]?.clientX
    const clientY = e.clientY || e.touches?.[0]?.clientY
    setDragStart({
      x: clientX - position.x,
      y: clientY - position.y,
    })
    onFocus()
  }

  const handleTouchStart = (e) => {
    if (e.target.closest('.window-control')) return
    handleTitleMouseDown(e)
  }

  const handleMouseMove = (e) => {
    const clientX = e.clientX || e.touches?.[0]?.clientX
    const clientY = e.clientY || e.touches?.[0]?.clientY
    if (isDragging) {
      onDrag({
        x: Math.max(
          0,
          Math.min(clientX - dragStart.x, window.innerWidth - size.width)
        ),
        y: Math.max(
          isMobile ? 0 : 24,
          Math.min(clientY - dragStart.y, window.innerHeight - size.height)
        ),
      })
    } else if (isResizing && !isMobile) {
      const rect = windowRef.current.getBoundingClientRect()
      onResize({
        width: Math.max(400, clientX - rect.left),
        height: Math.max(300, clientY - rect.top),
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsResizing(false)
  }

  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('touchmove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchend', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('touchmove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchend', handleMouseUp)
      }
    }
  }, [isDragging, isResizing, dragStart])

  if (isMinimized) return null

  const windowStyle = isMobile
    ? {
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        maxHeight: '100vh',
      }
    : {
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }

  return (
    <div
      ref={windowRef}
      className={`absolute rounded-lg shadow-2xl overflow-hidden ${
        isMobile ? 'rounded-none' : ''
      }`}
      style={{
        ...windowStyle,
        backgroundColor: MONTEREY_COLORS.windowBg,
        border: `1px solid ${MONTEREY_COLORS.windowBorder}`,
        zIndex: isFocused ? 1000 : 100,
        opacity: isFocused ? 1 : 0.9,
      }}
      onClick={onFocus}
    >
      {/* Title Bar */}
      <div
        className="flex items-center justify-between px-3 py-2 cursor-move touch-none"
        style={{ backgroundColor: isFocused ? '#f5f5f7' : '#e8e8ed' }}
        onMouseDown={handleTitleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="flex gap-2 window-control">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
          />
          <button
            onClick={onMinimize}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
          />
          <button
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
            disabled
          />
        </div>
        <div
          className="flex-1 text-center text-xs font-medium"
          style={{ color: MONTEREY_COLORS.text }}
        >
          {title}
        </div>
        <div className="w-12"></div>
      </div>

      {/* Window Content */}
      <div
        className="p-4 overflow-auto"
        style={{ height: 'calc(100% - 40px)', color: MONTEREY_COLORS.text }}
      >
        {content}
      </div>

      {/* Resize Handle */}
      {!isMobile && (
        <div
          className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize"
          style={{
            background:
              'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.1) 50%)',
          }}
          onMouseDown={(e) => {
            e.stopPropagation()
            setIsResizing(true)
            onFocus()
          }}
        />
      )}
    </div>
  )
}

// Menu Bar Component
const MenuBar = () => {
  const [time, setTime] = useState(new Date())
  const isMobile = window.innerWidth < 640

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = () => {
    return time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
  }

  if (isMobile) {
    return (
      <div
        className="fixed top-0 left-0 right-0 h-8 flex items-center justify-end px-4 text-xs z-50"
        style={{
          backgroundColor: MONTEREY_COLORS.menuBar,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          color: MONTEREY_COLORS.text,
          borderBottom: `1px solid ${MONTEREY_COLORS.windowBorder}`,
        }}
      >
        <div className="font-medium">{formatTime()}</div>
      </div>
    )
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 h-6 flex items-center justify-between px-4 text-xs z-50"
      style={{
        backgroundColor: MONTEREY_COLORS.menuBar,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        color: MONTEREY_COLORS.text,
        borderBottom: `1px solid ${MONTEREY_COLORS.windowBorder}`,
      }}
    >
      <div className="flex items-center gap-4">
        <span className="font-semibold">Zarin</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Window</span>
        <span>Help</span>
      </div>
      <div className="font-medium">{formatTime()}</div>
    </div>
  )
}

// Dock Component
const Dock = ({ onTerminalClick, onFinderClick }) => {
  const isMobile = window.innerWidth < 640

  return (
    <div
      className={`fixed ${
        isMobile ? 'bottom-2' : 'bottom-4'
      } left-1/2 transform -translate-x-1/2 flex items-end gap-2 px-4 py-2 rounded-2xl z-50`}
      style={{
        backgroundColor: MONTEREY_COLORS.dock,
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
    >
      <button
        onClick={onFinderClick}
        className={`${
          isMobile ? 'w-10 h-10' : 'w-12 h-12'
        } rounded-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform touch-manipulation`}
        style={{ backgroundColor: 'rgba(0, 122, 255, 0.1)' }}
        title="Finder"
      >
        <svg
          className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'}`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" fill="#007AFF" />
          <path d="M2 8h20M8 4v4" stroke="white" strokeWidth="1.5" />
        </svg>
      </button>
      <button
        onClick={onTerminalClick}
        className={`${
          isMobile ? 'w-10 h-10' : 'w-12 h-12'
        } rounded-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform touch-manipulation`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
        title="Terminal"
      >
        <svg
          className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'}`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" fill="#1d1d1f" />
          <path
            d="M6 8h12M6 12h8"
            stroke="#00ff00"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  )
}

// Neofetch Component
const Neofetch = () => {
  const uptimeString = calculateUptime()

  const colorMap = {
    red: 'text-red-500',
    green: 'text-green-500',
    yellow: 'text-yellow-500',
    blue: 'text-blue-500',
    magenta: 'text-purple-500',
    cyan: 'text-cyan-500',
    white: 'text-white',
    gray: 'text-gray-500',
  }

  const neofetchLines = [
    [{ text: '', color: 'white' }, 'zarinsubah@Mac.ht.home', ''],
    [
      { text: '                ,xNMM.', color: 'white' },
      '----------------------',
      '',
    ],
    [
      { text: '              .OMMMMo', color: 'white' },
      'OS: ',
      { text: 'macOS 15.1.1 24B91 arm64', color: 'white' },
    ],
    [
      { text: '              OMMM0,', color: 'white' },
      'Host: ',
      { text: 'Mac15,12', color: 'white' },
    ],
    [
      { text: "    .;loddo:' loolloddol;.", color: 'white' },
      'Kernel: ',
      { text: '24.1.0', color: 'white' },
    ],
    [
      { text: '  cKMMMMMMMMMMNWMMMMMMMMMM0:', color: 'white' },
      'Uptime: ',
      { text: uptimeString, color: 'white' },
    ],
    [
      { text: '.KMMMMMMMMMMMMMMMMMMMMMMMWd.', color: 'white' },
      'Packages: ',
      { text: '235 (brew)', color: 'white' },
    ],
    [
      { text: 'XMMMMMMMMMMMMMMMMMMMMMMMX.', color: 'white' },
      'Shell: ',
      { text: 'zsh 5.9', color: 'white' },
    ],
    [
      { text: ';MMMMMMMMMMMMMMMMMMMMMMMM:', color: 'white' },
      'Resolution: ',
      { text: '1470x956', color: 'white' },
    ],
    [
      { text: ':MMMMMMMMMMMMMMMMMMMMMMMM:', color: 'white' },
      'DE: ',
      { text: 'Aqua', color: 'white' },
    ],
    [
      { text: '.MMMMMMMMMMMMMMMMMMMMMMMMX.', color: 'white' },
      'WM: ',
      { text: 'Quartz Compositor', color: 'white' },
    ],
    [
      { text: 'kMMMMMMMMMMMMMMMMMMMMMMMMWd.', color: 'white' },
      'WM Theme: ',
      { text: 'Blue (Dark)', color: 'white' },
    ],
    [
      { text: '.XMMMMMMMMMMMMMMMMMMMMMMMMMMk', color: 'white' },
      'Terminal: ',
      { text: 'Apple_Terminal', color: 'white' },
    ],
    [
      { text: ' .XMMMMMMMMMMMMMMMMMMMMMMMMK.', color: 'white' },
      'Terminal Font: ',
      { text: 'SFMono-Regular', color: 'white' },
    ],
    [
      { text: '  kMMMMMMMMMMMMMMMMMMMMMMd', color: 'white' },
      'CPU: ',
      { text: 'Apple M3', color: 'white' },
    ],
    [
      { text: '    ;KMMMMMMMWXXWMMMMMMMk.', color: 'white' },
      'GPU: ',
      { text: 'Apple M3', color: 'white' },
    ],
    [
      { text: '      .cooc,.    .,coo:.', color: 'white' },
      'Memory: ',
      { text: '2611MiB / 16384MiB', color: 'white' },
    ],
    [{ text: '', color: 'white' }, '', ''],
    [
      { text: '                          ', color: 'white' },
      '   ',
      { text: '   ', color: 'red' },
      { text: '   ', color: 'green' },
      { text: '   ', color: 'yellow' },
      { text: '   ', color: 'blue' },
      { text: '   ', color: 'magenta' },
      { text: '   ', color: 'cyan' },
      { text: '   ', color: 'white' },
    ],
  ]

  const logoWidth = 37

  return (
    <pre className="text-xs mb-4 leading-tight">
      {neofetchLines.map((line, lineIndex) => (
        <div key={lineIndex} className="flex">
          <span style={{ minWidth: `${logoWidth}ch` }}>
            {line[0] && (
              <span
                className={
                  typeof line[0] === 'object'
                    ? colorMap[line[0].color] || 'text-white'
                    : 'text-gray-500'
                }
              >
                {typeof line[0] === 'string' ? line[0] : line[0].text}
              </span>
            )}
          </span>
          <span>
            {line.slice(1).map((item, colIndex) => {
              const text = typeof item === 'string' ? item : item.text
              const colorClass =
                typeof item === 'object'
                  ? colorMap[item.color] || 'text-gray-400'
                  : 'text-gray-400'
              return (
                <span key={colIndex} className={colorClass}>
                  {text}
                </span>
              )
            })}
          </span>
        </div>
      ))}
    </pre>
  )
}

// Terminal Window Component (refactored from original)
const TerminalWindow = ({
  onClose,
  onMinimize,
  isFocused,
  onFocus,
  position,
  size,
  onDrag,
  onResize,
}) => {
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const [currentPath, setCurrentPath] = useState('~')
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const Prompt = ({ path = '~' }) => (
    <div className="flex gap-1 mr-2 whitespace-nowrap text-xs sm:text-sm shrink-0">
      <span className="text-green-400 hidden sm:inline">
        guest@Zarin-MacBook
      </span>
      <span className="text-green-400 sm:hidden">guest@Mac</span>
      <span className="text-blue-400">{path === '~' ? '' : path}$</span>
    </div>
  )

  const handleCommand = (commandString) => {
    const trimmedCommand = commandString.trim()
    const [cmd, arg] = trimmedCommand.split(/\s+/)

    let output

    if (!trimmedCommand) {
      output = null
    } else if (cmd === 'clear') {
      setHistory([])
      return
    } else if (cmd === 'help') {
      output = (
        <div className="text-gray-300 space-y-2 text-xs sm:text-sm">
          <div className="text-white font-semibold mb-3">
            Available Commands:
          </div>
          <div className="space-y-1">
            <div className="break-words">
              <span className="text-yellow-400">ls</span> - List files and
              directories in the current location
            </div>
            <div className="break-words">
              <span className="text-yellow-400">cat [file]</span> - Display the
              contents of a file
            </div>
            <div className="break-words">
              <span className="text-yellow-400">cd [directory]</span> - Change
              directory (use 'cd ..' to go back, 'cd ~' for home)
            </div>
            <div className="break-words">
              <span className="text-yellow-400">open [file]</span> - Open and
              display a file (same as cat)
            </div>
            <div className="break-words">
              <span className="text-yellow-400">clear</span> - Clear the
              terminal screen
            </div>
            <div className="break-words">
              <span className="text-yellow-400">neofetch</span> - Display system
              information with Apple logo
            </div>
            <div className="break-words">
              <span className="text-yellow-400">help</span> - Show this help
              message
            </div>
          </div>
          <div className="text-gray-500 text-xs sm:text-sm mt-3">
            Tip: Use Tab for command and file name autocompletion
          </div>
        </div>
      )
    } else if (cmd === 'neofetch') {
      output = <Neofetch />
    } else if (cmd === 'cd') {
      if (!arg || arg === '~' || arg === '/') {
        setCurrentPath('~')
        output = null
      } else if (arg === '..') {
        if (currentPath !== '~') {
          setCurrentPath('~')
          output = null
        } else {
          output = null
        }
      } else {
        if (portfolio[arg] && portfolio[arg].isFolder) {
          setCurrentPath(arg)
          output = null
        } else {
          output = `zsh: cd: ${arg}: Not a directory`
        }
      }
    } else if (cmd === 'ls') {
      const folderKey = currentPath === '~' ? '~' : currentPath
      if (folderKey === '~') {
        output = (
          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
            {Object.keys(portfolio).map((key) => {
              const item = portfolio[key]
              return (
                <span
                  key={key}
                  className={
                    item.isFolder ? 'text-blue-400 font-bold' : 'text-white'
                  }
                >
                  {key}
                  {item.isFolder ? '/' : ''}
                </span>
              )
            })}
          </div>
        )
      } else {
        const folder = portfolio[folderKey]
        if (folder && folder.children) {
          output = (
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
              {Object.keys(folder.children).map((key) => (
                <span key={key} className="text-white">
                  {key}
                </span>
              ))}
            </div>
          )
        } else {
          output = `ls: ${folderKey}: No such file or directory`
        }
      }
    } else if (cmd === 'cat' || cmd === 'open') {
      if (!arg) {
        output = `usage: ${cmd} [file]`
      } else {
        let fileToDisplay = null
        let targetFileName = arg
        let targetFolderName = null

        if (arg.includes('/')) {
          const parts = arg.split('/')
          if (parts.length === 2) {
            targetFolderName = parts[0]
            targetFileName = parts[1]
          }
        } else if (currentPath !== '~') {
          targetFolderName = currentPath
        }

        if (
          targetFolderName &&
          portfolio[targetFolderName] &&
          portfolio[targetFolderName].children &&
          portfolio[targetFolderName].children[targetFileName]
        ) {
          fileToDisplay = portfolio[targetFolderName].children[targetFileName]
        } else if (portfolio[arg]) {
          fileToDisplay = portfolio[arg]
        }

        if (fileToDisplay) {
          if (fileToDisplay.isFolder) {
            output = `${cmd}: ${arg}: Is a directory`
          } else {
            output = fileToDisplay.content
          }
        } else {
          output = `zsh: no such file or directory: ${arg}`
        }
      }
    } else {
      output = `zsh: command not found: ${cmd}`
    }

    setHistory([...history, { cmd: commandString, output, path: currentPath }])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input)
      setInput('')
    } else if (e.key === 'Tab') {
      e.preventDefault()

      const parts = input.split(' ')
      const cmd = parts[0]
      const arg = parts[1] || ''

      if (parts.length === 1) {
        const matches = AVAILABLE_COMMANDS.filter((c) => c.startsWith(cmd))
        if (matches.length === 1) {
          setInput(matches[0] + ' ')
        }
      } else if (parts.length === 2) {
        let options = Object.keys(portfolio)
        if (currentPath !== '~') {
          const folder = portfolio[currentPath]
          if (folder && folder.children) {
            options = [...options, ...Object.keys(folder.children)]
          }
        }

        const matches = options.filter((f) => f.startsWith(arg))

        if (matches.length === 1) {
          if (portfolio[matches[0]]) {
            setInput(`${cmd} ${matches[0]}`)
          } else if (
            currentPath !== '~' &&
            portfolio[currentPath].children &&
            portfolio[currentPath].children[matches[0]]
          ) {
            setInput(`${cmd} ${matches[0]}`)
          }
        }
      }
    }
  }

  const content = (
    <div
      className="h-full flex flex-col"
      style={{ backgroundColor: '#1a1a1a', color: '#fff' }}
    >
      <div className="flex-1 overflow-y-auto p-4 text-xs sm:text-sm">
        {history.map((entry, index) => (
          <div key={index} className="mb-2 break-words">
            <div className="flex flex-wrap items-start gap-1">
              <Prompt path={entry.path === '~' ? '~' : entry.path} />
              <span className="break-all">{entry.cmd}</span>
            </div>
            {entry.output && (
              <div className="mt-1 text-gray-200 break-words">
                {entry.output}
              </div>
            )}
          </div>
        ))}
        <div className="flex flex-wrap items-start gap-1" ref={bottomRef}>
          <Prompt path={currentPath} />
          <input
            ref={inputRef}
            className="bg-transparent outline-none flex-1 text-white min-w-0"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  )

  return (
    <Window
      id="terminal"
      title="Terminal"
      content={content}
      position={position}
      size={size}
      isMinimized={false}
      isFocused={isFocused}
      onClose={onClose}
      onMinimize={onMinimize}
      onFocus={onFocus}
      onDrag={onDrag}
      onResize={onResize}
    />
  )
}

// Desktop Widget Component
const DesktopWidget = ({ id, position, onDrag, children }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const widgetRef = useRef(null)

  const handleMouseDown = (e) => {
    if (e.target.closest('a, button')) return
    setIsDragging(true)
    const rect = widgetRef.current.getBoundingClientRect()
    setDragOffset({
      x: (e.clientX || e.touches?.[0]?.clientX) - rect.left,
      y: (e.clientY || e.touches?.[0]?.clientY) - rect.top,
    })
  }

  const handleTouchStart = (e) => {
    if (e.target.closest('a, button')) return
    e.preventDefault()
    handleMouseDown(e)
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      onDrag({
        x: (e.clientX || e.touches?.[0]?.clientX) - dragOffset.x,
        y: (e.clientY || e.touches?.[0]?.clientY) - dragOffset.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('touchmove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchend', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('touchmove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchend', handleMouseUp)
      }
    }
  }, [isDragging, dragOffset])

  return (
    <div
      ref={widgetRef}
      className="absolute cursor-move touch-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isDragging ? 0.8 : 1,
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {children}
    </div>
  )
}

// Clock Widget
const ClockWidget = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = () => {
    return time.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    })
  }

  const formatDate = () => {
    return time.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div
      className="rounded-2xl p-4 shadow-xl"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        minWidth: '200px',
      }}
    >
      <div className="text-white">
        <div className="text-3xl font-light mb-1">{formatTime()}</div>
        <div className="text-sm opacity-90">{formatDate()}</div>
      </div>
    </div>
  )
}

// System Stats Widget
const SystemStatsWidget = () => {
  const uptimeString = calculateUptime()

  return (
    <div
      className="rounded-2xl p-4 shadow-xl"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        minWidth: '200px',
      }}
    >
      <div className="text-white">
        <div className="text-sm font-semibold mb-3 opacity-90">System Info</div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="opacity-75">Uptime:</span>
            <span className="font-medium">{uptimeString}</span>
          </div>
          <div className="flex justify-between">
            <span className="opacity-75">OS:</span>
            <span className="font-medium">macOS 15.1.1</span>
          </div>
          <div className="flex justify-between">
            <span className="opacity-75">CPU:</span>
            <span className="font-medium">Apple M3</span>
          </div>
          <div className="flex justify-between">
            <span className="opacity-75">Shell:</span>
            <span className="font-medium">zsh 5.9</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Quick Links Widget
const QuickLinksWidget = () => {
  return (
    <div
      className="rounded-2xl p-4 shadow-xl"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        minWidth: '200px',
      }}
    >
      <div className="text-white">
        <div className="text-sm font-semibold mb-3 opacity-90">Quick Links</div>
        <div className="space-y-2">
          <a
            href="https://github.com/Zarin21"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs hover:opacity-75 transition-opacity"
          >
            → GitHub
          </a>
          <a
            href="https://linkedin.com/in/zsubah"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs hover:opacity-75 transition-opacity"
          >
            → LinkedIn
          </a>
          <a
            href="mailto:zszarin021@gmail.com"
            className="block text-xs hover:opacity-75 transition-opacity"
          >
            → Email
          </a>
        </div>
      </div>
    </div>
  )
}

// Welcome Popup Component
const WelcomePopup = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      onClick={onClose}
    >
      <div
        className="rounded-2xl shadow-2xl p-8 max-w-md mx-4"
        style={{
          backgroundColor: MONTEREY_COLORS.windowBg,
          border: `1px solid ${MONTEREY_COLORS.windowBorder}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: MONTEREY_COLORS.text }}
          >
            👋 Welcome to my Portfolio!
          </h2>
          <p
            className="text-sm mb-6"
            style={{ color: MONTEREY_COLORS.textSecondary }}
          >
            This is my interactive portfolio website. Explore my work by
            clicking on the desktop icons, or use the terminal to navigate.
            Double-click any file or folder to open it!
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            style={{
              backgroundColor: '#007AFF',
              color: 'white',
            }}
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  )
}

// Main Desktop Component
export default function App() {
  const [windows, setWindows] = useState([])
  const [iconPositions, setIconPositions] = useState(() => {
    const isMobile = window.innerWidth < 640
    return {
      'about.md': { x: isMobile ? 20 : 50, y: isMobile ? 60 : 50 },
      'experience.txt': { x: isMobile ? 20 : 150, y: isMobile ? 140 : 50 },
      projects: { x: isMobile ? 20 : 250, y: isMobile ? 220 : 50 },
      'links.txt': { x: isMobile ? 20 : 350, y: isMobile ? 300 : 50 },
    }
  })
  const [widgetPositions, setWidgetPositions] = useState(() => {
    const isMobile = window.innerWidth < 640
    return {
      clock: {
        x: isMobile ? 20 : window.innerWidth - 250,
        y: isMobile ? 380 : 80,
      },
      systemStats: {
        x: isMobile ? 20 : window.innerWidth - 250,
        y: isMobile ? 500 : 240,
      },
    }
  })
  const [nextZIndex, setNextZIndex] = useState(1000)

  const isMobile = window.innerWidth < 640

  const openWindow = (id, title, content) => {
    const existingWindow = windows.find((w) => w.id === id)
    if (existingWindow) {
      focusWindow(id)
      return
    }

    const newWindow = {
      id,
      title,
      content,
      position: isMobile
        ? { x: 0, y: 0 }
        : { x: 100 + windows.length * 30, y: 100 + windows.length * 30 },
      size: isMobile
        ? { width: window.innerWidth, height: window.innerHeight }
        : { width: 600, height: 400 },
      isMinimized: false,
      isFocused: true,
      zIndex: nextZIndex,
    }

    setWindows((prev) =>
      prev.map((w) => ({ ...w, isFocused: false })).concat(newWindow)
    )
    setNextZIndex((prev) => prev + 1)
  }

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id))
  }

  const minimizeWindow = (id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    )
  }

  const focusWindow = (id) => {
    setWindows((prev) =>
      prev.map((w) => ({
        ...w,
        isFocused: w.id === id,
        zIndex: w.id === id ? nextZIndex : w.zIndex,
      }))
    )
    setNextZIndex((prev) => prev + 1)
  }

  const updateWindowPosition = (id, position) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, position } : w))
    )
  }

  const updateWindowSize = (id, size) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, size } : w)))
  }

  const updateIconPosition = (name, position) => {
    setIconPositions((prev) => ({ ...prev, [name]: position }))
  }

  const updateWidgetPosition = (widgetId, position) => {
    setWidgetPositions((prev) => ({
      ...prev,
      [widgetId]: {
        x: Math.max(10, Math.min(position.x, window.innerWidth - 220)),
        y: Math.max(
          isMobile ? 32 : 24,
          Math.min(position.y, window.innerHeight - 150)
        ),
      },
    }))
  }

  const handleIconDoubleClick = (name, parentPath = '') => {
    let item
    if (parentPath) {
      // Navigate to nested folder
      const pathParts = parentPath.split('/')
      let current = portfolio
      for (const part of pathParts) {
        if (current[part] && current[part].children) {
          current = current[part].children
        }
      }
      item = current[name]
    } else {
      item = portfolio[name]
    }

    if (item) {
      if (item.isFolder) {
        // Open folder in a window showing its contents
        const fullPath = parentPath ? `${parentPath}/${name}` : name
        const windowId = `folder-${fullPath}`
        const folderContent = (
          <div className="p-4" data-window-id={windowId}>
            <div className="text-lg font-semibold mb-4">{name}</div>
            <div className="space-y-2">
              {Object.keys(item.children || {}).map((key) => {
                const child = item.children[key]
                return (
                  <div
                    key={key}
                    className="p-2 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-2"
                    onClick={() => {
                      if (child.isFolder) {
                        // Close the current folder window before opening the subfolder
                        closeWindow(windowId)
                        handleIconDoubleClick(key, fullPath)
                      } else {
                        openWindow(
                          `file-${fullPath}/${key}`,
                          key,
                          child.content
                        )
                      }
                    }}
                  >
                    {child.isFolder ? (
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        viewBox="0 0 64 64"
                        fill="none"
                      >
                        <path
                          d="M8 12h20l4 8h24c4 0 8 4 8 8v20c0 4-4 8-8 8H8c-4 0-8-4-8-8V20c0-4 4-8 8-8z"
                          fill="#34C759"
                          stroke="#28A745"
                          strokeWidth="2"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        viewBox="0 0 64 64"
                        fill="none"
                      >
                        <rect
                          x="12"
                          y="8"
                          width="40"
                          height="48"
                          rx="2"
                          fill="#007AFF"
                          stroke="#0051D5"
                          strokeWidth="2"
                        />
                        <path d="M12 20h40" stroke="#0051D5" strokeWidth="2" />
                      </svg>
                    )}
                    <div className="flex-1">
                      <div className="font-medium">{key}</div>
                      {child.content && typeof child.content === 'object' && (
                        <div className="text-sm text-gray-500 mt-1">
                          {
                            React.Children.toArray(
                              child.content.props.children
                            )[0]?.props?.children
                          }
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
        openWindow(windowId, name, folderContent)
      } else {
        openWindow(
          `file-${parentPath ? `${parentPath}/${name}` : name}`,
          name,
          item.content
        )
      }
    }
  }

  const handleTerminalClick = () => {
    const terminalWindow = windows.find((w) => w.id === 'terminal')
    if (terminalWindow) {
      if (terminalWindow.isMinimized) {
        setWindows((prev) =>
          prev.map((w) =>
            w.id === 'terminal'
              ? { ...w, isMinimized: false, isFocused: true }
              : { ...w, isFocused: false }
          )
        )
      } else {
        focusWindow('terminal')
      }
    } else {
      const terminalContent = null // Will be handled by TerminalWindow component
      openWindow('terminal', 'Terminal', terminalContent)
    }
  }

  const handleFinderClick = () => {
    // Finder-like view of all files
    const finderContent = (
      <div className="p-4">
        <div className="text-lg font-semibold mb-4">Files</div>
        <div className="grid grid-cols-4 gap-4">
          {Object.keys(portfolio).map((key) => {
            const item = portfolio[key]
            return (
              <div
                key={key}
                className="flex flex-col items-center cursor-pointer p-2 hover:bg-gray-100 rounded"
                onClick={() => handleIconDoubleClick(key)}
              >
                {item.isFolder ? (
                  <svg
                    className="w-12 h-12 mb-2"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      d="M8 12h20l4 8h24c4 0 8 4 8 8v20c0 4-4 8-8 8H8c-4 0-8-4-8-8V20c0-4 4-8 8-8z"
                      fill="#FFD60A"
                      stroke="#FFB800"
                      strokeWidth="2"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-12 h-12 mb-2"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <rect
                      x="12"
                      y="8"
                      width="40"
                      height="48"
                      rx="2"
                      fill="#007AFF"
                      stroke="#0051D5"
                      strokeWidth="2"
                    />
                    <path d="M12 20h40" stroke="#0051D5" strokeWidth="2" />
                  </svg>
                )}
                <span className="text-xs text-center">{key}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
    openWindow('finder', 'Finder', finderContent)
  }

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{
        backgroundImage: 'url(/background.jpg',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
      }}
    >
      <MenuBar />

      {/* Desktop Icons */}
      <div
        className="absolute inset-0"
        style={{ paddingTop: isMobile ? '32px' : '24px', zIndex: 10 }}
      >
        {Object.keys(portfolio).map((key) => {
          const item = portfolio[key]
          return (
            <DesktopIcon
              key={key}
              name={key}
              isFolder={item.isFolder}
              position={iconPositions[key]}
              onDrag={(pos) =>
                updateIconPosition(key, {
                  x: Math.max(
                    10,
                    Math.min(pos.x, window.innerWidth - (isMobile ? 70 : 90))
                  ),
                  y: Math.max(
                    isMobile ? 32 : 24,
                    Math.min(pos.y, window.innerHeight - (isMobile ? 100 : 120))
                  ),
                })
              }
              onDoubleClick={() => handleIconDoubleClick(key)}
            />
          )
        })}
      </div>

      {/* Desktop Widgets */}
      <div
        className="absolute inset-0"
        style={{ paddingTop: isMobile ? '32px' : '24px', zIndex: 5 }}
      >
        <DesktopWidget
          id="clock"
          position={widgetPositions.clock}
          onDrag={(pos) => updateWidgetPosition('clock', pos)}
        >
          <ClockWidget />
        </DesktopWidget>
        <DesktopWidget
          id="systemStats"
          position={widgetPositions.systemStats}
          onDrag={(pos) => updateWidgetPosition('systemStats', pos)}
        >
          <SystemStatsWidget />
        </DesktopWidget>
      </div>

      {/* Windows */}
      {windows.map((window) => {
        if (window.id === 'terminal') {
          return (
            <TerminalWindow
              key={window.id}
              onClose={() => closeWindow(window.id)}
              onMinimize={() => minimizeWindow(window.id)}
              isFocused={window.isFocused}
              onFocus={() => focusWindow(window.id)}
              position={window.position}
              size={window.size}
              onDrag={(pos) => updateWindowPosition(window.id, pos)}
              onResize={(size) => updateWindowSize(window.id, size)}
            />
          )
        }
        return (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            content={window.content}
            position={window.position}
            size={window.size}
            isMinimized={window.isMinimized}
            isFocused={window.isFocused}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
            onDrag={(pos) => updateWindowPosition(window.id, pos)}
            onResize={(size) => updateWindowSize(window.id, size)}
          />
        )
      })}

      <Dock
        onTerminalClick={handleTerminalClick}
        onFinderClick={handleFinderClick}
      />
    </div>
  )
}
