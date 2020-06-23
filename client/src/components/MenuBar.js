import React, { Fragment, useState, useContext } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
const pathName = window.location.pathname;
const path = pathName === "/" ? "home" : pathName.replace("/", "");
const MenuBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name={user ? user.username : "home"}
        active={user !== null || activeItem === "home"}
        onClick={(e) => {
          if (user) {
            return;
          }
          handleItemClick(e, { name: "home" });
        }}
        as={Link}
        to="/"
      />

      <Menu.Menu position="right">
        {user ? (
          <Menu.Item name="logout" onClick={logout} />
        ) : (
          <Fragment>
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={handleItemClick}
              as={Link}
              to="/login"
            />
            <Menu.Item
              name="register"
              active={activeItem === "register"}
              onClick={handleItemClick}
              as={Link}
              to="/register"
            />
          </Fragment>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
