import { create } from "zustand";

interface ISearchTerm {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const useSearchTerm = create<ISearchTerm>((set) => ({
  searchTerm: "",
  setSearchTerm: (value) => set({ searchTerm: value }),
}));
