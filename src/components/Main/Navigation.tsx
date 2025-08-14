import { navigation } from "@/constants/navigation.constants";
import { Link } from "../Link";

export const Navigation = () => {
  return (
    <div className="flex flex-col gap-1 px-3">
      {navigation.map((link) => (
        <Link active={link.active} logo={link.logo} href={link.href} name={link.name} />
      ))}
    </div>
  );
};
