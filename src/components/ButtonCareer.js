function ButtonCareer({ onClick, children, className, id }) {
  return <button id={id} onClick={onClick} className={className}>{children}</button>;
}

export default ButtonCareer;