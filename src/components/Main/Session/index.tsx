import { useSortTimeAndDate } from "@/store/useSortTimeAndDate";
import { ISession } from "@/types/sessions.type";
import { AnimatePresence } from "motion/react";
import { HeaderTable } from "./HeaderTable";
import { PaginationData } from "./PaginationData";

type Props = {
  paginatedData: ISession[];
};

export const Session = ({ paginatedData }: Props) => {
  const { isSort } = useSortTimeAndDate();

  const paginationDataSort = [...paginatedData].sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

  return (
    <div className="mt-4 border border-[#e8eaec] border-b-0 rounded-xl rounded-b-none">
      <HeaderTable />

      <div className="h-[730px] overflow-y-scroll">
        <AnimatePresence mode="popLayout">
          {isSort
            ? // Сортировка по дате и времени
              paginationDataSort.map((elem, index) => <PaginationData elem={elem} index={index} />)
            : // Обычный вывод
              paginatedData.map((elem, index) => <PaginationData elem={elem} index={index} />)}
        </AnimatePresence>
      </div>
    </div>
  );
};
