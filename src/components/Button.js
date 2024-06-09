function Button({ onClick, children }) {
  return <button onClick={onClick} className="default-btn p-3">{children}</button>;
}

export default Button;