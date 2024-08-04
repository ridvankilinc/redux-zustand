import { useTodosStore } from "./zustand/todos";

export default function AddTodo() {
  const { addTodo, setTitle, setCompleted, title, completed } = useTodosStore();

  const submitHandle = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo({
      title,
      completed,
    });
  };

  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo"
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        {completed ? "Tamamlandi" : "Bekliyor"}
      </label>
      <br />
      <button type="submit">Ekle</button>
    </form>
  );
}
