import profilepic from './assets/my.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilepic}alt="Profile image"></img>
            <h2 className="card-title">Thejandeera Sandeepana</h2>
            <p className="card-text">I am a undergraduate student of SLIIT | Bsc (hons) Computer Science.</p>
            <a href="https://www.linkedin.com/in/thejandeera-sandeepana-6baa17208" className="card-button" target="_blank" rel="noopener noreferrer">
                More info
            </a>
        </div>
    );
}

export default Card