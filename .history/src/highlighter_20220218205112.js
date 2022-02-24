import React, { useEffect, useState } from 'react';

export default function Highlighter() {
  let doit = () => {
    document.onmouseup = () => {
      console.log(window.getSelection().toString());
    };
  };
  const [count, setCount] = useState(12);
  return (
    <>
      <div>
        {' '}
        Note that React may still need to render that specific component again
        before bailing out. That shouldn’t be a concern because React won’t
        unnecessarily go “deeper” into the tree. If you’re doing expensive
        calculations while rendering, you can optimize them with useMemo.
      </div>
      Count: {count}
      <button onClick={() => setCount(12)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        <div
          style={{
            padding: '0px 10px',
            position: 'fixed',
            height: '50px',
            width: '100px',
            backgroundColor: '#gF3FFF',
          }}
        >
          Content
        </div>
        Add{' '}
      </button>
      {doit()}
    </>
  );
}
