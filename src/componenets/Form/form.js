//import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import AlerMessage from "../Alert/alert";
import "./form.css";
import { useForm } from "./useForm";
export default function Incubulation({ onClose }) {
  const [value, handlechange] = useForm({});
  const [error, setError] = useState(false);
  const [errormsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    axios
      .post("http://127.0.0.1:3000/incubulation", {
        ...value,
      })
      .then((res) => {
        if (res.data.incubulation) {
          console.log(res.data);
          setSuccess(true);
          setError(true);
          setErrorMsg("add request");
          setTimeout(() => {
            setError(false);
            setSuccess(false);
            onClose();
          }, 1500);
        } else {
          console.log(error);
          setError(true);
          setErrorMsg("something went wrong");
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      });
  };

  return (
    <div className="incubulation mb-5">
      {!success ? (
        <div className="col-12  pb-5">
          <Form className="incuform" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-6">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={handlechange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    onChange={handlechange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    onChange={handlechange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>State</Form.Label>

                  <Form.Control
                    type="text"
                    name="state"
                    onChange={handlechange}
                  />
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    onChange={handlechange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Phone no</Form.Label>
                  <Form.Control
                    type="Number"
                    name="phone"
                    onChange={handlechange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Company Name</Form.Label>

                  <Form.Control
                    type="text"
                    name="companyName"
                    onChange={handlechange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Company Logo</Form.Label>

                  <Form.Control
                    type="text"
                    name="companyLogo"
                    onChange={handlechange}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Describe Your Team and Background</Form.Label>

                <Form.Control
                  type="text"
                  name="background"
                  onChange={handlechange}
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Describe your Company and Product</Form.Label>

                <Form.Control
                  type="text"
                  name="product"
                  onChange={handlechange}
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>
                  Describe the problem your are trying to solve
                </Form.Label>

                <Form.Control
                  type="text"
                  name="problem"
                  onChange={handlechange}
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>What is unique about solution</Form.Label>

                <Form.Control
                  type="text"
                  name="solution"
                  onChange={handlechange}
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>
                  What is your value propostitiono for the customer
                </Form.Label>

                <Form.Control
                  type="text"
                  name="proposition"
                  onChange={handlechange}
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>
                  What are your competitors and what is your competative
                  advantage
                </Form.Label>

                <Form.Control
                  type="text"
                  name="competative"
                  onChange={handlechange}
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Explain your revenue model</Form.Label>

                <Form.Control
                  type="text"
                  name="revenueModel"
                  onChange={handlechange}
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>
                  What is the potential market size of the product
                </Form.Label>

                <Form.Control
                  type="text"
                  name="marketSize"
                  onChange={handlechange}
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>
                  How do you market or plan to market your productss and
                  services
                </Form.Label>

                <Form.Control
                  type="text"
                  name="productAndService"
                  onChange={handlechange}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Type od incubation needed</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  name="incubationMethod"
                  value={"physical"}
                  label={"Physical Incubulation"}
                  onChange={handlechange}
                />
              </div>
              <div>
                <Form.Check
                  type="radio"
                  name="incubationMethod"
                  value={"virtual"}
                  label={"Virtual Incubulation"}
                  onChange={handlechange}
                />
              </div>
            </Form.Group>
            <div className="row">
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Upload a detailed business proposal</Form.Label>

                <Form.Control
                  type="mobile"
                  name="businesProposal"
                  onChange={handlechange}
                />
              </Form.Group>
            </div>
            <div className="row">
              <div className="row">
                {"  "}
                {error && <AlerMessage varient={success} error={errormsg} />}
              </div>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      ) : (
        <div className="row">
          {"  "}
          {error && <AlerMessage varient={success} error={errormsg} />}
        </div>
      )}
    </div>
  );
}
