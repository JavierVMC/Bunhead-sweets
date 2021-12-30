import { Link } from "react-router-dom";

export const NavigationAdmin = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand" href="#page-top">
            Bunheads' Sweets
          </a>{" "}
        </div>

        <div
          className="navbar-collapse collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tienda">Shop</Link>
            </li>
            <li>
              <Link to="/contactanos">Contact</Link>
            </li>
            <li>
              <Link to="/usuario">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
