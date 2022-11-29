import React, { useState } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AlerMessage from "../Alert/alert";
import { Link, useNavigate } from "react-router-dom";
import createCookie from "../Cookie/createCookie";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errormsg, setErrorMessage] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    console.log(email, password);

    e.preventDefault();
    axios
      .post(`http://127.0.0.1:3000/login`, {


        email,
        password,

      })
      .then((response) => {
        console.log(response);
        if (response.data.error) {
          setErrorMessage("something went wrong");
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 5000);
        } else if (response.data.status) {
          let token = response.data.token
          createCookie('userJwt', token)
          history("/home");
        } else {
          setErrorMessage(response.data.message);
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      });
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
