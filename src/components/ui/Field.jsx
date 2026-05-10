export default function Field({ label, hint, children, error }) {
  return (
    <div className="field">
      {label && <label className="field-label">{label}</label>}
      {children}
      {hint && <span className="field-hint">{hint}</span>}
      {error && <span className="field-hint" style={{ color: 'var(--error)' }}>{error}</span>}
    </div>
  );
}
