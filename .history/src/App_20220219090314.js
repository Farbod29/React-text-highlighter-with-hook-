// import './App.css';
// import Highlighter from './highlighter';
// function App() {
//   return (
//     <div className="App">
//       <Highlighter />
//     </div>
//   );
// }
// https://stackoverflow.com/questions/38810767/how-can-you-get-highlighted-text-window-getselection-in-reactjs
import React, { useEffect, useState } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment:
        'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence.She oppose at thrown desire of no..',
    };
    this.onClickMakeBold = this.onClickMakeBold.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickMakeBold}>Bold</button>
        <div>
          <textarea ref="textarea">{this.state.comment}</textarea>
        </div>
      </div>
    );
  }

  onClickMakeBold() {
    console.log(getSelectionText());
    event.preventDefault();
  }
}
function getSelectionText() {
  var text = '';
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != 'Control') {
    text = document.selection.createRange().text;
  } else {
    alert('no');
  }
  return text;
}

// React.render(<TextArea />, document.getElementById('container'));
export default App;
