import { ISession } from "@/types/sessions.type";
import { AnimatePresence, m } from "motion/react";
import { Groups } from "./Groups";
import { HeaderTable } from "./HeaderTable";
import { NameModule } from "./NameModule";
import { Rooms } from "./Rooms";
import { Status } from "./Status";
import { TimeAndDate } from "./TimeAndDate";
import { TypeSession } from "./TypeSession";

type Props = {
  paginatedData: ISession[];
};

export const Session = ({ paginatedData }: Props) => {
  return (
    <div className="mt-4 border border-[#e8eaec] border-b-0 rounded-xl rounded-b-none">
      {/* Название колонок */}
      <HeaderTable />

      <div className="h-[730px] overflow-y-scroll">
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
              } border-b border-gray-200 hover:bg-gray-200`}
            >
              {/* Дата и время */}
              <TimeAndDate start={elem.start} end={elem.end} />

              {/* Статус */}
              <Status name={elem.status.name} />

              {/* Название модуля */}
              <NameModule module={elem.module} />

              {/* Тип сессии */}
              <TypeSession name={elem.type.name} />

              {/* Комнаты */}
              <Rooms rooms={elem.rooms} />

              {/* Группы */}
              <Groups groups={elem.groups} />
            </m.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
