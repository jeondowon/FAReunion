import Button from "../../components/ui/Button";
import Stepper from "../../components/ui/Stepper";

export default function OnbShell({
  step,
  children,
  title,
  subtitle,
  onBack,
  onContinue,
  canContinue = true,
  ctaLabel = "Continue",
  showBack = true,
}) {
  return (
    <div className="onb-shell">
      <div
        style={{
          width: "100%",
          maxWidth: 640,
          marginBottom: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="/assets/fa-main-logo.svg"
          alt="Faith Academy"
          style={{ height: 36, width: "auto" }}
        />
        <div className="muted tiny">Step {step} of 7</div>
      </div>
      <div className="onb-card fade-in">
        <Stepper current={step} total={7} />
        <h2>{title}</h2>
        <p className="lede">{subtitle}</p>
        {children}
        <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
          {showBack && step > 1 && (
            <Button variant="outline" onClick={onBack} leftIcon="arrow-left">
              Back
            </Button>
          )}
          <Button
            variant="primary"
            block
            onClick={onContinue}
            disabled={!canContinue}
            rightIcon={ctaLabel === "Continue" ? "arrow-right" : null}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
