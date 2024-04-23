import Header from "../components/Header"
import Footer from "../components/Footer"

import "../styles/index.css"
import "../styles/donations.css"
import dogImage from "../images/dog.JPG"



export default function() {
    const handleDonateClick = () => {
        // Redirect the user to the GoFundMe page
        window.location.href = 'https://gofund.me/81a81395';
    };

    return (
        <>
            <Header />


            <h1 className = 'main-header'>Support our cause</h1>
            <div className = 'donate-wrapper'>
                <p className = 'donate-blurb'> Donating to USMO would allow us to better serve the communities we see each week by funding our modes of transportation, allowing us to provide increased variety of supplies and nourishment, and more. <br/> We thoroughly appreciate any donors or sponsors, and we thank you for supporting our cause!</p>
                <div class="usmo-picture">
                    <img src = {dogImage} alt = "USMO" width={700}/>
                    
                </div>
            </div>
            <div className = "donate-button">
                <a href="https://www.gofundme.com/f/fund-undergraduate-street-medicine-outreach-ucb?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source=customer">
                    <button class="Donate">
                        Donate
                    </button>
            </a></div>



            <Footer />
        </>
    )
}
