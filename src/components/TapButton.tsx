export default function TapButton({ label, click, isSelected }: any) {
  return (
    <div>
      <li>
        <button className={isSelected ? "active" : undefined} onClick={click}>
          {label}
        </button>
      </li>
    </div>
  );
}
