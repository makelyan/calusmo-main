/* eslint-disable import/no-anonymous-default-export */
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function() {
    return (
        <>
            <Header />
            <h2>Error 404: No Page Found</h2>
            <style>{`
                h2 {
                    text-align: center;
                }
            `}</style>
            <img
                className="banner-image"
                alt="USMO Banner"
                src={require("../images/dog.JPG")}
            />
            <Footer />
        </>
    )
}