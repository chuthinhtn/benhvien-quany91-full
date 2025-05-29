import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";

type LichKham = {
  id: number;
  ho_ten: string;
  so_dien_thoai: string;
  ngay_kham: string;
  trieu_chung: string;
};

export default function AdminPage() {
  const router = useRouter();
  const [ds, setDs] = useState<LichKham[]>([]);

  useEffect(() => {
    const isAuth = localStorage.getItem("admin-auth");
    if (isAuth !== "true") {
      router.push("/login");
    }

    const fetchData = async () => {
      const { data, error } = await supabase
        .from("lich_kham")
        .select("*")
        .order("id", { ascending: false });

      if (!error && data) setDs(data);
    };

    fetchData();
  }, [router]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🩺 Danh sách đặt lịch khám</h1>
      {ds.length === 0 ? (
        <p className="text-gray-500">Chưa có lịch khám nào.</p>
      ) : (
        <table className="w-full border-collapse border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-2 py-1">Họ tên</th>
              <th className="border px-2 py-1">SĐT</th>
              <th className="border px-2 py-1">Ngày khám</th>
              <th className="border px-2 py-1">Triệu chứng</th>
            </tr>
          </thead>
          <tbody>
            {ds.map((item) => (
              <tr key={item.id}>
                <td className="border px-2 py-1">{item.ho_ten}</td>
                <td className="border px-2 py-1">{item.so_dien_thoai}</td>
                <td className="border px-2 py-1">{item.ngay_kham}</td>
                <td className="border px-2 py-1">{item.trieu_chung}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
