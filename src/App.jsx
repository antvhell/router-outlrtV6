import "./App.css";
import AppRouter from "./router/AppRouter";

import Nav from "./components/Nav";

function App() {
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
