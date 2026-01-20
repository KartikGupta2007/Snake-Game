# 🐍 Snake Game(End Term Project)

![Snake Game](assets/Image.png)

## � Project Details

**Submission by:** Kartik Gupta  
**Roll No:** 25BCS10035  
**Student Mail Id:** kartik.25bcs10035@sst.scaler.com  
**Submitted to:** Mrinal Bhattacharya

## �📖 Description

An enhanced classic Snake Game built with vanilla JavaScript, HTML, and CSS. Control the snake to eat food, grow longer, and achieve the highest score! The game features progressive difficulty with automatic speed increases, visual milestone rewards including a spectacular rainbow snake animation at 600+ points, comprehensive score tracking with past game history, and a fully responsive grid-based design. Challenge yourself to unlock all surprises!

## ✨ Features

### 🎮 Core Gameplay
- **Classic Snake Gameplay**: Control the snake using arrow keys (↑↓←→) or WASD keys
- **Progressive Difficulty System**: 
  - Snake starts at 200ms speed
  - Automatically increases speed every 10 seconds (decreases by 20ms)
  - Maximum speed caps at 80ms to maintain playability
  - Creates an increasingly challenging experience
- **Responsive Grid System**: Dynamic 48x48px grid that adapts to container size with rounded blocks
- **Smart Food Generation**: 
  - Random food placement with collision avoidance
  - Never spawns on snake body
  - Glowing drop-shadow effect on food
- **Collision Detection**: Game ends when snake collides with itself
- **Edge Wrapping**: Snake wraps around board edges seamlessly

### 🏆 Scoring & Progression
- **Advanced Score Tracking**: 
  - Current score: +10 points per food eaten
  - Maximum score tracking using localStorage
  - Score persists across browser sessions
  - Past scores history (stores last 10 games with Indian timestamps)
- **Visual Milestone Rewards**: Snake changes color as you achieve higher scores:
  - **100+ points**: Bright green snake (#00ff88) 🟢
  - **200+ points**: Electric blue snake (#00b3ff) 🔵
  - **300+ points**: Royal purple snake (#8b5cf6) 🟣
  - **600+ points**: Animated rainbow gradient snake with glow effect! 🌈✨
- **Motivational Messages**: Dynamic surprise messages that update with your progress:
  - < 100: "Score 100 to get a surprise 🎁"
  - 100-199: "Score 200 to get a bigger surprise 🎉"
  - 200-299: "You are unstoppable! Can you reach 600? 🚀"
  - 300-599: "You are a pro! Keep going for final Surprise! 🌟"
  - 600+: "You have unlocked all surprises! 🏆 Congratulations!!"

### 🎨 User Interface
- **Information Panel**: Real-time display of Max Score, Current Score, and Play Time
- **Play Timer**: Real-time MM:SS format timer tracking game duration
- **Snake Head Design**: Animated eyes that follow movement direction (up/down/left/right)
- **Modern UI**: Dark theme (#0c0c0c) with clean, minimalist design
- **Smooth Animations**: CSS transitions, hover effects (1.1x scale on buttons), and rainbow gradient animation
- **Past Scores Screen**: 
  - Scrollable table view of last 10 games
  - Shows score and timestamp for each game
  - Clear all scores option
  - Hover effects on table rows

### 💾 Game States & Controls
- **Welcome Screen**: Start Game and View Past Scores buttons
- **Active Gameplay**: Dynamic speed progression with live timer
- **Game Over Screen**: Final score display, Restart, and View Past Scores
- **Past Scores Screen**: History table with Back navigation
- **Auto-save**: Scores automatically saved even if page is reloaded during gameplay
- **Input Protection**: Direction changes prevented from reversing, one change per tick to prevent bugs

## 🎮 How to Play

1. **Start**: Open `index.html` in your web browser and click "Start Game"
2. **Control**: Use arrow keys (↑↓←→) or WASD to control the snake:
   - **Right Arrow / D** → Move right
   - **Left Arrow / A** → Move left
   - **Up Arrow / W** → Move up
   - **Down Arrow / S** → Move down
3. **Objective**: Eat the glowing food to grow your snake and score points (+10 per food)
4. **Survival**: 
   - Avoid colliding with yourself (game ends on collision)
   - The snake wraps around edges (goes to opposite side)
   - Speed increases every 10 seconds - stay alert!
5. **Unlock Rewards**: Reach score milestones to unlock visual upgrades:
   - 100 points → Green snake
   - 200 points → Blue snake
   - 300 points → Purple snake
   - 600 points → Rainbow animated snake!
6. **Track Progress**: 
   - View your current and max scores in the info panel
   - Watch the play timer to see how long you survive
   - Check past scores anytime by clicking "View Past Scores"
7. **Restart**: Click "Restart Game" after game over to try again
8. **Clear Records**: Use "Clear All Scores" in Past Scores to reset all saved data

## 🎯 Scoring System

- **Points**: +10 points per food eaten
- **Maximum Score**: Automatically saved to localStorage, persists forever
- **Past Scores**: Last 10 games saved with Indian timezone timestamps (DD/MM/YYYY, HH:MM:SS AM/PM)
- **Visual Milestones**:
  - **100 points**: Green snake (#00ff88)
  - **200 points**: Blue snake (#00b3ff)
  - **300 points**: Purple snake (#8b5cf6)
  - **600 points**: Rainbow animated snake with glow effect
- **Auto-save**: Game state saved automatically, even if page reloads during gameplay
- **Clear Scores**: Option to reset max score and clear all past scores history

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling with CSS variables for theming
- **JavaScript (ES6+)**: Game logic and DOM manipulation
- **localStorage API**: Persistent score tracking

## 📁 Project Structure

```
Snake-Game/
│
├── assets/            # Image assets folder
│   ├── food.png       # Food item image asset
│   ├── favicon.png    # Browser tab icon
│   └── Image.png      # Project screenshot
├── index.html         # Main HTML file with game structure and modals
├── script.js          # Game logic, state management, and event handlers (369 lines)
├── style.css          # Comprehensive styling with CSS variables (346 lines)
└── Readme.md          # Project documentation
```

## 🎨 Key Implementation Details

### Grid System
- Dynamic grid creation based on container dimensions
- Each block is exactly 48x48 pixels with rounded corners (35% border-radius)
- Grid automatically calculates rows and columns using CSS Grid
- Blocks have subtle borders (#333333) for visual definition
- Uses CSS custom properties for consistent sizing throughout

### Snake Movement & Controls
- **Initial Speed**: 200ms interval between moves
- **Speed Progression**: Every 10 seconds (10,000ms), speed increases by 20ms
- **Maximum Speed**: Caps at 80ms (minimum interval) for playability
- **Speed Reset**: Resets to 200ms on game restart
- **Direction Control**: 
  - Arrow keys (↑↓←→) or WASD supported
  - Direction reversal prevented (can't go left if moving right)
  - Only one direction change per tick to prevent double-input bugs
  - Direction change flag resets after each game tick
- **Edge Wrapping**: Snake wraps around all four edges using modulo arithmetic
- **Visual Head**: Animated eyes that adjust position based on movement direction

### Game Logic
- **Snake Representation**: Array of {x, y} coordinates (head at index 0, tail at end)
- **Collision Detection**: Checks if new head position matches any existing body segment
- **Food System**: 
  - Random spawn using Math.random() for rows and columns
  - Collision avoidance loop ensures food never spawns on snake body
  - Food removal/respawn on consumption
- **Growth Mechanism**: 
  - On food consumption: unshift new head, keep tail (snake grows)
  - On normal move: unshift new head, pop tail (maintains length)
- **Score Updates**: Real-time DOM updates on food consumption
- **Speed System**: 
  - setInterval with dynamic currentSpeed variable
  - clearInterval and restart with new speed every 10 seconds
  - Speed increase continues until MIN_SPEED (80ms) reached
- **Visual Rewards**: Conditional CSS class application based on maxScoreValue
- **Data Persistence**: 
  - localStorage for maxScore (persistent across sessions)
  - localStorage for pastScores array (last 10 games with timestamps)
  - beforeunload event handler for auto-save on page refresh
- **State Flags**: 
  - isGameRunning: tracks active game state
  - directionChanged: prevents multiple direction changes per tick
  - flag: manages game/screen state transitions

### CSS Variables & Theming
The project uses comprehensive CSS custom properties in `:root` for easy theming:
- **Background Colors**: 
  - Primary (#0c0c0c), Fill (#fdfdfc), Food (#ffb703)
  - Milestone colors: Green (#00ff88), Blue (#00b3ff), Purple (#8b5cf6)
- **Text Colors**: Primary (#f0f0f0)
- **Size System**: very-small to 3xl (1px to 96px)
- **Spacing System**: none to 3xl (0px to 48px) for padding/margin/gap
- **Border Properties**: 
  - Border color (#333333)
  - Border radius: xs to 2xl (4px to 24px)
- **Special Effects**:
  - Rainbow gradient animation for 600+ score
  - Drop-shadow on food items
  - Box-shadow on rainbow snake

## 🚀 Setup and Installation

1. Clone or download this repository
2. No build process or dependencies required
3. Simply open `index.html` in any modern web browser
4. Start playing!

## 📱 Browser Compatibility

Works on all modern browsers that support:
- **ES6+ JavaScript**: Arrow functions, template literals, array methods (map, some, forEach), destructuring
- **CSS Features**: CSS Grid, CSS Custom Properties (variables), CSS animations, backdrop-filter
- **Web APIs**: localStorage API, addEventListener, Date.toLocaleString
- **Tested on**: Chrome, Firefox, Safari, Edge (latest versions)
- **Note**: Window resize triggers page reload to recalculate grid dimensions

## 🎯 Future Enhancements

Possible improvements for future versions:
- 📱 Mobile touch controls (swipe gestures)
- 🔊 Sound effects (eating, collision, milestone unlocks) and background music
- ⏸️ Pause/resume functionality with spacebar
- 🎨 Customizable themes, skins, and color schemes
- ⚡ Power-ups (speed boost, score multiplier, invincibility, slow-motion)
- 🌐 Online leaderboard with global rankings
- 🎮 Multiple game modes (timed challenge, survival mode, obstacles, portals)
- ⚙️ Difficulty level selection (easy/medium/hard)
- ✨ Snake trail effects and particle animations
- 🏅 Achievement system with badges
- 👥 Multiplayer mode (two-player split screen)
- 📊 Statistics dashboard (average score, total games played, longest snake)

## 👨‍💻 Development

This project was created as a Term 2 End Term project, demonstrating:

### JavaScript Concepts
- **DOM Manipulation**: Dynamic element creation, classList management, innerHTML updates
- **Event Handling**: Keyboard events (keydown), click events, beforeunload
- **Game Loop**: setInterval with dynamic speed, clearInterval for restarts
- **State Management**: Multiple state flags, game flow control, modal management
- **Data Structures**: Array manipulation for snake (unshift, pop, some, forEach, map)
- **Algorithms**: Collision detection, random positioning with validation, modulo for wrapping
- **Storage**: localStorage for persistence (getItem, setItem, removeItem), JSON parse/stringify
- **Timing**: Multiple concurrent intervals (game loop, timer, speed increase)
- **String Manipulation**: Template literals, split/join for timer display

### CSS Concepts
- **Layout**: CSS Grid (auto-fill, minmax), Flexbox (column, row, center alignment)
- **Positioning**: Fixed footer, absolute pseudo-elements for eyes, relative positioning
- **Custom Properties**: CSS variables for theming, reusability, maintainability
- **Animations**: @keyframes for rainbow effect, transitions for hover states
- **Pseudo-elements**: ::before and ::after for snake eyes based on direction
- **Responsive Design**: Dynamic sizing based on viewport, window resize handling
- **Visual Effects**: backdrop-filter blur, box-shadow, drop-shadow, border-radius

### HTML Structure
- **Semantic HTML**: main, section, footer elements
- **Modal System**: Multiple overlapping screens (start, game over, past scores)
- **Accessibility**: Proper heading hierarchy, button elements
- **Asset Management**: External images in assets folder (food.png, favicon.png)

## 📝 License

This is an educational project. Feel free to use and modify as needed.

## 🤝 Contributing

Feel free to fork this project and add your own enhancements!

---

**Enjoy the game and happy coding! 🎮🐍**
