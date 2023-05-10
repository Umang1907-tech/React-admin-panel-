import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Manage_users() {
  const [data, setData] = useState([]);
  console.log(data);
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  useEffect(() => {
    console.log("useefeect of admin..");
    fetchdata();
  }, []);

  // get
  const fetchdata = async () => {
    const res = await axios.get(`http://localhost:3000/user`);
    console.log(res);
    setData(res.data);
  };

  // delete
  const ondelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/user/${id}`);
    console.log(res);
    fetchdata();
  };

  // status Unblock & Block
  const status = async (id) => {
    const resuser = await axios.get(`http://localhost:3000/user/${id}`);
    console.log(resuser);

    if (resuser.data.status === "Unblock") {
      const res = await axios.patch(`http://localhost:3000/user/${id}`, {
        status: "Block",
      });
      fetchdata();
      toast.error("User block successfully !");
      console.log(res);
    } else {
      const res = await axios.patch(`http://localhost:3000/user/${id}`, {
        status: "Unblock",
      });
      fetchdata();
      toast.error("User Unblock successfully !");
      console.log(res);
    }
  };

  // edit
  const onedit = async (id) => {
    console.log(id);
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    console.log(res);
    setFormvalue({
      ...formvalue,
      name: res.data.name,
      email: res.data.email,
      password: res.data.password,
      mobile: res.data.mobile,
    });
    setUpdid(id);
  };

  // onchange for modal input field
  const onchange = (e) => {
    setFormvalue({
      ...formvalue,
      [e.target.name]: e.target.value,
    });
  };

  // update data from admin side
  const validate = () => {
    let result = true;
    if (formvalue.name === "" || formvalue.name === null) {
      result = false;
      toast.error("Name is required !");
      return result;
    }
    if (formvalue.email === "" || formvalue.email === null) {
      result = false;
      toast.error("Email is required !");
      return result;
    }
    if (formvalue.password === "" || formvalue.password === null) {
      result = false;
      toast.error("Password is required !");
      return result;
    }
    if (formvalue.mobile === "" || formvalue.mobile === null) {
      result = false;
      toast.error("Mobile is required !");
      return result;
    }
    return result;
  };

  const [updid, setUpdid] = useState("");

  const onupdate = async () => {
    if (validate()) {
      const res = await axios.patch(
        `http://localhost:3000/user/${updid}`,
        formvalue
      );
      console.log(res);
      console.log(updid);
      if (res.status === 200) {
        setFormvalue({ name: "", email: "", password: "", mobile: "" });
        fetchdata();
      }
    }
  };

  console.log("render admin");
  return (
    <div id="page-wrapper">
      <div className="row">
        {/*  page header */}
        <div className="col-lg-12">
          <h1 className="page-header">Manage User</h1>
        </div>
        {/* end  page header */}
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Advanced Tables */}
          <div className="panel panel-default">
            <div className="panel-heading">Manage User</div>

            <div className="panel-body">
              <div className="table-responsive">
                <table
                  className="table table-striped table-bordered table-hover"
                  id="dataTables-example"
                >
                  <thead>
                    <tr>
                      <th>User Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Mobile</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  {data.map((value) => {
                    return (
                      <tbody key={value.id}>
                        <tr className="odd gradeX">
                          <td>{value.id}</td>
                          <td>{value.name}</td>
                          <td>{value.email}</td>
                          <td>{value.password}</td>
                          <td>{value.mobile}</td>

                          <td>
                            <button
                              className="btn btn-danger m-2"
                              onClick={() => status(value.id)}
                            >
                              {value.status}
                            </button>
                            <button
                              className="btn btn-danger m-2"
                              onClick={() => ondelete(value.id)}
                            >
                              Delete
                            </button>

                            <button
                              className="btn btn-danger m-2"
                              data-toggle="modal"
                              data-target="#myModal"
                              onClick={() => onedit(value.id)}
                            >
                              Edit
                            </button>

                            <div className="modal" id="myModal">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  {/* Modal Header */}
                                  <div className="modal-header">
                                    <h4 className="modal-title">
                                      Modal Heading
                                    </h4>
                                    <button
                                      type="button"
                                      className="close"
                                      data-dismiss="modal"
                                    >
                                      ×
                                    </button>
                                  </div>
                                  {/* Modal body */}
                                  <div className="modal-body">
                                    <form method="post">
                                      <div className="row g-3">
                                        <div className="col-sm-12">
                                          <input
                                            type="text"
                                            name="name"
                                            value={formvalue.name}
                                            onChange={onchange}
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="Your Name"
                                            style={{ height: 55 }}
                                          />
                                        </div>
                                        <div className="col-sm-12">
                                          <input
                                            type="email"
                                            name="email"
                                            value={formvalue.email}
                                            onChange={onchange}
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="Your Email"
                                            style={{ height: 55 }}
                                          />
                                        </div>
                                        <div className="col-sm-12">
                                          <input
                                            type="password"
                                            name="password"
                                            value={formvalue.password}
                                            onChange={onchange}
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="Password"
                                            style={{ height: 55 }}
                                          />
                                        </div>
                                        <div className="col-sm-12">
                                          <input
                                            type="number"
                                            name="mobile"
                                            value={formvalue.mobile}
                                            onChange={onchange}
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="mobile"
                                            style={{ height: 55 }}
                                          />
                                        </div>
                                        <div className="col-sm-12">
                                          <button
                                            data-dismiss="modal"
                                            className="btn btn-primary border-inner w-100 py-3"
                                            type="submit"
                                            onClick={onupdate}
                                          >
                                            Save
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                  {/* Modal footer */}
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      data-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
          {/*End Advanced Tables */}
        </div>
      </div>
    </div>
  );
}
