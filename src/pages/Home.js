/* eslint-disable import/no-anonymous-default-export */
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Home.css"

export default function() {
    return (
        <>
            <Header />
            <div className = "image-container">
                <img className = "banner-image" alt="USMO Banner" src={require("../images/usmoBanner.png")} />
            </div>
            <div className = "mission">
                <h2>Our Mission</h2>
                <p className = "missionp">Our mission is to overcome and mitigate barriers that houseless communities/encampments face in relation to accessing healthcare and other services provided in the Berkeley area. Houseless encampments are not only being continuously displaced but also often being forced to live on the outskirts of city limits, creating barriers to accessible basic resources and transportation to medical care. Such barriers, stigmatization, and as well as discrimination that houseless communities continually face in their day-to-day lives particularly make them vulnerable to preventable negative health conditions.</p>
            </div>
            <Footer />
        </>
    )
}   