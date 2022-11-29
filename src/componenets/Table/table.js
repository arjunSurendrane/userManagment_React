import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./table.css";
import { Button } from "react-bootstrap";

export default function Table({ data }) {
  console.log(data);
  return (
    <>
      <div className="tableMain">
        <div className="tableStyle">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Company Name</th>
                <th scope="col">Company Details</th>
                <th scope="col">Status</th>
                <th scope="col">Slot</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((obj, key) => (
                <tr>
                  <td>{key + 1}</td>
                  <td>{obj.businesProposal}</td>
                  <td>{obj.companyName}</td>
                  <td>{obj.background}</td>
                  <td>{obj.status}</td>
                  <td>
                    {" "}
                    {obj.status == "Booked"
                      ? obj.BookingDate.split("T")[0]
                      : "Waiting List"}
                  </td>
                  <td>
                    <Button className="button">Open</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
