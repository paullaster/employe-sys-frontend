import FlassMessage from "react-flash-message";

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
