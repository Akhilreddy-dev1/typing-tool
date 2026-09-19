# Contributing to TypeAnime

Thank you for your interest in contributing to TypeAnime! This document provides guidelines for contributing to the project.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear description of the problem
- Steps to reproduce the issue
- Expected vs actual behavior
- Browser and OS information
- Screenshots if applicable

### Suggesting Features

Feature suggestions are welcome! Please include:
- A clear description of the feature
- Why it would be useful
- Any examples or mockups if applicable

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow the existing code style
   - Test your changes thoroughly
   - Ensure the app works on mobile and desktop
4. **Commit your changes**
   ```bash
   git commit -m "Add: description of your changes"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**
   - Describe your changes clearly
   - Reference any related issues

## Development Guidelines

### Code Style

- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and single-purpose
- Maintain consistent indentation (2 spaces)

### CSS Guidelines

- Use CSS custom properties (variables) for colors and common values
- Follow mobile-first responsive design
- Ensure dark/light theme compatibility
- Test on multiple screen sizes

### JavaScript Guidelines

- Use modern ES6+ syntax
- Handle errors gracefully with try/catch
- Keep localStorage interactions wrapped in error handling
- Comment non-obvious logic

## Adding New Features

### Adding New Characters

To add a new anime character:

1. Add character data to the `characters` object:
```javascript
newcharacter: {
  name: 'Character Name',
  avatar: '🎭', // emoji
  tips: [
    'Tip 1 from this character',
    'Tip 2 from this character',
    // ... more tips
  ]
}
```

2. Add a character card in the HTML character selector section

### Adding New Lessons

Add lesson data to the `lessons` array:
```javascript
{
  id: 11,
  title: 'Lesson Title',
  desc: 'Lesson description',
  keys: 'keys to practice'
}
```

### Adding New Test Content

Add new test texts to the `typingTexts` object under an appropriate category.

## Testing

Before submitting a PR, please test:
- All navigation works correctly
- Character selection and switching
- Typing tests calculate stats correctly
- Progress tracking saves and loads
- Responsive design on mobile/tablet/desktop
- Dark and light themes display correctly
- No console errors

## Questions?

Feel free to open an issue with questions about contributing!

## Code of Conduct

- Be respectful and constructive
- Welcome newcomers and help them learn
- Focus on what's best for the community
- Show empathy towards other contributors

Thank you for contributing to TypeAnime! 🎉
