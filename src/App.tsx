import { Counter } from "./redux/features/counter/Counter";
import { CounterZustand } from "./zustand/Counter";

function App() {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-300">
      <div className=" flex flex-1 justify-center items-center ">
        <Counter />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <CounterZustand />
      </div>
    </div>
  );
}

export default App;
