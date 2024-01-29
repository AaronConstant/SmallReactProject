import profilePic from './assets/Logo.jpg'

function Card () {
// Class(CSS) within jsx is a reserved keyword so we opt to use className
    return(
        <div className="card">
            <img className = "card-image"src ={profilePic}alt = "Profile Picture"></img>
            <h2 className='card-title'>TheeHerbalous</h2>
            <p className='card-text'> A young holistic enthusiast who focus on Mental Wealth, Hair Health, and Yourself who is studying coding! Tehe</p>

        </div>
    )
}
export default Card;