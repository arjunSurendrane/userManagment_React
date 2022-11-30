import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "@mui/material/Modal";
import { Link, useNavigate } from "react-router-dom";
import AlerMessage from "../Alert/alert";
import axios from "axios";
import cookies from "../Cookie/getCookie";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "white",
  border: "2px solid #000",
  color: "black",
  boxShadow: 24,
  p: 4,
};
export default function UserTable({ data }) {
  const [user, setUser] = useState({});
  const [editOpen, setEditOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errormsg, setErrMsg] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState("hai");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:3000`, {
        email,
        name: username,
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
          setOpen(false);
        }
      });
  };

  const handleDelete = (id) => {
    axios
      .post(
        `http://127.0.0.1:3000/admin/deleteUser/${id}`,
        {},
        {
          headers: {
            authorization: `Bearer ${cookies("adminJwt")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setChange("hello");
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:3000/admin/editUser/${user._id}`, {
        name: username,
        email,
        username,
        mobile,
      })
      .then((response) => {
        console.log(response);
        setEditOpen(false);
      });
  };

  const modalOpen = (obj) => {
    setUser(obj);
    console.log(obj);
    if (obj) {
      setUsername(obj.name);
      setEmail(obj.email);
      setMobile(obj.mobile);
    }
    setOpen(true);
  };
  const editModalOpen = (obj) => {
    setUser(obj);
    if (obj) {
      setUsername(obj.name);
      setEmail(obj.email);
      setMobile(obj.mobile);
    }
    setEditOpen(true);
  };
  const modalClose = () => {
    setOpen(false);
    setEditOpen(false);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <Button className="bg-dark" onClick={modalOpen}>
            Add User
          </Button>
        </div>
      </div>
      <div className="container">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((obj, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.mobile}</td>
                <td>
                  <Button
                    className="bg-dark"
                    onClick={() => editModalOpen(obj)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    className="bg-dark"
                    onClick={() => handleDelete(obj._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        open={open}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <strong>User Managment</strong>
          </Typography>
          <div>
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

              <div>{errormsg && <AlerMessage error={error} />}</div>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Box>
      </Modal>

      <Modal
        open={editOpen}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <strong>User Managment</strong>
          </Typography>
          <div>
            <Form onSubmit={handleUpdate}>
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

              <div>{errormsg && <AlerMessage error={error} />}</div>
              <Button variant="dark" type="submit">
                Edit
              </Button>
            </Form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
