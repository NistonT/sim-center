import Filter from "@/assets/svg/filter.svg";
import { useSortFilter } from "@/store/useSortFilter";

// Кнопка для сортировки

export const ButtonSort = () => {
  const { isSortFilter, setSortFilter } = useSortFilter();

  return (
    <div className={`inline-flex rounded-xl p-2.5 transition-all duration-200 ${isSortFilter ? "bg-gray-100" : "bg-gray-50 hover:bg-gray-100"}`}>
      <button onClick={() => setSortFilter(!isSortFilter)} type="button" className="flex items-center justify-center w-6 h-6">
        <img src={Filter} alt="Filter" className="w-5 h-5" />
      </button>
    </div>
  );
};
