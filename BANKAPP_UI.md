# BankApp React UI Documentation

## Overview
BankApp is a React/Vite prototype that recreates the three supplied mobile banking designs as **three separate pages**, not one combined preview screen. Each page renders a single iPhone-style interface and the top navigation lets reviewers move between them.

## Pages

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | Onboarding | Welcome screen with floating cards and the primary get-started CTA. |
| `/dashboard` | Dashboard | Balance, currency selector, spending chart, and bottom app navigation. |
| `/activity` | Activity | Card preview, recent transfer contacts, and transaction list. |

## Screen Details

### 1. Onboarding Page
- Dark premium banking theme.
- Two layered payment card mockups.
- Decorative orbit lines and spark details.
- Main headline and short supporting text.
- CTA links to `/dashboard`.

### 2. Dashboard Page
- Balance header showing **$ 1,286.00**.
- Notification action.
- Currency selector tabs for Dollars, Euro, and Pounds.
- Monthly spending chart with highlighted active bar and tooltip.
- Mobile bottom navigation styled like the reference.

### 3. Activity Page
- Compact bank card with masked number, expiry date, and CVV.
- Recent transfer avatars.
- Transaction rows for Delivery, Taxi, and Shopping.
- Negative transaction values styled in red.

## Project Structure

```text
src/
  components/
    AppNavigation.jsx
    BankCard.jsx
    Icons.jsx
    PhoneShell.jsx
  data/
    bankData.js
  pages/
    ActivityPage.jsx
    DashboardPage.jsx
    OnboardingPage.jsx
  main.jsx
  routes.js
  styles.css
```

## Component Responsibilities
- `AppNavigation`: top-level page navigation between the three routes.
- `PhoneShell`: shared phone frame wrapper, title, status bar helpers, and home indicator helpers.
- `BankCard`: reusable standard/compact payment card component.
- `Icons`: dependency-free icon component used by navigation and transactions.
- `OnboardingPage`, `DashboardPage`, `ActivityPage`: independent page-level screens.
- `bankData`: central static demo data for cards, contacts, spending, and transactions.
- `routes`: route definitions and route lookup helper.

## Technical Details
- Framework: React.
- Build tool: Vite.
- Styling: Plain CSS with design tokens, reusable utility classes, and responsive rules.
- External runtime dependencies: `react`, `react-dom`, and `vite` only.
- No backend dependency; all demo data is local static data.

## Available Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## How to Review the Three Pages
1. Run `npm install`.
2. Run `npm run dev`.
3. Open the local Vite URL.
4. Use the top navigation:
   - **Onboarding** for `/`.
   - **Dashboard** for `/dashboard`.
   - **Activity** for `/activity`.

## Future Enhancements
- Add React Router if deeper navigation behavior is needed.
- Connect balances and transactions to a banking API.
- Add card gesture animations.
- Add Arabic/English localization.
- Add visual regression tests for the three page states.
