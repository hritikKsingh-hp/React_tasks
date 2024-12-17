import React from "react";
import UseStateHook from "./UseStateHook";
import UseEffectHook from "./UseEffectHook";
import Component1 from "./UseContextHooks";
import UseReducerHook from "./UseReducerHook";
import UseRefHook from "./UseRefHook";
import CustomHooks from "./CustomHooks";

export default function App() {
  return (
    <>
      <div>
        <h1>hello! Welcome to react hooks</h1>
        <hr />
        <h1>useState Hook</h1>
        <hr />
        <UseStateHook/>
        <hr />
        <h1>useEffect Hook</h1>
        <UseEffectHook/>
        <hr />
        <h1>useContext Hook</h1>
        <Component1/>
        <hr />
        <h1>useReducer Hook</h1>
        <UseReducerHook/>
        <hr />
        <h1>useRef Hook</h1>
        <UseRefHook/>
        <hr />
        <h1>Custom Hooks</h1>
        <CustomHooks/>
      </div>
    </>
  );
}
