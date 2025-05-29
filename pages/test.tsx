// pages/test.tsx
import { useState } from "react";
import { supabase } from "@/lib/supabase"; // giữ nguyên nếu đúng đường dẫn

export default function TestPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.from("lich_kham").insert([
      {
        ho_ten: name,
        so_dien_thoai: phone,
        ngay_kham: new Date().toISOString().split("T")[0], // hôm nay
        trieu_chung: "Test from Vercel",
      },
    ]);

    if (error) {
      console.error("❌ Lỗi:", error);
      setResult("❌ Lỗi: " + error.message);
    } else {
      console.log("✅ Thành công:", data);
      setResult("✅ Thành công! Xem Supabase.");
    }

    setName("");
    setPhone("");
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>🧪 Test Đặt lịch từ Vercel</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input placeholder="Họ tên" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="SĐT" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Đặt lịch test</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}
