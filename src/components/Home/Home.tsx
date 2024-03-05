import './Home.css'
// import book from "../../assets/book.jpg"
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home-content">
      {/* <img src={book} alt="book" /> */}
      <p><span>Hello Marvel Fans</span>
        Hey !! Marvel fan . Looking for a character ? Go ahead and get the information of whole Marvel !.
      </p>
      <button className="buttons"><NavLink to="/store" className="button-link">Lets's go!</NavLink></button>
    </div >
  )
}

export default Home