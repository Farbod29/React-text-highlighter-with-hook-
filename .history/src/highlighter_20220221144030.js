import React, { useEffect, useState } from 'react';
import './highlight.css';
//https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection
// https://medium.com/unprogrammer/a-simple-text-highlighting-component-with-react-e9f7a3c1791a

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
  var selObj = window.getSelection();
  var selectedText = selObj.toString();
  console.log(selectedText);
  let a2 = selectedText;
  console.log(a2);
  localStorage.setItem('sosis', selectedText);
  //console.log(selectedText);
  return a2;
}
// do stuff with the range

function foo2() {
  var selObj = window.getSelection();
  alert(selObj);
  var selRange = selObj.getRangeAt(0);
  // do stuff with the range
  return selRange;
}

let extractTheText = (e) => {
  e.preventDefault();
  const selectionObj = window.getSelection && window.getSelection();
  const selection = selectionObj.toString();
  console.log('selection jadid');
  console.log(selection);
};

function printHighlighted() {
  let l32 = localStorage.getItem('sosis');
  console.log('l32');
  console.log(l32);
}

// var selectionRange = saveSelection();
// console.log('selectionRange');
// console.log(selectionRange);
// console.log('foo');
// // console.log(foo());
// console.log('restoreSelection');
// console.log(restoreSelection(selectionRange));

// React.useEffect(() => {
//   // console.log('sosis');
//   // let highlight = doit();
//   // console.log(highlight);
//   // setHighlightedText(highlight);
// }, []);
export default function Highlighter() {
  const [highlightedText, setHighlightedText] = useState('hello');

  return (
    <>
      {/* <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button> */}
      <section className="card">
        <div>
          {
            (document.onmouseup = (e) => {
              // foo();
              console.log('dostet Daram');
              extractTheText(e);
            })
          }
          {/* {printHighlighted()} */}
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
        </div>
      </section>
    </>
  );
}
