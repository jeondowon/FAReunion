import { useState } from "react";
import OnbShell from "./OnbShell";
import TagInput from "../../components/ui/TagInput";

const PRESETS = {
  career: [
    "Teaching / Education", "Software Engineering", "Product Management",
    "Data Science", "UX / Design", "Entrepreneurship", "Startup Founding",
    "Finance / Banking", "Consulting", "Medicine / Healthcare", "Nursing",
    "Law", "Non-profit / NGO", "Ministry / Church", "Government / Public Sector",
    "Marketing / Advertising", "Architecture", "Engineering",
    "Journalism / Media", "Research / Academia", "HR / Recruiting",
    "Real Estate", "Performing Arts", "Social Work", "VC / Fundraising",
    "Business Development", "Counseling / Therapy", "Photography / Videography",
  ],
  skills: [
    "JavaScript / TypeScript", "React", "Python", "Node.js",
    "Swift / iOS", "Kotlin / Android", "SQL / Databases",
    "Data Analysis", "ML / AI", "Cloud / AWS", "DevOps / CI-CD",
    "UI/UX Design", "Figma", "Graphic Design", "Photography",
    "Video Editing", "Music Production", "Writing / Copywriting",
    "Public Speaking", "Project Management", "Agile / Scrum",
    "Languages / Translation", "Counseling / Psychology",
    "Finance / Accounting", "Architecture / CAD", "Excel / Data",
  ],
  life: [
    "Marriage / Relationships", "Parenting", "Raising TCKs",
    "Faith / Spirituality", "Living Abroad", "Immigration",
    "Mental Health", "Fitness / Sports", "Cooking", "Travel",
    "Language Learning", "Community Building", "Volunteering",
    "Art / Creativity", "Music / Worship", "Missions Abroad",
    "Career Transitions", "Grief & Loss", "Cross-cultural Living",
    "Personal Finance",
  ],
};

function TagSection({ title, items, set, presets }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-gray)", marginBottom: 6 }}>
        {title}
      </div>
      <TagInput
        value={items}
        onChange={set}
        placeholder="Type or choose below…"
        presets={presets}
      />
    </div>
  );
}

export default function OnbInterests({ data, setData, onBack, onContinue }) {
  const [shareCareer, setShareCareer] = useState(
    data.shareCareer || ["Startup Founding", "Product Management"],
  );
  const [shareSkills, setShareSkills] = useState(
    data.shareSkills || ["React", "Python", "Data Analysis"],
  );
  const [shareLife, setShareLife] = useState(
    data.shareLife || ["Living Abroad", "Raising TCKs"],
  );
  const [seekCareer, setSeekCareer] = useState(
    data.seekCareer || ["VC / Fundraising"],
  );
  const [seekSkills, setSeekSkills] = useState(data.seekSkills || ["ML / AI"]);
  const [seekLife, setSeekLife] = useState(
    data.seekLife || ["Missions Abroad"],
  );

  const submit = () => {
    setData({ ...data, shareCareer, shareSkills, shareLife, seekCareer, seekSkills, seekLife });
    onContinue();
  };

  return (
    <OnbShell
      step={6}
      title="Interests & Skills"
      subtitle="Connect with the right people"
      onBack={onBack}
      onContinue={submit}
    >
      <div style={{ background: "white", border: "1px solid var(--navy)", borderRadius: 12, padding: 20, marginBottom: 20 }}>
        <div style={{ fontFamily: "Poppins", fontWeight: 600, marginBottom: 12 }}>
          I can share my experience in...
        </div>
        <TagSection title="Career / Business" items={shareCareer} set={setShareCareer} presets={PRESETS.career} />
        <TagSection title="Skills / Tech Stack" items={shareSkills} set={setShareSkills} presets={PRESETS.skills} />
        <TagSection title="Life / Other" items={shareLife} set={setShareLife} presets={PRESETS.life} />
      </div>
      <div style={{ background: "white", border: "1px solid var(--gold)", borderRadius: 12, padding: 20 }}>
        <div style={{ fontFamily: "Poppins", fontWeight: 600, marginBottom: 12 }}>
          I'd like to connect with alumni who know about...
        </div>
        <TagSection title="Career / Business" items={seekCareer} set={setSeekCareer} presets={PRESETS.career} />
        <TagSection title="Skills / Tech Stack" items={seekSkills} set={setSeekSkills} presets={PRESETS.skills} />
        <TagSection title="Life / Other" items={seekLife} set={setSeekLife} presets={PRESETS.life} />
      </div>
    </OnbShell>
  );
}
