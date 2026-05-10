import { useState } from 'react';
import { Input } from './Input';
import Tag from './Tag';

export default function TagInput({ value = [], onChange, placeholder, presets = [] }) {
  const [draft, setDraft] = useState('');
  const [focused, setFocused] = useState(false);

  const add = (text) => {
    const t = (text ?? draft).trim();
    if (t && !value.includes(t)) onChange([...value, t]);
    setDraft('');
  };

  const suggestions = presets.filter(
    (p) => !value.includes(p) && p.toLowerCase().includes(draft.toLowerCase()),
  );

  return (
    <div style={{ position: 'relative' }}>
      <Input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); add(); } }}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 150)}
        placeholder={placeholder}
      />
      {focused && suggestions.length > 0 && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4,
          background: 'white', border: '1px solid var(--border)', borderRadius: 8,
          boxShadow: 'var(--shadow-md)', maxHeight: 200, overflowY: 'auto', zIndex: 20,
        }}>
          {suggestions.map((s) => (
            <div
              key={s}
              onMouseDown={(e) => { e.preventDefault(); add(s); }}
              style={{ padding: '10px 14px', fontSize: 14, cursor: 'pointer', color: 'var(--text)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
            >
              {s}
            </div>
          ))}
        </div>
      )}
      {value.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
          {value.map((t) => (
            <Tag key={t} onRemove={() => onChange(value.filter((x) => x !== t))}>{t}</Tag>
          ))}
        </div>
      )}
    </div>
  );
}
