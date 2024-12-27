const images = require.context('../images/headshots', false, /\.(png|jpe?g|svg)$/);

export default function FlipCard({ name, position, bio, instagramLink, linkedinLink }) {
  const headshot = images.keys().find((image) => image.includes(name));
  const headshotSrc = headshot ? images(headshot) : '';

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="front">
          <img src={headshotSrc} alt={`Headshot of ${name}`} />
          <div className="front-text-container">
            <h1>{name}</h1>
            <h2>{position}</h2>
          </div>
        </div>
        <div className="back">
          <div className="back-text-wrapper">
            <p>{bio}</p>
          </div>
          <div className="icons-box">
            {/*
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <img src={require("../images/instaIcon.png")} alt="Instagram" />
              </a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <img src={require("../images/linkedinIcon.png")} alt="LinkedIn" />
              </a>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}
