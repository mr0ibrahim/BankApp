import { Icon } from '../components/Icons.jsx';
import { HomeIndicator, PhoneShell, StatusBar } from '../components/PhoneShell.jsx';
import { spendingBars } from '../data/bankData.js';

export function DashboardPage() {
  return (
    <PhoneShell title="iPhone 11 Pro / X - 2">
      <div className="top-panel">
        <StatusBar />
        <button className="round-icon" aria-label="Notifications"><Icon name="bell" size={17} /></button>
        <span className="spark panel-spark-a" aria-hidden="true">✦</span>
        <span className="spark panel-spark-b" aria-hidden="true">✦</span>
        <p>General balance</p>
        <h2>$ 1,286.00</h2>
        <div className="currency-tabs" aria-label="Currency selector">
          <button>$ Dollars</button>
          <span>€ Euro</span>
          <span>£ Pounds</span>
        </div>
      </div>

      <main className="content">
        <div className="section-head">
          <h3>Money spent</h3>
          <button>This month⌄</button>
        </div>
        <div className="chart" aria-label="Monthly spending chart">
          {spendingBars.map((bar, index) => (
            <div className="bar-wrap" key={`${bar.day}-${index}`}>
              {bar.label && <span className="tooltip">{bar.label}</span>}
              <i style={{ height: `${bar.value / 10}px` }} className={bar.active ? 'active' : ''} />
              <small>{bar.day}</small>
            </div>
          ))}
        </div>
      </main>

      <nav className="bottom-nav" aria-label="Mobile app navigation">
        <Icon name="home" />
        <Icon name="card" />
        <button aria-label="Scan"><Icon name="expand" size={20} /></button>
        <Icon name="sliders" className="active-nav" />
        <Icon name="settings" />
      </nav>
      <HomeIndicator />
    </PhoneShell>
  );
}
