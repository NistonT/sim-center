import { IGroup } from "./group.type";
import { IRoom } from "./room.type";
import { IStatus } from "./status.type";
import { IType } from "./type.type";
import { IUser } from "./user.type";

export interface ISession {
  id: number;
  rooms: IRoom[];
  groups: IGroup[];
  users: IUser[];
  type: IType;
  status: IStatus;
  module: string;
  start: string;
  end: string;
}
