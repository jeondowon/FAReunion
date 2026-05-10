import { useState } from "react";
import OnbShell from "./OnbShell";
import Field from "../../components/ui/Field";
import { Input, Select } from "../../components/ui/Input";
import Tag from "../../components/ui/Tag";
import Icon from "../../components/ui/Icon";
import { COUNTRIES } from "../../data/alumni";

export default function OnbBasic({ data, setData, onBack, onContinue }) {
  const [first, setFirst] = useState(data.first || "Maya");
  const [last, setLast] = useState(data.last || "Reyes");
  const [status, setStatus] = useState(data.status || "alumni");
  const [year, setYear] = useState(data.year || "2018");
  const [countries, setCountries] = useState(
    data.countries || ["🇺🇸 United States", "🇰🇷 South Korea"],
  );
  const [college, setCollege] = useState(data.college || "");
  const [major, setMajor] = useState(data.major || "");
  const [pickerOpen, setPickerOpen] = useState(false);

  const addCountry = (label) => {
    if (countries.length >= 3 || countries.includes(label)) return;
    setCountries([...countries, label]);
    setPickerOpen(false);
  };

  const submit = () => {
    setData({ ...data, first, last, status, year, countries, college, major });
    onContinue();
  };

  return (
    <OnbShell
      step={3}
      title="Basic Information"
      subtitle="Tell us about yourself"
      onBack={onBack}
      onContinue={submit}
      canContinue={first && last && year}
    >
      <div className="onb-fields">
        <div className="grid grid-2">
          <Field label="First Name">
            <Input
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              placeholder="Maya"
            />
          </Field>
          <Field label="Last Name">
            <Input
              value={last}
              onChange={(e) => setLast(e.target.value)}
              placeholder="Reyes"
            />
          </Field>
        </div>

        <Field label="Status">
          <div style={{ display: "flex", gap: 12 }}>
            {[
              { value: "alumni", label: "Alumni" },
              { value: "current", label: "Current Student" },
            ].map((o) => {
              const isActive = status === o.value;
              return (
                <button
                  key={o.value}
                  onClick={() => setStatus(o.value)}
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: `1px solid ${isActive ? "var(--navy)" : "var(--border)"}`,
                    background: isActive
                      ? "rgba(113, 144, 202, 0.06)"
                      : "white",
                    color: isActive ? "var(--navy)" : "var(--text-gray)",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: 15,
                    cursor: "pointer",
                    transition: "all .15s ease",
                  }}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Graduation Year">
          <Select value={year} onChange={(e) => setYear(e.target.value)}>
            {Array.from({ length: 2030 - 1965 + 1 }).map((_, i) => {
              const y = 2030 - i;
              return (
                <option key={y} value={y}>
                  {y}
                </option>
              );
            })}
          </Select>
        </Field>

        <Field label="Home Countries" hint={`${countries.length}/3 selected`}>
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setPickerOpen(!pickerOpen)}
              className="input"
              style={{
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                color: "var(--text-light)",
              }}
            >
              <span>Add a country…</span>
              <Icon name="chevron-right" size={14} color="#9CA3AF" />
            </button>
            {pickerOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  marginTop: 4,
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  boxShadow: "var(--shadow-md)",
                  maxHeight: 220,
                  overflowY: "auto",
                  zIndex: 10,
                }}
              >
                {COUNTRIES.map(({ c, n }) => {
                  const label = `${c} ${n}`;
                  const picked = countries.includes(label);
                  return (
                    <div
                      key={n}
                      onClick={() => !picked && addCountry(label)}
                      style={{
                        padding: "10px 14px",
                        fontSize: 14,
                        cursor: picked ? "not-allowed" : "pointer",
                        color: picked ? "var(--text-light)" : "var(--text)",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{label}</span>
                      {picked && (
                        <Icon name="check" size={14} color="#10B981" />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {countries.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 10,
              }}
            >
              {countries.map((c) => (
                <Tag
                  key={c}
                  onRemove={() =>
                    setCountries(countries.filter((x) => x !== c))
                  }
                >
                  {c}
                </Tag>
              ))}
            </div>
          )}
        </Field>

        {status === "alumni" && (
          <Field label="College / University" hint="Optional">
            <Input
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="e.g., University of the Philippines"
            />
          </Field>
        )}

        {status === "alumni" && (
          <Field label="Major" hint="Optional">
            <Input
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              placeholder="e.g., Computer Science"
            />
          </Field>
        )}
      </div>
    </OnbShell>
  );
}
