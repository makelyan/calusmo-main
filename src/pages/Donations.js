import Header from "../components/Header"
import Footer from "../components/Footer"
import React from 'react'
import "../styles/Donations.css"

export default function() {
    const handleDonateClick = () => {
        // Redirect the user to the GoFundMe page
        window.location.href = 'https://gofund.me/81a81395';
    };

    return (
        <>
            <Header />
            <h2>Donation Page</h2>
            <p>USMO is a nonprofit student-based organization, so 100% of the services and resources that we employ to help our community are funded and facilitated by each of our members personally. As a result, any donation that can be spared would be a tremendous help in helping us accomplish our mission of providing accessible healthcare to our community. Please fill out the form below if you're interested in donating to USMO or contact us at our e-mail or phone number on our website's "contact" section if there's something else you'd like to offer.</p>
            {/* Use a button with an onClick event listener */}
            <button onClick={handleDonateClick}>Donate Now</button>
            <Footer />
        </>
    );
}