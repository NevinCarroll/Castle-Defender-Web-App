# Castle Defender Webapp

A web-based tower defense game with Go/Gin for backend routing and asset serving, combined with client-side JavaScript game logic and HTML5 canvas rendering. It also allows users to make an
account and save their progress, so they can continue to play after they quit.

## What this project is

- A full-stack prototype game for learning modern Go web development and browser game architecture.
- Supports menu, tutorial, gameplay, and game over workflows.
- Runs locally with a lightweight web server, with SQLlite database.

## Features

- Single-page style game loop in JavaScript (enemies, towers, waves)
- Tower types: Standard, Rapid, Sniper
- Enemy types: Default, Fast, Tank
- Progressive waves with increasing difficulty
- Rendering and responsive UI controls
- Users can login and save their current progress
- Gin router serves these endpoints:
  - `/`
  - `/tutorial`
  - `/game`
  - `/game-over`

## Technology stack

- Go 1.20+ (or current stable release)
- Gin Web Framework
- HTML5/CSS3 
- JavaScript
- SqlLite

## Prerequisites

1. Go installed: https://go.dev/dl/
2. Web Broswer

## Setup and run

1. pull git repo

``` bash
git pull https://github.com/NevinCarroll/Castle-Defender-Web-App
```

2. In root directory of repo, download go modules

``` bash
go mod tidy
```

3. Run web app

``` bash
go run .
```

4. Then go to `http://localhost:8080` in your browser.

## Project structure

- `main.go` - Gin server + routing
- `go.mod`, `go.sum` - dependencies
- `templates/` - HTML page templates (`menu.html`, `game.html`, etc.)
- `static/` - client JS and CSS (`game.js`, `tutorial.js`, `style.css`)

## Game Controls

- `1`, `2`, `3`: choose tower type
- Left-click: place selected tower
- Right-click: cancel tower placement
- `Esc`: quit / return to menu

