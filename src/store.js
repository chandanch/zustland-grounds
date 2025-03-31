import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "Task 1" }],
});

export const useStore = create(store);
