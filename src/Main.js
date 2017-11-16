import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Bracket Factory
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </div>
          <span className="body" />
        </div>
      </HashRouter>
    );
  }
}
//insert card component
export default Main;
