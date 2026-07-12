import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppNavigation } from './components/AppNavigation.jsx';
import { getRoute } from './routes.js';
import './styles.css';

function App() {
  const route = getRoute(window.location.pathname);
  const Page = route.Component;

  return (
    <div className="app-shell">
      <AppNavigation activePath={route.path} />
      <Page />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
