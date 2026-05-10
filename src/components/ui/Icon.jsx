export default function Icon({ name, size = 18, stroke = 1.8, color = 'currentColor' }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  switch (name) {
    case 'search':    return <svg {...props}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>;
    case 'bell':      return <svg {...props}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10 21a2 2 0 0 0 4 0" /></svg>;
    case 'filter':    return <svg {...props}><path d="M3 6h18M6 12h12M10 18h4" /></svg>;
    case 'edit':      return <svg {...props}><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>;
    case 'x':         return <svg {...props}><path d="M18 6 6 18M6 6l12 12" /></svg>;
    case 'check':     return <svg {...props}><path d="M20 6 9 17l-5-5" /></svg>;
    case 'eye':       return <svg {...props}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>;
    case 'comment':   return <svg {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
    case 'heart':     return <svg {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
    case 'arrow-right': return <svg {...props}><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
    case 'arrow-left':  return <svg {...props}><path d="M19 12H5M12 19l-7-7 7-7" /></svg>;
    case 'chevron-right': return <svg {...props}><path d="m9 18 6-6-6-6" /></svg>;
    case 'chevron-left':  return <svg {...props}><path d="m15 18-6-6 6-6" /></svg>;
    case 'plus':      return <svg {...props}><path d="M12 5v14M5 12h14" /></svg>;
    case 'users':     return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case 'briefcase': return <svg {...props}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;
    case 'trending':  return <svg {...props}><path d="m23 6-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>;
    case 'globe':     return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" /></svg>;
    case 'mail':      return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case 'phone':     return <svg {...props}><path d="M22 16.92V21a1 1 0 0 1-1.1 1 19 19 0 0 1-8.27-3 19 19 0 0 1-6-6A19 19 0 0 1 3.6 4.1 1 1 0 0 1 4.6 3h4.1a1 1 0 0 1 1 .75 12 12 0 0 0 .67 2.66 1 1 0 0 1-.23 1.05L8.42 9.18a16 16 0 0 0 6.4 6.4l1.72-1.72a1 1 0 0 1 1.05-.23 12 12 0 0 0 2.66.67 1 1 0 0 1 .75 1z" /></svg>;
    case 'map':       return <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    case 'menu':      return <svg {...props}><path d="M3 6h18M3 12h18M3 18h18" /></svg>;
    case 'google':    return (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.95l3.66-2.84z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.07.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
      </svg>
    );
    case 'linkedin':  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 17H5.67V9.5h2.67V17zM7 8.36a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11 8.64h-2.66v-3.65c0-.87-.02-2-1.22-2s-1.4.95-1.4 1.93V17H10.05V9.5h2.56v1.04h.04a2.8 2.8 0 0 1 2.52-1.39c2.7 0 3.2 1.78 3.2 4.09V17z" /></svg>;
    case 'github':    return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 1A11 11 0 0 0 8.5 22.4c.55.1.75-.24.75-.53v-2c-3.06.66-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-1-.69.07-.67.07-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.7-1.48-2.45-.28-5.02-1.22-5.02-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.1-2.92 0 0 .92-.3 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.23-2.58 5.16-5.04 5.43.4.34.75 1 .75 2.02v3c0 .29.2.64.76.53A11 11 0 0 0 12 1z" /></svg>;
    case 'instagram': return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>;
    case 'user':      return <svg {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
    case 'shield':    return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
    case 'log-out':   return <svg {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>;
    default: return null;
  }
}
