# AI Chatbox Setup Guide

## 🚨 Quan trọng: Cấu hình API Key

### Bước 1: Lấy Google Gemini API Key (MIỄN PHÍ)
1. **Truy cập**: [Google AI Studio](https://aistudio.google.com/app/apikey)
2. **Đăng nhập** với tài khoản Google của bạn
3. **Tạo API key mới** (nút "Create API Key")
4. **Copy API key** đã tạo

### Bước 2: Cấu hình trong Project
1. **Mở file** `.env.local` trong thư mục root project
2. **Thay thế** `your_gemini_api_key_here` bằng API key thật:
```env
NEXT_PUBLIC_GEMINI_API_KEY=AIzaSyC_your_actual_api_key_here_replace_this
```
3. **Lưu file** và restart development server

### Bước 3: Restart Server
```bash
# Stop server (Ctrl+C) và chạy lại
npm run dev
```

## ✅ Xác nhận hoạt động
- Badge trong chatbox sẽ hiển thị **"Gemini AI"** (xanh lá) khi API hoạt động
- Badge hiển thị **"Local Mode"** (cam) khi chưa cấu hình
- AI sẽ trả lời chi tiết thay vì responses có sẵn

## 🆕 **Google Generative AI SDK**

### � **Advantages:**
- **Official SDK**: Được Google maintain chính thức
- **Type Safety**: Full TypeScript support
- **Auto Retry**: Tự động retry khi có lỗi tạm thời
- **Model Fallback**: Thử nhiều models (gemini-1.5-flash → gemini-1.5-pro → gemini-pro)
- **Better Error Handling**: Detailed error messages

### 📦 **Dependencies:**
```json
{
  "@google/generative-ai": "^0.1.3"
}
```

## 🔧 Troubleshooting

### 🚨 Model Availability
Hệ thống sẽ tự động thử các models theo thứ tự:
1. **gemini-1.5-flash** (nhanh nhất, khuyên dùng)
2. **gemini-1.5-pro** (chậm hơn nhưng chất lượng cao)
3. **gemini-pro** (fallback stable)

### 📊 Debug Information
- Mở DevTools Console để xem model nào đang được sử dụng
- Logs sẽ hiển thị: "Trying model" và "Successfully got response from"
- SDK tự động handle API endpoints và retries

### ⚡ Performance Tips
- **SDK Caching**: Responses được cache tự động
- **Connection Pooling**: Tối ưu network requests
- **Graceful Degradation**: Fallback sang local mode nếu cần

## Tính năng AI Chatbox

### 🤖 **Powered by Gemini AI**
- Sử dụng Google Gemini Pro model
- Trả lời thông minh và chi tiết về lịch sử Nazi
- Fallback system khi API không khả dụng
- Safety settings để đảm bảo nội dung phù hợp

### 💬 **Chat Features**
- Real-time conversation với AI
- Typing indicators
- Error handling và retry logic
- Responsive design
- Minimize/Maximize functionality

### 🛡️ **Safety & Content Moderation**
- Content filtering cho nội dung nhạy cảm
- Educational focus
- Historical accuracy
- Appropriate language handling

### 📚 **Knowledge Base**
AI có thể trả lời về:
- Lịch sử Adolf Hitler và lãnh đạo Nazi
- Holocaust và các trại tập trung
- Timeline sự kiện 1919-1945
- Nguyên nhân và hậu quả của chế độ Nazi
- Bài học lịch sử và ý nghĩa giáo dục
- Các nhân vật, địa điểm lịch sử quan trọng

## Troubleshooting

### API Key Issues
- Đảm bảo API key đúng format
- Kiểm tra quota sử dụng API
- Verify API key permissions

### Network Issues
- Kiểm tra kết nối internet
- Fallback responses sẽ hoạt động khi API không khả dụng

### Performance
- API response time: 2-5 giây
- Tối ưu hóa prompt cho kết quả tốt nhất
- Caching strategies sẽ được implement trong tương lai