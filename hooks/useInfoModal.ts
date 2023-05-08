import { create } from 'zustand';

export interface ModalStoreInterface {
  movieId?: string;
  isOpen: boolean;
  onModal: (movieId: string) => void;
  closeModal: () => void;
}

const useInfoModal = create<ModalStoreInterface>(set => ({
  movieId: undefined,
  isOpen: false,
  onModal: (movieId: string) => set({ movieId, isOpen: true }),
  closeModal: () => set({ movieId: undefined, isOpen: false }),
}));

export default useInfoModal;
