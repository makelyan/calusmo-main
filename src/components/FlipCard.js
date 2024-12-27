const images = require.context('../images/headshots', false, /\.(png|jpe?g|svg)$/);

export default function FlipCard(name, position, bio, instagramLink, linkedinLink) {
    const headshot = images.keys().find((image) => image.includes(name));
    const headshotSrc = headshot ? images(headshot) : '';

    return (
        <div class="card-wrapper flip-right">
            <div class="card">
                <div class = "front">
                    <img src={headshotSrc} alt={"Headshot of " + name} style ={{}} />
                    <h1>{name}</h1>
                    <h2>{position}</h2>                     
                </div>
                <div class = "back"> 
                    <div class = "back-text-wrapper">
                        <h2>{position}</h2>   
                        <h1>{name}</h1>
                        <p>{bio}</p>
                    </div> 
                    <div class = "icons-box"> 
                        {/*
                        <a href={instagramLink}>
                            <img src= {require("../images/instaIcon.png")} alt="Instagram"/>                       
                        </a>
                        <a href={linkedinLink}>
                            <img src= {require("../images/linkedinIcon.png")} alt="LinkedIn" />
                        </a>
                        */}
                    </div>
                </div>
            </div>
        </div>
    )
}