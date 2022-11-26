import React, { useState } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AlerMessage from "../Alert/alert";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errormsg, setErrorMessage] = useState("");
  const history = useNavigate();

  const handleSubmit = () => {
    console.log(email, password);
    history("/home");
  };
  return (
    <>
      <div className="main">
        <h1>
          <strong>Login</strong>{" "}
        </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <div>{error && <AlerMessage error={errormsg} />}</div>
          <Button variant="dark" type="submit">
            Submit
          </Button>
          <div>
            <span>New Here? </span>
            <Link to={"/register"}> create an account</Link>
          </div>
        </Form>
      </div>
    </>
  );
}
