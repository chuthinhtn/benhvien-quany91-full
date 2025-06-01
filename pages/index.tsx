// pages/index.tsx
import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
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
        trieu_chung: note,
        ngay_kham: new Date().toISOString().split("T")[0],
      },
    ]);
    if (error) setResult("❌ Lỗi: " + error.message);
    else setResult("✅ Gửi thành công! Đã lưu lịch khám.");
    setName(""); setPhone(""); setNote("");
  };

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto p-4 space-y-6 text-gray-900">
        <h1 className="text-3xl font-bold flex items-center">
          🏥 Bệnh viện Quân y 91
        </h1>
        <p>Sứ mệnh: Chăm sóc sức khỏe bằng cả trái tim ❤️</p>

        <section>
          <h2 className="text-xl font-semibold">Giới thiệu</h2>
          <p>
            Bệnh viện Quân y 91 là nơi hội tụ đội ngũ bác sĩ giỏi, tận tâm và công nghệ tiên tiến nhất.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Đặt lịch khám</h2>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
            <input placeholder="Họ tên" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded flex-1" />
            <input placeholder="SĐT" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-2 rounded flex-1" />
            <input placeholder="Triệu chứng" value={note} onChange={(e) => setNote(e.target.value)} className="border p-2 rounded flex-1" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Gửi yêu cầu</button>
          </form>
          {result && <p className="mt-2">{result}</p>}
        </section>

        <section>
          <h2 className="text-xl font-semibold">Liên hệ</h2>
          <p>📞 <a href="tel:0976608179" className="underline">0976 608 179</a></p>
          <p>🏥 Phường Ba Hàng, TP. Phổ Yên</p>
          <p>✉️ <a href="mailto:benhvienqy91qk1@gmail.com" className="underline">benhvienqy91qk1@gmail.com</a></p>
        </section>

        <footer className="pt-4 border-t">
          © 2025 Bệnh viện Quân y 91. All rights reserved.
        </footer>
      </main>
    </>
  );
}
