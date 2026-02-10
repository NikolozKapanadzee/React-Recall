import reactIcon from "../assets/react.svg";
export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-3 py-8 text-center">
      <img src={reactIcon} alt="react_icon" />
      <h1>Invesment Calculator</h1>
    </header>
  );
}
