import { useState, useRef, useEffect } from 'react';
import Icon from '../ui/Icon';
import Avatar from '../ui/Avatar';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'network', label: 'Network' },
  { id: 'community', label: 'Community' },
  { id: 'profile', label: 'Profile' },
];

export default function TopNav({ active, go, user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  const openLogout = () => {
    setMenuOpen(false);
    setLogoutOpen(true);
  };

  return (
    <>
      <header className="topnav">
        <div className="topnav-inner">
          <img
            src="/assets/fa-main-logo.svg"
            alt="Faith Academy"
            style={{ height: 32, width: 'auto', cursor: 'pointer' }}
            onClick={() => go('home')}
          />
          <nav className="nav-links">
            {NAV_LINKS.map((l) => (
              <div
                key={l.id}
                className={`nav-link ${active === l.id ? 'active' : ''}`}
                onClick={() => go(l.id)}
              >
                {l.label}
              </div>
            ))}
          </nav>
          <button className="nav-icon-btn" aria-label="Notifications">
            <Icon name="bell" size={18} />
            <span className="dot" />
          </button>

          <div className="profile-menu-wrap" ref={menuRef}>
            <div
              className={`profile-avatar-btn${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              role="button"
              aria-label="Profile menu"
            >
              <Avatar name={user?.name || 'Maya Reyes'} size="sm" />
            </div>
            {menuOpen && (
              <div className="profile-menu">
                <div
                  className="profile-menu-item"
                  onClick={() => { setMenuOpen(false); go('profile'); }}
                >
                  <Icon name="user" size={15} />
                  My Profile
                </div>
                <div
                  className="profile-menu-item"
                  onClick={() => { setMenuOpen(false); go('privacy'); }}
                >
                  <Icon name="shield" size={15} />
                  Privacy Setting
                </div>
                <div className="profile-menu-divider" />
                <div className="profile-menu-item danger" onClick={openLogout}>
                  <Icon name="log-out" size={15} />
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {logoutOpen && (
        <div className="modal-overlay" onClick={() => setLogoutOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p className="modal-message">Do you really want to logout?</p>
            <div className="modal-actions">
              <button className="btn btn-outline btn-sm" onClick={() => setLogoutOpen(false)}>
                Cancel
              </button>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => { setLogoutOpen(false); go('login'); }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
