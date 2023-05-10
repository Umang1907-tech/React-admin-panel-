import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Header() {
  const redirect = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("adminid")) {
      return redirect("/");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("adminid");
    localStorage.removeItem("adminname");
    toast.success("Logout Success");
    redirect("/");
  };
  return (
    <div>
      <div>
        <nav
          className="navbar navbar-default navbar-fixed-top"
          role="navigation"
          id="navbar"
        >
          {/* navbar-header */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".sidebar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/logo.png" alt="" />
            </a>
          </div>
          {/* end navbar-header */}
          {/* navbar-top-links */}
          <ul className="nav navbar-top-links navbar-right">
            {/* main dropdown */}
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="/">
                <span className="top-label label label-danger">3</span>
                <i className="fa fa-envelope fa-3x" />
              </a>
              {/* dropdown-messages */}
              <ul className="dropdown-menu dropdown-messages">
                <li>
                  <a href="/">
                    <div>
                      <strong>
                        <span className=" label label-danger">
                          Andrew Smith
                        </span>
                      </strong>
                      <span className="pull-right text-muted">
                        <em>Yesterday</em>
                      </span>
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque eleifend...
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="/">
                    <div>
                      <strong>
                        <span className=" label label-info">Jonney Depp</span>
                      </strong>
                      <span className="pull-right text-muted">
                        <em>Yesterday</em>
                      </span>
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque eleifend...
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="/">
                    <div>
                      <strong>
                        <span className=" label label-success">
                          Jonney Depp
                        </span>
                      </strong>
                      <span className="pull-right text-muted">
                        <em>Yesterday</em>
                      </span>
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque eleifend...
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a className="text-center" href="/">
                    <strong>Read All Messages</strong>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
              </ul>
              {/* end dropdown-messages */}
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="/">
                <span className="top-label label label-success">4</span>{" "}
                <i className="fa fa-tasks fa-3x" />
              </a>
              {/* dropdown tasks */}
              <ul className="dropdown-menu dropdown-tasks">
                <li>
                  <a href="/">
                    <div>
                      <p>
                        <strong>Task 1</strong>
                        <span className="pull-right text-muted">
                          40% Complete
                        </span>
                      </p>
                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "40%" }}
                        >
                          <span className="sr-only">
                            40% Complete (success)
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="/">
                    <div>
                      <p>
                        <strong>Task 2</strong>
                        <span className="pull-right text-muted">
                          20% Complete
                        </span>
                      </p>
                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar progress-bar-info"
                          role="progressbar"
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "20%" }}
                        >
                          <span className="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="/">
                    <div>
                      <p>
                        <strong>Task 3</strong>
                        <span className="pull-right text-muted">
                          60% Complete
                        </span>
                      </p>
                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar progress-bar-warning"
                          role="progressbar"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "60%" }}
                        >
                          <span className="sr-only">
                            60% Complete (warning)
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="/">
                    <div>
                      <p>
                        <strong>Task 4</strong>
                        <span className="pull-right text-muted">
                          80% Complete
                        </span>
                      </p>
                      <div className="progress progress-striped active">
                        <div
                          className="progress-bar progress-bar-danger"
                          role="progressbar"
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "80%" }}
                        >
                          <span className="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a className="text-center" href="/">
                    <strong>See All Tasks</strong>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
              </ul>
              {/* end dropdown-tasks */}
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="/">
                <span className="top-label label label-warning">5</span>{" "}
                <i className="fa fa-bell fa-3x" />
              </a>
              {/* dropdown alerts*/}
              <ul className="dropdown-menu dropdown-alerts">
                <li>
                  <a href="/">
                    <div>
                      <i className="fa fa-comment fa-fw" />
                      New Comment
                      <span className="pull-right text-muted small">
                        4 minutes ago
                      </span>
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="/">
                    <div>
                      <i className="fa fa-twitter fa-fw" />3 New Followers
                      <span className="pull-right text-muted small">
                        12 minutes ago
                      </span>
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="/">
                    <div>
                      <i className="fa fa-envelope fa-fw" />
                      Message Sent
                      <span className="pull-right text-muted small">
                        4 minutes ago
                      </span>
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="/">
                    <div>
                      <i className="fa fa-tasks fa-fw" />
                      New Task
                      <span className="pull-right text-muted small">
                        4 minutes ago
                      </span>
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="/">
                    <div>
                      <i className="fa fa-upload fa-fw" />
                      Server Rebooted
                      <span className="pull-right text-muted small">
                        4 minutes ago
                      </span>
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a className="text-center" href="/">
                    <strong>See All Alerts</strong>
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
              </ul>
              {/* end dropdown-alerts */}
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="/">
                <i className="fa fa-user fa-3x" />
              </a>
              {/* dropdown user*/}
              <ul className="dropdown-menu dropdown-user">
                <li>
                  <a href="/">
                    <i className="fa fa-user fa-fw" />
                    User Profile
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-gear fa-fw" />
                    Settings
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="JavaScript:void(0)" onClick={logout}>
                    <i className="fa fa-sign-out fa-fw" />
                    Logout
                  </a>
                </li>
              </ul>
              {/* end dropdown-user */}
            </li>
            {/* end main dropdown */}
          </ul>
          {/* end navbar-top-links */}
        </nav>
        {/* end navbar top */}
        {/* navbar side */}
        <nav className="navbar-default navbar-static-side" role="navigation">
          {/* sidebar-collapse */}
          <div className="sidebar-collapse">
            {/* side-menu */}
            <ul className="nav" id="side-menu">
              <li>
                {/* user image section*/}
                <div className="user-section">
                  <div className="user-section-inner">
                    <img src="assets/img/user.jpg" alt="" />
                  </div>
                  <div className="user-info">
                    <div>
                      Jonny <strong>Deen</strong>
                    </div>
                    <div className="user-text-online">
                      <span className="user-circle-online btn btn-success btn-circle " />
                      &nbsp;Online
                    </div>
                  </div>
                </div>
                {/*end user image section*/}
              </li>
              <li className="sidebar-search">
                {/* search section*/}
                <div className="input-group custom-search-form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
                {/*end search section*/}
              </li>
              <li className>
                <NavLink to="/dashboard">
                  <i className="fa fa-dashboard fa-fw" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-bar-chart-o fa-fw" />
                  Product
                  <span className="fa arrow" />
                </a>
                <ul className="nav nav-second-level">
                  <li>
                    <NavLink to="/add_product">Add Product</NavLink>
                  </li>
                  <li>
                    <NavLink to="/manage_product">Manage Product</NavLink>
                  </li>
                </ul>
                {/* second-level-items */}
              </li>

              <li>
                <NavLink to="/manage_users">
                  <i className="fa fa-flask fa-fw" />
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage_contacts">
                  <i className="fa fa-flask fa-fw" />
                  Manage Contacts
                </NavLink>
              </li>
            </ul>
            {/* end side-menu */}
          </div>
          {/* end sidebar-collapse */}
        </nav>
      </div>
    </div>
  );
}
