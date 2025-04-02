import { create } from "zustand";

const store = () => ({
  tasks: [
    { title: "Task 1", state: "PLANNED" },
    { title: "Task 2", state: "ONGOING" },
  ],
});

export const useStore = create(store);
