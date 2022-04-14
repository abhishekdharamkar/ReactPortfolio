import '../src/Css/Portfolio.css';
import leftprofile from './Images/LF.jpg'
function Contact (){
    return (
        
<div className="profile-contact">
        <div className="profile-links mt-4">
         
     <span className="e text-center" >
        <img src={leftprofile} id=""></img>
      </span>  <br/>
        Abhishek
        <a href="https://github.com/abhishekdharamkar"><ul> <i class="fa fa-phone" aria-hidden="true">9096904640</i></ul></a> 
        <p className="mail">abhishek.dharamkar@mindbowser.com</p>
       
        <h5 >Connect with me</h5>


       {/* <a href="https://github.com/abhishekdharamkar"><li> <i className="fa fa-brands fa fa-mailbox"></i></li></a>  */}
       <a href="https://github.com/abhishekdharamkar"><ul> <i className="fa fa-brands fa fa-github"></i></ul></a> 
        
       <a href="https://www.linkedin.com/in/abhi-dharamkar/"><ul> <i className="fa fa-brands fa fa-linkedin"></i></ul></a> 
        
       <a href="https://twitter.com/abhishekdharam1"><ul> <i className="fa fa-brands fa fa-twitter"></i></ul></a> 

        <a href="https://www.instagram.com/abhishek_._dharamkar/"><ul> <i className="fa fa-brands fa fa-instagram"></i></ul></a>

        <a href="https://wa.me/9096904640"><ul> <i className="fa fa-brands fa fa-whatsapp"></i></ul></a>

    </div>
        
        
    </div>
    )
}
export default Contact;