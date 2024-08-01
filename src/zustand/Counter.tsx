import useStore from "./store";

export const CounterZustand = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-5xl">Zustand</h1>
      <div className="flex gap-4">
        <button
          className="bg-green-300 px-2"
          aria-label="Increment value"
          onClick={increment}
        >
          Increment +
        </button>
        <span className="bg-white px-2">Count: {count}</span>
        <button
          className="bg-red-300 px-2"
          aria-label="Decrement value"
          onClick={decrement}
        >
          Decrement -
        </button>
      </div>
    </div>
  );
};
