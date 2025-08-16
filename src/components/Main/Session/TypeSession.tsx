type Props = {
  name: string;
};

// Тип сессии

export const TypeSession = ({ name }: Props) => {
  return (
    <div className="font-manropeMedium font-medium text-[15px] text-[#2f3144]">
      {name === "accreditation" ? "Аккредитация" : name === "lesson" ? "Урок" : name === "examination" ? "Экзамен" : name}
    </div>
  );
};
