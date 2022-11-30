import axios from "axios";
import React, { useEffect, useState } from "react";
import cookies from "../Cookie/getCookie";
import Table from "../Table/table";
import AdminHeader from "./Navbar/navbar";
const EMPTY_MSG = {
  display: 'flex',
  justifyContent: 'center'
}

export default function AdminHome() {
  const [incubation, setIncubation] = useState()
  const [change, setChange] = useState()
  useEffect(() => {

    axios.get('http://127.0.0.1:3000/admin/requests', {
      headers: {
        'authorization': `Bearer ${cookies('adminJwt')}`
      }
    }).then((res) => {
      setIncubation(res.data.incubulation)
      setChange(true)
      console.log(res)
    })

  }, [])

  return (
    <div>
      <div className="row">
        <AdminHeader />
        <h1>Home page</h1>

        {incubation && incubation.length >= 1 ? <Table data={incubation} action={'Approve'} /> : <div style={EMPTY_MSG}>Empty Request</div>}
      </div>
    </div>
  );
}
