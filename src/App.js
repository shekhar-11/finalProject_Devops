// import logo from "./logo.svg";
import "./App.css";
// import "./Script.js";
function App() {
  return (
    <div>
      <header>
        <h1>Guess My Number!</h1>
        <p class="between">(Between 1 and 20)</p>
        <button class="btn again">Again!</button>
        <div class="number">?</div>
      </header>
      <main>
        <section class="left">
          <input type="number" class="guess" />
          <button class="btn check">Check!</button>
        </section>
        <section class="right">
          <p class="message">Start guessing...</p>
          <p class="label-score">
            💯 Score: <span class="score">20</span>
          </p>
          <p class="label-highscore">
            🥇 Highscore: <span class="highscore">0</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;



