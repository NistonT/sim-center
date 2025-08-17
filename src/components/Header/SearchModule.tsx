import Search from "@/assets/svg/search.svg";
import { useSearchTerm } from "@/store/useSearchTerm";

// Поисковая строка

export const SearchModule = () => {
  const { searchTerm, setSearchTerm } = useSearchTerm();

  return (
    <div className="flex items-center w-full relative max-w-[260px]">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <img src={Search} alt="Search" />
      </div>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="font-manropeMedium font-medium text-[13px] leading-5 tracking-normal py-3 pl-12 border border-gray-200 rounded-xl transition-all duration-200 hover:border-gray-400"
      />
    </div>
  );
};
