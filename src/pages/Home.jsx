import { TopNav, AlumniCard, PostCard, Button } from "../components";
import { ALUMNI, SAMPLE_POSTS } from "../data/alumni";

const STATS = [
  {
    label: "Total Alumni",
    value: "1,234",
    delta: "Across 34 nations",
    icon: "users",
  },
  {
    label: "Total Profile Views",
    value: "8,729",
    delta: "↑ 12% this month",
    icon: "eye",
  },
  {
    label: "New This Month",
    value: "23",
    delta: "↑ 14% vs last month",
    icon: "trending",
  },
  {
    label: "Total Chats",
    value: "342",
    delta: "Conversations started",
    icon: "comment",
  },
];

export default function Home({ go, user }) {
  return (
    <>
      <TopNav active="home" go={go} user={user} />
      <div className="page-wrap fade-in">
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 40 }}>Welcome back, {user.first} 👋</h1>
          <p
            className="muted"
            style={{ marginTop: 8, fontFamily: "Poppins", fontStyle: "italic" }}
          >
            "Once a Vanguard, Always a Vanguard"
          </p>
        </div>

        <div className="grid grid-4" style={{ marginBottom: 48 }}>
          {STATS.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="label">{s.label}</div>
              <div className="value">{s.value}</div>
              <div className="delta">{s.delta}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 48 }}>
          <div className="section-title">
            <h3>Connect with Fellow Vanguards</h3>
            <a
              className="link-arrow"
              onClick={() => go("network")}
              style={{ cursor: "pointer" }}
            >
              View all →
            </a>
          </div>
          <div className="grid grid-3">
            {ALUMNI.slice(0, 3).map((a) => (
              <AlumniCard
                key={a.name}
                alumni={a}
                onView={() => go("profile")}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="section-title">
            <h3>Recent Community Posts</h3>
            <a
              className="link-arrow"
              onClick={() => go("community")}
              style={{ cursor: "pointer" }}
            >
              View all →
            </a>
          </div>
          <div className="grid" style={{ gap: 12 }}>
            {SAMPLE_POSTS.slice(0, 3).map((p) => (
              <PostCard
                key={p.title}
                post={p}
                onClick={() => go("community")}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
