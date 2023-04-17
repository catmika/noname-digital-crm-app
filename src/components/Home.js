import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid"); // if it's owner uid - edit users in burger menu renders
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <nav>
        <Menu width={"20%"}>
          <a className="menu-item" href="/Home">
            Home
          </a>
          <a className="menu-item" href="/Home">
            Contacts
          </a>
          {uid === "rZiPm9QgNUgriKs4rvnCWPA5nAk2" ? (
            <a className="menu-item" href="/Home">
              Edit users
            </a>
          ) : null}
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </Menu>
      </nav>

      <h1 className="text-center align-bottom">
        Welcome home, {name && email}
      </h1>
    </>
  );
};

export default Home;
