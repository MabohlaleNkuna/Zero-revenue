import { IoIosSend } from "react-icons/io";

function IntroEmail() {
  return (
    <div className="intro-div">
      <div className="Intro">
        <div className="intro-heading">Life Planning, Making</div>
        <br />
        <div className="intro-heading">Easy To Turn Dreams a Reality.</div>
        <div className="intro-text">
          Get Exclusive offers on purchase of any plans
        </div>
      </div>

      <div className="Email">
        <div className="input-email">
          <IoIosSend
            className="send-icon"
            style={{
              position: "absolute",
              top: "13px",
              left: "10px",
              fontSize: "1.4rem",
              margin: "0px",
            }}
          />
          <input type="email" placeholder="Your Email"></input>
        </div>
        <input type="submit" value="Sign Up"></input>
      </div>
    </div>
  );
}

export default IntroEmail;
