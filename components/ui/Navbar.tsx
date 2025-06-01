<nav className="flex flex-wrap items-center justify-between bg-white border-b px-4 py-2 shadow-md">
  {/* logo */}
  <div className="flex items-center space-x-2">
    <Image src="/logo-91.png" alt="Logo" width={40} height={40} />
    <span className="font-bold text-lg text-red-600">Quân y 91</span>
  </div>

  {/* dropdown hiển thị trên mobile và desktop */}
  <div className="relative w-full md:w-auto mt-2 md:mt-0">
    <button
      onClick={() => setOpen(!open)}
      className="text-blue-600 font-semibold w-full md:w-auto"
    >
      📋 Quản trị ▾
    </button>
    {open && (
      <div className="bg-white border rounded mt-1 shadow-md md:absolute md:right-0 z-50 w-full md:w-48">
        <Link href="/admin">
          <p className="px-4 py-2 hover:bg-gray-100">Trang admin</p>
        </Link>
        <Link href="/lich-kham">
          <p className="px-4 py-2 hover:bg-gray-100">Lịch khám</p>
        </Link>
        <Link href="/login">
          <p className="px-4 py-2 hover:bg-gray-100">Đăng nhập</p>
        </Link>
      </div>
    )}
  </div>
</nav>
