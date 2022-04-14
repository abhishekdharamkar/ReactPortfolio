import '../src/Css/Portfolio.css';
import '../src/Css/Contact.css';
import Abhishek from '../src/Images/Abhishek.jpeg'
function Profile(){
    
    return (
        <div className="profile">
        <div className="profile-text mt-4">
            <span>
                <h2 style={{color: "#888888;"}}>Meet Abhishek Dharamkar</h2>
              
            </span>
            I am Abhishek Dharamkar. 
            I am hardworking developer.<br/>
            Currently working in <span style={{color:"tomato"}}>Mindbowser INC</span> .<br/>
            I have good knowledge of Java and React<br/> 
            Highly motivated Software Developer and Technology <br/>
             Enthusiastic learner, eager to meet new <br/>
			challenges and get ahead in the IT industry.
        </div>
        <div className="profile-image">
            
            <img src={Abhishek} className="profile-img" alt="BigCo Inc. logo"/>
        </div>
    </div>
    
    )
}
export default Profile;