import FlassMessage from "react-flash-message";
import '../assets/Message.css';
const Message = ({ duration, persistOnHover = "true", message }) => {
  return (
    <FlassMessage duration={duration} persistOnHover={persistOnHover}>
      <p>
        {message}
      </p>
    </FlassMessage>
  );
};

export default Message;
