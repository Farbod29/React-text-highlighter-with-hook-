import React, { useEffect, useState } from 'react';

export default function Highlighter() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div> this is highlighter</div>
      Count: {count}
      <button onClick={() => setCount(2)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}
