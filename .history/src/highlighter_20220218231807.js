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
      Count: {count}
      {/* <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button> */}
      <div
        style={{
          padding: '0px 10px',
          height: '100vw',
          width: '48vw',
          margin: '20px',
          borderRadius: '12px',
          backgroundColor: '#D3D3D3',
          inline: true,
          fontColor: 'red',
          display: 'inline-block',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <img
          style={{
            height: '30vw',
            width: '40vw',
            position: 'absolute',
            border: '2px solid',
            borderColor: '#ffff',
            left: 30,
            top: 20,
          }}
          src="https://pfrias.couragecompanion.eu/storage/m/_v2/213604778138275840/4f8b684e5-e9314a/vlyvkRQwb3ew/u8hVvH5l5IFvha9MQyXCzPOYLo2SXG3bqIpv6vBg.png"
        ></img>
        <div
          style={{
            // textBox1
            padding: '0px 10px',
            backgroundColor: '#F5F5F5',
            height: '40vw',
            width: '40vw',
            left: '5vw',
            top: '40vw',
            borderRadius: '12px',
            position: 'absolute',
            fontSize: '12px',
            textAlign: 'left',
          }}
        >
          Note that React may still need to render that specific component again
          before bailing out. That shouldn’t be a concern because React won’t
          unnecessarily go “deeper” into the tree. If you’re doing expensive
          calculations while rendering, you can optimize them with useMemo.
        </div>
        <div
          style={{
            // textBox
            padding: '0px 10px',
            backgroundColor: '#ADD8E6',
            height: '20vw',
            width: '38vw',
            left: '5vw',
            top: '68vw',
            borderRadius: '3px',
            position: 'absolute',
          }}
        />
        <div // parent of button
          style={{
            top: '500',
            position: 'absolute',
            bottom: '2vw',
            left: '22vw',
            right: '1vw',
            width: '23vw',
          }}
        >
          <button
            style={{
              padding: '10px',
              borderRadius: '8px',
              height: '46px',
              width: '128px',
            }}
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
