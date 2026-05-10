import { useState } from 'react';
import OnbShell from './OnbShell';
import Checkbox from '../../components/ui/Checkbox';

export default function OnbPrivacy({ onBack, onContinue }) {
  const [name, setName] = useState(true);
  const [year, setYear] = useState(true);
  const [major, setMajor] = useState(true);
  const [showCard, setShowCard] = useState(true);
  const [final, setFinal] = useState(false);

  return (
    <OnbShell
      step={7}
      title="Privacy Settings"
      subtitle="Control what others can see"
      onBack={onBack}
      onContinue={onContinue}
      canContinue={final}
      ctaLabel="Complete Setup"
    >
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontFamily: 'Poppins', fontWeight: 600, marginBottom: 8 }}>Basic Info Visibility</div>
        <Checkbox checked={name}  onChange={setName}>Name</Checkbox>
        <Checkbox checked={year}  onChange={setYear}>Graduation Year</Checkbox>
        <Checkbox checked={major} onChange={setMajor}>Major</Checkbox>
      </div>
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontFamily: 'Poppins', fontWeight: 600, marginBottom: 8 }}>Network Visibility</div>
        <Checkbox checked={showCard} onChange={setShowCard}>Show my card in the Network tab</Checkbox>
      </div>
      <div className="info-box-bordered" style={{ marginBottom: 22, fontSize: 13, color: 'var(--text-gray)' }}>
        Career, contact, interests, and files you entered will be visible as-is to verified alumni. Leave them blank in the previous steps if you prefer not to share.
      </div>
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
        <Checkbox checked={final} onChange={setFinal} required>
          I have reviewed all my privacy settings and agree to proceed.
        </Checkbox>
        {!final && (
          <div className="tiny muted" style={{ marginLeft: 30, marginTop: -4 }}>
            You must check this box to complete setup.
          </div>
        )}
      </div>
    </OnbShell>
  );
}
