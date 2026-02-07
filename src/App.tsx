import Header from "./components/Header";
import PlayerInfo from "./components/PlayerInfo";

function App() {
  return (
    <main>
      <Header />
      <div>
        <ol>
          <PlayerInfo name="Guja" symbol="X" />
          <PlayerInfo name="Sandro" symbol="0" />
        </ol>
      </div>
    </main>
  );
}

export default App;
