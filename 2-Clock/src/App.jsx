import ClockSlogan from "./components/ClockSlogan";
import ClockHeading from "./components/ClockHeading";
import CurrentTime from "./components/CurrentTime";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
