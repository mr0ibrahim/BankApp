import { ActivityPage } from './pages/ActivityPage.jsx';
import { DashboardPage } from './pages/DashboardPage.jsx';
import { OnboardingPage } from './pages/OnboardingPage.jsx';

export const routes = [
  { path: '/', label: 'Onboarding', Component: OnboardingPage },
  { path: '/dashboard', label: 'Dashboard', Component: DashboardPage },
  { path: '/activity', label: 'Activity', Component: ActivityPage },
];

export function getRoute(pathname) {
  return routes.find(route => route.path === pathname) ?? routes[0];
}
