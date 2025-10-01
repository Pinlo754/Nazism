"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2, AlertCircle, Expand, Shrink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai"

interface Message {
  id: string
  content: string
  sender: 'user' | 'ai'
  timestamp: Date
  modelUsed?: string
}

interface AIChatboxProps {
  className?: string
}

const AIChatbox = ({ className = "" }: AIChatboxProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Xin chào! Tôi là AI Assistant được trang bị Gemini AI, chuyên về lịch sử Chủ nghĩa Quốc xã. Bạn có thể hỏi tôi về bất kỳ điều gì liên quan đến chủ đề này và tôi sẽ cung cấp thông tin chi tiết, chính xác.',
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [apiStatus, setApiStatus] = useState<'checking' | 'configured' | 'not-configured'>('checking')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Check API key status on mount
    const checkApiStatus = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY
      if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
        setApiStatus('not-configured')
        return
      }
      
      try {
        // Test API connectivity with a simple request
        const genAI = new GoogleGenerativeAI(API_KEY)
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })
        
        // Simple test prompt
        const result = await model.generateContent("Test")
        const response = await result.response
        
        if (response.text()) {
          console.log('✅ API test successful with gemini-2.5-flash')
          setApiStatus('configured')
        } else {
          console.warn('API test returned empty response')
          setApiStatus('not-configured')
        }
      } catch (error) {
        console.error('API test failed:', error)
        setApiStatus('not-configured')
      }
    }
    
    checkApiStatus()
  }, [])

  // Test API connectivity and find working model
  const testAPIConnectivity = async () => {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY
    if (!apiKey) {
      console.log('❌ No API key found')
      return
    }

    console.log('🔍 Testing API connectivity...')
    const genAI = new GoogleGenerativeAI(apiKey)
    const modelsToTest = [
      "gemini-2.5-flash",
      "gemini-2.5-pro",
      "gemini-2.0-flash",
      "gemini-2.0-flash-001",
      "gemini-2.5-flash-preview-05-20",
      "gemini-2.5-pro-preview-06-05",
      "gemini-1.5-flash-latest",
      "gemini-1.5-flash", 
      "gemini-1.5-pro-latest",
      "gemini-1.5-pro",
      "gemini-pro"
    ]
    
    for (const modelName of modelsToTest) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName })
        const result = await model.generateContent("Hi")
        const response = await result.response
        if (response.text()) {
          console.log(`✅ Model ${modelName} is working`)
          return modelName // Return first working model
        }
      } catch (error) {
        console.log(`❌ Model ${modelName} failed:`, error)
      }
    }
    console.log('❌ No working models found')
    return null
  }

  useEffect(() => {
    // Check API key status on mount
    const checkApiStatus = () => {
      const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY
      if (!API_KEY) {
        setApiStatus('not-configured')
      } else {
        setApiStatus('configured')
      }
    }
    
    checkApiStatus()
  }, [])

  // Call Gemini AI API using Google SDK
  const callGeminiAPI = async (userMessage: string): Promise<{text: string, modelUsed: string}> => {
    try {
      const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY
      if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
        throw new Error('API_KEY_NOT_CONFIGURED')
      }

      // Initialize Gemini AI
      const genAI = new GoogleGenerativeAI(API_KEY)
      
      // Try different models in order of preference
      const models = [
        "gemini-2.5-flash",
        "gemini-2.5-pro", 
        "gemini-2.0-flash",
        "gemini-2.0-flash-001",
        "gemini-2.5-flash-preview-05-20",
        "gemini-2.5-pro-preview-06-05",
        "gemini-1.5-flash-latest",
        "gemini-1.5-flash",
        "gemini-1.5-pro-latest", 
        "gemini-1.5-pro",
        "gemini-pro"
      ]

      const prompt = `Bạn là một chuyên gia lịch sử về Chủ nghĩa Quốc xã và Holocaust. Hãy trả lời câu hỏi sau một cách chi tiết, chính xác và có tính giáo dục. Câu trả lời nên bằng tiếng Việt và tập trung vào khía cạnh lịch sử, giáo dục.

Ngữ cảnh: Website này là về lịch sử Chủ nghĩa Quốc xã từ 1919-1945, bao gồm các phần Timeline, Atrocities, Analysis và References.

Câu hỏi của người dùng: ${userMessage}

Hãy trả lời một cách:
- Chi tiết nhưng dễ hiểu
- Có tính giáo dục cao
- Đề cập đến các sự kiện, nhân vật, địa điểm cụ thể
- Kết nối với bài học lịch sử
- Độ dài khoảng 150-300 từ`

      for (const modelName of models) {
        try {
          console.log(`Trying model: ${modelName}`)
          
          const model = genAI.getGenerativeModel({ 
            model: modelName,
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 2048,
            },
            safetySettings: [
              {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
              },
              {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
              },
              {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
              },
              {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
              }
            ]
          })

          const result = await model.generateContent(prompt)
          const response = await result.response
          const text = response.text()

          if (text && text.trim()) {
            console.log(`✅ Successfully got response from: ${modelName}`)
            return { text, modelUsed: modelName }
          } else {
            console.warn(`Empty response from: ${modelName}`)
            continue
          }
        } catch (modelError) {
          console.error(`Error with model ${modelName}:`, modelError)
          
          // Log detailed error information
          if (modelError instanceof Error) {
            console.error(`Error message: ${modelError.message}`)
            console.error(`Error stack: ${modelError.stack}`)
          }
          
          continue // Try next model
        }
      }

      throw new Error('All models failed to generate response')
    } catch (error) {
      console.error('Gemini AI Error:', error)
      
      // Handle specific API key error
      if (error instanceof Error && error.message === 'API_KEY_NOT_CONFIGURED') {
        throw new Error('API_KEY_SETUP_REQUIRED')
      }
      
      // Fallback to predefined responses
      return { text: getFallbackResponse(userMessage), modelUsed: 'local-fallback' }
    }
  }

  // Fallback responses khi API không khả dụng
  const getFallbackResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('hitler') || message.includes('adolf')) {
      return 'Adolf Hitler (1889-1945) là thủ lĩnh của Đảng Quốc xã Đức và Trùm phát xít từ 1933-1945. Ông sinh ra tại Áo, từng là họa sĩ thất bại trước khi gia nhập chính trị. Hitler chịu trách nhiệm chính về Holocaust và Thế chiến II ở châu Âu, dẫn đến cái chết của hàng chục triệu người.'
    }
    
    if (message.includes('holocaust') || message.includes('diệt chủng')) {
      return 'Holocaust là cuộc diệt chủng có hệ thống của khoảng 6 triệu người Do Thái và hàng triệu người khác do chế độ Nazi thực hiện từ 1941-1945. Đây là một trong những tội ác chống lại nhân loại nghiêm trọng nhất trong lịch sử, được thực hiện thông qua mạng lưới các trại tập trung và trại diệt chủng khắp châu Âu.'
    }
    
    if (message.includes('auschwitz') || message.includes('trại tập trung')) {
      return 'Auschwitz-Birkenau là phức hợp trại tập trung và diệt chủng lớn nhất của Nazi, nằm ở Ba Lan. Khoảng 1.1 triệu người đã thiệt mạng tại đây từ 1940-1945, chủ yếu là người Do Thái. Auschwitz đã trở thành biểu tượng của Holocaust và là bài học về tầm quan trọng của việc "Never Again".'
    }
    
    return 'Tôi đang gặp sự cố kết nối với AI. Bạn có thể khám phá thêm thông tin chi tiết trong các phần Timeline, Atrocities, Analysis và References trên website này. Hãy thử hỏi lại sau hoặc duyệt qua các nội dung có sẵn để tìm hiểu thêm về lịch sử Chủ nghĩa Quốc xã.'
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentInput = inputValue
    setInputValue('')
    setIsTyping(true)
    setError(null)

    try {
      // Call Gemini AI API
      const aiResponse = await callGeminiAPI(currentInput)
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse.text,
        sender: 'ai',
        timestamp: new Date(),
        modelUsed: aiResponse.modelUsed
      }
      
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error getting AI response:', error)
      
      if (error instanceof Error && error.message === 'API_KEY_SETUP_REQUIRED') {
        setError('🔑 Cần cấu hình API key - Xem hướng dẫn bên dưới')
        
        // Add setup instruction message
        const setupResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: `🚀 **Cách kích hoạt Gemini AI:**

1. Truy cập: https://aistudio.google.com/app/apikey
2. Tạo API key mới (miễn phí)
3. Thêm vào file .env.local:
   \`NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here\`
4. Restart server và thử lại

💡 **Hiện tại:** Sử dụng knowledge base có sẵn để trả lời câu hỏi của bạn.`,
          sender: 'ai',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, setupResponse])
      } else {
        setError('Có lỗi xảy ra khi kết nối với AI. Đang sử dụng knowledge base có sẵn.')
        
        // Add fallback response
        const fallbackResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: getFallbackResponse(currentInput),
          sender: 'ai',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, fallbackResponse])
      }
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const toggleChatbox = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
    setIsExpanded(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
    setIsMinimized(false)
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay for expanded mode */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsExpanded(false)}
              />
            )}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className={`mb-4 ${isExpanded ? 'fixed inset-4 z-50' : ''}`}
            >
            <Card className={`shadow-2xl border-primary/20 ${
              isExpanded 
                ? 'w-full h-full flex flex-col' 
                : isMinimized 
                  ? 'w-80 h-16' 
                  : 'w-80 h-96'
            }`}>
              {/* Header */}
              <CardHeader className="bg-primary text-primary-foreground p-3 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5" />
                    <span className="font-semibold text-sm">AI Assistant</span>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        apiStatus === 'configured' 
                          ? 'bg-green-600 text-white' 
                          : apiStatus === 'not-configured'
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-600 text-white'
                      }`}
                    >
                      {apiStatus === 'configured' ? 'Gemini AI' : apiStatus === 'not-configured' ? 'Local Mode' : 'Checking...'}
                    </Badge>
                    {apiStatus === 'configured' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={testAPIConnectivity}
                        className="h-6 w-6 p-0 hover:bg-primary-foreground/20"
                        title="Test API Connection"
                      >
                        🔍
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleExpand}
                      className="h-8 w-8 p-0 hover:bg-primary-foreground/20"
                      title={isExpanded ? "Thu nhỏ" : "Mở rộng"}
                    >
                      {isExpanded ? <Shrink className="h-4 w-4" /> : <Expand className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleMinimize}
                      className="h-8 w-8 p-0 hover:bg-primary-foreground/20"
                    >
                      {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleChatbox}
                      className="h-8 w-8 p-0 hover:bg-primary-foreground/20"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              {!isMinimized && (
                <CardContent className={`p-0 flex flex-col ${
                  isExpanded ? 'flex-1' : 'h-80'
                }`}>
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {/* Error message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center"
                      >
                        <Alert className="bg-red-50 border-red-200 text-red-800 max-w-[90%]">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription className="text-sm">
                            {error}
                          </AlertDescription>
                        </Alert>
                      </motion.div>
                    )}

                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex gap-2 ${
                          isExpanded ? 'max-w-[80%]' : 'max-w-[70%]'
                        } ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                            message.sender === 'user' ? 'bg-primary' : 'bg-slate-600'
                          }`}>
                            {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                          </div>
                          <div className={`px-3 py-2 rounded-lg text-sm ${
                            message.sender === 'user' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-slate-100 text-slate-900'
                          }`}>
                            {message.content}
                            {message.modelUsed && message.sender === 'ai' && (
                              <div className="text-xs opacity-70 mt-1">
                                ✨ Powered by {message.modelUsed}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Typing indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="flex gap-2 max-w-[70%]">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-white text-sm">
                            <Bot className="h-4 w-4" />
                          </div>
                          <div className="px-3 py-2 rounded-lg text-sm bg-slate-100 text-slate-900">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <div className="border-t p-3">
                    <div className="flex gap-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Hỏi AI về lịch sử Nazi..."
                        className="flex-1 text-sm"
                        disabled={isTyping}
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        size="sm"
                        className="px-3"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-center">
                      {apiStatus === 'configured' 
                        ? 'Được hỗ trợ bởi Gemini AI - Thông tin chính xác & chi tiết'
                        : apiStatus === 'not-configured'
                        ? '🔧 Cấu hình API key để sử dụng Gemini AI'
                        : 'Đang kiểm tra trạng thái AI...'
                      }
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Chat toggle button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={toggleChatbox}
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 relative"
        >
          <MessageCircle className="h-6 w-6" />
          {!isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            >
              <span className="text-xs text-white font-bold">!</span>
            </motion.div>
          )}
        </Button>
      </motion.div>
    </div>
  )
}

export default AIChatbox