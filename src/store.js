import { create } from "zustand";

const store = (set) => ({
  tasks: [
    { title: "Task 1", state: "PLANNED" },
    { title: "Task 2", state: "ONGOING" },
  ],
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })),
  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),

  updateTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { ...task, title, state } : task
      ),
    })),
});

export const useStore = create(store);
