import { useCounter, useCounterText } from "@/context/CounterContext";
import { ReactNode } from "react";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = useCounterText();

  return (
    <div className="w-96 h-96 bg-zinc-800 text-lg m-10 p-10 mx-auto rounded-lg">
      <h1>{children(count)}</h1>
      <div>
        <button className="mx-2 text-3xl" onClick={increment}>
          +
        </button>
        <button className="text-3xl" onClick={decrement}>
          -
        </button>
      </div>
      <input type="text" onChange={handleTextInput} />
      <h2>{text}</h2>
    </div>
  );
};

export default Counter;
