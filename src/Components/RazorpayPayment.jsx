import React, { useEffect, useState } from "react";
import '../Styles/RazorpayPayment.css';

const RazorpayPayment = () => {
    const [amount, setAmount] = useState(null);
    const [bookingDetails, setBookingDetails] = useState({
        tripTitle: "",
        selectedDate: "",
        availableSlots: "",
        numTravelers: "",
        idType: "",
        idNumber: "",
        total: 0
    });

    useEffect(() => {
        // Retrieve booking details from sessionStorage
        const storedBookingDetails = JSON.parse(sessionStorage.getItem("bookingDetails"));

        if (storedBookingDetails) {
            setBookingDetails(storedBookingDetails);
            setAmount(storedBookingDetails.total);
        } else {
            console.error("Booking details not found");
        }
    }, []);

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {
        const isScriptLoaded = await loadRazorpayScript();

        if (!isScriptLoaded) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // Razorpay options
        const options = {
            key: "<your_razorpay_key_id>", // Replace with your Razorpay Key ID
            amount: amount * 100, // Amount in paisa
            currency: "INR",
            name: "Your Business Name",
            description: "Test Transaction",
            handler: function (response) {
                alert("Payment successful!");
                console.log(response);
            },
            prefill: {
                name: "John Doe", // Replace with actual data if available
                email: "johndoe@example.com", // Replace with actual data if available
                contact: "9999999999", // Replace with actual data if available
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div className='container-razor'>
            <h2 className='heading-razor'>Payment</h2>
            


            <div className="details-razor">
                <div className="detail-item">
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">{bookingDetails.tripTitle}</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Selected Date:</span>
                    <span className="detail-value">{bookingDetails.selectedDate}</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Number of Travelers:</span>
                    <span className="detail-value">{bookingDetails.numTravelers}</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">ID Type:</span>
                    <span className="detail-value">{bookingDetails.idType}</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">ID Number:</span>
                    <span className="detail-value">{bookingDetails.idNumber}</span>
                </div>
            </div>
            <div className='amountBox-razor'>
                <span className='label-razor'>Total Amount:</span>
                <span className='amount-razor'>₹ {amount}</span>
            </div>

            <button
                onClick={handlePayment}
                className='button-razor'
                disabled={!amount}
            >
                Pay Now
            </button>
        </div>
    );
};

export default RazorpayPayment;
