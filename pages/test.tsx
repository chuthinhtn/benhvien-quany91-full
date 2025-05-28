// pages/test.tsx
import { useState } from "react";
import { supabase } from "@/lib/supabase";

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
        ngay_kham: new Date().toISOString().split("T")[0],
        trieu_chung: "Test từ Vercel",
      },
    ]);

    if (error) {
      console.error("❌ Lỗi:", error);
      setResult("❌ Lỗi: " + error.message);
    } else {
      setResult("✅ Thành công! Kiểm tra Supabase");
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
