import { useState } from "react";
import OnbShell from "./OnbShell";
import Field from "../../components/ui/Field";
import Checkbox from "../../components/ui/Checkbox";

export default function OnbConsent({ onBack, onContinue }) {
  const [tos, setTos] = useState(false);
  const [pp, setPp] = useState(false);
  const [news, setNews] = useState(true);

  return (
    <OnbShell
      step={2}
      title="Privacy Consent"
      subtitle="Please review and accept our terms"
      onBack={onBack}
      onContinue={onContinue}
      canContinue={tos && pp}
    >
      <Field label="Terms of Service">
        <div className="policy-scroll-box">
          <strong style={{ color: "var(--text)" }}>1. Acceptance.</strong> By
          using the FA Alumni Network you agree to use the platform respectfully
          and in accordance with the values of Faith Academy Manila.
          <br />
          <br />
          <strong style={{ color: "var(--text)" }}>2. Eligibility.</strong>{" "}
          Membership is reserved for verified alumni and current students of
          Faith Academy, Inc.
          <br />
          <br />
          <strong style={{ color: "var(--text)" }}>3. Conduct.</strong> Members
          agree not to spam, harass, or misuse contact information shared by
          other Vanguards…
        </div>
      </Field>
      <Checkbox checked={tos} onChange={setTos} required>
        I agree to the Terms of Service
      </Checkbox>

      <div style={{ height: 12 }} />
      <Field label="Privacy Policy">
        <div className="policy-scroll-box">
          We collect only the information you choose to share. Your contact
          details are visible only to verified alumni. We never sell or share
          your data with third parties. You may delete your profile at any time…
        </div>
      </Field>
      <Checkbox checked={pp} onChange={setPp} required>
        I agree to the Privacy Policy
      </Checkbox>
      <Checkbox checked={news} onChange={setNews}>
        I agree to receive email updates about the FA Alumni Network
      </Checkbox>
    </OnbShell>
  );
}
