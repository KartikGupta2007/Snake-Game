# 🐍 Snake Game

![Snake Game](assets/Image.png)

## 🎥 Video Demonstration

**[Watch the Full Project Demo (8-9 mins)](https://drive.google.com/file/d/19XKlzR_VwgmhmtGdRJuTOeNuOzWyJE9j/view?usp=sharing)** 🎬

## 📋 Project Details

**Submission by:** Kartik Gupta  
**Roll No:** 25BCS10035  
**Student Mail Id:** kartik.25bcs10035@sst.scaler.com  
**Submitted to:** Mrinal Bhattacharya

---

## 📖 Project Title & Description

**Snake Game - A Classic Game Reimagined with Modern Web Technologies**

An enhanced, feature-rich Snake Game built entirely with vanilla JavaScript, HTML5, and CSS3. This project showcases advanced DOM manipulation, dynamic game mechanics, and persistent data storage. Players navigate a growing snake across a responsive grid, collecting food while avoiding self-collision. The game features progressive difficulty scaling, visual milestone rewards (including an animated rainbow snake at 600+ points), comprehensive score tracking, and an intuitive user interface with dark theme aesthetics.

---

## 🎯 Problem Statement

The objective of this project is to create an interactive web-based Snake Game that demonstrates:

1. **Dynamic DOM Manipulation** - Creating and managing a responsive grid-based game board with real-time updates
2. **Event-Driven Programming** - Handling user inputs (keyboard controls) and managing game state transitions
3. **Game Logic Implementation** - Implementing collision detection, food generation, snake movement, and score tracking
4. **Data Persistence** - Storing and retrieving player scores using browser storage APIs
5. **Progressive Enhancement** - Adding visual rewards and increasing difficulty to enhance user engagement
6. **Responsive Design** - Ensuring the game adapts to different viewport sizes while maintaining gameplay integrity

The game must provide smooth gameplay, clear visual feedback, persistent score tracking, and an engaging user experience without relying on external libraries or frameworks.

---

## ✨ Features Implemented

### Core Gameplay Features
- **Dynamic Grid System**: Responsive 48x48px block-based game board that adapts to screen size
- **Snake Movement**: Smooth directional controls using Arrow Keys (↑↓←→) or WASD keys
- **Food Collection**: Random food spawning with validation (never spawns on snake body)
- **Collision Detection**: Self-collision detection that triggers game over
- **Edge Wrapping**: Snake wraps around screen edges using modulo arithmetic
- **Direction Protection**: Prevents 180-degree turns that would cause instant self-collision

### Advanced Features
- **Progressive Difficulty**: Game speed increases every 15 seconds (200ms → 80ms interval)
- **Visual Milestone Rewards**: 
  - 100 points: Green snake 🟢
  - 200 points: Blue snake 🔵
  - 300 points: Purple snake 🟣
  - 600+ points: Rainbow animated snake 🌈
- **Score Tracking System**:
  - Current score display (real-time)
  - Maximum score (persistent across sessions)
  - Last 10 game scores with timestamps
- **Play Timer**: Real-time game duration tracker (MM:SS format)
- **Motivational Messages**: Dynamic messages encouraging players to reach next milestones
- **Auto-save Functionality**: Scores automatically saved on page reload or close

### UI/UX Features
- **Modal System**: Start game, game over, and past scores screens
- **Information Panel**: Displays max score, current score, and play time
- **Past Scores View**: Tabular display of last 10 games with date/time stamps
- **Clear Scores Option**: Reset all scores and statistics
- **Snake Head Animation**: Animated eyes on snake head with directional orientation
- **Glowing Food Effect**: CSS animations for food items
- **Dark Theme**: Modern dark UI with vibrant accent colors
- **Footer Attribution**: Developer credit footer

---

## 🧩 DOM Concepts Used

### 1. **DOM Selection & Traversal**
- `document.querySelector()` - Selecting single elements (board, score displays, buttons)
- `document.querySelectorAll()` - Selecting multiple elements (past score buttons)
- Parent-child relationships - `board.parentElement.prepend()`

### 2. **Dynamic Element Creation**
- `document.createElement()` - Creating grid blocks and message elements dynamically
- Building 48x48px grid blocks programmatically based on viewport dimensions
```javascript
const block = document.createElement('div');
block.classList.add('block');
board.appendChild(block);
```

### 3. **DOM Manipulation**
- `appendChild()` - Adding blocks to game board
- `classList.add()` / `classList.remove()` - Managing CSS classes for snake, food, and colors
- `innerText` / `innerHTML` - Updating score, timer, and dynamic content
- `style.display` - Controlling modal visibility
```javascript
blocksArr[`${block.x}-${block.y}`].classList.add('fill');
score.innerText = scorecount;
```

### 4. **Event Handling**
- `addEventListener('keydown')` - Capturing keyboard inputs for snake control
- `addEventListener('click')` - Handling button clicks (start, restart, view scores)
- `addEventListener('beforeunload')` - Auto-saving scores on page close
- `addEventListener('resize')` - Reloading page on window resize
```javascript
document.addEventListener('keydown', function(event) {
    if(event.key === 'ArrowRight' && direction !== 'left') {
        direction = 'right';
    }
});
```

### 5. **Timers & Intervals**
- `setInterval()` - Game loop, speed progression, play timer
- `clearInterval()` - Stopping game loops on game over or restart
```javascript
gameInterval = setInterval(function() {
    // Game logic executed every interval
}, currentSpeed);
```

### 6. **Web Storage API**
- `localStorage.setItem()` - Persisting max score and past scores
- `localStorage.getItem()` - Retrieving stored scores
- `localStorage.removeItem()` - Clearing past scores
- `JSON.stringify()` / `JSON.parse()` - Serializing/deserializing score objects
```javascript
localStorage.setItem('maxScore', scorecount.toString());
let pastScore = JSON.parse(localStorage.getItem('pastScores')) || [];
```

### 7. **CSS Class Management**
- Dynamic class application for:
  - Snake body segments (`fill`, `head`, directional classes: `up`, `down`, `left`, `right`)
  - Color milestones (`above-100`, `above-200`, `above-300`, `rainbow-snake`)
  - Food positioning (`food`)
```javascript
blocksArr[`${block.x}-${block.y}`].classList.add('head', direction);
```

### 8. **Template Literals & Dynamic HTML Generation**
- Using template literals for generating past scores table dynamically
- `.map()` and `.join()` for creating table rows from array data
```javascript
scoresList.innerHTML = `
    <table class="scores-table">
        <tbody>
            ${pastScore.map((entry) => `
                <tr>
                    <td>${entry.score}</td>
                    <td>${entry.time}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>
`;
```

---

## 🚀 Steps to Run the Project

### Method 1: Direct File Opening
1. Download or clone the repository to your local machine
2. Navigate to the project folder `Snake-Game/`
3. Double-click `index.html` or right-click and select "Open with" → your preferred browser
4. The game will launch immediately in your browser

### Method 2: Using Live Server (Recommended for Development)
1. Install a local web server (e.g., VS Code Live Server extension, or Python HTTP server)
2. Open the project folder in your code editor
3. **For VS Code**: Right-click `index.html` → "Open with Live Server"
4. **For Python**: Run `python -m http.server` or `python3 -m http.server` in the project directory
5. Access the game at `http://localhost:5500` (or respective port)

### Method 3: Command Line
```bash
# Clone or navigate to project directory
cd Snake-Game/

# Open with default browser (macOS)
open index.html

# Open with default browser (Windows)
start index.html

# Open with default browser (Linux)
xdg-open index.html
```

### System Requirements
- **Browser**: Modern browser with ES6+ JavaScript support
  - Chrome 60+ / Edge 79+
  - Firefox 55+
  - Safari 12+
- **Features Required**: 
  - CSS Grid support
  - localStorage API
  - CSS animations & transforms
- **Screen Resolution**: Minimum 600x600px for optimal experience
- **No installation or build process required** - runs directly in the browser

---

## ⚠️ Known Limitations

### 1. **Mobile Device Support**
- Game currently requires keyboard input (Arrow keys/WASD)
- No touch controls or on-screen buttons for mobile devices
- Viewport may not be optimal on small screens (<600px)

### 2. **Browser Compatibility**
- Requires modern browser with ES6+ support (not compatible with IE11)
- localStorage must be enabled (won't work in private/incognito mode without storage permission)
- CSS Grid support required

### 3. **Gameplay Constraints**
- No pause functionality during active gameplay
- Window resize triggers page reload (current game progress is lost)
- Maximum speed capped at 80ms interval (may be too fast for some players)
- Only one direction change per tick allowed (prevents rapid key spam issues)

### 4. **Score Tracking**
- Only stores last 10 game scores (older scores are automatically removed)
- Scores are stored locally in browser (not synced across devices or browsers)
- No user authentication or online leaderboard
- Clearing browser data will delete all saved scores

### 5. **Accessibility**
- No audio feedback or sound effects
- Limited keyboard shortcuts (only movement controls)
- No screen reader support or ARIA labels
- No keyboard navigation for UI buttons (mouse required)

### 6. **Visual Effects**
- Rainbow animation at 600+ points may cause performance issues on low-end devices
- No option to disable animations for motion-sensitive users
- No color-blind friendly mode

### 7. **Other Limitations**
- Food image asset required (`assets/food.png`)
- No difficulty level selection (difficulty automatically increases)
- Score timestamps use browser's local timezone
- Page must remain in focus for timer accuracy

---

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with CSS variables, Grid layout, Flexbox, and animations
- **JavaScript (ES6+)**: Game logic, DOM manipulation, and event handling
- **localStorage API**: Persistent score tracking across sessions

---

## 📁 Project Structure

```
Snake-Game/
│
├── assets/                           # Image assets folder
│   ├── food.png                      # Food item image asset
│   ├── favicon.png                   # Browser tab icon
│   ├── Image.png                     # Project screenshot
│   └── Demo Vedio Recording.mov      # Project demo video
│
├── index.html                        # Main HTML file with game structure and modals
├── script.js                         # Game logic, state management, and event handlers (369 lines)
├── style.css                         # Comprehensive styling with CSS variables (346 lines)
└── README.md                         # Project documentation (this file)
```

---

## 🎮 How to Play

1. Open the game and click **"Start Game"**
2. Control the snake using:
   - **Arrow Keys** (↑ ↓ ← →) or
   - **WASD Keys** (W A S D)
3. Eat the glowing food to gain **+10 points** per item
4. Avoid colliding with your own snake body
5. The game speed increases every 15 seconds - stay focused!
6. Unlock color upgrades:
   - **100 points**: Green snake 🟢
   - **200 points**: Blue snake 🔵
   - **300 points**: Purple snake 🟣
   - **600 points**: Rainbow snake 🌈
7. View your past scores and track your progress

---

## 🎨 Key Implementation Details

- **Grid System**: 48x48px blocks with CSS Grid, rounded corners, dynamic sizing
- **Speed Progression**: 200ms → 80ms in 20ms decrements every 15 seconds
- **Snake Logic**: Array of coordinates, collision detection, edge wrapping with modulo
- **Data Persistence**: localStorage for scores, beforeunload auto-save
- **Visual Effects**: CSS variables, rainbow gradient animation, pseudo-elements for eyes

---

## 👨‍💻 Development

This project was created as a **Term 2 End Term project**, demonstrating advanced web development concepts including DOM manipulation, event-driven programming, game development patterns, and modern JavaScript ES6+ features.

---

## 🎯 Future Enhancements

- Mobile touch controls
- Sound effects and background music
- Pause functionality
- Power-ups (speed boost, invincibility, score multiplier)
- Online leaderboard with user authentication
- Multiplayer mode
- Custom themes and color schemes
- Achievement system with badges
- Multiple difficulty levels

---

## 📝 License

This is an educational project. Feel free to use and modify as needed.

---

## 🤝 Contributing

Feel free to fork this project and add your own enhancements!

---

**Enjoy the game and happy coding! 🎮🐍**

---

**Made with ❤️ by Kartik Gupta**
