import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/index.css"
import "../styles/donations.css"


export default function() {
    return (
        <>
            <Header />
            <h1 className = 'main-header'>Support our cause</h1>
            <div className = 'donate-wrapper'>
                <p className = 'donate-blurb'> Donating to USMO would allow us to better serve the communities we see each week by funding our modes of transportation, allowing us to provide increased variety of supplies and nourishment, and more. We thoroughly appreciate any donors or sponsors, and we thank you for supporting our cause!</p>
                <div class="usmo-picture">
                    <img src = "https://images.gofundme.com/APLtMFPmfRnD7EUL55BHdvvCP5Y=/720x405/https://d2g8igdw686xgo.cloudfront.net/78950143_1710694821214128_r.jpeg"
                    alt = "USMO" width={700}/>
                    <p className = 'pic_desc'>
                        Our Organization
                    </p>
                </div>
            </div>
            <div className = "donate-button">
                <a href="https://www.gofundme.com/f/fund-undergraduate-street-medicine-outreach-ucb?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source=customer">
                    <button class="Donate">
                        Donate
                    </button>
            </a></div>
            {/* <form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="business" value="27TQS5YAEL9SG" />
<input type="hidden" name="no_recurring" value="0" />
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form> */}

            <Footer />
        </>
    )
}
