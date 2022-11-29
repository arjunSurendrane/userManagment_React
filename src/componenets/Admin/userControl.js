import React from "react";
import Table from "../Table/table";
import AdminHeader from "./Navbar/navbar";

export default function UserControl() {
  return (
    <div>
      <AdminHeader />
      <h1>User controller</h1>
      <Table />
    </div>
  );
}
