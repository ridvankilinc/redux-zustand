import { Counter } from "./redux/features/counter/Counter";

function App() {
  return (
    <div className="flex flex-1 h-screen bg-gray-300">
      <div className=" flex justify-center items-center">
        <Counter />
      </div>
      <div className="flex flex-1">sadsa</div>
    </div>
  );
}

export default App;
