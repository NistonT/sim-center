import BM from "@/assets/svg/BM.svg";

export const Account = () => {
  return (
    <div className="flex shadow-lg gap-3 py-3 justify-center rounded-2xl">
      <div>
        <div className="font-manropeExtraBold font-extrabold text-[15px] leading-6 tracking-normal align-middle">Барнаби Мармадюк</div>
        <div className="font-manropeMedium font-medium text-[13px] leading-5 tracking-normal text-gray-800/65">Преподаватель</div>
      </div>
      <div>
        <img src={BM} alt="bm" />
      </div>
    </div>
  );
};
