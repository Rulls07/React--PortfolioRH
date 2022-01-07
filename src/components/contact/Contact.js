import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs
        .sendForm(
          "service_ixn1itp",
          "template_lchoizv",
          formRef.current,
          "user_Gg49d7CANuuvobHt5eJwl"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <div className="c">
      <div className="c-bg">
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Get In Touch</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +33 7 81 60 75 57
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                rjhb1985@gmail.com
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" />
                Chemin du mas rouge, Domaine de Fitzgerald, 34970 Lattes-France
              </div>
            </div>
          </div>
          <div className="c-right">
          <p className="c-desc">
            <b> What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  style={{backgroundColor: darkMode && "#464646",
                            color: darkMode && "white",}} 
                    type="text" 
                    placeholder="Your Name" 
                    name="user_name" />
            <input  style={{backgroundColor: darkMode && "#464646",
                            color: darkMode && "white",}} 
                    type="text" 
                    placeholder="Subject" 
                    name="user_subject" />
            <input  style={{backgroundColor: darkMode && "#464646",
                            color: darkMode && "white",}} 
                    type="text" 
                    placeholder="Your Email" 
                    name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#464646",
                              color: darkMode && "white",}} 
                    rows="5" 
                    placeholder="Write a Message" 
                    name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// style={{backgroundColor: darkMode && "#464646"}}
// style={{backgroundColor: darkMode && "#333"}}
// style={{backgroundColor: darkMode && "#333"}}
// style={{backgroundColor: darkMode && "#333"}}