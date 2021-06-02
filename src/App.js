import "./App.css";
import AppHeader from "./components/appHeader";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
