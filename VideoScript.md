# 🎬 Snake Game - Video Presentation Script
**Duration: 4-5 Minutes**

---

## 🎯 Opening Shot (0:00 - 0:30)
**Visual:** Show the welcome screen with game title

**Script:**
> "Hello! I'm Kartik Gupta, and today I'm excited to present my Snake Game - a modern take on the classic arcade game built entirely with vanilla JavaScript, HTML, and CSS. This project was developed as my Term 2 End Term assignment, and it showcases advanced game development concepts including progressive difficulty, visual rewards, and comprehensive score tracking. Let's dive in!"

**Action:** Click "Start Game" button

---

## 🎮 Gameplay Demo - Part 1 (0:30 - 1:30)
**Visual:** Play the game, showing basic controls

**Script:**
> "The gameplay is intuitive - I can control the snake using either arrow keys or WASD. The objective is simple: eat the glowing food to grow longer and score points. Each food gives you 10 points."

**Action:** 
- Move the snake around using different keys (show both arrow keys and WASD)
- Eat 2-3 food items
- Point out the info panel at the top

**Script (continued):**
> "Notice the information panel at the top - it tracks my current score, maximum score across all sessions, and a live play timer. The game automatically saves your progress using localStorage, so your high score persists even after closing the browser."

---

## ⚡ Progressive Difficulty Feature (1:30 - 2:15)
**Visual:** Continue playing, let some time pass

**Script:**
> "Now here's where it gets challenging - the snake's speed automatically increases every 10 seconds. It starts at a comfortable 200 milliseconds per move and progressively gets faster, decreasing by 20 milliseconds each time until it reaches the maximum speed of 80 milliseconds. This creates an increasingly challenging experience that tests your reflexes."

**Action:** 
- Continue playing to show the speed increase
- Demonstrate the snake wrapping around edges

**Script (continued):**
> "Also notice how the snake wraps around the screen edges - if you go off one side, you appear on the opposite side. This adds a strategic element to the gameplay."

---

## 🎨 Visual Rewards System (2:15 - 3:00)
**Visual:** Show score progression and color changes (you may want to pre-record or edit this)

**Script:**
> "One of the most exciting features is the visual rewards system. Watch what happens as I reach different score milestones..."

**Action:** Show or demonstrate reaching different scores
- At 100 points: "At 100 points, the snake turns bright green"
- At 200 points: "At 200, it becomes electric blue"
- At 300 points: "At 300, it transforms into royal purple"
- At 600 points: "And at 600 points... a spectacular rainbow animated snake with glowing effects!"

**Script (continued):**
> "The motivational messages at the top also update as you progress, encouraging you to reach the next milestone. This gamification keeps players engaged and motivated to beat their high scores."

**Action:** Point to the surprise message

---

## 💾 Score Tracking & Features (3:00 - 3:45)
**Visual:** Let the game end (intentionally collide), show game over screen

**Script:**
> "When the game ends - in this case by colliding with myself - we see the game over screen with the final score. But the features don't stop there..."

**Action:** Click "View Past Scores"

**Script (continued):**
> "The game maintains a history of your last 10 games, complete with timestamps in Indian timezone format. This lets you track your progress over time and see when you achieved your best scores."

**Action:** 
- Scroll through the past scores table
- Hover over rows to show the hover effect
- Point out the "Clear All Scores" option

**Script (continued):**
> "You can clear all your scores if you want to start fresh. The interface is clean, responsive, and uses a modern dark theme with smooth animations."

**Action:** Click "Back", then "Restart Game"

---

## 💻 Technical Implementation (3:45 - 4:30)
**Visual:** Switch to VS Code, show file structure

**Script:**
> "Let me briefly walk you through the technical implementation. The project has a clean structure with all assets organized in an assets folder."

**Action:** Show file tree in VS Code

**Script (continued):**
> "The JavaScript uses several advanced concepts: a dynamic game loop with setInterval that adjusts speed in real-time, collision detection algorithms, localStorage for data persistence, and multiple concurrent intervals for the timer and speed increases."

**Action:** Briefly show key parts of script.js (game loop, collision detection)

**Script (continued):**
> "The CSS leverages custom properties for theming - making it easy to adjust colors and spacing throughout the entire project. I've implemented a responsive grid system that adapts to different screen sizes, and the snake head even has animated eyes that change direction based on movement."

**Action:** Briefly show style.css (CSS variables, grid system)

**Script (continued):**
> "Special attention was given to visual effects - the rainbow snake uses CSS gradients with keyframe animations, and the food has a glowing drop-shadow effect."

**Action:** Show the rainbow animation CSS

---

## 🎯 Closing (4:30 - 5:00)
**Visual:** Return to the game, maybe one final quick play

**Script:**
> "This project demonstrates proficiency in vanilla JavaScript, CSS Grid and Flexbox layouts, DOM manipulation, state management, and creating engaging user experiences. The game is fully functional, responsive, and includes features like auto-save, input protection to prevent bugs, and a comprehensive scoring system."

**Action:** Start a quick game showing smooth gameplay

**Script (continued):**
> "Future enhancements could include mobile touch controls, sound effects, multiplayer mode, and additional power-ups. Thank you for watching! Feel free to try the game yourself and see if you can unlock the rainbow snake at 600 points. The complete code is available in my repository. Thanks!"

**Visual:** Fade to end screen with your contact info or GitHub link

---

## 📝 Video Production Tips

### Before Recording:
1. **Clear localStorage** to show fresh start if needed
2. **Test run** the entire script timing
3. **Prepare segments** - you may want to record gameplay separately and edit
4. **Close unnecessary tabs/apps** for clean screen recording
5. **Set browser zoom to 100%** for consistent visuals
6. **Consider using 1920x1080 resolution** for clarity

### During Recording:
1. **Speak clearly and at moderate pace**
2. **Pause briefly between sections** for easier editing
3. **Use cursor/highlights** to emphasize features
4. **Keep mouse movements smooth**
5. **Have VS Code theme** that's easy to read (dark theme recommended)

### Recording Tools Suggested:
- **macOS:** QuickTime Player (built-in) or OBS Studio
- **Screen recording:** Ensure audio is clear
- **Cursor highlighting:** Use a tool to highlight clicks if needed

### Editing Tips:
1. **Speed up gameplay sections** if needed (1.5x)
2. **Add text overlays** for key features
3. **Zoom in** on important code sections
4. **Add background music** (soft, non-distracting)
5. **Include transitions** between sections
6. **Add your name/roll number** as text overlay at start/end

### Key Highlights to Emphasize:
- ✅ Progressive difficulty (automatic speed increase)
- ✅ 4-tier visual reward system with rainbow animation
- ✅ Comprehensive score tracking with history
- ✅ Clean, professional UI/UX
- ✅ Technical implementation quality
- ✅ localStorage persistence
- ✅ Responsive design

---

## 🎬 Alternative Script Structure (If Tight on Time)

### 3-Minute Version:
- Introduction: 0:00 - 0:20
- Gameplay & Features: 0:20 - 2:00 (combine gameplay + features)
- Technical Overview: 2:00 - 2:45
- Closing: 2:45 - 3:00

### What to Cut:
- Detailed past scores walkthrough (just mention it briefly)
- Extensive code walkthrough (show just the highlights)
- Slow gameplay sections (speed up in editing)

---

Good luck with your video presentation! 🎮🐍
