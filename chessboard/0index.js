import ReactDOM from 'react-dom';
import React from 'react';

import Board from './testing/board';
import { observe } from './testing/game';

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    document.getElementById('app')
  )
);