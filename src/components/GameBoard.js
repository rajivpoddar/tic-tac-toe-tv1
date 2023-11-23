import React from 'react';

function GameBoard({ tiles, onTileClick }) {
  return (
    <div className='game-board'>
      {tiles.map((tile, index) => (
        <button
          key={index}
          className={`tile ${tile ? '' : 'empty'}`}
          onClick={() => {
            if (!tile) onTileClick(index);
          }}
          disabled={!!tile}
        >
          {tile}
        </button>
      ))}
    </div>
  );
}

export default GameBoard;
