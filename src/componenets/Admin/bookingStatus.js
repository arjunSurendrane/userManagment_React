import React from "react";
import AdminHeader from "./Navbar/navbar";
import Slot from "./Slot/slot";

export default function BookingStatus() {
  return (
    <div>
      <div className="row">
        <AdminHeader />
        <h1>BookingStatus</h1>

        <Slot />
      </div>
    </div>
  );
}
