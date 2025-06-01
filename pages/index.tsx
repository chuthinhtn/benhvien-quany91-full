import Navbar from "@/components/ui/Navbar";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [result, setResult] = useState("");

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
    setResult(error ? "❌ Lỗi: " + error.message : "✅ Đặt lịch thành công!");
    setName("");
    setPhone("");
    setNote("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Navbar /> {/* ✅ CHÈN NGAY TRÊN CÙNG */}
      <h1 className="text-3xl font-bold mt-6 mb-4">🏥 Bệnh Viện Quân y 91</h1>
      <p className="mb-4">Sứ mệnh: Chăm sóc sức khỏe bằng cả trái tim ❤️</p>

      <h2 className="text-xl font-bold mb-2">Giới thiệu</h2>
      <p className="mb-4">Bệnh viện Quân y 91 là nơi hội tụ đội ngũ bác sĩ giỏi, tận tâm và công nghệ tiên tiến nhất.</p>

      <h2 className="text-xl font-bold mb-2">Đặt lịch khám</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Họ tên bệnh nhân" className="border p-2" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Số điện thoại" className="border p-2" />
        <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Triệu chứng / Ghi chú" className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Gửi yêu cầu</button>
      </form>

      {result && <p className="mt-4">{result}</p>}
    </div>
  );
}
