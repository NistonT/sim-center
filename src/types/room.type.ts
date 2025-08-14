import { IResponsible } from "./responsible.type";

export interface IRoom {
  id: number;
  name: string;
  devices: [];
  responsible: IResponsible;
  description: string;
  address: string;
  is_active: boolean;
}
