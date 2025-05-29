// lib/store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type LichKham = {
  hoTen: string;
  soDienThoai: string;
  ngayKham: string;
  trieuChung: string;
};

type LichKhamStore = {
  danhSach: LichKham[];
  themLich: (lich: LichKham) => void;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
};

export const useLichKhamStore = create<LichKhamStore>()(
  persist(
    (set) => ({
      danhSach: [],
      themLich: (lich) =>
        set((state) => ({
          danhSach: [...state.danhSach, lich],
        })),
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: "lich-kham-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
