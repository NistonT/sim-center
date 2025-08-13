import Down from "@/assets/svg/Down.svg";
import Flag from "@/assets/svg/flag.svg";

export const Language = () => {
  return (
    <div className="flex justify-between items-center p-3 border border-gray-200 rounded-2xl mt-1 hover:bg-gray-100 transition-all duration-100">
      <div className="flex gap-3 items-center">
        <div>
          <img src={Flag} alt="flag" />
        </div>
        <div className="font-manropeExtraBold font-extrabold text-[15px] leading-6 tracking-normal align-middle">Русский</div>
      </div>
      <div>
        <img src={Down} alt="down" />
      </div>
    </div>
  );
};
