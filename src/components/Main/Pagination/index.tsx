import Left from "@/assets/svg/Left.svg";

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

// Пагинация

export const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const visiblePages = 4;

  const safeTotalPages = isNaN(totalPages) || totalPages < 1 ? 1 : Math.floor(totalPages);
  const safeCurrentPage = Math.max(1, Math.min(currentPage, safeTotalPages));

  const goToPage = (page: number) => {
    if (page >= 1 && page <= safeTotalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const ellipsis = (
      <span
        key="dots"
        className="p-1.5 rounded-lg bg-white font-manropeMedium font-medium text-[15px] leading-6 tracking-normal w-[30px] h-[30px] text-center flex justify-center items-center text-gray-500"
      >
        ...
      </span>
    );

    pages.push(
      <button
        key={1}
        onClick={() => goToPage(1)}
        className={`p-1.5 rounded-lg bg-white font-manropeMedium font-medium text-[15px] leading-6 tracking-normal w-[30px] h-[30px] text-center flex justify-center items-center
          ${safeCurrentPage === 1 ? "text-[#3761f3] border border-[#3761f3]" : "hover:bg-[#e0e0e0]"}
        `}
      >
        1
      </button>,
    );

    if (safeTotalPages <= visiblePages + 1) {
      for (let i = 2; i <= safeTotalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`p-1.5 rounded-lg bg-white font-manropeMedium font-medium text-[15px] leading-6 tracking-normal w-[30px] h-[30px] text-center flex justify-center items-center
              ${safeCurrentPage === i ? "text-[#3761f3] border border-[#3761f3]" : "hover:bg-[#e0e0e0]"}
            `}
          >
            {i}
          </button>,
        );
      }
    } else {
      let start = Math.max(2, safeCurrentPage - 2);
      let end = start + visiblePages - 1;

      if (end >= safeTotalPages) {
        end = safeTotalPages - 1;
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
            className={`p-1.5 rounded-lg bg-white font-manropeMedium font-medium text-[15px] leading-6 tracking-normal w-[30px] h-[30px] text-center flex justify-center items-center
              ${safeCurrentPage === i ? "text-[#3761f3] border border-[#3761f3]" : "hover:bg-[#e0e0e0]"}
            `}
          >
            {i}
          </button>,
        );
      }

      if (end < safeTotalPages - 1) {
        pages.push(ellipsis);
      }

      pages.push(
        <button
          key={safeTotalPages}
          onClick={() => goToPage(safeTotalPages)}
          className={`p-1.5 rounded-lg bg-white font-manropeMedium font-medium text-[15px] leading-6 tracking-normal w-[30px] h-[30px] text-center flex justify-center items-center
            ${safeCurrentPage === safeTotalPages ? "text-[#3761f3] border border-[#3761f3]" : "hover:bg-[#e0e0e0]"}
          `}
        >
          {safeTotalPages}
        </button>,
      );
    }

    return pages;
  };

  if (safeTotalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center bg-gray-100 gap-2 py-2.5 border-b border-[#e8eaec] px-4 rounded-b-xl">
      <button
        onClick={() => goToPage(safeCurrentPage - 1)}
        disabled={safeCurrentPage === 1}
        className={`p-1.5 rounded-lg bg-white transition-all duration-300 ${safeCurrentPage === 1 ? "" : "hover:bg-[#e0e0e0]"}`}
      >
        <img src={Left} alt="prev" />
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => goToPage(safeCurrentPage + 1)}
        disabled={safeCurrentPage === safeTotalPages}
        className={`p-1.5 rounded-lg bg-white transition-all duration-300 ${safeCurrentPage === safeTotalPages ? "" : "hover:bg-[#e0e0e0]"}`}
      >
        <img className="transform rotate-180" src={Left} alt="next" />
      </button>
    </div>
  );
};
