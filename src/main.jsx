import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';


const Icon = ({ children, size = 19, className = '' }) => <span className={`icon ${className}`} style={{ fontSize: size }}>{children}</span>;
const Bell = props => <Icon {...props}>♧</Icon>;
const Car = props => <Icon {...props}>▱</Icon>;
const CreditCard = props => <Icon {...props}>▭</Icon>;
const Home = props => <Icon {...props}>⌂</Icon>;
const Maximize = props => <Icon {...props}>⌗</Icon>;
const Settings = props => <Icon {...props}>⚙</Icon>;
const ShoppingCart = props => <Icon {...props}>⌁</Icon>;
const SlidersHorizontal = props => <Icon {...props}>≋</Icon>;

const cards = [
  { id: '4256 1245 3200 4512', className: 'card-one' },
  { id: '4256 1245 3200 3200', className: 'card-two' },
];

const avatars = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&q=80',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=96&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=96&q=80',
];

const bars = [560, 870, 180, 455, 320, 720, 555, 505];

const transactions = [
  { title: 'Delivery', date: 'Wednesday', amount: '- $4,99', icon: ShoppingCart },
  { title: 'Taxi', date: 'Monday', amount: '- $14,87', icon: Car },
  { title: 'Shopping', date: 'Last week', amount: '- $26,03', icon: ShoppingCart },
];

function StatusBar({ dark = true }) {
  return (
    <div className={`status-bar ${dark ? 'status-dark' : 'status-light'}`}>
      <span>12:48</span>
      <div className="status-icons"><span>▮▮▮</span><span>⌁</span><span>▰</span></div>
    </div>
  );
}

function CardChip() {
  return <span className="chip"><span /></span>;
}

function BankCard({ compact = false, className = '' }) {
  return (
    <div className={`bank-card ${className} ${compact ? 'compact-card' : ''}`}>
      <CardChip />
      <span className="spark spark-a">✦</span>
      <span className="spark spark-b">✦</span>
      {compact ? (
        <>
          <div className="card-number"><b>4321</b><b>4567</b><b>7896</b><b>••••</b></div>
          <p className="valid">Valid thru<br /><strong>01/28</strong></p>
          <p className="cvv">CVV<br /><strong>690</strong></p>
        </>
      ) : (
        <><small>Card</small><p>{className.includes('two') ? '4256 1245 3200 4512' : '4256 1245 3200'}</p></>
      )}
    </div>
  );
}

function OnboardingScreen() {
  return (
    <section className="phone dark-phone onboarding">
      <StatusBar />
      <div className="orb orb-top" /><div className="orb orb-bottom" />
      <span className="spark big-spark">✦</span><span className="spark mid-spark">✦</span>
      <div className="floating-cards">{cards.map(card => <BankCard key={card.id} className={card.className} />)}</div>
      <div className="intro-copy"><h1>Make with you money<br />move with you</h1><p>Most of the things in our app are<br />managed with gestures</p></div>
      <button className="primary-button">Get started</button><div className="home-indicator light" />
    </section>
  );
}

function DashboardScreen() {
  return (
    <section className="phone dashboard">
      <div className="top-panel"><StatusBar /><button className="round-icon"><Bell size={17} /></button><span className="spark panel-spark-a">✦</span><span className="spark panel-spark-b">✦</span><p>General balance</p><h2>$ 1,286.00</h2><div className="currency-tabs"><button>$ Dollars</button><span>€ Euro</span><span>£ Pounds</span></div></div>
      <main className="content"><div className="section-head"><h3>Money spent</h3><button>This month⌄</button></div><div className="chart"><span className="tooltip">$ 842.3</span>{bars.map((bar, index) => <div className="bar-wrap" key={bar + index}><i style={{ height: `${bar / 10}px` }} className={index === 5 ? 'active' : ''} /><small>{[1, 5, 10, 15, 20, 25, 30][index] || ''}</small></div>)}</div></main>
      <nav className="bottom-nav"><Home size={19} /><CreditCard size={19} /><button><Maximize size={20} /></button><SlidersHorizontal size={19} className="active-nav" /><Settings size={19} /></nav><div className="home-indicator" />
    </section>
  );
}

function ActivityScreen() {
  return (
    <section className="phone activity"><StatusBar dark={false} /><div className="card-stack"><BankCard compact className="main-card" /><span className="shadow-card one" /><span className="shadow-card two" /></div><main className="activity-content"><h3>Recent transfers</h3><div className="avatar-row">{avatars.map(src => <img key={src} src={src} alt="Recent transfer contact" />)}</div><h3>Transactions</h3><div className="transactions">{transactions.map(({ title, date, amount, icon: Icon }) => <article key={title} className="transaction"><span><Icon size={18} /></span><div><h4>{title}</h4><p>{date}</p></div><strong>{amount}</strong></article>)}</div></main><div className="home-indicator" /></section>
  );
}

function App() {
  return <div className="app-shell"><div className="screen-frame"><p>iPhone 11 Pro / X - 1</p><OnboardingScreen /></div><div className="screen-frame"><p>iPhone 11 Pro / X - 2</p><DashboardScreen /></div><div className="screen-frame"><p>iPhone 11 Pro / X - 3</p><ActivityScreen /></div></div>;
}

createRoot(document.getElementById('root')).render(<App />);
