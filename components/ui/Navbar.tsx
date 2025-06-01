import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Image src="/logo-91.png" alt="Logo" width={40} height={40} />
        <span className="font-bold text-lg text-red-600">Quân y 91</span>
      </div>

      <div className="space-x-4">
        <Link href="/">🏠 Trang chủ</Link>
        <div className="relative inline-block">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            📋 Quản trị ▾
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
              <Link href="/admin">
                <p className="px-4 py-2 hover:bg-gray-100">Trang admin</p>
              </Link>
              <Link href="/login">
                <p className="px-4 py-2 hover:bg-gray-100">Đăng nhập</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
