import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faCalendarDay } from "@fortawesome/free-solid-svg-icons";

import "./navigation.styles.scss";

const NavigationContainer = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="link-container" to="/">
          <h1>
            My To Do List
            <FontAwesomeIcon className="faIconHeader" icon={faListCheck} />
          </h1>
        </Link>
        <div className="nav-links-container">
          <Link className="link-container" to="/calandar">
            <p>
              Calendar
              <FontAwesomeIcon className="faIconHeader" icon={faCalendarDay} />
            </p>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationContainer;
