import React from 'react'
import { useState, useEffect } from "react"
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Manage_contacts() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata=async()=>
    {
       const res=await axios.get(`http://localhost:3000/contact`);
       setData(res.data);
        //console.log(res.data);
    }

    /*
    fetch + firebase
    function fetchdata()
    {
        fetch(`https://morningfrontend-default-rtdb.firebaseio.com/contact.json`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }
    */

    const ondelete=async(id)=>
    {
       const res=await axios.delete(`http://localhost:3000/contact/${id}`);
       toast.success('Contact Delete Success');
       fetchdata();

    }
    /*
    function ondelete(id)
    {
        fetch(`https://morningfrontend-default-rtdb.firebaseio.com/contact/${id}.json`, {
        method: 'DELETE',
        })
        .then((res)=>{
            fetchdata();
        });
    }
    */
    return (
        <div id="page-wrapper">
            <div className="row">
                {/*  page header */}
                <div className="col-lg-12">
                    <h1 className="page-header">Manage Contacts</h1>
                </div>
                {/* end  page header */}
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {/* Advanced Tables */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Manage Contacts
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>Contact Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
											<th>Subject</th>
                                            <th>Message</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item, index, entarr) => {
                                                return (
                                                    <tr className="odd gradeX">
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
														<td>{item.email}</td>
                                                        <td>{item.sub}</td>
                                                        <td>{item.msg}</td>
                                                        <td><button className="btn btn-danger" onClick={()=>ondelete(item.id)}>Delete</button></td>
                                                    </tr>
                                                )
                                            })
                                            /*
                                            //fetch data in firebase
                                            Object.keys(data).map((item, index, entarr) => {
                                                return (
                                                    <tr className="odd gradeX">
                                                        <td>{data[item].contactid}</td>
                                                        <td>{data[item].name}</td>
														<td>{data[item].email}</td>
                                                        <td>{data[item].sub}</td>
                                                        <td>{data[item].msg}</td>
                                                        <td><button className="btn btn-danger" onClick={()=>ondelete(item)}>Delete</button></td>
                                                    </tr>
                                                )
                                            })*/

                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*End Advanced Tables */}
                </div>
            </div>
        </div>

    )
}
