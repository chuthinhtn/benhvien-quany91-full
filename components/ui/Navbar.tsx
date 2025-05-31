"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">
          🏥 Quân y 91
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
        <div className={`md:flex gap-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link href="/" className="block mt-2 md:mt-0 hover:text-blue-600">🏠 Trang chủ</Link>
          <Link href="/admin" className="block mt-2 md:mt-0 hover:text-blue-600">📋 Quản trị</Link>
          <Link href="/login" className="block mt-2 md:mt-0 hover:text-blue-600">🔐 Đăng nhập</Link>
        </div>
      </div>
    </nav>
  );
}
