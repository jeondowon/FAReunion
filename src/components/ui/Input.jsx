export function Input(props) {
  return <input className="input" {...props} />;
}

export function Select({ children, ...rest }) {
  return <select className="select" {...rest}>{children}</select>;
}

export function Textarea(props) {
  return <textarea className="textarea" rows={4} {...props} />;
}
