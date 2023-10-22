import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Hamburger from "../Hamburger";

export default function Header({ screenWidth, breakpoint }) {
  return (
    <header className="sticky">
      <div className="row p-1">
        <Link to="/" className="col-4">
          <h1>Kindling</h1>
        </Link>

        {screenWidth < breakpoint ? (
          <Hamburger></Hamburger>
        ) : (
          <div className="col-8">
            <nav>
              <ul className="row mt-3 justify-content-between align-items-end">
                <li className="col-2">
                  <a href="/blog" className="navWord">
                    Blog
                  </a>
                </li>
                <li className="col-2">
                  <a href="/about" className="navWord">
                    About
                  </a>
                </li>
                <li className="col-2">
                  <a className="navWord">Store</a>
                </li>
                <li className="col-2">
                  <a href="#contact" className="navWord">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
