# Castle Defender Webapp

A web-based tower defense game built with Go and Gin for the backend, and JavaScript for the game logic.

## Features

- Menu, Tutorial, Game, and Game Over pages
- Real-time tower defense gameplay in the browser
- Multiple tower types: Standard, Rapid, Sniper
- Enemy waves with different types: Default, Fast, Tank
- Canvas-based rendering

## How to Run

1. Ensure you have Go installed.
2. Run `go mod tidy` to install dependencies.
3. Run `go run .` to start the server on port 8081.
4. Open a browser and go to `http://localhost:8081`.

## Navigation

- `/` : Main menu
- `/tutorial` : Tutorial page
- `/game` : Game page with canvas
- `/game-over` : Game over screen

## Game Controls

- 1-3: Select tower type
- Left click: Place tower (after selecting type)
- Right click: Cancel placement
- Esc: Quit game

## Architecture

- **Backend (Go/Gin)**: Serves HTML pages and static JS/CSS files. Handles page routing.
- **Frontend (JavaScript)**: Implements game logic, rendering, and user input on the game page.

The game state is managed client-side in JavaScript, with no server-side persistence.