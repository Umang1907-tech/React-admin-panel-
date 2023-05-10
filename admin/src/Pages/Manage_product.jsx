import React from 'react'

export default function Manage_product() {
    return (
        <div id="page-wrapper">
            <div className="row">
                {/*  page header */}
                <div className="col-lg-12">
                    <h1 className="page-header">Tables</h1>
                </div>
                {/* end  page header */}
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {/* Advanced Tables */}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Advanced Tables
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead>
                                        <tr>
                                            <th>Rendering engine</th>
                                            <th>Browser</th>
                                            <th>Platform(s)</th>
                                            <th>Engine version</th>
                                            <th>CSS grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="odd gradeX">
                                            <td>Trident</td>
                                            <td>Internet Explorer 4.0</td>
                                            <td>Win 95+</td>
                                            <td className="center">4</td>
                                            <td className="center">X</td>
                                        </tr>
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
