import { BankCard } from '../components/BankCard.jsx';
import { Icon } from '../components/Icons.jsx';
import { HomeIndicator, PhoneShell, StatusBar } from '../components/PhoneShell.jsx';
import { transactions, transferContacts } from '../data/bankData.js';

export function ActivityPage() {
  return (
    <PhoneShell title="iPhone 11 Pro / X - 3">
      <StatusBar dark={false} />
      <div className="card-stack">
        <BankCard compact className="main-card" />
        <span className="shadow-card one" />
        <span className="shadow-card two" />
      </div>

      <main className="activity-content">
        <h3>Recent transfers</h3>
        <div className="avatar-row">
          {transferContacts.map(contact => (
            <img key={contact.id} src={contact.image} alt={contact.name} />
          ))}
        </div>

        <h3>Transactions</h3>
        <div className="transactions">
          {transactions.map(transaction => (
            <article key={transaction.id} className="transaction">
              <span><Icon name={transaction.icon} size={18} /></span>
              <div>
                <h4>{transaction.title}</h4>
                <p>{transaction.date}</p>
              </div>
              <strong>{transaction.amount}</strong>
            </article>
          ))}
        </div>
      </main>
      <HomeIndicator />
    </PhoneShell>
  );
}
