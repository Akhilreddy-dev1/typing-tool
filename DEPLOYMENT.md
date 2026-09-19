# 🚀 Deployment Guide

## Deploy to GitHub Pages

Your TypeAnime app can be hosted for free on GitHub Pages. Follow these simple steps:

### Option 1: Automatic Deployment (Recommended)

1. Push to `master`; the included GitHub Actions workflow runs `npm ci`, builds Vite, and deploys `dist/`.
2. In repository **Settings → Pages**, set the source to **GitHub Actions** once.
3. Wait for the workflow to finish, then visit:
   ```
   https://akhilreddy-dev1.github.io/typing-tool/
   ```

Your typing tool will be live! 🎉

### Option 2: Using GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml` for automated deployments on every push.

## Local Development

To run locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Akhilreddy-dev1/typing-tool.git
   cd typing-tool
   ```

2. **Run the Vite app**
   ```bash
   npm install
   npm run dev
   ```

3. **Visit** the URL printed by Vite, usually `http://localhost:5173`

## Customization

### Adding New Characters

Edit `index.html` and add to the `characters` object:

```javascript
yourcharacter: {
  name: 'Character Name',
  avatar: '🎭',
  tips: [
    'Helpful tip 1',
    'Helpful tip 2',
  ]
}
```

Then add a character card in the HTML:

```html
<div class="character-card" data-character="yourcharacter">
  <div class="character-avatar">🎭</div>
  <div class="character-name">Character Name</div>
  <div class="character-series">Series Name</div>
</div>
```

### Adding New Typing Texts

Add to the `typingTexts` object:

```javascript
typingTexts: {
  yourcategory: [
    'Text for users to type',
    'Another practice text',
  ]
}
```

### Changing Colors

Modify CSS custom properties in the `:root` section:

```css
:root {
  --accent-primary: #ff6b6b;    /* Main accent color */
  --accent-secondary: #4ecdc4;  /* Secondary accent */
  /* ... more colors */
}
```

## File Structure

```
typing-tool/
├── index.html          # Main application file
├── README.md           # Project documentation
├── CONTRIBUTING.md     # Contribution guidelines
├── LICENSE            # MIT License
├── DEPLOYMENT.md      # This file
└── .gitignore        # Git ignore rules
```

## Tech Stack

- **HTML5** - Structure
- **CSS3** - Styling with custom properties
- **Vanilla JavaScript** - Logic and interactivity
- **LocalStorage API** - Progress tracking

## Browser Requirements

- Modern browser with ES6+ support
- JavaScript enabled
- LocalStorage enabled (for progress tracking)

## Troubleshooting

### Progress not saving?
- Check if your browser allows localStorage
- Try clearing site data and reloading
- Some private/incognito modes block storage

### Page not loading on GitHub Pages?
- Wait 5-10 minutes after enabling Pages
- Check Settings > Pages for the deployment status
- Ensure `index.html` is in the repository root

### Styles not working?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors
- Ensure CSS is in the `<style>` tag in index.html

## Performance

The app is optimized for performance:
- No external dependencies
- Single HTML file
- Minimal resource usage
- Fast load times

## Mobile Support

Fully responsive design tested on:
- iOS Safari
- Android Chrome
- Mobile browsers at 400px+ width

## Updates

To update your deployment:

1. Make changes to `index.html`
2. Commit and push:
   ```bash
   git add index.html
   git commit -m "Update: description of changes"
   git push origin master
   ```
3. GitHub Pages will automatically redeploy

## Support

- Open an issue: https://github.com/Akhilreddy-dev1/typing-tool/issues
- Check README.md for usage instructions
- See CONTRIBUTING.md for development guidelines

---

Made with ⚡ and ❤️ for anime fans and typing enthusiasts!
