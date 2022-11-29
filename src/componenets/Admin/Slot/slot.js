import React, { useState } from "react";
import "./slot.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DatePicker from "react-date-picker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  border: "2px solid #000",
  color: "white",
  boxShadow: 24,
  p: 4,
};

const slotlist = [
  { day: "Mon", date: new Date(), company: "" },
  { day: "Mon", date: new Date(), company: "" },
  { day: "Mon", date: new Date(), company: "" },
  { day: "Mon", date: new Date(), company: "" },
  { day: "Mon", date: new Date(), company: "" },
  { day: "Mon", date: new Date(), company: "" },
  { day: "Mon", date: new Date(), company: "" },
];

export default function Slot() {
  const [key, setKey] = useState();
  const [date, setDate] = React.useState(Date);
  const [company, setCompany] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (key) => {
    setDate(slotlist[key].date);
    setCompany(slotlist[key].company);
    setOpen(true);
    setKey(key);
  };
  const handleClose = () => {
    slotlist[key].date = date;
    slotlist[key].company = company;

    setOpen(false);
  };
  return (
    <div>
      <div className="container">
        <div className="row mainDiv">
          {slotlist.map((data, key) => (
            <>
              <div
                key={key}
                className="col-1 slots"
                onClick={() => handleOpen(key)}
              >
                {data.company}
              </div>
            </>
          ))}
        </div>
      </div>
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
            <div className="col-6">
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <select
                  name="selectList"
                  id="selectList"
                  className="formControl"
                  value={company}
                  onChange={(e) => {
                    e.target.value != "null"
                      ? setCompany(e.target.value)
                      : console.log("select company");
                  }}
                >
                    <option value="null">Select Company</option>   {" "}
                  <option value="Company 1">company 1</option>   {" "}
                  <option value="Company 2">Company 2</option> {" "}
                  <option value="Company 3">Company 3</option>
                </select>
              </Typography>
            </div>
            <div className="col-6">
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <input
                  type="date"
                  className="formControl"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
