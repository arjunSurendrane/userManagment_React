import axios from "axios";
import React, { useEffect, useState } from "react";
import cookies from "../Cookie/getCookie";
import UserTable from "../UserTable/userTable";
import AdminHeader from "./Navbar/navbar";

export default function UserControl() {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/admin/users', {
      headers: {
        'authorization': `Bearer ${cookies('adminJwt')}`
      }
    }).then((res) => {
      console.log({ res })
      setData(res.data.data)
    }).catch(err => {
      console.log({ err })
    })


  }, [])



  return (
    <div>
      <AdminHeader />
      <h1>User controller</h1>
      {data && <UserTable data={data} />}
    </div>
  );
}
