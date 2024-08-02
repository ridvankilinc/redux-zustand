import { Counter } from "./redux/features/counter/Counter";
import { useGetPokemonByNameQuery } from "./redux/services/pokemon";
import { CounterZustand } from "./zustand/Counter";

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  console.log(data);

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
      <div className="flex flex-1 justify-center items-center">
        <CounterZustand />
      </div>
    </div>
  );
}

export default App;
