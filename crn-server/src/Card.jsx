import profilePic from './assets/profilePic.png'

function Card(){
    return(
        <div className="card">
            <img className='cardImage' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>React Learning</h2>
            <p className='card-text'>I learn react for tommorow clz and implemnt frontend of my project.</p>
        </div>
    );
}

export default Card;