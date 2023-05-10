import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";

export default function Login() {
  const redirect = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("adminid")) {
      return redirect("/dashboard");
    }
  }, []);
  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  });

  const onchange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value }); // method 1
    //console.log(formvalue);
  };
  function validate() {
    let result = true;
    if (formvalue.email === "" || formvalue.email === null) {
      result = false;
      toast.error("Email Required !");
    }
    if (formvalue.password === "" || formvalue.password === null) {
      result = false;
      toast.error("password Required !");
    }
    return result;
  }

  const login = async (e) => {
    e.preventDefault();
    if (validate()) {
      const res = await axios.get(
        `http://localhost:3000/admin?email=${formvalue.email}`
      );
      console.log(res);

      if (res.data.length > 0) {
        if (res.data[0].password === formvalue.password) {
          // session create
          localStorage.setItem("adminid", res.data[0].id);
          localStorage.setItem("adminname", res.data[0].name);
          redirect("/dashboard");
          toast.success("Login Success");
        } else {
          toast.error("password  not valid !");
          redirect("/");
        }
      } else {
        toast.error("User name not valid !");
        redirect("/");
      }
    }
  };

  return (
    <body class="body-Login-back">
      <div class="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4 text-center logo-margin ">
            <img src="assets/img/logo.png" alt="img" />
          </div>
          <div className="col-md-4 col-md-offset-4">
            <div className="login-panel panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Please Sign In</h3>
              </div>
              <div className="panel-body">
                <form method="get">
                  <fieldset>
                    <div className="form-group">
                      <input
                        name="email"
                        value={formvalue.email}
                        onChange={onchange}
                        className="form-control"
                        placeholder="E-mail"
                        type="email"
                        autofocus
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="password"
                        value={formvalue.password}
                        onChange={onchange}
                        className="form-control"
                        placeholder="Password"
                        type="password"
                        defaultValue
                      />
                    </div>
                    <div className="checkbox">
                      <label>
                        <input
                          name="remember"
                          type="checkbox"
                          defaultValue="Remember Me"
                        />
                        Remember Me
                      </label>
                    </div>
                    {/* Change this to a button or input when using this as a form */}
                    <a
                      href="void(0)"
                      onClick={login}
                      className="btn btn-lg btn-success btn-block"
                    >
                      Login
                    </a>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
