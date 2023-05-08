import react from "react";
import './cart-page/cart_page.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {MdFacebook} from 'react-icons/md';
import {AiFillInstagram } from 'react-icons/ai';
import {FaTwitter } from 'react-icons/fa';
export default function Confirmation()

{
    return(   


        <div className="confirmation-page">
        <FontAwesomeIcon className="iconsaw" icon={faCheckCircle} size="10x" color="#95d033" />
        <h2>Thank You!</h2>
        <div className="pra"> 
          <p>A confirmation has been sent to your email. Since you're here, join our list for discounts!</p> 
        </div>
        <form>
          <label htmlFor="email-input">Email:</label>
          <input
            type="email"
            placeholder="Email Address"
            required
          />
          <button type="submit">Yes sign me up!</button>
        </form>
     
      </div>

);
}
