import { useState, useEffect } from "react";
import axios from "axios";

export default function ContactUs() {
    const [formInput, setFormInput] = useState({
        FirstName: "",
        LastName: "",
        Subject: ""
    });
  
    return (
        <div className="contact" id="contact">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                    required
                    value={formInput.FirstName}
                    onChange={(event) =>
                        setFormInput({ ...formInput, FirstName: event.target.value })
                    }
                />
                <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name.."
                    required
                    value={formInput.LastName}
                    onChange={(event) =>
                        setFormInput({ ...formInput, LastName: event.target.value })
                    }
                />
                <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write here.."
                    required
                    value={formInput.Subject}
                    onChange={(event) =>
                        setFormInput({ ...formInput, Subject: event.target.value })
                    }
                />
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>


        </div>
    );
}
 