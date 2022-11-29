import React from "react";
import Header from "../../Navbar/navbar";
import Table from "../../Table/table";
import AdminSidebar from "../Sidebar/adminSidebar";

export default function ApplicationList() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <AdminSidebar />
        </div>
        <div className="col-10">
          <Table />
        </div>
      </div>
    </div>
  );
}
