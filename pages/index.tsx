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
   <div className="max-w-screen-md mx-auto p-4 md:p-8">
  <Navbar />
  
  <h1 className="text-3xl font-bold mb-4 mt-6 text-center">🏥 Bệnh viện Quân y 91</h1>
  <p className="mb-6 text-center">Chăm sóc sức khỏe bằng cả trái tim ❤️</p>

  <h2 className="text-xl font-semibold mb-2">Đặt lịch khám</h2>
  <form
    onSubmit={handleSubmit}
    className="grid grid-cols-1 md:grid-cols-3 gap-4"
  >
    <input className="border p-2 rounded" placeholder="Họ tên" />
    <input className="border p-2 rounded" placeholder="SĐT" />
    <input className="border p-2 rounded md:col-span-3" placeholder="Triệu chứng" />
    <button className="bg-blue-600 text-white px-4 py-2 rounded md:col-span-3">
      Gửi yêu cầu
    </button>
  </form>
</div>
  );
}
