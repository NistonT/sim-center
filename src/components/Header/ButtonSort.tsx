import Filter from "@/assets/svg/filter.svg";

// Кнопка для сортировки

export const ButtonSort = () => {
  return (
    <div className="inline-flex rounded-xl bg-gray-50 p-2.5">
      <button type="button" className="flex items-center justify-center w-6 h-6">
        <img src={Filter} alt="Filter" className="w-5 h-5" />
      </button>
    </div>
  );
};
