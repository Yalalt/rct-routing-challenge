import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Page from "./pages/Page";
import Home from "./pages/Home";

function App() {

  const menuData = [
    {
      title: 'Home',
      url: "/"
    },
    {
      title: 'HTML',
      url: '/challenge/html'
    },
    {
      title: 'CSS',
      url: '/challenge/css'
    },
    {
      title: 'JAVASCRIPT',
      url: '/challenge/javascript'
    },
    {
      title: 'REACT',
      url: '/challenge/react'
    },
  ];

  return (
    <div className="App">
      <Routes>
        <Header menus={menuData} />
        <Routes>
          <Route path="/challenge/:slug">
            <Page />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </Routes>
    </div>
  );
}

export default App;

// https://www.w3school.info/2021/06/13/create-a-simple-app-to-understand-routing-in-react/