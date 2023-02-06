import { Routes } from "react-router-dom";
import Header from "./Header";

const Html = () => {
  const menuData = [
    {
      title: "HTML HOME",
      link: "/challenge/html/home",
    },
    {
      title: "HTML Basic",
      link: "/challenge/html/basic",
    },
    {
      title: "HTML Styles",
      link: "/challenge/html/style",
    },
    {
      title: "HTML Comments",
      link: "/challenge/html/comments",
    },
  ];

  return (
    <div>
      <Header menus={menuData} />
      <Routes></Routes>
    </div>
  );
};
export default Html;
