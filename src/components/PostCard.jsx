import Avatar from "./ui/Avatar";
import Icon from "./ui/Icon";

export default function PostCard({ post, onClick }) {
  return (
    <div
      className="card card-hover"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div className="row-between" style={{ marginBottom: 10 }}>
        <div className="row" style={{ gap: 10 }}>
          <Avatar name={post.author} size="sm" />
          <div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{post.author}</div>
            <div className="post-meta">
              {post.time} · Class of {post.year}
            </div>
          </div>
        </div>
        <span className={`badge badge-${post.category}`}>
          {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
        </span>
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: 16,
          marginBottom: 4,
        }}
      >
        {post.title}
      </div>
      <div className="muted small">{post.excerpt}</div>
      <div className="post-stats">
        <span>
          <Icon name="eye" size={14} />
          {post.views}
        </span>
        <span>
          <Icon name="comment" size={14} />
          {post.comments}
        </span>
        <span>
          <Icon name="heart" size={14} />
          {post.likes}
        </span>
      </div>
    </div>
  );
}
