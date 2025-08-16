import logout from "@/assets/svg/log-out.svg";

// Выход

export const Logout = () => {
  return (
    <div className="mt-[18px] flex gap-3 items-center py-3 pl-3 pr-12 rounded-2xl transition-all duration-100 cursor-pointer hover:bg-gray-100">
      <div>
        <img src={logout} alt="logout" />
      </div>
      <div className="font-manropeExtraBold font-extrabold text-[15px] leading-6 tracking-normal align-middle">Выйти</div>
    </div>
  );
};
