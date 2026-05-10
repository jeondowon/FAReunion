export default function Checkbox({ checked, onChange, children, required, disabled }) {
  return (
    <div className={`cb-row ${disabled ? 'muted' : ''}`} onClick={() => !disabled && onChange(!checked)}>
      <span className={`cb ${checked ? 'checked' : ''}`} />
      <span className="cb-text">
        {children}
        {required && <span className="cb-required">*</span>}
      </span>
    </div>
  );
}
