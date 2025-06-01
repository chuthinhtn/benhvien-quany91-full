// components/ui/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logo-91.png" alt="Logo" width={40} height={40} />
        <span className="font-bold text-lg text-red-700">Quân y 91</span>
      </div>

      {/* Menu */}
      <div className="flex items-center space-x-4">
        <Link href="/" className="hover:underline">🏠 Trang chủ</Link>
        <div className="relative">
          <button
            className="hover:underline"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            📋 Quản trị ▾
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
              <Link href="/admin" className="block px-4 py-2 hover:bg-gray-100">Trang admin</Link>
              <Link href="/lich-kham" className="block px-4 py-2 hover:bg-gray-100">📋 Danh sách lịch khám</Link>
              <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">🔐 Đăng nhập</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
