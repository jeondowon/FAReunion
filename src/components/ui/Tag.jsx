export default function Tag({ children, onRemove, variant = 'default' }) {
  return (
    <span className={`tag ${variant !== 'default' ? `tag-${variant}` : ''} ${onRemove ? 'tag-removable' : ''}`}>
      {children}
      {onRemove && (
        <button onClick={onRemove} aria-label="Remove">×</button>
      )}
    </span>
  );
}
