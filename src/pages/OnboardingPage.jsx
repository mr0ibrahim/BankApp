import { BankCard } from '../components/BankCard.jsx';
import { HomeIndicator, PhoneShell, StatusBar } from '../components/PhoneShell.jsx';
import { onboardingCards } from '../data/bankData.js';

export function OnboardingPage() {
  return (
    <PhoneShell title="iPhone 11 Pro / X - 1" variant="dark">
      <StatusBar />
      <div className="orb orb-top" />
      <div className="orb orb-bottom" />
      <span className="spark big-spark" aria-hidden="true">✦</span>
      <span className="spark mid-spark" aria-hidden="true">✦</span>

      <div className="floating-cards">
        {onboardingCards.map(card => (
          <BankCard key={card.id} className={card.className} number={card.number} />
        ))}
      </div>

      <div className="intro-copy">
        <h1>Make with you money<br />move with you</h1>
        <p>Most of the things in our app are<br />managed with gestures</p>
      </div>

      <a className="primary-button" href="/dashboard">Get started</a>
      <HomeIndicator light />
    </PhoneShell>
  );
}
