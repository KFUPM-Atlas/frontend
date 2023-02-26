import { create, createStore } from "zustand";

interface Budget {
  title: string;
  amount: number;
  reason: string;
}

interface CreateEventStore {
  eventTitle: string;
  eventType: string;
  fromDate: string;
  toDate: string;
  budget: Budget[];
  setEvenTitle: (eventTitle: string) => void;
  setEventType: (eventType: string) => void;
  setFromDate: (fromDate: string) => void;
  setToDate: (toDate: string) => void;
  addBudget: (budget: Budget) => void;
  removeBudget: (budget: Budget) => void;
  clearBudget: () => void;
}

const useCreateEventStore = create<CreateEventStore>((set) => ({
  eventTitle: "",
  eventType: "",
  fromDate: "",
  toDate: "",
  budget: [],
  setEvenTitle: (eventTitle: string) => set({ eventTitle }),
  setEventType: (eventType: string) => set({ eventType }),
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
