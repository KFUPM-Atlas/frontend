import { create, createStore } from "zustand";

interface Budget {
  title: string;
  amount: number;
  reason: string;
}

interface CreateEventStore {
  title: string;
  description: string;
  fromDate: string;
  toDate: string;
  budget: Budget[];
  tag: string;
  posterUrl: string;
  id: string;
  building: string;
  room: string;
  setBuilding: (building: string) => void;
  setRoom: (room: string) => void;
  setId: (id: string) => void;
  setPosterUrl: (posterUrl: string) => void;
  setTitle: (eventTitle: string) => void;
  setDescription: (eventType: string) => void;
  setFromDate: (fromDate: string) => void;
  setToDate: (toDate: string) => void;
  setTag: (tag: string) => void;
  addBudget: (budget: Budget) => void;
  removeBudget: (budget: Budget) => void;
  clearBudget: () => void;
}

const useCreateEventStore = create<CreateEventStore>((set) => ({
  title: "",
  description: "",
  fromDate: "",
  toDate: "",
  budget: [],
  tag: "",
  posterUrl: "",
  id: "",
  building: "",
  room: "",
  setBuilding: (building: string) => set({ building }),
  setRoom: (room: string) => set({ room }),
  setId: (id: string) => set({ id }),
  setPosterUrl: (posterUrl: string) => set({ posterUrl }),
  setTag: (tag: string) => set({ tag }),
  setTitle: (title: string) => set({ title }),
  setDescription: (description: string) => set({ description }),
  setFromDate: (fromDate: string) => set({ fromDate }),
  setToDate: (toDate: string) => set({ toDate }),
  addBudget: (budget: Budget) =>
    set((state) => ({ budget: [...state.budget, budget] })),
  removeBudget: (budget: Budget) =>
    set((state) => ({
      budget: state.budget.filter((item) => item !== budget),
    })),
  clearBudget: () => set({ budget: [] }),
}));

export default useCreateEventStore;
