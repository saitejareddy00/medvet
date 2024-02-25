import { useState } from "react";
import "./navbar.css";
import LOGO from '../../assets/medvet.jpg'
import { CustomLink } from "../CustomLink";

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <nav id="navbar" class="">
        <div class="nav-wrapper">
          <div class="logo">
               <img src={LOGO} alt="medvet" height='40px'/>
          </div>

          <ul id="menu">
          <li>
            <CustomLink to='#/products'>Products</CustomLink>
          </li>
          <li>
              <CustomLink >Compositions</CustomLink>
            </li>
            <li>
              <CustomLink >Uses</CustomLink>
            </li>
            <li>
              <CustomLink >Contact Us</CustomLink>
            </li>
          </ul>
        </div>
      </nav>

      <div class="menuIcon"  onClick={() => setExpanded(prev=>!prev)}>
        <span class="icon icon-bars"></span>
        <span class="icon icon-bars overlay"></span>
      </div>

      <div
        class="overlay-menu"
        style={{
          transform: expanded ? "" : "translateX(-100%)",
        }}
      >
        <ul id="menu">
          <li>
            <CustomLink >Products</CustomLink>
          </li>
          <li>
              <CustomLink >Compositions</CustomLink>
            </li>
            <li>
              <CustomLink >Uses</CustomLink>
            </li>
            <li>
              <CustomLink >Contact Us</CustomLink>
            </li>
        </ul>
      </div>
    </>
  );
};
