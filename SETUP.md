# How to Push This to GitHub & Enable GitHub Pages

## Step 1: Install Git & GitHub CLI (if you don't have them)

**Mac:**
```bash
brew install git gh
```

**Windows:**
Download from https://git-scm.com and https://cli.github.com

## Step 2: Authenticate with GitHub

```bash
gh auth login
```
Follow the prompts (choose GitHub.com, HTTPS, and authenticate via browser).

## Step 3: Navigate to the site folder

Copy the `phd-site` folder from your Downloads/outputs to wherever you want it on your computer, then:
```bash
cd /path/to/phd-site
```

## Step 4: Create the GitHub repo and push

```bash
# Create a new repo on GitHub (public, so GitHub Pages works for free)
gh repo create compositional-bestiary --public --source=. --push

# That's it! One command creates the repo, sets the remote, and pushes.
```

If you already initialized git (which we did), and just need to add the remote and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/compositional-bestiary.git
git commit -m "Initial commit: PhD website for The Compositional Bestiary"
git push -u origin main
```

## Step 5: Enable GitHub Pages

**Option A — GitHub CLI (fastest):**
```bash
gh api repos/YOUR_USERNAME/compositional-bestiary/pages \
  -X POST \
  -f source.branch=main \
  -f source.path=/
```

**Option B — Browser:**
1. Go to https://github.com/YOUR_USERNAME/compositional-bestiary
2. Click **Settings** (tab at top)
3. Scroll to **Pages** in the left sidebar
4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes. Your site will be live at:
   `https://YOUR_USERNAME.github.io/compositional-bestiary/`

## Step 6 (Optional): Custom Domain

If you want to use a custom domain (e.g., `bestiary.nickdalycreative.com`):

1. In GitHub Pages settings, enter your custom domain
2. Add a CNAME record with your DNS provider:
   - Type: CNAME
   - Name: bestiary (or whatever subdomain)
   - Value: YOUR_USERNAME.github.io
3. GitHub will auto-generate a CNAME file in your repo

## Ongoing: How to Update the Site

```bash
# Make your changes, then:
git add -A
git commit -m "Description of what changed"
git push
```

GitHub Pages will automatically rebuild within ~60 seconds.

## Repository Structure

```
compositional-bestiary/
├── index.html          # Dashboard
├── thesis.html         # Chapters
├── framework.html      # Theory
├── bibliography.html   # Sources
├── portfolio.html      # Compositions
├── bestiary.html       # Creatures
├── plugins.html        # MuseScore plugins
├── timeline.html       # Schedule
├── funding.html        # Grants
├── updates.html        # Blog
├── about.html          # Bio
├── styles.css          # Styles
├── assets/             # Media (images, audio, scores, PDFs)
├── drafts/             # Private WIP (chapters, notes)
├── plugins/            # Plugin source code
├── data/               # Research data, JSON schemas
└── README.md           # Repo description
```
