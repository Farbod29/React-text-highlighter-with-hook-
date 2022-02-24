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
      {/* <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button> */}
      <div
        style={{
          padding: '0px 10px',
          height: '400px',
          width: '50vw',
          margin: '20px',
          borderRadius: '12px',
          backgroundColor: 'gray',
          inline: true,
          fontColor: 'red',
          display: 'inline-block',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <img
          style={{
            height: '20vh',
            width: '40vw',
            position: 'absolute',
            left: 30,
            top: 20,
          }}
          src="https://pfrias.couragecompanion.eu/storage/m/_v2/213604778138275840/4f8b684e5-e9314a/vlyvkRQwb3ew/u8hVvH5l5IFvha9MQyXCzPOYLo2SXG3bqIpv6vBg.png"
        ></img>
        Content
        <div
          style={{
            position: 'absolute',
            bottom: '33vw',
            left: '24vw',
            right: '2vw',
            color: 'red',
            borderRadius: '12px',
            Hight: '100px',
            width: '100px',
          }}
        >
          {' '}
          sss{' '}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '3vw',
            left: '24vw',
            right: '2vw',
          }}
        >
          <button
            style={{ padding: '10px', borderRadius: '10px' }}
            onClick={() => setCount(12)}
          >
            {' '}
            Add Highlighted text{' '}
          </button>
        </div>
      </div>
      {doit()}
    </>
  );
}
