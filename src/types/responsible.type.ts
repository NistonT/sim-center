import { IGroup } from "./group.type";
import { IRole } from "./role.type";

export interface IResponsible {
  id: number;
  role: IRole;
  groups: IGroup[];
  login: string;
  name: string;
  email: string;
  is_active: boolean;
}
