import Avatar from './ui/Avatar';
import Button from './ui/Button';
import Tag from './ui/Tag';

export default function AlumniCard({ alumni, onView }) {
  return (
    <div className="card card-hover" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Avatar name={alumni.name} size="md" />
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 600, fontFamily: 'Poppins' }}>{alumni.name}</div>
          <div className="tiny muted" style={{ marginTop: 2 }}>
            {alumni.role} @ {alumni.company}
          </div>
        </div>
      </div>
      <div className="tiny muted" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span>Class of {alumni.year}</span>
        <span className="dot-separator" />
        <span>{alumni.flag} {alumni.city}</span>
      </div>
      <div className="tag-group">
        {alumni.tags.slice(0, 3).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <Button variant="outline" size="sm" onClick={onView}>
        View Profile
      </Button>
    </div>
  );
}
