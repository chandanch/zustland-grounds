import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "Task 1", state: "PLANNED" }],
});

export const useStore = create(store);
