import { useMemo } from 'react';

const GRADIENTS = [
  'linear-gradient(135deg,#1B3A6B,#0F2347)',
  'linear-gradient(135deg,#2D5A9E,#1B3A6B)',
  'linear-gradient(135deg,#3F6FAB,#0F2347)',
  'linear-gradient(135deg,#0F2347,#3A4F75)',
  'linear-gradient(135deg,#FFC72A,#E0A814)',
  'linear-gradient(135deg,#1B3A6B,#2D5A9E)',
];

export default function Avatar({ name = 'FA', size = 'md', color }) {
  const { initials, bg, isGold } = useMemo(() => {
    const bg = color || GRADIENTS[name.charCodeAt(0) % GRADIENTS.length];
    return {
      initials: name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase(),
      bg,
      isGold: bg.includes('FFC72A'),
    };
  }, [name, color]);

  return (
    <span
      className={`avatar avatar-${size}`}
      style={{ background: bg, color: isGold ? '#0F2347' : 'white' }}
    >
      {initials}
    </span>
  );
}
