import { useState, useMemo } from "react";
import { TopNav, PostCard, Button } from "../components";
import { SAMPLE_POSTS } from "../data/alumni";

export default function Community({ go, user }) {
  const [tab, setTab] = useState("all");

  const list = useMemo(
    () =>
      tab === "all"
        ? SAMPLE_POSTS
        : SAMPLE_POSTS.filter((p) => p.category === tab),
    [tab],
  );

  return (
    <>
      <TopNav active="community" go={go} user={user} />
      <div className="page-wrap fade-in">
        <div className="row-between" style={{ marginBottom: 28 }}>
          <div>
            <h1 style={{ fontSize: 40 }}>Community</h1>
            <p className="muted" style={{ marginTop: 8 }}>
              Connect, share, and grow together
            </p>
          </div>
          <Button variant="primary" leftIcon="edit">
            Write Post
          </Button>
        </div>

        <div className="tabs">
          {[
            ["all", "All Posts"],
            ["general", "General"],
            ["career", "Career"],
          ].map(([id, label]) => (
            <div
              key={id}
              className={`tab ${tab === id ? "active" : ""}`}
              onClick={() => setTab(id)}
            >
              {label}
            </div>
          ))}
        </div>

        <div className="grid" style={{ gap: 12 }}>
          {list.map((p) => (
            <PostCard key={p.title} post={p} />
          ))}
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 24 }}
        >
          <Button variant="outline">Load More Posts</Button>
        </div>
      </div>
    </>
  );
}
