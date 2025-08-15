import { IResponsible } from "./responsible.type";

export interface IRoom {
  id: number;
  name: string;
  devices: { id: number; name: string }[];
  responsible: IResponsible | null;
  description: string;
  address: string;
  is_active: boolean;
}
