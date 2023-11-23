import React from 'react';

function GameControls({ onReset, onUndo }) {
  return (
    <div className='game-controls'>
      <button className='btn previous' onClick={onUndo}>Previous Step</button>
      <button className='btn reset' onClick={onReset}>Reset Board</button>
    </div>
  );
}

export default GameControls;
