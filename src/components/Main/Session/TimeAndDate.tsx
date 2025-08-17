import { formatDateRange } from "@/utils/formatTime";

type Props = {
  start: string;
  end: string;
};

// Дата и время

export const TimeAndDate = ({ start, end }: Props) => {
  return (
    <>
      <div className="font-manropeMedium font-medium text-[15px] leading-6 tracking-normal text-[#2f3144] whitespace-nowrap flex justify-center items-center">
        <span>{formatDateRange(start, end)}</span>
      </div>
    </>
  );
};
