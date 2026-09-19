# ⚡ TypeAnime - The Anime Typing Dojo

TypeAnime is an aggressive anime typing trainer for building speed, accuracy, and consistency. The current interface is a Vite + React + Tailwind app with a Soul Reaper black-and-white palette, Hollow Crimson action color, local character artwork, and CSS combat-inspired depth.

## ✨ Features

- **⚔️ Soul Reaper landing page** - High-contrast manga texture, diagonal cuts, vertical editorial labels, and hard-offset interactions
- **🧑‍🎤 Local character artwork** - Ichigo, Sung Jin-Woo, Gojo, and Tanjiro use the attached assets in `public/characters`
- **⌨️ Live practice arena** - WPM, accuracy, errors, timer, passage highlighting, and coach quotes
- **📈 Local progress history** - Recent attempts and personal bests stay in the browser
- **📱 Responsive by default** - Works on desktop, tablet, and mobile widths

## 🚀 Quick Start

1. **Install and run the app**
   ```bash
   npm install
   npm run dev
   ```

Do not open the repository root `index.html` with a plain static server. It is the Vite source entry and contains JSX. Use `npm run dev` locally, or deploy the generated `dist/` directory.

2. **Select your coach** - Choose Ichigo, Sung Jin-Woo, Gojo, or Tanjiro to change the quote and practice context

3. **Start typing** - Click the passage field and type the highlighted line

4. **Build a streak** - Attempts and best WPM are stored locally in this browser

## 🎮 How to Use

### Character Selection
Choose from four legendary characters:
- **Tanjiro Kamado** (Demon Slayer) - Patient and encouraging
- **Sung Jin-Woo** (Solo Leveling) - Focused on leveling up your skills
- **Satoru Gojo** (Jujutsu Kaisen) - Master technique and form
- **Ichigo Kurosaki** (Bleach) - Channel your determination

### Build
```bash
npm run build
```

The production output is written to `dist/` and can be deployed to GitHub Pages, Netlify, Vercel, or any static host. The included `.github/workflows/deploy.yml` builds and publishes `dist/` automatically from `master`.

### Progress Tracking
Your progress is automatically saved including:
- Total tests completed
- Average WPM (Words Per Minute)
- Best WPM achieved
- Average accuracy
- Skill level progression

## 🛠️ Technical Details

### Built With
- React 18 + Vite
- Tailwind CSS with a small component stylesheet
- LocalStorage for progress tracking
- CSS perspective, transforms, clip paths, halftone texture, particles, and layered inset shadows for the combat-inspired 3D treatment

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

Character portraits are local files supplied as project attachments. If you redistribute the project, confirm you have permission to use those images.


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
