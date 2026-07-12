export function PhoneShell({ title, variant = 'light', children }) {
  return (
    <main className="page-shell">
      <p className="device-title">{title}</p>
      <section className={`phone ${variant === 'dark' ? 'dark-phone' : ''}`}>{children}</section>
    </main>
  );
}

export function StatusBar({ dark = true }) {
  return (
    <div className={`status-bar ${dark ? 'status-dark' : 'status-light'}`}>
      <span>12:48</span>
      <div className="status-icons" aria-hidden="true">
        <span>▮▮▮</span>
        <span>⌁</span>
        <span>▰</span>
      </div>
    </div>
  );
}

export function HomeIndicator({ light = false }) {
  return <div className={`home-indicator ${light ? 'light' : ''}`} />;
}
