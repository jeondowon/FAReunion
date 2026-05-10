import Button from '../components/ui/Button';

export default function Login({ onSignIn }) {
  return (
    <div className="login-shell">
      <div className="login-card">
        <img src="/assets/fa-seal.jpeg" alt="Faith Academy seal" className="login-seal" />
        <h1>Faith Academy Manila<br />Alumni Network</h1>
        <div className="vanguard-tag">"Once a Vanguard, Always a Vanguard"</div>
        <div className="divider-line">SIGN IN</div>
        <Button variant="primary" block onClick={onSignIn} leftIcon="google">
          Sign in with Google
        </Button>
        <p className="muted small" style={{ marginTop: 32, fontSize: 13 }}>
          A space for Vanguards across <strong style={{ color: 'var(--navy)' }}>34 nations</strong>
        </p>
      </div>
    </div>
  );
}
