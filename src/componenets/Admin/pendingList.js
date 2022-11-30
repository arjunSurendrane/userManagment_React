import axios from "axios";
import React, { useEffect, useState } from "react";
import cookies from "../Cookie/getCookie";
import Table from "../Table/table";
import AdminHeader from "./Navbar/navbar";

export default function PendingList() {
  const [incubation, setIncubation] = useState()
  useEffect(() => {

    axios.get('http://127.0.0.1:3000/admin/approvedRequests', {
      headers: {
        'authorization': `Bearer ${cookies('adminJwt')}`
      }
    }).then((res) => {
      setIncubation(res.data.incubulation)
      console.log(res)
    })

  }, [])
  return (
    <div>
      <div className="row">
        <AdminHeader />
        <h1>Pending List</h1>

        {incubation && <Table data={incubation} action={'Booked'} />}
      </div>
    </div>
  );
}
