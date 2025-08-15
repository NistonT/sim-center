import { ITEMS_PER_PAGE } from "@/constants/itemsPerPage.constants";
import { ISession } from "@/types/sessions.type";
import { create } from "zustand";

interface IPagination {
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;

  allData: ISession[];
  setAllData: (data: ISession[]) => void;

  paginatedData: ISession[];
  totalPages: number;
}

export const usePaginationStore = create<IPagination>((set, get) => ({
  currentPage: 1,
  itemsPerPage: ITEMS_PER_PAGE,
  allData: [],

  setAllData: (data) => set({ allData: data }),

  setCurrentPage: (page) => set({ currentPage: page }),

  get totalPages() {
    const { allData, itemsPerPage } = get();
    return Math.ceil(allData.length / itemsPerPage);
  },

  get paginatedData() {
    const { allData, currentPage, itemsPerPage } = get();
    const startIndex = (currentPage - 1) * itemsPerPage;
    return allData.slice(startIndex, startIndex + itemsPerPage);
  },
}));
