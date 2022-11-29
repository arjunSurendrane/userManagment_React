import React from "react";
import Table from "../Table/table";
import AdminHeader from "./Navbar/navbar";

export default function AdminHome() {
  return (
    <div>
      <div className="row">
        <AdminHeader />
        <h1>Home page</h1>

        <Table />
      </div>
    </div>
  );
}
