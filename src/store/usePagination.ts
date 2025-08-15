import { ITEMS_PER_PAGE } from "@/constants/itemsPerPage.constants";
import { ISession } from "@/types/sessions.type";
import { create } from "zustand";

type SortOrder = "desc" | "asc";
interface IPagination {
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;

  allData: ISession[];
  setAllData: (data: ISession[]) => void;

  paginatedData: ISession[];
  totalPages: number;

  sortOrder: SortOrder;
  toggleSortOrder: () => void;
  sortedAndPaginatedData: ISession[];
}

export const usePaginationStore = create<IPagination>((set, get) => ({
  currentPage: 1,
  itemsPerPage: ITEMS_PER_PAGE,
  allData: [],
  sortOrder: "desc",
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

  toggleSortOrder: () =>
    set((state) => ({
      sortOrder: state.sortOrder === "desc" ? "asc" : "desc",
    })),

  get sortedAndPaginatedData() {
    const { allData, sortOrder, currentPage, itemsPerPage } = get();

    const sorted = [...allData].sort((a, b) => {
      const aTime = new Date(a.start).getTime();
      const bTime = new Date(b.start).getTime();
      return sortOrder === "desc" ? bTime - aTime : aTime - bTime; // desc = новые сначала
    });

    const start = (currentPage - 1) * itemsPerPage;
    return sorted.slice(start, start + itemsPerPage);
  },
}));
