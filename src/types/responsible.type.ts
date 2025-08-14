import { IRole } from "./role.type";

export interface IResponsible {
  id: number;
  role: IRole;
  groups: [];
  login: string;
  name: string;
  email: string;
  is_active: boolean;
}
