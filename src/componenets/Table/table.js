import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./table.css";
import { Button } from "react-bootstrap";

export default function Table(props) {
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
                {props.Heading && <th scope="col"> {props.Heading} </th>}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                {props.Heading && <td>18/06/2022</td>}
                <td>
                  <Button className="button">Open</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
