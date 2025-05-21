"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>Counter page</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <h1>{count}</h1>
      <button>Decrement</button>
    </div>
  );
}
