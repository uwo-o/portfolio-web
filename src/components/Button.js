function Button({ onClick, children }) {
  return <button onClick={onClick} className="default-btn p-3 z-10 text-xs lg:text-xl ">{children}</button>;
}

export default Button;