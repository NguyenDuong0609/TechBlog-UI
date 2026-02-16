import { create } from 'zustand';

interface UIState {
    tocActiveId: string;
    setTocActiveId: (id: string) => void;
    // Add more UI state here as needed
}

export const useUIStore = create<UIState>((set) => ({
    tocActiveId: '',
    setTocActiveId: (id) => set({ tocActiveId: id }),
}));
