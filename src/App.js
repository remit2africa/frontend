import "./App.css";
import Routes from "./Component/Route/Routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes /> ;
    </BrowserRouter>
  );
}

export default App;
