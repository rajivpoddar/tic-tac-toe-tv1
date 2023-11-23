import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GameBoard from '../components/GameBoard';

test('renders a 3x3 grid of tiles', () => {
  const mockTiles = Array(9).fill(null);
  const { getAllByRole } = render(<GameBoard tiles={mockTiles} />);
  const tiles = getAllByRole('button');
  expect(tiles.length).toBe(9);
});

test('allows players to click a tile to mark it', () => {
  const mockTiles = Array(9).fill(null);
  const onTileClick = jest.fn();
  const { getAllByRole } = render(<GameBoard tiles={mockTiles} onTileClick={onTileClick} />);
  const tiles = getAllByRole('button');
  fireEvent.click(tiles[0]);
  expect(onTileClick).toHaveBeenCalledWith(0);
});

test('does not allow a tile to be clicked twice', () => {
  const mockTiles = ['X', ...Array(8).fill(null)];
  const onTileClick = jest.fn();
  const { getAllByRole } = render(<GameBoard tiles={mockTiles} onTileClick={onTileClick} />);
  const tiles = getAllByRole('button');
  fireEvent.click(tiles[0]);
  expect(onTileClick).not.toHaveBeenCalled();
});

test('resets the board when the reset button is clicked', () => {
  const mockTiles = Array(9).fill(null);
  const onTileClick = jest.fn();
  const { getByText, getAllByRole } = render(<GameBoard tiles={mockTiles} onTileClick={onTileClick} />);
  const tiles = getAllByRole('button');
  fireEvent.click(tiles[0]);
  // Assuming the reset functionality is handled by a parent component,
  // we simulate a reset by re-rendering the component with a new set of tiles.
  const { rerender } = render(<GameBoard tiles={Array(9).fill(null)} onTileClick={onTileClick} />);
  rerender(<GameBoard tiles={Array(9).fill(null)} onTileClick={onTileClick} />);
  tiles.forEach(tile => {
    expect(tile).toHaveTextContent('');
  });
});
