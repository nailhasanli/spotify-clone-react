import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Bottombar from "./components/BottomBar/Bottombar";
import Content from "./components/Content/Content";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <main className="container">
        <Sidebar />
        <Content />
      </main>
      <Bottombar />

    </Router>
  );
}

export default App;
