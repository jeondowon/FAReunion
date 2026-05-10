import { useState } from 'react';
import Icon from '../ui/Icon';

const SCREENS = [
  { id: 'login',     label: '1. Login' },
  { id: 'onb-1',    label: '2. Verify Vanguard' },
  { id: 'onb-2',    label: '3. Privacy Consent' },
  { id: 'onb-3',    label: '4. Basic Info' },
  { id: 'onb-4',    label: '5. Contact & SNS' },
  { id: 'onb-5',    label: '6. Career' },
  { id: 'onb-6',    label: '7. Interests & Skills' },
  { id: 'onb-7',    label: '8. Privacy Settings' },
  { id: 'home',      label: '9. Home' },
  { id: 'network',   label: '10. Network' },
  { id: 'community', label: '11. Community' },
  { id: 'profile',   label: '12. Profile' },
];

export default function ScreenJumper({ screen, setScreen }) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`screen-jumper ${open ? '' : 'collapsed'}`}>
      {!open && (
        <button className="sj-fab" onClick={() => setOpen(true)} aria-label="Show screens">
          <Icon name="menu" size={20} />
        </button>
      )}
      {open && (
        <>
          <button className="sj-toggle" onClick={() => setOpen(false)} aria-label="Hide">
            <Icon name="x" size={14} />
          </button>
          <div className="sj-title">Screens</div>
          <div className="sj-list">
            {SCREENS.map((s) => (
              <button
                key={s.id}
                className={`sj-item ${screen === s.id ? 'active' : ''}`}
                onClick={() => setScreen(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
