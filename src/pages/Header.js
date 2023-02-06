import { Link } from "react-router-dom";
import "./style/header.css";

const Header = (props) => {
  return (
    <div className="headerNav">
      {props?.menus &&
        props.menus.map((m, index) => {
          <div className="menuItem" key={index}>
            <Link to={m.url}>{m.title}</Link>
          </div>;
        })}
    </div>
  );
};
export default Header;
