// components/ui/Navbar.tsx
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm px-4 py-3 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold flex items-center gap-2">
        🏥 Quân y 91
      </Link>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl font-bold"
        >
          ☰
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:gap-4 w-full md:w-auto mt-3 md:mt-0`}
      >
        <Link href="/" className="block md:inline-block hover:underline">
          🏠 Trang chủ
        </Link>

        {/* Dropdown */}
        <div className="relative group">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="block md:inline-block hover:underline"
          >
            ⚙️ Quản trị ▾
          </button>
          <div
            className={`${
              dropdownOpen ? "block" : "hidden"
            } absolute md:absolute bg-white shadow-md mt-2 rounded-md border w-48 z-10`}
          >
            <Link
              href="/admin"
              className="block px-4 py-2 hover:bg-gray-100 border-b"
            >
              📋 Danh sách lịch khám
            </Link>
            <Link
              href="/them-bac-si"
              className="block px-4 py-2 hover:bg-gray-100 border-b"
            >
              ➕ Thêm bác sĩ
            </Link>
            <Link
              href="/caidat"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              ⚙️ Cài đặt hệ thống
            </Link>
          </div>
        </div>

        <Link href="/login" className="block md:inline-block hover:underline">
          🔐 Đăng nhập
        </Link>
      </div>
    </nav>
  );
}
