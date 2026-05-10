import { useState } from 'react';
import OnbShell from './OnbShell';
import Field from '../../components/ui/Field';
import { Input, Select } from '../../components/ui/Input';
import { INDUSTRIES } from '../../data/alumni';

export default function OnbCareer({ data, setData, onBack, onContinue }) {
  const [industry, setIndustry] = useState(data.industry || 'Technology');
  const [company, setCompany] = useState(data.company || 'Stripe');
  const [department, setDepartment] = useState(data.department || '');
  const [role, setRole] = useState(data.role || 'Software Engineer');
  const [country, setCountry] = useState(data.workCountry || 'United States');
  const [city, setCity] = useState(data.city || 'San Francisco');
  const [experience, setExperience] = useState(data.experience || '');

  const submit = () => {
    setData({ ...data, industry, company, department, role, workCountry: country, city, experience });
    onContinue();
  };

  return (
    <OnbShell
      step={5}
      title="Career Information"
      subtitle="Help others find you (All optional)"
      onBack={onBack}
      onContinue={submit}
    >
      <div className="onb-fields">
        <Field label="Industry">
          <Select value={industry} onChange={(e) => setIndustry(e.target.value)}>
            {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
          </Select>
        </Field>
        <Field label="Current Company">
          <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="e.g., Google" />
        </Field>
        <Field label="Department / Team">
          <Input value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="e.g., Engineering, Product" />
        </Field>
        <Field label="Role / Position">
          <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g., Software Engineer" />
        </Field>
        <div className="grid grid-2">
          <Field label="Country"><Input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="United States" /></Field>
          <Field label="City"><Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="San Francisco" /></Field>
        </div>
        <Field label="Years of Experience" hint="Optional">
          <Select value={experience} onChange={(e) => setExperience(e.target.value)}>
            <option value="">Select…</option>
            <option>Less than 1 year</option>
            <option>1–2 years</option>
            <option>3–5 years</option>
            <option>6–10 years</option>
            <option>10+ years</option>
          </Select>
        </Field>
      </div>
    </OnbShell>
  );
}
