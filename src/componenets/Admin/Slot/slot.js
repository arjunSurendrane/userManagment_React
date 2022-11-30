import React, { useEffect, useState } from "react";
import "./slot.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DatePicker from "react-date-picker";
import cookies from "../../Cookie/getCookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "White",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Slot() {
  const [date, setDate] = React.useState();
  const [open, setOpen] = React.useState(true);
  const history = useNavigate();

  const handleSubmit = () => {
    console.log(date);
    axios
      .post(
        `http://127.0.0.1:3000/admin/bookeIncubulation/${"87 "}`,
        { Date: date },
        {
          headers: {
            authorization: `Bearer ${cookies("adminJwt")}`,
          },
        }
      )
      .then((res) => {
        setOpen(false);
        history("/admin/pendingRequest");
      });
  };

  const handleOpen = (key) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    history("/admin/pendingRequest");
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <div className="row">
            <div className="col-12">
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
  );
}
