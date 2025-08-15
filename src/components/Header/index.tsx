import Filter from "@/assets/svg/filter.svg";
import Icon_left from "@/assets/svg/Icon_Left.svg";
import Search from "@/assets/svg/search.svg";
import { X } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { useState } from "react";

type Props = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

export const Header = ({ searchTerm, onSearchChange }: Props) => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const TYPES = [
    { id: "lesson", name: "Урок" },
    { id: "examination", name: "Экзамен" },
    { id: "accreditation", name: "Аккредитация" },
  ];

  return (
    <>
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
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
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
            <button
              onClick={() => setIsModal(true)}
              type="button"
              className="font-manropeExtraBold font-extrabold text-[15px] leading-6 tracking-normal align-middle"
            >
              Создать
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isModal && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setIsModal(false)}
          >
            <m.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h2 className="text-xl font-manropeExtraBold text-[#2f3144]">Создать учебную сессию</h2>
                <button onClick={() => setIsModal(false)} className="w-6 h-6">
                  <X />
                </button>
              </div>

              <form className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-manropeMedium text-sm text-[#2f3144] mb-2">Дата начала</label>
                    <input
                      type="datetime-local"
                      name="start"
                      className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3761f3]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-manropeMedium text-sm text-[#2f3144] mb-2">Дата окончания</label>
                    <input
                      type="datetime-local"
                      name="end"
                      className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3761f3]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-manropeMedium text-sm text-[#2f3144] mb-2">Название учебного модуля</label>
                  <input
                    type="text"
                    name="module"
                    placeholder="Введите название"
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3761f3]"
                    required
                  />
                </div>

                <div>
                  <label className="block font-manropeMedium text-sm text-[#2f3144] mb-2">Тип сессии</label>
                  <select
                    name="type"
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3761f3]"
                  >
                    {TYPES.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-manropeMedium text-sm text-[#2f3144] mb-2">Комнаты</label>

                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      placeholder="Введите название комнаты"
                      className="flex-1 p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3761f3]"
                    />
                    <button type="button" className="px-4 py-2 bg-[#3761f3] text-white rounded-lg text-sm hover:bg-[#2a50d0]">
                      Добавить
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block font-manropeMedium text-sm text-[#2f3144] mb-2">Группы</label>

                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      placeholder="Введите название группы"
                      className="flex-1 p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3761f3]"
                    />
                    <button type="button" className="px-4 py-2 bg-[#3761f3] text-white rounded-lg text-sm hover:bg-[#2a50d0]">
                      Добавить
                    </button>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModal(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg font-manropeMedium text-sm hover:bg-gray-50"
                  >
                    Отмена
                  </button>
                  <button type="submit" className="px-6 py-2 bg-[#3761f3] text-white rounded-lg font-manropeMedium text-sm hover:bg-[#2a50d0]">
                    Создать
                  </button>
                </div>
              </form>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};
