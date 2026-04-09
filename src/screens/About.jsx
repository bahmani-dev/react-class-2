import React, { useEffect } from "react";
import Header from "../components/Header";

export const About = () => {
  // const [state , setState] = useState(initialValue);
  useEffect(() => {
    // logic
    console.log("Component mounted");
  }, []);
  return (
    <div>
      <div className="bg-black">
        <Header></Header>
      </div>
      <div className=" text-[50px] h-25 bg-lime-600 "> About</div>

      <form id="contact-form">
        <input type="text" name="from_name" placeholder="Your name" />
        <input type="email" name="from_email" placeholder="Your email" />
        <textarea
          name="message_html"
          placeholder="Write your messages here"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
