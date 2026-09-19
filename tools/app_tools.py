"""Small, dependency-free helpers for maintaining the TypeAnime static UI.

Usage:
    python tools/app_tools.py check
    python tools/app_tools.py theme light

The browser still runs the generated index.html directly. Python is only a
maintainer tool, which keeps GitHub Pages deployment simple.
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
THEMES = ROOT / "ui_theme.json"


def check() -> int:
    html = INDEX.read_text(encoding="utf-8")
    required = ["characterSelector", "textDisplay", "completionModal", "leaderboard"]
    missing = [item for item in required if item not in html]
    if missing:
        print(f"Missing app hooks: {', '.join(missing)}", file=sys.stderr)
        return 1

    script = re.search(r"<script>(.*?)</script>", html, re.DOTALL)
    if not script:
        print("No inline application script found.", file=sys.stderr)
        return 1

    check_file = ROOT / ".typeanime-check.js"
    check_file.write_text(script.group(1), encoding="utf-8")
    try:
        result = subprocess.run(["node", "--check", str(check_file)], check=False)
    finally:
        check_file.unlink(missing_ok=True)
    if result.returncode:
        return result.returncode
    print("TypeAnime HTML hooks and JavaScript syntax look good.")
    return 0


def theme(name: str) -> int:
    themes = json.loads(THEMES.read_text(encoding="utf-8"))
    if name not in themes:
        print(f"Unknown theme {name!r}. Choose from: {', '.join(themes)}", file=sys.stderr)
        return 2
    css = INDEX.read_text(encoding="utf-8")
    values = themes[name]
    for key, value in values.items():
        css, count = re.subn(rf"({re.escape(key)}:)[^;}}]+", rf"\1{value}", css, count=1)
        if count != 1:
            print(f"Could not update {key}", file=sys.stderr)
            return 1
    INDEX.write_text(css, encoding="utf-8")
    print(f"Applied {name} theme variables to index.html.")
    return 0


if __name__ == "__main__":
    if len(sys.argv) < 2 or sys.argv[1] not in {"check", "theme"}:
        print("Usage: python tools/app_tools.py check | theme dark|light")
        raise SystemExit(2)
    raise SystemExit(check() if sys.argv[1] == "check" else theme(sys.argv[2] if len(sys.argv) > 2 else "dark"))
