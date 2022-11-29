import axios from "axios";
import React, { useEffect, useState } from "react";
import cookies from "../Cookie/getCookie";
import Header from "../Navbar/navbar";
import Table from "../Table/table";

export default function RequestStatus() {
  const [userToken, setUserToken] = useState(cookies("userJwt"));
  const [incubation, setIncubulation] = useState();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/incuDetails", {
        headers: {
          authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        setIncubulation(res.data.incubation);
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>Booking Status</h1>
      {incubation && <Table data={[incubation]} />}
    </div>
  );
}
