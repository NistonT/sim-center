import logo from "@/assets/svg/icon.svg";

export const Logo = () => {
  return (
    <div className="flex gap-3.5 items-center py-5 px-10">
      <img src={logo} alt="logo" />
      <div className="font-manropeExtraBold font-extrabold text-2xl leading-7 tracking-normal align-middle">СИМ КАРТА</div>
    </div>
  );
};
