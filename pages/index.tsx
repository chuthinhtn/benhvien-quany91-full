import { useState } from "react";
import Navbar from "@/components/Navbar"; // ✅ Import Navbar mới

import { supabase } from "@/lib/supabase";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("lich_kham").insert([
      {
        ho_ten: name,
        so_dien_thoai: phone,
        ngay_kham: new Date().toISOString().split("T")[0],
        trieu_chung: note,
      },
    ]);

    if (error) {
      console.error("❌", error);
      setResult("❌ " + error.message);
    } else {
      setResult("✅ Đặt lịch thành công!");
    }

    setName("");
    setPhone("");
    setNote("");
  };

  return (
    <>
      <Navbar /> {/* ✅ Thêm thanh điều hướng mới */}
      <main className="p-4 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">🏥 Bệnh Viện Quân y 91</h1>
        <p className="mb-4 text-lg">
          Sứ mệnh: Chăm sóc sức khỏe bằng cả trái tim ❤️
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Giới thiệu</h2>
        <p className="mb-4">
          Bệnh viện Quân y 91 là nơi hội tụ đội ngũ bác sĩ giỏi, tận tâm và công nghệ tiên tiến nhất.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Đặt lịch khám</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
          <input
            placeholder="Họ tên bệnh nhân"
            className="border px-2 py-1 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Số điện thoại"
            className="border px-2 py-1 rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            placeholder="Triệu chứng / Ghi chú"
            className="border px-2 py-1 rounded"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Gửi yêu cầu
          </button>
        </form>

        {result && <p className="font-semibold">{result}</p>}

        <h2 className="text-2xl font-semibold mt-6 mb-2">Liên hệ</h2>
        <p>📞 0976 608 179</p>
        <p>🏥 phường Ba Hàng, TP. Phổ Yên</p>
        <p>✉️ benhvienqy91qk1@gmail.com</p>

        <footer className="mt-10 text-sm text-gray-500">
          © 2025 Bệnh viện Quân y 91. All rights reserved.
        </footer>
      </main>
    </>
  );
}

