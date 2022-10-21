export default function Button(className, value, onClick, label, name) {
  return (
    <button className={className} value={value} onClick={onClick} name={name}>
      {label}
    </button>
  );
}
