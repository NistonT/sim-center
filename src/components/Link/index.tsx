type Props = {
  active: boolean | undefined;
  logo: string;
  href: string;
  name: string;
};

export const Link = ({ active, logo, href, name }: Props) => {
  return (
    <div
      className={`flex gap-3 items-center py-3 pl-3 pr-12 rounded-2xl transition-all duration-100 cursor-pointer ${
        active ? "text-white bg-blue-600" : "hover:bg-gray-100"
      }`}
    >
      <div>
        <img src={logo} alt={`nav-${href}`} />
      </div>
      <div className="font-manropeExtraBold font-extrabold text-[15px] leading-6 tracking-normal align-middle">{name}</div>
    </div>
  );
};
