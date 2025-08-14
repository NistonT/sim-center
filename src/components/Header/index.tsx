import Filter from "@/assets/svg/filter.svg";
import Icon_left from "@/assets/svg/Icon_Left.svg";
import Search from "@/assets/svg/search.svg";

export const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-manropeExtraBold font-extrabold text-2xl leading-7 tracking-normal align-middle">Учебные сессии</h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center w-full relative max-w-[260px]">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img src={Search} alt="Search" />
          </div>
          <input
            type="text"
            placeholder="Поиск..."
            className="font-manropeMedium font-medium text-[13px] leading-5 tracking-normal py-3 pl-12 border border-gray-200 rounded-xl transition-all duration-200"
          />
        </div>

        <div className="inline-flex rounded-xl bg-gray-50 p-2.5">
          <button type="button" className="flex items-center justify-center w-6 h-6">
            <img src={Icon_left} alt="Icon_left" className="w-5 h-5" />
          </button>
        </div>

        <div className="inline-flex rounded-xl bg-gray-50 p-2.5">
          <button type="button" className="flex items-center justify-center w-6 h-6">
            <img src={Filter} alt="Filter" className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-[#3761f3] text-white py-2.5 px-6 rounded-xl">
          <button type="button" className="font-manropeExtraBold font-extrabold text-[15px] leading-6 tracking-normal align-middle">
            Создать
          </button>
        </div>
      </div>
    </div>
  );
};
