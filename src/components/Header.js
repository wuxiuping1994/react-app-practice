import { Menu } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Menu mode="horizontal" style={{ background: "#e6f7ff" }}>
        <Menu.Item key="todo">
          <Link to="/todo">TODO</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">ABOUT</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
