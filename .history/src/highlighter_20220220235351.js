import React, { useEffect, useState } from 'react';
import './highlight.css';
// let doit = () => {
//   let sosis = (document.onmouseup = () => {
//     // console.log(window.getSelection().toString());
//     return window.getSelection().toString();
//   });
//   console.log(sosis);
//   return sosis;
// };

function saveSelection() {
  if (window.getSelection) {
    var sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
  } else if (document.selection && document.selection.createRange) {
    return document.selection.createRange();
  }
  return null;
}
function restoreSelection(range) {
  if (range) {
    if (window.getSelection) {
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (document.selection && range.select) {
      range.select();
    }
  }
}

function foo() {
  let a1 = (document.onmouseup = () => {
    var selObj = window.getSelection();
    var selectedText = selObj.toString();
    console.log(selectedText);
    let a2 = selectedText;
    localStorage.setItem('sosis', a2);
    //console.log(selectedText);
    return a2;
  });
  // do stuff with the range
  console.log(localStorage.getItem('sosis'));
}

export default function Highlighter() {
  const [highlightedText, setHighlightedText] = useState('hello');
  var selectionRange = saveSelection();
  console.log('selectionRange');
  console.log(selectionRange);

  console.log('restoreSelection');
  console.log(restoreSelection(selectionRange));

  React.useEffect(() => {
    console.log('doit()');
    console.log('doit()');
    foo();
    // console.log('sosis');
    // let highlight = doit();
    // console.log(highlight);
    // setHighlightedText(highlight);
  }, []);

  return (
    <>
      {/* <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button> */}
      <section className="card">
        <div>
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
            <button
              className="btn"
              // onClick={() => setCount(12)}
            >
              {' '}
              Add Highlighted text{' '}
            </button>
          </div>
          {/* {console.log(foo())} */}
        </div>
      </section>
    </>
  );
}
