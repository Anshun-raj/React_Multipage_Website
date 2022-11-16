import React, { useState } from "react";
import './FeedbackDataStyle.css';
function FeedbackData() {
    const [formMessage, setFormMessage] = useState(" ");
    return (
        <div className="feedbackData">
            <h2>Feedback</h2>
            <div className="feedbackDataInfo">
                <div className="feedbackLeft">
                    <h3>Why Feedback?</h3>
                    <p>Feedback is a tool that can help people evaluate themselves and their work and also how others perceive them. While employees and students need to receive feedback, it's also essential for leaders who believe in growth to ask for an evaluation, to give an example, and be an inspiration for them. It is an essential part of the communication mechanism, being a way to help colleagues to learn and grow in their field inside the company. Its importance is also backed up by science: many studies have shown that the most efficient teams are those in which there is appreciative communication. For many team members, feedback can be a good motivator to improve and engage more in the company’s goals.</p>
                </div>
                <div className="feedbackRight">
                    <h3>Feedback Time</h3>
                    <form action="getData.php" method="get">
                        <input type="text" name="nm" placeholder="enter your name" required/><br />
                        <input type="email" name="em" placeholder="enter your email" required /><br />
                        <input type="number" name="age" placeholder="select your age" required /><br />
                        <textarea name="tx" placeholder="message..." required/><br />
                        <select name="rt">
                            <option>select rating</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select><br/>
                        <button onClick={()=>setFormMessage('Your data has been submitted')}>Submit</button><br/>
                        <h4>{formMessage}</h4>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default FeedbackData;