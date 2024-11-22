import React from 'react';
import { Box, Grid, Typography, TextField, Button, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, LocationOn, Phone, Email } from '@mui/icons-material';
import '../Styles/Footer.css'; // Import your custom styles

function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#2C3E50', color: 'white', padding: '40px 0' }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Travel Company Logo */}
        <Grid item xs={12} sm={4} textAlign="center">
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            TravelMate
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            Your gateway to unforgettable travel experiences. Explore the world with us!
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={2} textAlign="center">
          <Typography variant="h6" sx={{ marginBottom: '10px' }}>Quick Links</Typography>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#destinations" className="footer-link">Destinations</a></li>
            <li><a href="#packages" className="footer-link">Packages</a></li>
            <li><a href="#contact" className="footer-link">Contact Us</a></li>
          </ul>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={2} textAlign="center">
          <Typography variant="h6" sx={{ marginBottom: '10px' }}>Contact Us</Typography>
          <div style={{ marginBottom: '10px' }}>
            <IconButton color="inherit" sx={{ marginRight: '10px' }}>
              <LocationOn />
            </IconButton>
            <Typography variant="body2">123 Travel Lane, City, Country</Typography>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <IconButton color="inherit" sx={{ marginRight: '10px' }}>
              <Phone />
            </IconButton>
            <Typography variant="body2">+1 (800) 123-4567</Typography>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <IconButton color="inherit" sx={{ marginRight: '10px' }}>
              <Email />
            </IconButton>
            <Typography variant="body2">info@travelmate.com</Typography>
          </div>
        </Grid>

        {/* Newsletter Subscription */}
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" sx={{ marginBottom: '10px' }}>Newsletter</Typography>
          <Typography variant="body2" sx={{ marginBottom: '20px' }}>
            Subscribe for the latest travel deals, tips, and more!
          </Typography>
          <Box display="flex" justifyContent="center" sx={{ marginBottom: '20px' }}>
            <TextField
              label="Your Email"
              variant="outlined"
              size="small"
              sx={{ marginRight: '10px', backgroundColor: 'white' }}
            />
            <Button variant="contained" sx={{ backgroundColor: '#F39C12', color: 'white' }}>
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Social Media Icons */}
      <Box textAlign="center" sx={{ marginTop: '30px' }}>
        <IconButton color="inherit" sx={{ margin: '0 10px' }}>
          <Facebook />
        </IconButton>
        <IconButton color="inherit" sx={{ margin: '0 10px' }}>
          <Twitter />
        </IconButton>
        <IconButton color="inherit" sx={{ margin: '0 10px' }}>
          <Instagram />
        </IconButton>
        <IconButton color="inherit" sx={{ margin: '0 10px' }}>
          <LinkedIn />
        </IconButton>
      </Box>

      {/* Footer Bottom */}
      <Box textAlign="center" sx={{ marginTop: '40px', borderTop: '1px solid #7F8C8D', paddingTop: '20px' }}>
        <Typography variant="body2">
          &copy; 2024 TravelMate. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
