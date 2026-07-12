# BankApp React UI Documentation

## Overview
BankApp is a polished React/Vite prototype that recreates three mobile banking screens from the supplied design reference. The implementation focuses on clean component structure, reusable UI building blocks, responsive presentation, and maintainable styling.

## Screens

### 1. Onboarding Screen
- Dark premium banking theme.
- Two floating debit/credit card mockups.
- Decorative orbital lines and spark shapes.
- Main value proposition copy.
- Primary call-to-action button: **Get started**.

### 2. Balance Dashboard
- Header panel with general balance: **$ 1,286.00**.
- Notification icon.
- Currency selector tabs for Dollars, Euro, and Pounds.
- Monthly spending section.
- Custom bar chart with active highlighted bar and tooltip.
- Bottom mobile navigation with five actions.

### 3. Activity & Transactions
- Compact card preview with masked card number, expiry date, and CVV display.
- Recent transfer avatar carousel.
- Transaction list for delivery, taxi, and shopping.
- Negative transaction values styled in red.

## Technical Details
- Framework: React.
- Build tool: Vite.
- Icons: Lightweight inline React icon components (no external icon dependency).
- Styling: Plain CSS with custom properties and reusable classes.
- Entry point: `src/main.jsx`.
- Main stylesheet: `src/styles.css`.

## Component Organization
- `StatusBar`: shared iPhone-style status row.
- `BankCard`: reusable card component with standard and compact modes.
- `OnboardingScreen`: first screen layout.
- `DashboardScreen`: balance and spending analytics layout.
- `ActivityScreen`: card, transfers, and transaction layout.
- `App`: renders the three framed phone screens side by side.

## Features
- Component-driven React code.
- Mobile-first screen dimensions matching iPhone 11 Pro / X proportions.
- Responsive wrapper that stacks screens on narrower displays.
- Reusable design tokens for colors and typography.
- Carefully layered shadows, gradients, rounded panels, and decorative elements.
- No backend dependency; all demo data is local static data.

## Available Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Future Enhancements
- Add routing for each mobile screen.
- Connect balance and transaction data to an API.
- Add animation for card gestures and dashboard transitions.
- Add unit/component tests with React Testing Library.
- Add localization support for Arabic and English banking content.
