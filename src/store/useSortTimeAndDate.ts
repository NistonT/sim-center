import { create } from "zustand";

interface ISortTimeAndDate {
  isSort: boolean;
  setIsSort: (value: boolean) => void;
}

export const useSortTimeAndDate = create<ISortTimeAndDate>((set) => ({
  isSort: false,
  setIsSort: (value) => set({ isSort: value }),
}));
