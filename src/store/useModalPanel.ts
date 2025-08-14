import { create } from "zustand";

interface IModalPanel {
  isOpenPanel: boolean;
  setIsOpenPanel: (value: boolean) => void;
}

export const useModalPanel = create<IModalPanel>((set) => ({
  isOpenPanel: true,
  setIsOpenPanel: (value) => set({ isOpenPanel: value }),
}));
