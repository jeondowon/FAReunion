import { useState, useMemo } from 'react';
import { TopNav, AlumniCard, Icon, Select } from '../components';
import { ALUMNI, INDUSTRIES } from '../data/alumni';

const FILTERS = ['All', ...INDUSTRIES.slice(0, 4), 'Class of 2020+', 'United States'];

export default function Network({ go, user }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    let list = ALUMNI;
    if (query) {
      const q = query.toLowerCase();
      list = list.filter((a) =>
        [a.name, a.role, a.company, ...a.tags].join(' ').toLowerCase().includes(q)
      );
    }
    if (active === 'Class of 2020+') list = list.filter((a) => a.year >= 2020);
    else if (active === 'United States') list = list.filter((a) => a.country === 'United States');
    else if (active !== 'All') list = list.filter((a) => a.industry === active);
    return list;
  }, [query, active]);

  return (
    <>
      <TopNav active="network" go={go} user={user} />
      <div className="page-wrap fade-in">
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 40 }}>Global Vanguard Network</h1>
          <p className="muted" style={{ marginTop: 8 }}>1,234 alumni across 34 countries</p>
        </div>

        <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
          <div className="search-pill" style={{ flex: 1 }}>
            <Icon name="search" size={18} color="#6B7280" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, company, role, skills…"
            />
          </div>
          <button className="btn btn-outline">
            <Icon name="filter" size={16} /> Filters
          </button>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-pill ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="row-between" style={{ marginBottom: 16 }}>
          <div className="muted small">
            Showing <strong style={{ color: 'var(--text)' }}>{filtered.length}</strong> results
          </div>
          <div className="row" style={{ gap: 8 }}>
            <span className="muted small">Sort:</span>
            <Select style={{ width: 160, padding: '8px 36px 8px 12px' }}>
              <option>Most Recent</option>
              <option>Class Year</option>
              <option>Name A→Z</option>
            </Select>
          </div>
        </div>

        <div className="grid grid-3">
          {filtered.map((a) => (
            <AlumniCard key={a.name} alumni={a} onView={() => go('profile')} />
          ))}
        </div>

        <div className="pager">
          <button disabled><Icon name="chevron-left" size={14} /></button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button><Icon name="chevron-right" size={14} /></button>
        </div>
      </div>
    </>
  );
}
