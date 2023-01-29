import Script from "next/script";
import Counter from "./Counter";
import { CounterContext, CounterProvider } from "@/context/CounterContext";
import { initState } from "@/context/CounterContext";

export default function Home() {
  return (
    <>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>
          {(num: number) => (
            <div className="font-bold">Current Count: {num}</div>
          )}
        </Counter>
        {/* <Script src="public/scripts/script.js" /> */}
      </CounterProvider>
    </>
  );
}

// export async function getStaticProps(context: any) {
//   fetch("http://localhost:3000/public/script.js")
//     .then(res => res.)

//   return {
//     props: {},
//   };
// }
