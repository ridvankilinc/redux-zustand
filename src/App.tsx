import AddTodo from "./AddTodo";
import { Counter } from "./redux/features/counter/Counter";
import { useGetPokemonByNameQuery } from "./redux/services/pokemon";
import { useTodosStore } from "./zustand/todos";
import { shallow } from "zustand/shallow";

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  // zustand

  const { removeTodo, todos } = useTodosStore(
    (state) => ({
      todos: state.todos,
      removeTodo: state.removeTodo,
      // fetchTodos: state.fetchTodos,
    }),
    shallow
  );
  // fetchTodos();

  console.log("todos" + todos);

  return (
    <div className="flex h-screen justify-center items-center bg-gray-300">
      <div className=" flex flex-1 justify-center items-center ">
        <Counter />
      </div>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <div className="flex flex-col gap-4">
            <h3 className="text-center">{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 justify-center items-center flex-col gap-4">
        {todos.length === 0 && <div>Hic todo eklememeissin</div>}
        {todos.map((todo, key) => (
          <div>
            {todo.title} <br />
            {todo.completed ? "Tamamlandi" : "Bekliyor"}
            <br />
            <button onClick={() => removeTodo(key)}>Sil</button>
          </div>
        ))}

        <AddTodo />
      </div>
    </div>
  );
}

export default App;
