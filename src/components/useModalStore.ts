import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  selectedOption: string;
  openModal: (option: string) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  selectedOption: "",
  openModal: (option) => set({ isOpen: true, selectedOption: option }),
  closeModal: () => set({ isOpen: false, selectedOption: "" }),
}));
