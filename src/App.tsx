import { Container } from "./components/Container";
import { Header } from "./components/Header";

import { Panel } from "./components/Main/Panel";

import data from "@/data/data1.json";
import { formatDateRange } from "./utils/formatTime";

function App() {
  console.log(data);

  const dataSession = data.sessions.filter((session, index, self) => self.findIndex((s) => s.id === session.id) === index);

  console.log(dataSession);

  return (
    <Container>
      <div className="flex w-full">
        <Panel />
        <div className="bg-main w-full">
          <div className="bg-white py-4 px-6 rounded-xl m-2">
            <Header />

            <div className="mt-6">
              <div className="grid grid-cols-[1fr_1fr_2fr_1fr_1fr_1fr] gap-4 bg-gray-200 font-manropeExtraBold font-extrabold text-[17px] leading-7 tracking-normal py-2.5 px-4 rounded-t-xl">
                <div>Дата и время</div>
                <div>Статус</div>
                <div>Название учебного модуля</div>
                <div>Тип сессии</div>
                <div>Комната</div>
                <div>Группа</div>
              </div>

              {dataSession.map((elem, index) => (
                <div
                  key={elem.id}
                  className={`grid grid-cols-[1fr_1fr_2fr_1fr_1fr_1fr] gap-4 p-4 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  } border-b border-gray-200`}
                >
                  <div className="text-sm">{formatDateRange(elem.start, elem.end)}</div>

                  <div className="text-sm">
                    {elem.status.name === "planned"
                      ? "Запланировано"
                      : elem.status.name === "completed"
                      ? "Завершено"
                      : elem.status.name === "canceled"
                      ? "Отменено"
                      : "Неизвестно"}
                  </div>

                  <div className="text-sm">{elem.module}</div>

                  <div className="text-sm">{elem.type.name}</div>

                  <div className="flex flex-col gap-1 text-sm">
                    {elem.rooms.map((room) => (
                      <div key={room.id}>{room.name}</div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1 text-sm">
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
