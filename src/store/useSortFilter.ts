import { create } from "zustand";

interface ISortFilter {
  isSortFilter: boolean;
  setSortFilter: (value: boolean) => void;
}

export const useSortFilter = create<ISortFilter>((set) => ({
  isSortFilter: false,
  setSortFilter: (value) => set({ isSortFilter: value }),
}));
