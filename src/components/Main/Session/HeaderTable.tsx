import Down from "@/assets/svg/Down.svg";

export const HeaderTable = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr_3fr_1fr_2fr_1fr] gap-4 bg-gray-200 font-manropeExtraBold font-extrabold text-[17px] leading-7 tracking-normal py-2.5 px-4 rounded-t-xl">
      <div className="flex items-center gap-2.5 cursor-pointer">
        <span>Дата и время</span>
        <div>
          <img src={Down} alt="sort" className="transition-transform duration-200" />
        </div>
      </div>
      <div>Статус</div>
      <div>Название учебного модуля</div>
      <div>Тип сессии</div>
      <div>Комната</div>
      <div>Группа</div>
    </div>
  );
};
