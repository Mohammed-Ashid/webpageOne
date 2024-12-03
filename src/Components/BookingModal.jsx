import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
  borderRadius: "8px",
};

export default function BookingModal({ tripTitle }) {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [availableSlots, setAvailableSlots] = useState(0);
  const [numTravelers, setNumTravelers] = useState("");
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");
    const navigate = useNavigate(); // Initialize navigate

  const dates = import.meta.env[`VITE_${tripTitle}_DATES`]?.split(";") || [];
  const slots = import.meta.env[`VITE_${tripTitle}_SLOTS`]?.split(";").map(Number) || [];
  const rate =import.meta.env[`VITE_${tripTitle}_AMOUNT`]
  console.log(dates)
  // Handle modal open/close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle date selection
  const handleDateChange = (event) => {
    const dateIndex = dates.indexOf(event.target.value);
    setSelectedDate(event.target.value);
    setAvailableSlots(slots[dateIndex] || 0);
  };

  // Handle travelers input
  const handleTravelersChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setNumTravelers(Math.min(Math.max(value, 1), 6)); // Limit between 1 and 6
  };

  // Handle ID type selection
  const handleIdTypeChange = (event) => {
    setIdType(event.target.value);
    setIdNumber(""); // Clear ID number when ID type changes
  };

  // Handle ID number input
  const handleIdNumberChange = (event) => {
    setIdNumber(event.target.value);
  };

  // Save the details to session
  const saveToSession = () => {
    const total = rate * numTravelers; // Calculate total amount
    sessionStorage.setItem("bookingDetails", JSON.stringify({
      tripTitle,
      selectedDate,
      availableSlots,
      numTravelers,
      idType,
      idNumber,
      total, // Save total amount
    }));
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Book Now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="booking-modal-title"
        aria-describedby="booking-modal-description"
      >
        <Box sx={style}>
          <Typography id="booking-modal-title" variant="h6" component="h2" textAlign="center">
            Book Your Trip
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            {/* Dropdown for selecting date */}
            <Grid item xs={12}>
              <Typography>Select Date</Typography>
              <TextField
                select
                fullWidth
                value={selectedDate}
                onChange={handleDateChange}
                variant="outlined"
                size="small"
                // disabled={availableSlots <= 0}
              >
                {dates.map((date, index) => (
                  <MenuItem key={index} value={date}>
                    {date}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Section to display available slots */}
            {selectedDate && (
              <Grid item xs={12}>
                <Typography>
                  Available Slots: <strong>{availableSlots}</strong>
                </Typography>
              </Grid>
            )}

            {/* Input field for number of travelers */}
            {selectedDate && availableSlots > 0 && (
              <Grid item xs={12}>
                <Typography>Number of Travelers</Typography>
                <TextField
                  type="number"
                  fullWidth
                  value={numTravelers}
                  onChange={handleTravelersChange}
                  variant="outlined"
                  size="small"
                  inputProps={{
                    min: 1,
                    max: 6,
                  }}
                  placeholder="Enter number of travelers (1–6)"
                  required
                />
              </Grid>
            )}

            {/* Name, Phone, and ID selection */}
            {selectedDate && availableSlots > 0 && (
              <>
                <Grid item xs={12}>
                  <Typography>Name</Typography>
                  <TextField
                    type="text"
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="Enter your name"
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography>Phone Number</Typography>
                  <TextField
                    type="number"
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="Enter contact number"
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography>ID Type</Typography>
                  <TextField
                    select
                    fullWidth
                    value={idType}
                    onChange={handleIdTypeChange}
                    variant="outlined"
                    size="small"
                    required
                  >
                    <MenuItem value="Adhar">Adhar</MenuItem>
                    <MenuItem value="Voter Id">Voter Id</MenuItem>
                    <MenuItem value="Driving License">Driving License</MenuItem>
                  </TextField>
                </Grid>

                {/* ID number field (enabled only if an ID type is selected) */}
                {idType && (
                  <Grid item xs={12}>
                    <Typography>ID Number</Typography>
                    <TextField
                      type="number"
                      fullWidth
                      value={idNumber}
                      onChange={handleIdNumberChange}
                      variant="outlined"
                      size="small"
                      placeholder="Enter ID Number"
                      required
                    />
                  </Grid>
                )}
              </>
            )}

            {/* Button to confirm booking */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  if (selectedDate && numTravelers && idType && idNumber) {
                    saveToSession();
                    navigate("/payment"); // Redirect to RazorpayPayment component
                  } else {
                    alert("Please fill all the required fields.");
                  }
                }}
              >
                Confirm Booking
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
