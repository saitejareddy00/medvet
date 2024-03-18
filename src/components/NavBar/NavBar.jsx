import { useState } from "react";
import "./navbar.css";
import LOGO from "../../assets/medvet.png";
import { CustomLink } from "../CustomLink";
import { useNavigate } from "react-router";

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav id="navbar" class="">
        <div class="nav-wrapper">
          <div class="logo" onClick={() => navigate("/")}>
            <img src={LOGO} alt="medvet" height="40px" className="logoIMG" />
          </div>

          <ul id="menu">
            <li>
              <CustomLink to="#/products">Products</CustomLink>
            </li>
            <li>
              <CustomLink>Compositions</CustomLink>
            </li>
            <li>
              <CustomLink>Uses</CustomLink>
            </li>
            <li>
              <CustomLink>Contact Us</CustomLink>
            </li>
          </ul>
        </div>
      </nav>

      <div class="menuIcon" onClick={() => setExpanded((prev) => !prev)}>
        <span class="icon icon-bars"></span>
        <span class="icon icon-bars overlay"></span>
      </div>

      <div
        class="overlay-menu"
        style={{
          transform: expanded ? "" : "translateX(-100%)",
        }}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <ul id="menu">
          <li onClick={() => setExpanded((prev) => !prev)}>
            <CustomLink to="#/products">Products</CustomLink>
          </li>
          <li onClick={() => setExpanded((prev) => !prev)}>
            <CustomLink>Compositions</CustomLink>
          </li>
          <li onClick={() => setExpanded((prev) => !prev)}>
            <CustomLink>Uses</CustomLink>
          </li>
          <li onClick={() => setExpanded((prev) => !prev)}>
            <CustomLink>Contact Us</CustomLink>
          </li>
        </ul>
      </div>
    </>
  );
};
