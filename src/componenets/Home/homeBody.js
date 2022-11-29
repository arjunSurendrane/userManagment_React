import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./home.css";
import Incubulation from "../Form/form";

export default function HomeBody() {
  const [form, setForm] = useState(false);
  return (
    <div>
      <div className="formIncu">
        {form ? (
          <div className="form">
            {" "}
            <Incubulation onClose={() => setForm(false)} />
          </div>
        ) : (
          <div className="addButton">
            <Button
              variant="dark"
              className="requestButton"
              onClick={() => setForm(true)}
            >
              Add Request
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
