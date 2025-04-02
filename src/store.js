import { create } from "zustand";

const store = (set) => ({
  tasks: [
    { title: "Task 1", state: "PLANNED" },
    { title: "Task 2", state: "PLANNED" },
  ],
});

export const useStore = create(store);
