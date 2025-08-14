import { Container } from "./components/Container";
import { Header } from "./components/Header";

import { Panel } from "./components/Main/Panel";

import data from "@/data/data1.json";
import { formatDateRange } from "./utils/formatTime";

import Down from "@/assets/svg/Down.svg";
import { useState } from "react";

const ITEMS_PER_PAGE = 11;

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const dataSession = data.sessions.filter((session, index, self) => self.findIndex((s) => s.id === session.id) === index);

  const totalPages = Math.ceil(dataSession.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const dataPagination = dataSession.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const visiblePages = 4;
    const ellipsis = (
      <span key="dots" className="w-10 h-10 flex items-center justify-center text-sm text-gray-500">
        ...
      </span>
    );

    pages.push(
      <button
        key={1}
        onClick={() => goToPage(1)}
        className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium
        ${currentPage === 1 ? "bg-blue-600 text-white" : "hover:bg-gray-200"}
      `}
      >
        1
      </button>,
    );

    if (totalPages <= visiblePages + 1) {
      for (let i = 2; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium
            ${currentPage === i ? "bg-blue-600 text-white" : "hover:bg-gray-200"}
          `}
          >
            {i}
          </button>,
        );
      }
    } else {
      let start = Math.max(2, currentPage - 2);
      let end = start + visiblePages - 1;

      if (end >= totalPages) {
        end = totalPages - 1;
        start = Math.max(2, end - visiblePages + 1);
      }

      if (start > 2) {
        pages.push(ellipsis);
      }

      for (let i = start; i <= end; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium
            ${currentPage === i ? "bg-blue-600 text-white" : "hover:bg-gray-200"}
          `}
          >
            {i}
          </button>,
        );
      }

      if (end < totalPages - 1) {
        pages.push(ellipsis);
      }

      pages.push(
        <button
          key={totalPages}
          onClick={() => goToPage(totalPages)}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium
          ${currentPage === totalPages ? "bg-blue-600 text-white" : "hover:bg-gray-200"}
        `}
        >
          {totalPages}
        </button>,
      );
    }

    return pages;
  };

  return (
    <Container>
      <div className="flex w-full">
        <Panel />
        <div className="bg-main w-full">
          <div className="bg-white py-4 px-6 rounded-xl m-2">
            <Header />

            <div className="mt-4 border border-[#e8eaec]">
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
                    {formatDateRange(elem.start, elem.end)} {elem.id}
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
                      <div key={group.id}>{group.name.replace("Группа", "").trim()}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-6 mb-4">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-10 h-10 flex items-center justify-center rounded-full
                  ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200"}
                `}
              >
                AA
              </button>

              {renderPageNumbers()}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 flex items-center justify-center rounded-full
                  ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200"}
                `}
              >
                B
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
