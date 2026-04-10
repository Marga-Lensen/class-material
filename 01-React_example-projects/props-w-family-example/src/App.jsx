import Greeting from "./components/Greeting";
import "./App.css";
import Father from "./components/Father";

function App() {

  const familyValues = ["honesty", "responsibility", "hard work"];

  return (
    <>
      <Greeting name="Alice" />

    <Father />
    </>
  );
}

export default App;
