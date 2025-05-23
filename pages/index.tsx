import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
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
            <form className="grid gap-4">
              <Input placeholder="Họ tên bệnh nhân" />
              <Input placeholder="Số điện thoại" type="tel" />
              <Input placeholder="Ngày khám (yyyy-mm-dd)" type="date" />
              <Textarea placeholder="Triệu chứng / Ghi chú" />
              <Button type="submit" className="w-fit">Gửi yêu cầu</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Liên hệ</h2>
            <p>📞 1900 123 456</p>
            <p>🏥 123 Đường Sức Khỏe, TP. AI</p>
            <p>✉️ quany91@benhvien.vn</p>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-blue-900 text-white text-center p-4 mt-10">
        <p>© 2025 Bệnh viện Quân y 91. All rights reserved.</p>
      </footer>
    </div>
  );
}
