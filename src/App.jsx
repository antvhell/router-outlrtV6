import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div className="mt-4">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
