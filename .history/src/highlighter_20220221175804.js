import React, { useState } from 'react';
import './highlight.css';

//https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection
// https://medium.com/unprogrammer/a-simple-text-highlighting-component-with-react-e9f7a3c1791a

//thanks for the provider and @Saeed Rastgar my friend to assist the in the CSS part.
export default function Highlighter() {
  {
    let ghasem = 1;
  }
  const [highlightedText, setHighlightedText] = useState(
    'highlighted text will be shown here!'
  );
  let ghasemAgeCHanger = () => {
    return ghasem + 1;
  };
  let extractTheText = () => {
    //e.preventDefault();
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
            (document.onmouseup = () => {
              console.log('dostet Daram');
              extractTheText();
            })
          }
          <img
            className="img-holder"
            src="https://pfrias.couragecompanion.eu/storage/m/_v2/213604778138275840/4f8b684e5-e9314a/vlyvkRQwb3ew/u8hVvH5l5IFvha9MQyXCzPOYLo2SXG3bqIpv6vBg.png"
          ></img>
          <div className="margin-top-zero txt">
            Here is react text highlighter with hook and use state, I could't
            store the highlightedText in the state the point was
            e.preventDefault(), now the state is get updated and the app is
            super simple to use and understand if you have any question just
            email : aprin.farbod@gmail.com.
          </div>
          {ghasemAgeCHanger(ghasem)}
          {/* {ghasem} */}
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
//document , mouse up
// let doit = () => {
//   let sosis = (document.onmouseup = () => {
//     // console.log(window.getSelection().toString());
//     return window.getSelection().toString();
//   });
//   console.log(sosis);
//   return sosis;
// };
