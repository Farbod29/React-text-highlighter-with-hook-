import React, { useEffect, useState } from 'react';
import './highlight.css';

//https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection
// https://medium.com/unprogrammer/a-simple-text-highlighting-component-with-react-e9f7a3c1791a

//thanks for the provider and @Saeed Rastgar my friend to assist the in the CSS part.

// let doit = () => {
//   let sosis = (document.onmouseup = () => {
//     // console.log(window.getSelection().toString());
//     return window.getSelection().toString();
//   });
//   console.log(sosis);
//   return sosis;
// };

export default function Highlighter() {
  const [highlightedText, setHighlightedText] = useState('hello');
  let extractTheText = (e) => {
    e.preventDefault();
    const selectionObj = window.getSelection && window.getSelection();
    const selection = selectionObj.toString();
    console.log('selection jadid');
    console.log(selection);
    setHighlightedText(selection);
  };
  return (
    <>
      <section className="card">
        <div>
          {
            (document.onmouseup = (e) => {
              // foo();
              console.log('dostet Daram');
              extractTheText(e);
            })
          }
          <img
            className="img-holder"
            src="https://pfrias.couragecompanion.eu/storage/m/_v2/213604778138275840/4f8b684e5-e9314a/vlyvkRQwb3ew/u8hVvH5l5IFvha9MQyXCzPOYLo2SXG3bqIpv6vBg.png"
          ></img>
          <div className="margin-top-zero txt">
            Note that React may still need to render that specific component
            again before bailing out. That shouldn’t be a concern because React
            won’t unnecessarily go “deeper” into the tree. If you’re doing
            expensive calculations while rendering, you can optimize them with
            useMemo.
          </div>
          <div className="txt">{highlightedText}</div>
          <div // parent of button
          >
            <button className="btn"> Add Highlighted text </button>
          </div>
        </div>
      </section>
    </>
  );
}
