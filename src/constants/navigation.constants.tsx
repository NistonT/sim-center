import { DASHBOARD_PAGES } from "@/config/pages-url.config";

import Archive from "@/assets/svg/Archive.svg";
import CalendarBlank from "@/assets/svg/CalendarBlank.svg";
import Door from "@/assets/svg/Door.svg";
import GraduationCap from "@/assets/svg/GraduationCap.svg";
import Icons from "@/assets/svg/Icons.svg";
import Setting from "@/assets/svg/Setting.svg";
import Student from "@/assets/svg/Student.svg";
import UserList from "@/assets/svg/UserList.svg";

export interface INavigationRouter {
  logo: string;
  name: string;
  href: string;
  active?: boolean;
}

export const navigation: INavigationRouter[] = [
  {
    logo: CalendarBlank,
    name: "Расписание",
    href: DASHBOARD_PAGES.SCHEDULE,
  },
  {
    logo: GraduationCap,
    name: "Учебные сессии",
    href: DASHBOARD_PAGES.TRAINING_SESSIONS,
    active: true,
  },
  {
    logo: Door,
    name: "Список комнат",
    href: DASHBOARD_PAGES.LIST_OF_ROOMS,
  },
  {
    logo: UserList,
    name: "Пользователи",
    href: DASHBOARD_PAGES.USERS,
  },
  {
    logo: Student,
    name: "Учебные группы",
    href: DASHBOARD_PAGES.STUDY_GROUPS,
  },
  {
    logo: Icons,
    name: "Список устройств",
    href: DASHBOARD_PAGES.LIST_OF_DEVICES,
  },
  {
    logo: Setting,
    name: "Настройки системы",
    href: DASHBOARD_PAGES.SYSTEM_SETTINGS,
  },
  {
    logo: Archive,
    name: "Архив",
    href: DASHBOARD_PAGES.ARCHIVE,
  },
];
