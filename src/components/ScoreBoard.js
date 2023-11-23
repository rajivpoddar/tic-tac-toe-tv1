import React from 'react';

function ScoreBoard({ scores }) {
  return (
    <div className='score-board'>
      <div className='score player-x'>
        <h2>Player X</h2>
        <div className='score-value'>{scores.xScore}</div>
      </div>
      <div className='score player-o'>
        <h2>Player O</h2>
        <div className='score-value'>{scores.oScore}</div>
      </div>
    </div>
  );
}

export default ScoreBoard;