import React from "react";
import Table from "../Table/table";
import AdminHeader from "./Navbar/navbar";

export default function SlotBookingStatus() {
  return (
    <div>
      <div className="row">
        <AdminHeader />

        <h1>Slot Booking Status</h1>
        <Table Heading={"Date&Time"} />
      </div>
    </div>
  );
}
