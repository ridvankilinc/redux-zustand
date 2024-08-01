import { decrement, increment } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hookts";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-5xl">Redux</h1>
      <div className="flex gap-4">
        <button
          className="bg-green-300 px-2"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment +
        </button>
        <span className="bg-white px-2">Count: {count}</span>
        <button
          className="bg-red-300 px-2"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement -
        </button>
      </div>
    </div>
  );
}
