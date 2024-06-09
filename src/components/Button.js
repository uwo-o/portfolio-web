function Button({ onClick, children }) {
  return <button onClick={onClick} className="default-btn p-3 z-10 text-lm">{children}</button>;
}

export default Button;