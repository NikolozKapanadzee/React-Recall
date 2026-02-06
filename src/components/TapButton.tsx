export default function TapButton({ label, click }: any) {
  return (
    <div>
      <li>
        <button onClick={click}>{label}</button>
      </li>
    </div>
  );
}
