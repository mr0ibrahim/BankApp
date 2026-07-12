const iconMap = {
  bell: '♧',
  car: '▱',
  card: '▭',
  cart: '⌁',
  expand: '⌗',
  home: '⌂',
  settings: '⚙',
  sliders: '≋',
};

export function Icon({ name, size = 19, className = '' }) {
  return (
    <span className={`icon ${className}`} style={{ fontSize: size }} aria-hidden="true">
      {iconMap[name] ?? '•'}
    </span>
  );
}
