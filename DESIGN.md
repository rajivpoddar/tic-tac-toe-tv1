# Tic Tac Toe Game Design

## Architectural Design
The application will follow a standard React component-based architecture. It will consist of functional components and use hooks for managing state and side effects.

## Component Structure
- App: The main component that renders the ScoreBoard, GameBoard, and GameControls.
- ScoreBoard: Displays the scores for both players.
- GameBoard: Renders the 3x3 grid of tiles.
- Tile: Represents each square in the game board.
- GameControls: Contains buttons for resetting the game and undoing the last move.

## State Management
The state of the game will be managed using the useState hook. The App component will hold the state for the game board, player turns, and scores. It will pass down the necessary state and callbacks as props to child components.

## Data Flow
Data flow will be unidirectional, from the App component down to the children. The App component will manage the game logic and update the state accordingly, which will then be passed down to the ScoreBoard, GameBoard, and GameControls components.

## Responsiveness
The application will be responsive, with CSS media queries to ensure it works well on various screen sizes.

## Testing
Testing will be done using the React Testing Library, following the Test-Driven Development (TDD) approach. Tests will be written before the implementation of the components to ensure that each component meets its specified behavior.