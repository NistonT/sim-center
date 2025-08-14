import { Container } from "./components/Container";
import { Header } from "./components/Header";

import { Panel } from "./components/Main/Panel";

import data from "@/data/data1.json";
import { formatDateRange } from "./utils/formatTime";

import Down from "@/assets/svg/Down.svg";

function App() {
  const dataSession = data.sessions.filter((session, index, self) => self.findIndex((s) => s.id === session.id) === index);

  const dataPagination = dataSession.slice(0, 11);

  return (
    <Container>
      <div className="flex w-full">
        <Panel />
        <div className="bg-main w-full">
          <div className="bg-white py-4 px-6 rounded-xl m-2">
            <Header />

            <div className="mt-4">
              <div className="grid grid-cols-[1fr_1fr_3fr_1fr_2fr_1fr] gap-4 bg-gray-200 font-manropeExtraBold font-extrabold text-[17px] leading-7 tracking-normal py-2.5 px-4 rounded-t-xl">
                <div className="flex items-center gap-2.5">
                  <span>Дата и время</span>
                  <div>
                    <img src={Down} alt="down" />
                  </div>
                </div>
                <div>Статус</div>
                <div>Название учебного модуля</div>
                <div>Тип сессии</div>
                <div>Комната</div>
                <div>Группа</div>
              </div>

              {dataPagination.map((elem, index) => (
                <div
                  key={elem.id}
                  className={`grid grid-cols-[1fr_1fr_3fr_1fr_2fr_1fr] gap-4 p-4 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  } border-b border-gray-200`}
                >
                  <div className="font-manropeMedium font-medium text-[15px] leading-6 tracking-normal align-middle text-[#2f3144] whitespace-nowrap">
                    {formatDateRange(elem.start, elem.end)}
                  </div>

                  <div className="relative">
                    <div
                      className={`absolute left-2/5 top-1/2 -translate-x-1/2 -translate-y-1/2 font-manropeMedium font-medium text-[13px] leading-5 tracking-normal align-middle text-[#2f3144] py-1 px-3 text-center rounded-2xl ${
                        elem.status.name === "planned"
                          ? "bg-[#afbff5]"
                          : elem.status.name === "completed"
                          ? "bg-[#91c893]"
                          : elem.status.name === "canceled"
                          ? "bg-[#c89193]"
                          : ""
                      }`}
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

                  <div className="font-manropeMedium font-medium text-[15px] leading-6 tracking-normal align-middle text-[#2f3144]">
                    {elem.module}
                  </div>

                  <div className="font-manropeMedium font-medium text-[15px] leading-6 tracking-normal align-middle [leading-trim:none] text-[#2f3144]">
                    {elem.type.name === "accreditation"
                      ? "Аккредитация"
                      : elem.type.name === "lesson"
                      ? "Урок"
                      : elem.type.name === "examination"
                      ? "Экзамен"
                      : elem.type.name}
                  </div>

                  <div className="font-manropeMedium font-medium text-[15px] leading-6 tracking-normal align-middle text-[#2f3144]">
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

                  <div className="font-manropeMedium font-medium text-[15px] leading-6 tracking-normal align-middle text-[#2f3144]">
                    {elem.groups.map((group) => (
                      <div key={group.id}>{group.name}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
