import { useState } from "react";
import OnbShell from "./OnbShell";
import Field from "../../components/ui/Field";
import { Input } from "../../components/ui/Input";

const DIAL_CODES = [
  // North America
  { c: "🇺🇸", code: "+1", n: "United States" },
  { c: "🇨🇦", code: "+1", n: "Canada" },
  { c: "🇲🇽", code: "+52", n: "Mexico" },
  // East Asia
  { c: "🇵🇭", code: "+63", n: "Philippines" },
  { c: "🇯🇵", code: "+81", n: "Japan" },
  { c: "🇰🇷", code: "+82", n: "South Korea" },
  { c: "🇨🇳", code: "+86", n: "China" },
  { c: "🇹🇼", code: "+886", n: "Taiwan" },
  { c: "🇭🇰", code: "+852", n: "Hong Kong" },
  { c: "🇲🇳", code: "+976", n: "Mongolia" },
  // Southeast Asia
  { c: "🇸🇬", code: "+65", n: "Singapore" },
  { c: "🇲🇾", code: "+60", n: "Malaysia" },
  { c: "🇹🇭", code: "+66", n: "Thailand" },
  { c: "🇮🇩", code: "+62", n: "Indonesia" },
  { c: "🇻🇳", code: "+84", n: "Vietnam" },
  { c: "🇰🇭", code: "+855", n: "Cambodia" },
  { c: "🇲🇲", code: "+95", n: "Myanmar" },
  { c: "🇱🇦", code: "+856", n: "Laos" },
  { c: "🇧🇳", code: "+673", n: "Brunei" },
  { c: "🇹🇱", code: "+670", n: "East Timor" },
  // South Asia
  { c: "🇮🇳", code: "+91", n: "India" },
  { c: "🇵🇰", code: "+92", n: "Pakistan" },
  { c: "🇧🇩", code: "+880", n: "Bangladesh" },
  { c: "🇱🇰", code: "+94", n: "Sri Lanka" },
  { c: "🇳🇵", code: "+977", n: "Nepal" },
  { c: "🇧🇹", code: "+975", n: "Bhutan" },
  // Central Asia
  { c: "🇰🇿", code: "+7", n: "Kazakhstan" },
  { c: "🇺🇿", code: "+998", n: "Uzbekistan" },
  { c: "🇰🇬", code: "+996", n: "Kyrgyzstan" },
  { c: "🇹🇯", code: "+992", n: "Tajikistan" },
  { c: "🇹🇲", code: "+993", n: "Turkmenistan" },
  // Middle East
  { c: "🇮🇱", code: "+972", n: "Israel" },
  { c: "🇯🇴", code: "+962", n: "Jordan" },
  { c: "🇱🇧", code: "+961", n: "Lebanon" },
  { c: "🇹🇷", code: "+90", n: "Turkey" },
  { c: "🇦🇪", code: "+971", n: "United Arab Emirates" },
  { c: "🇸🇦", code: "+966", n: "Saudi Arabia" },
  { c: "🇮🇷", code: "+98", n: "Iran" },
  { c: "🇮🇶", code: "+964", n: "Iraq" },
  { c: "🇾🇪", code: "+967", n: "Yemen" },
  { c: "🇴🇲", code: "+968", n: "Oman" },
  { c: "🇰🇼", code: "+965", n: "Kuwait" },
  { c: "🇧🇭", code: "+973", n: "Bahrain" },
  { c: "🇶🇦", code: "+974", n: "Qatar" },
  // Oceania
  { c: "🇦🇺", code: "+61", n: "Australia" },
  { c: "🇳🇿", code: "+64", n: "New Zealand" },
  { c: "🇵🇬", code: "+675", n: "Papua New Guinea" },
  { c: "🇫🇯", code: "+679", n: "Fiji" },
  // Western Europe
  { c: "🇬🇧", code: "+44", n: "United Kingdom" },
  { c: "🇩🇪", code: "+49", n: "Germany" },
  { c: "🇳🇱", code: "+31", n: "Netherlands" },
  { c: "🇫🇷", code: "+33", n: "France" },
  { c: "🇪🇸", code: "+34", n: "Spain" },
  { c: "🇮🇹", code: "+39", n: "Italy" },
  { c: "🇵🇹", code: "+351", n: "Portugal" },
  { c: "🇧🇪", code: "+32", n: "Belgium" },
  { c: "🇨🇭", code: "+41", n: "Switzerland" },
  { c: "🇦🇹", code: "+43", n: "Austria" },
  { c: "🇸🇪", code: "+46", n: "Sweden" },
  { c: "🇳🇴", code: "+47", n: "Norway" },
  { c: "🇩🇰", code: "+45", n: "Denmark" },
  { c: "🇫🇮", code: "+358", n: "Finland" },
  { c: "🇮🇪", code: "+353", n: "Ireland" },
  { c: "🇬🇷", code: "+30", n: "Greece" },
  // Eastern Europe
  { c: "🇵🇱", code: "+48", n: "Poland" },
  { c: "🇨🇿", code: "+420", n: "Czech Republic" },
  { c: "🇭🇺", code: "+36", n: "Hungary" },
  { c: "🇷🇴", code: "+40", n: "Romania" },
  { c: "🇺🇦", code: "+380", n: "Ukraine" },
  { c: "🇷🇺", code: "+7", n: "Russia" },
  // Latin America
  { c: "🇧🇷", code: "+55", n: "Brazil" },
  { c: "🇨🇴", code: "+57", n: "Colombia" },
  { c: "🇵🇪", code: "+51", n: "Peru" },
  { c: "🇦🇷", code: "+54", n: "Argentina" },
  { c: "🇨🇱", code: "+56", n: "Chile" },
  { c: "🇻🇪", code: "+58", n: "Venezuela" },
  { c: "🇪🇨", code: "+593", n: "Ecuador" },
  { c: "🇧🇴", code: "+591", n: "Bolivia" },
  { c: "🇵🇾", code: "+595", n: "Paraguay" },
  { c: "🇺🇾", code: "+598", n: "Uruguay" },
  { c: "🇬🇹", code: "+502", n: "Guatemala" },
  { c: "🇭🇳", code: "+504", n: "Honduras" },
  { c: "🇸🇻", code: "+503", n: "El Salvador" },
  { c: "🇨🇷", code: "+506", n: "Costa Rica" },
  { c: "🇵🇦", code: "+507", n: "Panama" },
  { c: "🇩🇴", code: "+1", n: "Dominican Republic" },
  { c: "🇨🇺", code: "+53", n: "Cuba" },
  // Africa
  { c: "🇿🇦", code: "+27", n: "South Africa" },
  { c: "🇰🇪", code: "+254", n: "Kenya" },
  { c: "🇳🇬", code: "+234", n: "Nigeria" },
  { c: "🇪🇹", code: "+251", n: "Ethiopia" },
  { c: "🇬🇭", code: "+233", n: "Ghana" },
  { c: "🇺🇬", code: "+256", n: "Uganda" },
  { c: "🇹🇿", code: "+255", n: "Tanzania" },
  { c: "🇷🇼", code: "+250", n: "Rwanda" },
  { c: "🇨🇩", code: "+243", n: "DR Congo" },
  { c: "🇸🇳", code: "+221", n: "Senegal" },
  { c: "🇨🇲", code: "+237", n: "Cameroon" },
  { c: "🇲🇿", code: "+258", n: "Mozambique" },
  { c: "🇿🇼", code: "+263", n: "Zimbabwe" },
  { c: "🇿🇲", code: "+260", n: "Zambia" },
  { c: "🇲🇼", code: "+265", n: "Malawi" },
  { c: "🇸🇸", code: "+211", n: "South Sudan" },
  { c: "🇸🇩", code: "+249", n: "Sudan" },
  { c: "🇲🇬", code: "+261", n: "Madagascar" },
];

export default function OnbContact({ data, setData, onBack, onContinue }) {
  const [dialCode, setDialCode] = useState(data.dialCode || "+1");
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber || "");
  const [email, setEmail] = useState(data.email || "maya.reyes@gmail.com");
  const [linkedin, setLinkedin] = useState(
    data.linkedin || "linkedin.com/in/mayareyes",
  );
  const [instagram, setInstagram] = useState(data.instagram || "@mayareyes");
  const [github, setGithub] = useState(data.github || "");

  const submit = () => {
    const phone = phoneNumber ? `${dialCode} ${phoneNumber}` : "";
    setData({ ...data, dialCode, phoneNumber, phone, email, linkedin, instagram, github });
    onContinue();
  };

  return (
    <OnbShell
      step={4}
      title="Contact & SNS"
      subtitle="Share your contact information"
      onBack={onBack}
      onContinue={submit}
    >
      <div className="info-box-bordered" style={{ marginBottom: 20 }}>
        <div>
          The information you provide will be visible to verified alumni.
        </div>
        <div>Leave blank any fields you wish to keep private.</div>
      </div>
      <div className="onb-fields">
        <Field label="Phone Number">
          <div className="phone-group">
            <select
              className="dial-select"
              value={dialCode}
              onChange={(e) => setDialCode(e.target.value)}
            >
              {DIAL_CODES.map((d) => (
                <option key={`${d.n}-${d.code}`} value={d.code}>
                  {d.c} {d.code}
                </option>
              ))}
            </select>
            <input
              className="phone-number"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="123 456 7890"
            />
          </div>
        </Field>
        <Field label="Contact Email">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="LinkedIn URL">
          <Input
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="linkedin.com/in/…"
          />
        </Field>
        <Field label="Instagram">
          <Input
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="@username"
          />
        </Field>
        <Field label="GitHub URL">
          <Input
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="github.com/…"
          />
        </Field>
      </div>
    </OnbShell>
  );
}
