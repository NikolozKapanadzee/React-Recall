import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Spongebob" age={20} isStudent={true} />
      <Student name="Avto" age={22} isStudent={false} />
      <Student name="Gocha" age={25} isStudent={false} />
      <Student name="Guja" age={30} isStudent={true} />
      <Student name="Doxia" age={23} isStudent={true} />
    </>
  );
}

export default App;
