import React, { useState, useEffect } from 'react';
import './highlight.css';

//https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection
// https://medium.com/unprogrammer/a-simple-text-highlighting-component-with-react-e9f7a3c1791a
//thanks for the provider and @Saeed Rastgar my friend to assist the in the CSS part.

export default function Highlighter() {
  const [highlightedText, setHighlightedText] = useState(
    'highlighted text will be shown here!'
  );
  useEffect(() => {
    // give permission to run this part on the client side
    const saveSelection = () => {
      setHighlightedText(window.getSelection().toString());
    };
    document.addEventListener('mouseup', saveSelection);
    return () => document.removeEventListener('mouseup', saveSelection);
  }, []);

  return (
    <>
      <section className="card">
        <div>
          <image
            className="img-holder"
            src="https://pfrias.couragecompanion.eu/storage/m/_v2/213604778138275840/4f8b684e5-e9314a/vlyvkRQwb3ew/u8hVvH5l5IFvha9MQyXCzPOYLo2SXG3bqIpv6vBg.png"
          ></image>
          <div className="margin-top-zero txt">
            Here is react text highlighter with hook and use state, I could't
            store the highlightedText in the state the point was, now the state
            is get updated and the app is super simple to use and understand if
            you have any question just email : aprin.farbod@gmail.com.
          </div>
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
