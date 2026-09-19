# ⚡ TypeAnime - The Anime Typing Dojo

TypeAnime is a focused, anime-inspired typing trainer for building speed, accuracy, and consistency. It is a single dependency-free page that works on GitHub Pages and keeps your progress in the browser.

## ✨ Features

- **🌌 3D-feeling landing page** - Layered gradients, orbiting feature card, motion, and responsive layout
- **🧑‍🎤 Character coaches** - Browse one portrait at a time with arrow controls, tips, and completion dialogue
- **⌨️ Live practice arena** - WPM, accuracy, errors, timer, highlighted keyboard key, and guided lessons
- **🏆 Hall of Legends leaderboard** - Save a display name and rank your best local runs
- **✨ Completion rewards** - Every completed run opens a result card with XP and a character quote
- **📈 Progress tracking** - History, averages, personal best, skill level, and test completion meter
- **🌓 Theme toggle** - Switch between the vivid dark dojo and a light reading mode
- **📱 Responsive by default** - Works on desktop, tablet, and mobile widths

## 🚀 Quick Start

1. **Open the App**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # or
   start index.html
   ```

2. **Select your coach** - Choose a character card to change tips and completion rewards

3. **Start typing** - Choose a lesson or press **Start test**, then type the highlighted passage

4. **Save your name** - Add a display name to the leaderboard after a run; all entries stay local to this browser

## 🎮 How to Use

### Character Selection
Choose from four legendary characters:
- **Tanjiro Kamado** (Demon Slayer) - Patient and encouraging
- **Sung Jin-Woo** (Solo Leveling) - Focused on leveling up your skills
- **Satoru Gojo** (Jujutsu Kaisen) - Master technique and form
- **Ichigo Kurosaki** (Bleach) - Channel your determination

### Lessons and modes
The training map includes home-row, top-row, bottom-row, combined-letter, symbol, and speed-building drills. The practice arena rotates through beginner, intermediate, advanced, and anime quote passages.

### Progress Tracking
Your progress is automatically saved including:
- Total tests completed
- Average WPM (Words Per Minute)
- Best WPM achieved
- Average accuracy
- Skill level progression

## 🛠️ Technical Details

### Built With
- Pure HTML, CSS, and JavaScript
- No external dependencies
- LocalStorage for progress tracking
- Responsive design with CSS Grid and Flexbox

### Browser Support
- Chrome/Edge (recommended)
- Firefox
- Safari
- Any modern browser with ES6+ support

### Storage
No account or server is required. `localStorage` stores:
- `typeAnimeHistory` for completed run statistics
- `typeAnimeLeaderboard` for the top eight local scores
- `typeAnimeCharacter` and `typeAnimePlayer` for preferences

Character portraits use lightweight remote, anime-inspired avatar renders seeded with each character name, with emoji fallbacks if the image host is unavailable. This keeps the page fast and avoids redistributing copyrighted anime artwork.

### Optional Python UI tools
The browser app remains plain HTML/CSS/JavaScript for GitHub Pages. The optional Python helper makes maintenance easier:

```bash
python tools/app_tools.py check
python tools/app_tools.py theme light
```

`check` validates the important HTML hooks and embedded JavaScript. `theme` applies the editable values in `ui_theme.json` to the CSS variables in `index.html`.

## 📊 Stats Explained

- **WPM (Words Per Minute)** - Standard typing speed measurement (1 word = 5 characters)
- **Accuracy** - Percentage of correctly typed characters
- **Errors** - Number of mistakes made during the test
- **Time** - Duration of your typing session in seconds

## 🎯 Tips for Success

1. **Start with accuracy** - Speed comes naturally with practice
2. **Use the home row** - Keep your fingers on ASDF and JKL;
3. **Don't look at the keyboard** - Trust your muscle memory
4. **Practice daily** - Consistency is key to improvement
5. **Take breaks** - Avoid hand fatigue with regular rest

## 🤝 Contributing

This is a learning project! Feel free to:
- Report bugs
- Suggest new features
- Add more anime characters
- Improve the design
- Add more test content

## 📝 License

MIT License - Feel free to use and modify for your own projects!

## 🎨 Credits

- Character inspiration from Demon Slayer, Solo Leveling, Jujutsu Kaisen, and Bleach
- Designed with love for anime fans and typing enthusiasts

## 🌟 Roadmap

- [ ] Add more anime characters
- [ ] Multiplayer typing races
- [ ] Achievement system
- [ ] Custom text upload
- [ ] More advanced tutorials
- [ ] Sound effects and music
- [ ] Export progress data

---

**Start your typing journey today! ⚡**
