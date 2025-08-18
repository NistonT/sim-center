import { useSession } from "@/hooks/useSession";
import { ISession } from "@/types/sessions.type";
import { AnimatePresence } from "motion/react";
import { HeaderTable } from "./HeaderTable";
import { PaginationData } from "./PaginationData";

type Props = {
  paginatedData: ISession[];
};

export const Session = ({ paginatedData }: Props) => {
  const { isSort, isSortFilter, paginationDataSort, paginationFilterSort, paginationDataAndFilterSort } = useSession(paginatedData);

  return (
    <div className="mt-4 border border-[#e8eaec] border-b-0 rounded-xl rounded-b-none">
      <HeaderTable />

      <div className="h-[730px] overflow-y-scroll">
        <AnimatePresence mode="popLayout">
          {isSort && isSortFilter
            ? // Сортировка по "дате и времени" и по алфавиту названия модуля
              paginationDataAndFilterSort.map((elem, index) => <PaginationData key={elem.id} elem={elem} index={index} />)
            : isSort && !isSortFilter
            ? // Сортировка по "дате и времени"
              paginationDataSort.map((elem, index) => <PaginationData key={elem.id} elem={elem} index={index} />)
            : !isSort && isSortFilter
            ? // Сортировка по алфавиту названия модуля
              paginationFilterSort.map((elem, index) => <PaginationData key={elem.id} elem={elem} index={index} />)
            : // Обычный вывод
              paginatedData.map((elem, index) => <PaginationData key={elem.id} elem={elem} index={index} />)}
        </AnimatePresence>
      </div>
    </div>
  );
};
