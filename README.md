# The Compositional Bestiary

**Nicholas Daly — Practice-Based PhD Research, Universidad de Salamanca**

## Overview

The Compositional Bestiary is a practice-based research project exploring pedagogy, imagination, and the design of tools for composition. Rather than treating composition pedagogy as a set of mechanical rules to be transmitted, this project understands composition as a practice of *imaginative encounter*—an engagement with constraints, possibilities, and knowledge from multiple traditions (Western classical, Islamic mysticism, oral traditions, technology design).

The Bestiary itself consists of a collection of *creatures*—personified compositional tools conceptualized as autonomous agents with distinct perspectives and approaches to musical thinking. These creatures are not mechanical black boxes but rather collaborators with explicit aesthetic and philosophical commitments. Alongside the creatures, the project documents research into pedagogical frameworks (historical and contemporary), original compositions exploring these ideas in practice, and a set of MuseScore plugins that implement the creatures as software.

## Live Site

The live Compositional Bestiary can be viewed at: **https://nickjoedaly.github.io/compositional-bestiary/**

## Tech Stack

- **Astro** — Static site generation with support for content collections
- **MDX** — Markdown with embedded components for rich content
- **GitHub Pages** — Hosting via GitHub Actions deployment pipeline
- **Node.js** — Build and development environment

## Local Development

### Setup

```bash
npm install
```

### Development Server

```bash
npm run dev
```

This starts a local development server (typically at `http://localhost:3000`) with hot reloading.

### Build for Production

```bash
npm run build
```

This generates the static site in the `dist/` directory.

## Content Editing

The Compositional Bestiary is organized into four content collections:

### `src/content/research/`

Markdown files documenting the theoretical and historical context for the project:

- **Chapters**: Each markdown file represents a chapter exploring a specific aspect of composition pedagogy
- **Frontmatter fields**: `title`, `description`, `type` (e.g., "chapter"), `status` ("draft", "in-progress", "complete"), `order` (for ordering in navigation), `tags` (for categorization)
- **Creating new chapters**: Add a new markdown file with proper YAML frontmatter and body content

Example:
```markdown
---
title: "Your Chapter Title"
description: "Brief description"
type: "chapter"
status: "draft"
order: 4
tags: ["tag1", "tag2"]
---

Your chapter content here...
```

### `src/content/works/`

Markdown files documenting original compositions:

- **Fields**: `title`, `description`, `instrumentation`, `year`, `duration`, `status`, `order`, `tags`
- **Format**: Document each work with frontmatter and descriptive body explaining the work's concept and approach
- **Creating new works**: Add a markdown file following the same pattern

Example:
```markdown
---
title: "Work Title"
description: "Description of the work"
instrumentation: "Chamber Ensemble"
year: 2024
duration: "10'"
status: "complete"
order: 5
tags: ["chamber", "work-type"]
---

Description and context for the work...
```

### `src/content/tools/`

Markdown files documenting tools and plugins in development:

- **Fields**: `title`, `description`, `type` ("library", "plugin", etc.), `status`, `order`, `tags`
- **Purpose**: Document the technical and conceptual aspects of software tools for composition
- **Creating new tools**: Add a markdown file documenting the tool's architecture and use

### `src/content/book/`

Markdown files describing the creatures of the Bestiary:

- **Fields**: `title`, `description`, `type` ("creature"), `order`, `status`, `tags`, `relatedTools` (links to tool documentation)
- **Format**: Evocative prose descriptions of each creature, explaining its compositional philosophy and approach
- **Creating new creatures**: Add a markdown file with creature description and conceptual framework

Example:
```markdown
---
title: "Creature Name"
description: "What the creature does"
type: "creature"
order: 1
status: "draft"
tags: ["tag1", "tag2"]
relatedTools: ["plugin-name"]
---

Description of the creature, its approach, and how to work with it...
```

## Common Content Editing Workflows

### Adding a New Research Chapter

1. Create a new file in `src/content/research/` (e.g., `my-chapter.md`)
2. Add frontmatter with `type: "chapter"` and appropriate metadata
3. Write the chapter content
4. Update the `order` field to position it in the sequence
5. Commit and push to main; deployment happens automatically

### Adding a New Composition

1. Create a new file in `src/content/works/` (e.g., `new-composition.md`)
2. Include frontmatter with instrumentation, duration, year, and status
3. Write a thoughtful description of the work's concept
4. Commit and push to trigger automatic deployment

### Adding a New Creature

1. Create a new file in `src/content/book/` (e.g., `new-creature.md`)
2. Use `type: "creature"` in frontmatter
3. Write an evocative description of the creature's philosophy and approach
4. If the creature is implemented as a plugin, link it via `relatedTools`

## Deployment

The site is automatically deployed to GitHub Pages whenever you push to the `main` branch. The deployment workflow:

1. GitHub Actions triggers on push to `main`
2. Installs Node dependencies (`npm ci`)
3. Builds the static site (`npm run build`)
4. Uploads the `dist/` directory to GitHub Pages
5. Site is live at https://nickjoedaly.github.io/compositional-bestiary/

No manual deployment steps are necessary—just push and the site updates automatically.

## Directory Structure

```
compositional-bestiary-v2/
├── src/
│   ├── content/
│   │   ├── research/        # Pedagogical research and theory
│   │   ├── works/           # Composition documentation
│   │   ├── tools/           # Tool and plugin documentation
│   │   └── book/            # Creature descriptions
│   ├── components/          # Astro components
│   ├── layouts/             # Page layouts
│   └── pages/               # Static pages
├── public/                  # Static assets
├── dist/                    # Build output (generated)
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── package.json
├── astro.config.mjs
└── README.md
```

## Contributing

To contribute content or improvements:

1. Create a new branch for your work
2. Make changes to markdown files in `src/content/` or other project files
3. Test locally with `npm run dev`
4. Commit with clear messages
5. Push to main or open a pull request
6. Changes are automatically deployed once merged

## Questions & Support

For questions about the project, its theoretical framework, or how to add content, consult the research chapters and tool documentation included in the site itself. The Compositional Bestiary is designed to be self-documenting, with each section explaining its own conceptual foundations.
