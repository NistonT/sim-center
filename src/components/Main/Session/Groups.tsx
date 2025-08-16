import { IGroup } from "@/types/group.type";

type Props = {
  groups: IGroup[];
};

export const Groups = ({ groups }: Props) => {
  return (
    <div className="font-manropeMedium font-medium text-[15px] text-[#2f3144]">
      {groups.map((group) => (
        <div key={group.id}>{group.name.replace("Группа", "").trim()}</div>
      ))}
    </div>
  );
};
