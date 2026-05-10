import { useState } from 'react';
import OnbShell from './OnbShell';
import Field from '../../components/ui/Field';
import { Input } from '../../components/ui/Input';

export default function OnbVerify({ onContinue }) {
  const [v, setV] = useState('');
  const correct = v.trim().toLowerCase() === 'kadd';

  return (
    <OnbShell
      step={1}
      showBack={false}
      title="Verify you're a Vanguard"
      subtitle="Welcome to the FA Alumni Network — let's make sure you're one of us."
      onContinue={() => correct && onContinue()}
      canContinue={correct}
    >
      <div className="info-box" style={{ marginBottom: 20 }}>
        <strong style={{ display: 'block', marginBottom: 4 }}>Question</strong>
        What is the name of the theater located in the middle school building?
      </div>
      <Field hint="Hint: Not case-sensitive">
        <Input value={v} onChange={(e) => setV(e.target.value)} placeholder="Enter theater name" />
      </Field>
      {v && !correct && (
        <div className="tiny" style={{ color: 'var(--error)', marginTop: 8 }}>
          That doesn't match — try again.
        </div>
      )}
    </OnbShell>
  );
}
