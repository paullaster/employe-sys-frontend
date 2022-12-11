import FlassMessage from "react-flash-message";
import '../assets/Message.css';
const Message = ({ duration, persistOnHover = "true", message }) => {
  return (
    <FlassMessage duration={duration} persistOnHover={persistOnHover}>
      <div className="container-box">
        <div className="message-container">
            <p className="message">
                {message}
            </p>
        </div>
      </div>
    </FlassMessage>
  );
};

export default Message;
