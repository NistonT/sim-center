import { useSortFilter } from "@/store/useSortFilter";
import { useSortTimeAndDate } from "@/store/useSortTimeAndDate";
import { ISession } from "@/types/sessions.type";

export const useSession = (paginatedData: ISession[]) => {
  const { isSort } = useSortTimeAndDate();
  const { isSortFilter } = useSortFilter();

  const paginationDataSort = [...paginatedData].sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
  const paginationFilterSort = [...paginatedData].sort((a, b) => {
    const nameA = a.module;
    const nameB = b.module;

    const isAEnglish = /^[a-zA-Z]/.test(nameA.trim());
    const isBEnglish = /^[a-zA-Z]/.test(nameB.trim());

    if (isAEnglish && !isBEnglish) return -1;
    if (!isAEnglish && isBEnglish) return 1;

    return nameA.localeCompare(nameB, "ru", { sensitivity: "accent" });
  });

  const paginationDataAndFilterSort = [...paginatedData].sort((a, b) => {
    const moduleA = a.module.trim();
    const moduleB = b.module.trim();

    const isAEnglish = /^[a-zA-Z]/.test(moduleA);
    const isBEnglish = /^[a-zA-Z]/.test(moduleB);

    if (isAEnglish && !isBEnglish) return -1;
    if (!isAEnglish && isBEnglish) return 1;

    const moduleComparison = moduleA.localeCompare(moduleB, "ru", {
      sensitivity: "accent",
    });

    if (moduleComparison !== 0) {
      return moduleComparison;
    }

    return new Date(a.start).getTime() - new Date(b.start).getTime();
  });

  return { isSort, isSortFilter, paginationDataSort, paginationFilterSort, paginationDataAndFilterSort };
};
