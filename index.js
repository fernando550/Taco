import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app';
// import FileUpload from './components/fileupload';
// import Board from './testing/board';
// import { observe } from './testing/game';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// observe(knightPosition =>
//   ReactDOM.render(
//     <Board knightPosition={knightPosition} />,
//     document.getElementById('app')
//   )
// );