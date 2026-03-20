# The Compositional Bestiary

**Doctoral Research — Universidad de Salamanca**
*Nicholas Daly*

> A gorgeous multimedia book exploring the imaginal cartography of inspiration and cultural transmission of a fantastical world that proves the academic argument for an autodidacticism based on a technics of inner revelation.

## About This Project

The Compositional Bestiary is a practice-based doctoral thesis examining AI-enhanced composition pedagogy through the lens of a six-hundred-year lineage of enchanted composition tools — from Guido d'Arezzo's mnemonic Hand through Kircher's Arca Musarithmica to modern AI systems.

The central creative artifact is a collection of AI-augmented compositional "creatures," each encoding a distinct philosophical position about music, each teaching through constraint, play, and structured encounter.

**Live site:** [https://nickjoedaly.github.io/compositional-bestiary](https://nickjoedaly.github.io/compositional-bestiary)

## Repository Structure

```
compositional-bestiary/
├── index.html              # PhD dashboard / homepage
├── thesis.html             # Thesis overview & chapters
├── framework.html          # Theoretical framework
├── bibliography.html       # Annotated bibliography (3 strands)
├── portfolio.html          # Compositions & creative work
├── bestiary.html           # The creatures catalog
├── plugins.html            # MuseScore plugin documentation
├── timeline.html           # PhD timeline & milestones
├── funding.html            # Funding strategy & applications
├── updates.html            # Research log / blog
├── about.html              # Author bio & institutional context
├── styles.css              # Shared stylesheet
├── assets/
│   ├── images/             # Site images, creature illustrations
│   ├── audio/              # Composition recordings (mp3/ogg)
│   ├── scores/             # Musical scores (PDF, MuseScore files)
│   └── pdf/                # Downloadable documents
├── drafts/
│   ├── chapters/           # Thesis chapter drafts (private/WIP)
│   └── notes/              # Research notes
├── plugins/
│   ├── src/                # MuseScore plugin source code
│   └── dist/               # Compiled/distributable plugins
├── data/                   # Research data, JSON creature schemas
├── .gitignore
└── README.md
```

## Tech Stack

- **Site:** Static HTML/CSS (no build step, no dependencies)
- **Fonts:** EB Garamond, JetBrains Mono, Inter (via Google Fonts)
- **Hosting:** GitHub Pages (free)
- **Notation:** MuseScore 4 + Plugin API
- **AI:** Local LLM (planned)

## Getting Started

This is a static site with zero dependencies. To run locally:

```bash
# Clone the repo
git clone https://github.com/nickjoedaly/compositional-bestiary.git
cd compositional-bestiary

# Open in browser (macOS)
open index.html

# Or serve locally with Python
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## License

Content © 2026 Nicholas Daly. All rights reserved.
Code (CSS, plugin source) is MIT licensed.

## Contact

- Email: nick@nickdalycreative.com
- Site: [nickdalycreative.com](https://www.nickdalycreative.com)
