import { TopNav, Avatar, Button, Tag } from "../components";

function InfoRow({ label, value, link }) {
  return (
    <div className="info-row">
      <div className="muted">{label}</div>
      <div>
        {link ? (
          <a href={link} style={{ color: "var(--navy)" }}>
            {value}
          </a>
        ) : (
          value
        )}
      </div>
    </div>
  );
}

function TagBlock({ title, items }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "var(--text-gray)",
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      {items.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {items.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      ) : (
        <div className="muted small">No information provided</div>
      )}
    </div>
  );
}

export default function Profile({ go, user }) {
  return (
    <>
      <TopNav active="profile" go={go} user={user} />
      <div className="page-wrap fade-in">
        <div className="profile-hero">
          <div className="row-between" style={{ alignItems: "flex-start" }}>
            <div className="row" style={{ gap: 24, alignItems: "center" }}>
              <Avatar name={`${user.first} ${user.last}`} size="xl" />
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <h1 style={{ fontSize: 32 }}>
                    {user.first} {user.last}
                  </h1>
                  {user.year && (
                    <span style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--navy)",
                      background: "rgba(15,35,71,0.07)",
                      borderRadius: 20,
                      padding: "3px 10px",
                      whiteSpace: "nowrap",
                    }}>
                      Class of {user.year}
                    </span>
                  )}
                </div>
                <div className="muted" style={{ marginTop: 6, fontSize: 16 }}>
                  {user.role} @ {user.company}
                </div>
                <div
                  className="muted small"
                  style={{
                    marginTop: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span>{user.city}, {user.workCountry}</span>
                </div>
              </div>
            </div>
            <Button variant="outline" leftIcon="edit">
              Edit Profile
            </Button>
          </div>
          {user.bio && (
            <p
              style={{
                marginTop: 24,
                maxWidth: 720,
                color: "var(--text)",
                lineHeight: 1.6,
              }}
            >
              {user.bio}
            </p>
          )}
          <div className="tag-group" style={{ marginTop: 18 }}>
            {(user.shareSkills || []).slice(0, 5).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        <div
          className="grid grid-2"
          style={{ marginTop: 24 }}
        >
          <div className="card">
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>Career</h3>
            <InfoRow label="Industry" value={user.industry} />
            <InfoRow label="Company" value={user.company} />
            {user.department && <InfoRow label="Department" value={user.department} />}
            <InfoRow label="Role" value={user.role} />
            <InfoRow
              label="Location"
              value={`${user.city}, ${user.workCountry}`}
            />
            {user.experience && <InfoRow label="Experience" value={user.experience} />}
          </div>

          <div className="card">
            <h3 style={{ fontSize: 18, marginBottom: 16 }}>Home Countries</h3>
            <div className="tag-group" style={{ marginBottom: 24 }}>
              {(user.countries || []).map((c) => (
                <Tag key={c}>{c}</Tag>
              ))}
            </div>
            <h3
              style={{
                fontSize: 18,
                marginBottom: 8,
                paddingTop: 16,
                borderTop: "1px solid var(--border)",
              }}
            >
              Education
            </h3>
            <InfoRow label="University" value={user.college || "—"} />
            <InfoRow label="Major" value={user.major || "—"} />
          </div>

          <div className="card">
            <h3 style={{ fontSize: 18, marginBottom: 16 }}>
              I can share my experience in...
            </h3>
            <TagBlock
              title="Career / Business"
              items={user.shareCareer || []}
            />
            <TagBlock
              title="Skills / Tech Stack"
              items={user.shareSkills || []}
            />
            <TagBlock title="Life / Other" items={user.shareLife || []} />
          </div>

          <div className="card">
            <h3 style={{ fontSize: 18, marginBottom: 16 }}>
              I'd like to connect with alumni who know about...
            </h3>
            <TagBlock title="Career / Business" items={user.seekCareer || []} />
            <TagBlock
              title="Skills / Tech Stack"
              items={user.seekSkills || []}
            />
            <TagBlock title="Life / Other" items={user.seekLife || []} />
          </div>

          <div className="card" style={{ gridColumn: "span 2" }}>
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>Contact & Social</h3>
            {user.email && (
              <InfoRow
                label="Email"
                value={user.email}
                link={`mailto:${user.email}`}
              />
            )}
            {user.phone && <InfoRow label="Phone" value={user.phone} />}
            {user.linkedin && (
              <InfoRow
                label="LinkedIn"
                value={user.linkedin}
                link={`https://${user.linkedin}`}
              />
            )}
            {user.github && (
              <InfoRow
                label="GitHub"
                value={user.github}
                link={`https://${user.github}`}
              />
            )}
            {user.instagram && (
              <InfoRow label="Instagram" value={user.instagram} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
