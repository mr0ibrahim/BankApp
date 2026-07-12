import { routes } from '../routes.js';

export function AppNavigation({ activePath }) {
  return (
    <nav className="app-navigation" aria-label="BankApp pages">
      {routes.map(route => (
        <a key={route.path} className={activePath === route.path ? 'active' : ''} href={route.path}>
          {route.label}
        </a>
      ))}
    </nav>
  );
}
