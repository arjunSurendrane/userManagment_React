import React, { useState } from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AlerMessage from "../Alert/alert";

function BasicExample() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errormsg, setErrMsg] = useState(false);
  const [error, setError] = useState("");
  const history = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:3000`, {
        email,
        username,
        mobile,
        password,
      })
      .then((response) => {
        if (response.data.error.keyPattern) {
          setErrMsg(true);
          setError("this email address already have an account");
          setTimeout(() => {
            setErrMsg(false);
          }, 5000);
        } else if (response.data.error) {
          setErrMsg(true);
          setError("something went wrong");
          setTimeout(() => {
            setErrMsg(false);
          }, 5000);
        } else {
          console.log(response);
          history('/home')
        }
      });
  };
  return (
    <>
      <div className="main">
        <h1>
          <strong>Register</strong>{" "}
        </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMobile">
            <Form.Control
              type="mobile"
              placeholder="Enter mobile"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
          <div>{errormsg && <AlerMessage error={error} />}</div>
          <Button variant="dark" type="submit">
            Submit
          </Button>
          <div>
            <span>Already have an account? </span>
            <Link to={"/"}> login</Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default BasicExample;
