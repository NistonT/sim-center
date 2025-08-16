import { useModalCreateSession } from "@/store/useModalCreateSession";

// Кнопка для открытия модального окна

export const ButtonCreateSession = () => {
  const { setIsModal } = useModalCreateSession();

  return (
    <div className="bg-[#3761f3] text-white py-2.5 px-6 rounded-xl">
      <button
        onClick={() => setIsModal(true)}
        type="button"
        className="font-manropeExtraBold font-extrabold text-[15px] leading-6 tracking-normal align-middle"
      >
        Создать
      </button>
    </div>
  );
};
