// pages/admin.tsx
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type LichKham = {
  id: number;
  hoTen: string;
  soDienThoai: string;
  ngayKham: string;
  trieuChung: string;
};

export default function AdminPage() {
  const [lichKham, setLichKham] = useState<LichKham[]>([]);

  // ⚠️ Tạm thời dữ liệu giả lập — sau sẽ thay bằng Supabase fetch
  useEffect(() => {
    const fakeData: LichKham[] = [
      {
        id: 1,
        hoTen: "Nguyễn Văn A",
        soDienThoai: "0912345678",
        ngayKham: "2025-05-26",
        trieuChung: "Sốt, đau đầu",
      },
      {
        id: 2,
        hoTen: "Trần Thị B",
        soDienThoai: "0987654321",
        ngayKham: "2025-05-27",
        trieuChung: "Khó thở, ho",
      },
    ];
    setLichKham(fakeData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🩺 Quản trị: Danh sách đặt lịch khám</h1>
      <Card>
        <CardContent className="overflow-x-auto p-4">
          <table className="w-full border-collapse border text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-2 py-1">#</th>
                <th className="border px-2 py-1">Họ tên</th>
                <th className="border px-2 py-1">SĐT</th>
                <th className="border px-2 py-1">Ngày khám</th>
                <th className="border px-2 py-1">Triệu chứng</th>
              </tr>
            </thead>
            <tbody>
              {lichKham.map((lk) => (
                <tr key={lk.id}>
                  <td className="border px-2 py-1">{lk.id}</td>
                  <td className="border px-2 py-1">{lk.hoTen}</td>
                  <td className="border px-2 py-1">{lk.soDienThoai}</td>
                  <td className="border px-2 py-1">{lk.ngayKham}</td>
                  <td className="border px-2 py-1">{lk.trieuChung}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
