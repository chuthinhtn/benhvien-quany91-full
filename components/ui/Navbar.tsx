// components/ui/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white border-b px-4 py-2 shadow-md">
      {/* Logo bên trái */}
      <div className="flex items-center space-x-2">
        <Image src="/logo-91.png" alt="Logo" width={40} height={40} />
        <span className="font-bold text-lg text-red-600">Quân y 91</span>
      </div>

      {/* Menu bên phải */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="text-blue-600 font-semibold"
        >
          📋 Quản trị ▾
        </button>
        {open && (
          <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-40 z-50">
            <Link href="/admin">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Trang admin</p>
            </Link>
            <Link href="/lich-kham">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Danh sách lịch khám</p>
            </Link>
            <Link href="/login">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Đăng nhập</p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
