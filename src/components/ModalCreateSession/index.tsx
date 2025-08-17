import { TYPES } from "@/constants/typesSession.constants";
import { useModalCreateSession } from "@/store/useModalCreateSession";
import { X } from "lucide-react";
import { AnimatePresence, m } from "motion/react";

// Переделать модальное окно

export const ModalCreateSession = () => {
  const { isModal, setIsModal } = useModalCreateSession();

  return (
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
            className="bg-white rounded-xl max-w-xl w-full mx-4 max-h-screen overflow-y-auto"
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
                  <label className="block font-manropeMedium text-[15px] text-[#2f3144] mb-2">Дата начала</label>
                  <input type="datetime-local" className="w-full p-3 border border-gray-300 rounded-lg text-[13px]" required />
                </div>
                <div>
                  <label className="block font-manropeMedium text-[15px] text-[#2f3144] mb-2">Дата окончания</label>
                  <input type="datetime-local" className="w-full p-3 border border-gray-300 rounded-lg text-[13px]" required />
                </div>
              </div>

              <div>
                <label className="block font-manropeMedium text-[15px] text-[#2f3144] mb-2">Название учебного модуля</label>
                <input type="text" placeholder="Введите название" className="w-full p-3 border border-gray-300 rounded-lg text-[13px]" required />
              </div>

              <div>
                <label className="block font-manropeMedium text-[15px] text-[#2f3144] mb-2">Тип сессии</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg text-[13px]">
                  {TYPES.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-manropeMedium text-[15px] text-[#2f3144] mb-2">Комнаты</label>

                <div className="mt-2 flex gap-2">
                  <input type="text" placeholder="Введите название комнаты" className="flex-1 p-3 border border-gray-300 rounded-lg text-[13px]" />
                  <button type="button" className="px-4 py-2 bg-[#3761f3] text-white rounded-lg text-sm hover:bg-[#2a50d0]">
                    Добавить
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-manropeMedium text-[15px] text-[#2f3144] mb-2">Группы</label>

                <div className="mt-2 flex gap-2">
                  <input type="text" placeholder="Введите название группы" className="flex-1 p-3 border border-gray-300 rounded-lg text-[13px]" />
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
  );
};
