import Down from "@/assets/svg/Down.svg";
import { ISession } from "@/types/sessions.type";
import { formatDateRange } from "@/utils/formatTime";
import { AnimatePresence, m } from "motion/react";
type Props = {
  paginatedData: ISession[];
};

export const Session = ({ paginatedData }: Props) => {
  return (
    <div className="mt-4 border border-[#e8eaec] border-b-0 rounded-xl rounded-b-none">
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

      <div className="max-h-[730px] overflow-y-scroll">
        <AnimatePresence mode="popLayout">
          {paginatedData.map((elem, index) => (
            <m.div
              key={elem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              className={`grid grid-cols-[1fr_1fr_3fr_1fr_2fr_1fr] gap-4 p-4 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              } border-b border-gray-200`}
            >
              <div className="font-manropeMedium font-medium text-[15px] leading-6 tracking-normal text-[#2f3144] whitespace-nowrap">
                {formatDateRange(elem.start, elem.end)}
              </div>

              <div className="relative">
                <div
                  className={`absolute left-2/5 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 text-[13px] rounded-2xl text-center
                ${
                  elem.status.name === "planned"
                    ? "bg-[#afbff5]"
                    : elem.status.name === "completed"
                    ? "bg-[#91c893]"
                    : elem.status.name === "canceled"
                    ? "bg-[#c89193]"
                    : "bg-gray-200"
                } text-[#2f3144] font-medium`}
                >
                  {elem.status.name === "planned"
                    ? "Запланировано"
                    : elem.status.name === "completed"
                    ? "Завершено"
                    : elem.status.name === "canceled"
                    ? "Отменено"
                    : "Неизвестно"}
                </div>
              </div>

              <div className="font-manropeMedium font-medium text-[15px] text-[#2f3144]">{elem.module}</div>

              <div className="font-manropeMedium font-medium text-[15px] text-[#2f3144]">
                {elem.type.name === "accreditation"
                  ? "Аккредитация"
                  : elem.type.name === "lesson"
                  ? "Урок"
                  : elem.type.name === "examination"
                  ? "Экзамен"
                  : elem.type.name}
              </div>

              <div className="font-manropeMedium font-medium text-[15px] text-[#2f3144]">
                {elem.rooms.length === 0 ? (
                  "—"
                ) : elem.rooms.some((room) => room.name.trim().split(/\s+/).length > 3) ? (
                  elem.rooms.map((room, index) => <div key={room.id || index}>{room.name.trim()}</div>)
                ) : (
                  <div className="grid grid-cols-3 gap-1">
                    {elem.rooms.map((room) => {
                      const name = room.name.trim();
                      const alreadyHasPrefix = /^комната|аудитория|кабинет|room|hall/i.test(name);
                      const displayName = alreadyHasPrefix ? name : /^\d+$/.test(name) ? `Комната ${name}` : name;

                      return <div key={room.id}>{displayName}</div>;
                    })}
                  </div>
                )}
              </div>

              <div className="font-manropeMedium font-medium text-[15px] text-[#2f3144]">
                {elem.groups.map((group) => (
                  <div key={group.id}>{group.name.replace("Группа", "").trim()}</div>
                ))}
              </div>
            </m.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
