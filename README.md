# Campus Grid — React

A React (Vite) build of **Evergreen Campus Hub**: the marketing landing page plus the core **Student Life Score (SLS)** product — identity intake → 60-question assessment → scored results with tiers, badges, and recommendations.

This README is written for the whole team, not just whoever set the project up — follow it top to bottom on a fresh clone and you should be running locally in a few minutes.

---

## 1. Prerequisites

Install these before touching the project:

| Tool | Version | Check with |
|---|---|---|
| [Node.js](https://nodejs.org/) | 18.x or newer (20.x recommended) | `node -v` |
| npm | comes with Node (10.x+) | `npm -v` |
| [Git](https://git-scm.com/) | any recent version | `git --version` |

A code editor with an ESLint/Prettier extension is recommended (VS Code works well) but not required.

You do **not** need a database or backend running to work on the frontend — see [Section 6](#6-data--backend-status) for where that stands.

---

## 2. Getting the project

```bash
git clone https://github.com/<your-org-or-username>/CampusGrid.git
cd CampusGrid
```

If you already have the folder (e.g. from a zip), just `cd` into it — same steps from here on.

---

## 3. Installing packages

From the project root (the folder with `package.json` in it):

```bash
npm install
```

This reads `package.json` and downloads everything into a local `node_modules` folder — `react`, `react-dom`, `react-router-dom`, `vite`, and `@vitejs/plugin-react`.

**Do not commit `node_modules`.** It's already covered by `.gitignore` — everyone runs their own `npm install` after cloning/pulling instead.

### If someone adds a new package

Whoever adds a dependency should run:

```bash
npm install <package-name>
```

...and commit the updated `package.json` **and** `package-lock.json`. Everyone else then just needs to run `npm install` again after pulling to pick it up — don't install packages manually one-by-one, always go through `npm install <name>` so the lockfile stays accurate for the whole team.

---

## 4. Running the app locally

```bash
npm run dev
```

Vite will print a local URL, usually:

```
http://localhost:5173
```

Open that in your browser. Changes to any file in `src/` hot-reload automatically — no need to restart the server.

Other useful commands:

```bash
npm run build     # production build, output goes to dist/
npm run preview   # serve the production build locally to sanity-check it
```

---

## 5. Troubleshooting installs

These are real issues the team has hit — check here before asking in chat.

### `Cannot find module` / `Failed to resolve import` when running `npm run dev`

Usually means `node_modules` is missing or incomplete.

```bash
npm install
```

If it's a specific package (e.g. `react-router-dom`) that's missing from `node_modules` even though it's in `package.json`, do a clean reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

On Windows (PowerShell), delete the `node_modules` folder and `package-lock.json` file in File Explorer, or:

```powershell
rmdir /s /q node_modules
del package-lock.json
```

Then `npm install` again.

### `404 Not Found` on a package from `registry.npmjs.org`

This means npm is not able to fetch that package from the public registry — usually a misconfigured registry URL, a stale `.npmrc`, or a VPN/firewall/antivirus blocking the request. Check which registry you're pointed at:

```bash
npm config get registry
```

It should print:

```
https://registry.npmjs.org/
```

If it prints anything else, reset it:

```bash
npm config set registry https://registry.npmjs.org/
```

Also check for a `.npmrc` overriding things, in the project folder and your home folder:

```bash
cat .npmrc              # macOS/Linux
type .npmrc              # Windows

cat ~/.npmrc              # macOS/Linux
type %USERPROFILE%\.npmrc # Windows
```

If the registry is correct and it still 404s on one specific package, try disabling VPN/antivirus temporarily and retry, or clear npm's cache:

```bash
npm cache clean --force
npm install
```

### Port `5173` already in use

Something else is already running on that port. Either stop it, or let Vite pick another port when prompted (`y`), or run:

```bash
npm run dev -- --port 5174
```

---

## 6. Data / backend status

**Right now the app has no backend or database.** All state (identity form answers, assessment answers, computed results) lives in React state + the browser's `localStorage`, managed in `src/context/AppContext.jsx`. That means:

- Data does **not** sync across devices or browsers.
- There's no real Login/Register yet — those buttons are placeholders.
- The Dashboard (department/faculty/campus analytics from the brand doc) can't be built until there's a shared data store to aggregate.

**Planned stack** once we wire up a backend: **Supabase** (Postgres + built-in Auth + client SDK), hosted on **Vercel/Netlify** for the frontend. If/when that lands, this section will be updated with a `.env.local` setup step (Supabase URL + anon key) — nobody needs to do anything for that yet.

---

## 7. Project structure

```
CampusGrid/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx              # router + layout
    ├── index.css
    ├── assets/
    │   └── hero-image.png
    ├── context/
    │   └── AppContext.jsx   # identity/answers/results state + localStorage
    ├── data/
    │   ├── questions.js      # 60-question bank, 6 sections
    │   └── results.js        # tiers, badges, recommendation logic
    ├── components/           # landing page sections
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── Stats.jsx
    │   ├── About.jsx
    │   ├── MissionVision.jsx
    │   ├── Pillars.jsx
    │   ├── SLS.jsx
    │   ├── Features.jsx
    │   ├── Testimonials.jsx
    │   ├── FAQ.jsx
    │   ├── CTA.jsx
    │   └── Footer.jsx
    └── pages/
        ├── Home.jsx           # composes the landing sections
        ├── IdentityPage.jsx
        ├── AssessmentPage.jsx
        └── ResultsPage.jsx
```

## App flow

- **`/`** — Landing page (hero, stats, pillars, features, testimonials, FAQ).
- **`/identity`** — Student Identity Page: basic info, campus involvement, interests, identity statement, community pledge.
- **`/assessment`** — SLS assessment: 6 sections × 10 questions (60 total), one section at a time with a progress bar, ending with the "missed opportunities" question.
- **`/results`** — Computed Student Life Score (0–600 → 0–100%), result tier (Disconnected Student → Campus Legend) with badge and color, per-section score breakdown, personalized recommendations, and the missed-opportunity insight.

## Scoring

Every question has 5 answer options worth **10 / 8 / 6 / 4 / 2** points. Section score = (points earned ÷ section max) × 100. Overall score = (total points ÷ 600) × 100, mapped to the 8 result tiers from the brand doc (Campus Legend, Campus Insider, Connected Leader, Opportunity Explorer, Active Participant, Emerging Explorer, Campus Observer, Disconnected Student). See `src/data/questions.js` and `src/data/results.js`.

---

## 8. Working as a team — git workflow

1. **Pull before you start:**
   ```bash
   git checkout main
   git pull
   ```
2. **Create a branch per feature/fix** — don't commit straight to `main`:
   ```bash
   git checkout -b feature/dashboard-page
   ```
   Suggested prefixes: `feature/`, `fix/`, `chore/`.
3. **Commit small, working changes** with clear messages:
   ```bash
   git add .
   git commit -m "Add department breakdown to dashboard"
   ```
4. **Push and open a Pull Request** against `main` — don't merge your own PR without at least one other person reviewing it if possible.
5. **Pull the latest `main` and re-run `npm install`** any time you pull changes, in case `package.json` changed.

### Before opening a PR

- Run `npm run build` locally to make sure the production build doesn't error.
- Double check you haven't committed `node_modules`, `.env`, or `dist/`.

---

## 9. Notes / next steps

- `login.html`, `dashboard.html`, `profile.html`, `communities.html`, `oppurtunities.html`, `contact.html` from the original static repo were empty, so "Login," "Communities," "Events," and "Contact" nav links still point to `#`. Natural next additions:
  - A **Dashboard** page (individual insights, department/faculty/level/campus analytics — see the brand doc's "Campus Analytics Dashboard" section).
  - Digital badge display/collection (👑 🏆 ⭐ 🚀 🌱 🤝 📡 🎯 🔥 💡).
  - Real Auth (login/register) backed by Supabase instead of `localStorage`.
- Recommendations are currently generated by ranking the 6 section scores lowest → highest and returning canned copy for the weakest ones; swap in more granular logic if you want recommendations tied to individual questions rather than whole sections.

## 10. Questions

If you're stuck on something not covered here, ask in the team chat before spending too long — someone may have already hit the same issue.