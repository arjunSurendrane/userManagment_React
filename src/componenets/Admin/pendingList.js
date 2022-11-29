import React from "react";
import Table from "../Table/table";
import AdminHeader from "./Navbar/navbar";

export default function PendingList() {
  return (
    <div>
      <div className="row">
        <AdminHeader />
        <h1>Pending List</h1>

        <Table />
      </div>
    </div>
  );
}
