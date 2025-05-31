// components/Navbar.tsx
export default function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 md:hidden z-50">
      <a href="/" className="text-center text-sm text-blue-700">🏠 Trang chủ</a>
      <a href="/admin" className="text-center text-sm text-gray-700">📋 Quản trị</a>
      <a href="/login" className="text-center text-sm text-gray-700">🔐 Đăng nhập</a>
    </div>
  );
}
