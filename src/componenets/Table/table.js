import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./table.css";
import { Button } from "react-bootstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Incubulation from "../Form/form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
export default function Table({ data, action }) {
  console.log(data);

  const [object, setObject] = useState();
  const [open, setOpen] = React.useState(false);
  const [booking, setBooking] = React.useState(false);
  const [rid, setRid] = useState();
  const history = useNavigate();

  const [date, setDate] = React.useState();

  const BookinhandleOpen = (id) => {
    setBooking(true);
    setRid(id);
  };

  const BookinghandleClose = () => {
    setBooking(false);
    setOpen(false);
    history("/admin/pendingRequest");
  };

  const handleSubmit = () => {
    setDate(date);
    axios
      .post(
        `http://127.0.0.1:3000/admin/bookeIncubulation/${rid}`,
        { Date: date },
        {
          headers: {
            authorization: `Bearer ${cookies("adminJwt")}`,
          },
        }
      )
      .then((res) => {
        setBooking(false);
        setOpen(false);
        history("/admin/pendingRequest");
        console.log(res);
      });
  };

  const handleOpen = (obj) => {
    setObject(obj);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleApprove = (id) => {
    axios
      .get(`http://127.0.0.1:3000/admin/approveRequest/${id}`)
      .then((res) => {
        console.log(res);
        handleClose();
      });
  };
  const handleDecline = () => {};
  return (
    <>
      <div className="container">
        <div className="tableMain">
          <div className="tableStyle">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Company Details</th>
                  <th scope="col">City</th>
                  <th scope="col">State</th>

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
                    <td>{obj.city}</td>
                    <td>{obj.state}</td>

                    <td>{obj.status}</td>
                    <td>
                      {console.log({ status: obj.BookingDate })}
                      {obj.status === "Booked"
                        ? obj.BookingDate
                        : "Waiting List"}
                    </td>
                    <td>
                      <Button
                        className="button"
                        onClick={() => handleOpen(obj)}
                      >
                        Open
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {object && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <strong> Request Details</strong>
            </Typography>
            <div className="row">
              <form className="modalForm">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3" controlId="formBasicName">
                      <label>Name :</label>
                      <input
                        type="text"
                        readOnly
                        value={object.name}
                        name="name"
                      />
                    </div>
                    <div className="mb-3" controlId="formBasicName">
                      <label>Address :</label>
                      <input
                        type="text"
                        readOnly
                        value={object.address}
                        name="address"
                      />
                    </div>
                    <div className="mb-3" controlId="formBasicName">
                      <label>City :</label>
                      <input
                        type="text"
                        readOnly
                        value={object.city}
                        name="city"
                      />
                    </div>
                    <div className="mb-3" controlId="formBasicAddress">
                      <label>State :</label>

                      <input
                        type="text"
                        readOnly
                        value={object.state}
                        name="state"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3" controlId="formBasicName">
                      <label>Email :</label>
                      <input
                        type="text"
                        readOnly
                        value={object.email}
                        name="email"
                      />
                    </div>
                    <div className="mb-3" controlId="formBasicName">
                      <label>Phone no :</label>
                      <input type="Number" name="phone" value={object.phone} />
                    </div>
                    <div className="mb-3" controlId="formBasicAddress">
                      <label>Company Name :</label>

                      <input
                        type="text"
                        readOnly
                        value={object.companyName}
                        name="companyName"
                      />
                    </div>
                    <div className="mb-3" controlId="formBasicAddress">
                      <label>Company Logo :</label>

                      <input
                        type="text"
                        readOnly
                        value={object.companyLogo}
                        name="companyLogo"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3" controlId="formBasicAddress">
                    <label>Describe Your Team and Background :</label>

                    <input
                      type="text"
                      readOnly
                      value={object.background}
                      name="background"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3" controlId="formBasicAddress">
                    <label>Describe your Company and Product :</label>

                    <input
                      type="text"
                      readOnly
                      value={object.product}
                      name="product"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3" controlId="formBasicAddress">
                    <label>
                      Describe the problem your are trying to solve :
                    </label>

                    <input
                      type="text"
                      readOnly
                      value={object.problem}
                      name="problem"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3" controlId="formBasicAddress">
                    <label>What is unique about solution :</label>

                    <input
                      type="text"
                      readOnly
                      value={object.solution}
                      name="solution"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3" controlId="formBasicAddress">
                    <label>
                      What is your value propostitiono for the customer :
                    </label>

                    <input
                      type="text"
                      readOnly
                      value={object.proposition}
                      name="proposition"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3" controlId="formBasicAddress">
                    <label>
                      What are your competitors and what is your competative
                      advantage :
                    </label>

                    <input
                      type="text"
                      readOnly
                      value={object.competative}
                      name="competative"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3" controlId="formBasicAddress">
                    <label>Explain your revenue model :</label>

                    <input
                      type="text"
                      readOnly
                      value={object.revenueModel}
                      name="revenueModel"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3" controlId="formBasicAddress">
                    <label>
                      What is the potential market size of the product :
                    </label>

                    <input
                      type="text"
                      readOnly
                      value={object.marketSize}
                      name="marketSize"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3" controlId="formBasicAddress">
                    <label>
                      How do you market or plan to market your productss and
                      services :
                    </label>

                    <input
                      type="text"
                      readOnly
                      value={object.productAndService}
                      name="productAndService"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="mb-3" controlId="formBasicAddress">
                    <label>Upload a detailed business proposal :</label>

                    <input
                      type="text"
                      name="businesProposal"
                      value={object.businesProposal}
                    />
                  </div>
                </div>
                {action === "Approve" ? (
                  <div className="row buttons">
                    <div className="col-6">
                      <Button
                        variant="success"
                        onClick={() => handleApprove(object._id)}
                      >
                        Approve
                      </Button>
                    </div>
                    <div className="col-6">
                      <Button
                        variant="danger"
                        onClick={() => handleDecline(object._id)}
                      >
                        Decline
                      </Button>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {action === "Booked" ? (
                  <div className="row buttons">
                    <div className="col-6">
                      <Button
                        variant="success"
                        onClick={() => BookinhandleOpen(object._id)}
                      >
                        Book
                      </Button>
                    </div>
                    <Modal
                      open={booking}
                      onClose={BookinghandleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Text in a modal
                        </Typography>
                        <div className="row">
                          <div className="col-12">
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              <input
                                type="date"
                                className="formControl"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                              />
                              <div className="row mt-5">
                                <div className="col-12">
                                  <button
                                    className="bg-success bookingButton"
                                    onClick={() => handleSubmit()}
                                  >
                                    Book
                                  </button>
                                </div>
                              </div>
                            </Typography>
                          </div>
                        </div>
                      </Box>
                    </Modal>
                  </div>
                ) : (
                  ""
                )}
              </form>
            </div>
          </Box>
        </Modal>
      )}
    </>
  );
}
