/* eslint-disable import/no-anonymous-default-export */
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/index.css"
import "../styles/donations.css"
import dogImage from "../images/dog.JPG"

export default function() {
    const goFundMeLink = "https://www.gofundme.com/f/fund-undergraduate-street-medicine-outreach-ucb?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source=customer" 

    return (
        <>
            <Header />
            <h1 className='main-header'>Support Our Cause</h1>
            <div className="donate-content-container">
                <div className='donate-content'>
                    <p className='donate-blurb'>
                        Donating to USMO would allow us to better serve the communities we see each week by funding our modes of transportation, allowing us to provide increased variety of medical supplies and nourishment, and more. We thoroughly appreciate any donors or sponsors, and we thank you for supporting our cause!
                    </p>
                    <a className='donate-button' aria-label="Donate button" target="_blank" rel="noreferrer" href={goFundMeLink}>
                        Donate
                    </a>
                </div>
                <div className='usmo-picture'>
                    <img src={dogImage} alt='USMO' width={700} />
                </div>
            </div>
            <Footer />
        </>
    )
}
