import { IRoom } from "@/types/room.type";

type Props = {
  rooms: IRoom[];
};

export const Rooms = ({ rooms }: Props) => {
  return (
    <div className="font-manropeMedium font-medium text-[15px] text-[#2f3144]">
      {rooms.length === 0 ? (
        "—"
      ) : rooms.some((room) => room.name.trim().split(/\s+/).length > 3) ? (
        rooms.map((room, index) => <div key={room.id || index}>{room.name.trim()}</div>)
      ) : (
        <div className="grid grid-cols-3 gap-1">
          {rooms.map((room) => {
            const name = room.name.trim();
            const alreadyHasPrefix = /^комната/i.test(name);
            const displayName = alreadyHasPrefix ? name : /^\d+$/.test(name) ? `Комната ${name}` : name;

            return <div key={room.id}>{displayName}</div>;
          })}
        </div>
      )}
    </div>
  );
};
