function CardChip() {
  return (
    <span className="chip" aria-hidden="true">
      <span />
    </span>
  );
}

export function BankCard({ compact = false, className = '', number = '4256 1245 3200' }) {
  return (
    <div className={`bank-card ${className} ${compact ? 'compact-card' : ''}`}>
      <CardChip />
      <span className="spark spark-a" aria-hidden="true">✦</span>
      <span className="spark spark-b" aria-hidden="true">✦</span>

      {compact ? (
        <>
          <div className="card-number" aria-label="Card number ending with hidden digits">
            <b>4321</b>
            <b>4567</b>
            <b>7896</b>
            <b>••••</b>
          </div>
          <p className="valid">Valid thru<br /><strong>01/28</strong></p>
          <p className="cvv">CVV<br /><strong>690</strong></p>
        </>
      ) : (
        <>
          <small>Card</small>
          <p>{number}</p>
        </>
      )}
    </div>
  );
}
