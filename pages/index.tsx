import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🚀 Gửi dữ liệu lên console (tạm) – sau sẽ thay bằng Supabase
    console.log("📝 Đặt lịch:", { name, phone, date, note });

    // ✅ Tạm báo thành công (sau này sẽ là lưu DB)
    setSuccess(true);

    // Optional: reset form
    setName(""); setPhone(""); setDate(""); setNote("");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">🏥 Bệnh Viện Quân y 91</h1>
        <p className="text-sm mt-1">Sứ mệnh: Chăm sóc sức khỏe bằng cả trái tim ❤️</p>
      </header>

      <main className="p-6 grid gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Giới thiệu</h2>
            <p>
              Bệnh viện Quân y 91 là nơi hội tụ đội ngũ bác sĩ giỏi, tận tâm và công nghệ tiên tiến nhất.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Đặt lịch khám</h2>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <Input placeholder="Họ tên bệnh nhân" value={name} onChange={e => setName(e.target.value)} />
              <Input placeholder="Số điện thoại" type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
              <Input placeholder="Ngày khám (yyyy-mm-dd)" type="date" value={date} onChange={e => setDate(e.target.value)} />
              <Textarea placeholder="Triệu chứng / Ghi chú" value={note} onChange={e => setNote(e.target.value)} />
              <Button type="submit" className="w-fit">Gửi yêu cầu</Button>
            </form>
            {success && <p className="text-green-600 mt-2">✅ Đặt lịch thành công!</p>}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Liên hệ</h2>
            <p>📞 0976 608 179</p>
            <p>🏥 phường Ba Hàng, TP. Phổ Yên</p>
            <p>✉️ benhvienqy91qk1@gmail.com</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

      <footer className="bg-blue-900 text-white text-center p-4 mt-10">
        <p>© 2025 Bệnh viện Quân y 91. All rights reserved.</p>
      </footer>
    </div>
  );
}
