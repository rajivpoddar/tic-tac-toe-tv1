import React, { useState } from 'react';
import './App.css';
import ScoreBoard from './components/ScoreBoard';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';

function App() {
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameHistory, setGameHistory] = useState([]);
  const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null));

  const handleTileClick = (index) => {
    if (currentBoard[index] || calculateWinner(currentBoard)) return;
    const newBoard = [...currentBoard];
    newBoard[index] = currentPlayer;
    setCurrentBoard(newBoard);
    setGameHistory([...gameHistory, newBoard]);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const handleReset = () => {
    setCurrentBoard(Array(9).fill(null));
    setGameHistory([]);
  };

  const handleUndo = () => {
    if (gameHistory.length === 0) return;
    const newHistory = [...gameHistory];
    newHistory.pop();
    setCurrentBoard(newHistory[newHistory.length - 1] || Array(9).fill(null));
    setGameHistory(newHistory);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const calculateWinner = (board) => {
    // Winning combinations using the board indexes
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div className="game-container" role="grid">
      <ScoreBoard scores={scores} />
      <GameBoard tiles={currentBoard} onTileClick={handleTileClick} />
      <GameControls onReset={handleReset} onUndo={handleUndo} />
    </div>
  );
}

export default App;
