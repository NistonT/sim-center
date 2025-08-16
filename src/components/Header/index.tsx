import { ModalCreateSession } from "../ModalCreateSession";
import { ButtonCreateSession } from "./ButtonCreateSession";
import { ButtonFilter } from "./ButtonFilter";
import { ButtonSort } from "./ButtonSort";
import { NameHeader } from "./NameHeader";
import { SearchModule } from "./SearchModule";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        {/* Название */}
        <NameHeader />

        <div className="flex items-center gap-6">
          {/* Поисковая строка */}
          <SearchModule />

          {/* Кнопка фильтра */}
          <ButtonFilter />

          {/* Кнопка сортировки */}
          <ButtonSort />

          {/* Кнопка создания сессии */}
          <ButtonCreateSession />
        </div>
      </div>

      {/* Модальное окно для созданий сессий */}
      <ModalCreateSession />
    </>
  );
};
