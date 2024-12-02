import React, { useState } from "react";
import Box from "@mui/material/Box";
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

  
  const dates = import.meta.env[`VITE_${tripTitle}_DATES`]?.split(";") || [];
  const slots = import.meta.env[`VITE_${tripTitle}_SLOTS`]?.split(";").map(Number) || [];
  console.log(dates)
  console.log(slots)
  console.log(tripTitle)
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
              />
            </Grid>

            {/* Button to confirm booking */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  if (selectedDate && numTravelers) {
                    alert(
                      `Booking confirmed for ${numTravelers} travelers on ${selectedDate}.`
                    );
                    handleClose();
                  } else {
                    alert("Please select a date and specify the number of travelers.");
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
