// components/ui/Navbar.tsx
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Bấm ra ngoài => đóng dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">🏥 Quân y 91</div>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="text-blue-600 font-semibold flex items-center gap-1"
        >
          📋 Quản trị ▾
        </button>

        {open && (
           <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-10">
    <Link href="/admin" className="block px-4 py-2 hover:bg-gray-100 border-b">
      🛠 Trang admin
    </Link>
    <Link href="/lich-kham" className="block px-4 py-2 hover:bg-gray-100 border-b">
      📋 Danh sách lịch khám
    </Link>
    <Link href="/thong-ke" className="block px-4 py-2 hover:bg-gray-100 border-b">
      📊 Thống kê
    </Link>
    <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
      🔐 Đăng nhập
    </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
