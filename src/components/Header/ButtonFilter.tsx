import Icon_left from "@/assets/svg/Icon_Left.svg";

// Кнопка для фильтра

export const ButtonFilter = () => {
  return (
    <div className="inline-flex rounded-xl bg-gray-50 p-2.5">
      <button type="button" className="flex items-center justify-center w-6 h-6">
        <img src={Icon_left} alt="Icon_left" className="w-5 h-5" />
      </button>
    </div>
  );
};
