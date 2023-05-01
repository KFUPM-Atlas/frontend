import create from "zustand";

interface FiltersState {
  filter: string;
  search: string;
  setFilter: (filter: string) => void;
  setSearch: (search: string) => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  filter: "",
  search: "",
  setFilter: (filter) => set(() => ({ filter: filter })),
  setSearch: (search) => set(() => ({ search: search })),
}));
