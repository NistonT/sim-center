import { create } from "zustand";

interface IModalCreateSession {
  isModal: boolean;
  setIsModal: (value: boolean) => void;
}

export const useModalCreateSession = create<IModalCreateSession>((set) => ({
  isModal: false,
  setIsModal: (value) => set({ isModal: value }),
}));
