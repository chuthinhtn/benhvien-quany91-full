// components/ui/Navbar.tsx
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">🏥 Quân y 91</div>

      <div className="relative group">
        <button
          onClick={() => setOpen(!open)}
          className="text-blue-600 font-semibold flex items-center gap-1"
        >
          📋 Quản trị ▾
        </button>

        {/* Dropdown menu */}
        <div
          className={`absolute top-full left-0 mt-2 w-40 bg-white border rounded shadow transition-opacity ${
            open ? "block" : "hidden"
          } group-hover:block`}
        >
          <Link href="/admin">
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Trang Admin</div>
          </Link>
          <Link href="/login">
            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Đăng nhập</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

