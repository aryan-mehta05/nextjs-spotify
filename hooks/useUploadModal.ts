import { create } from "zustand";

interface UploadStoreModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useUploadModal = create<UploadStoreModal>((set)=> ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;