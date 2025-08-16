type Props = {
  name: string;
};

export const Status = ({ name }: Props) => {
  return (
    <div className="relative">
      <div
        className={`absolute left-2/5 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 text-[13px] rounded-2xl text-center ${
          name === "planned" ? "bg-[#afbff5]" : name === "completed" ? "bg-[#91c893]" : name === "canceled" ? "bg-[#c89193]" : "bg-gray-200"
        } text-[#2f3144] font-medium`}
      >
        {name === "planned" ? "Запланировано" : name === "completed" ? "Завершено" : name === "canceled" ? "Отменено" : "Неизвестно"}
      </div>
    </div>
  );
};
