# SALAH SQUAD — app source (MVP)

A mobile-first installable web app/PWA for personal Salah tracking and private friend groups.

## What works now
- Five-prayer daily checklist, progress percentage (high contrast white + emerald), weekly/monthly counts and full-day streak.
- Local persistence for profile, prayers, and group codes.
- Group create/join UI and invite-code copy (local mode).
- Firebase Auth Google sign-in scaffold, Firestore prayer sync and group creation/join scaffold.
- Responsive dark theme, service worker and manifest.

## Run locally
1. Install Node.js 20+.
2. `npm install`
3. `cp .env.example .env` (optional for local mode)
4. `npm run dev`

Build: `npm run build` (output in `dist/`).

## Enable Firebase
1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Authentication > Google provider.
3. Create Firestore database.
4. Copy Firebase Web app config into `.env` using `.env.example`.
5. Publish `firestore.rules` in Firestore Rules.
6. `npm run build`; deploy `dist` to Firebase Hosting, Netlify, or Vercel.

## Important honest MVP limitations
- Without Firebase keys, this is local-only. Local groups do not sync to friends' devices.
- Firebase mode currently syncs personal prayer records and has basic group create/join scaffolding. A production-grade friend leaderboard needs membership UID arrays, callable Cloud Functions/server-side score aggregation, invite acceptance flows, abuse controls, and thorough security-rule tests. Do not deploy as a public competitive app until these are completed.
- Prayer check-ins are self-reported, not independently verified. Avoid ranking people as morally better; keep opt-in/private encouragement.
- This is source code, not a published Play Store app or hosted live service.
