import React from "react";
import Alert from "react-bootstrap/Alert";

export default function AlerMessage(props) {
  return (
    <>
      <div className="alert">
        <Alert variant={props.varient ? "success" : "danger"}>
          {props.error}!
        </Alert>
      </div>
    </>
  );
}
