import { create } from "zustand";

// Todo item type definition
interface Todo {
  id?: number;
  title?: string;
  completed?: boolean;
}

// Store state type definition
interface TodosState {
  todos: Todo[];
  title: string;
  completed: boolean;
  fetchTodos: () => void;
  setTitle: (title: string) => void;
  setCompleted: (completed: boolean) => void;
  resetTodoForm: () => void;
  addTodo: (item: Todo) => void;
  removeTodo: (id: number) => void;
}

export const useTodosStore = create<TodosState>((set, get) => ({
  todos: [
    {
      title: "Todo 1",
      completed: false,
    },
  ],
  title: "",
  completed: false,
  fetchTodos: async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    set({ todos: await result.json() });
  },
  setTitle: (title) =>
    set((state) => ({
      ...state,
      title,
    })),
  setCompleted: (completed) =>
    set((state) => ({
      ...state,
      completed,
    })),
  resetTodoForm: () =>
    set((state) => ({
      ...state,
      title: "",
      completed: false,
    })),
  addTodo: (item: Todo) => {
    set((state) => ({
      todos: [...state.todos, item],
    }));
    get().resetTodoForm();
  },
  removeTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((_, key) => id !== key),
    })),
}));
