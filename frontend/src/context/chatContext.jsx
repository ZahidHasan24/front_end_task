import PropTypes from "prop-types";
import { createContext } from "react";
import useMessageCollection from "../hooks/useMessageCollection";

const ChatContext = createContext({});

const ChatContextProvider = (props) => {
  const { messageCollection, addMessage, clearChat, toggleResponse } =
    useMessageCollection();

  return (
    <ChatContext.Provider
      value={[messageCollection, addMessage, clearChat, toggleResponse]}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatContextProvider };

ChatContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
