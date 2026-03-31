# Castle Defender Webapp

A web-based tower defense game with Go/Gin for backend routing and asset serving, combined with client-side JavaScript game logic and HTML5 canvas rendering.

## What this project is

- A full-stack prototype game for learning modern Go web development and browser game architecture.
- Supports menu, tutorial, gameplay, and game over workflows.
- Runs locally with a lightweight web server, no database required.

## Features

- Single-page style game loop in JavaScript (enemies, towers, waves)
- Tower types: Standard, Rapid, Sniper
- Enemy types: Default, Fast, Tank
- Progressive waves with increasing difficulty
- Canvas-based rendering and responsive UI controls
- Gin router serves these endpoints:
  - `/`
  - `/tutorial`
  - `/game`
  - `/game-over`

## Technology stack

- Go 1.20+ (or current stable release)
- Gin Web Framework
- HTML5/CSS3 in `templates/`
- JavaScript in `static/`

## Prerequisites

1. Go installed: https://go.dev/dl/
2. Optional: modern browser (Chrome, Edge, Firefox)

## Setup and run

```bash
cd "C:\Users\nevin\Nextcloud\School Work\CS-495\Projects\Go\Web"
go mod tidy
go run .
```

Then open `http://localhost:8080` in your browser.

## Project structure

- `main.go` - Gin server + routing
- `go.mod`, `go.sum` - dependencies
- `templates/` - HTML page templates (`menu.html`, `game.html`, etc.)
- `static/` - client JS and CSS (`game.js`, `tutorial.js`, `style.css`)

## Routes

- `/` -> Main menu
- `/tutorial` -> Tutorial page
- `/game` -> Game canvas and controls
- `/game-over` -> Summary and retry

## Game Controls

- `1`, `2`, `3`: choose tower type
- Left-click: place selected tower
- Right-click: cancel tower placement
- `Esc`: quit / return to menu

