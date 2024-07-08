import PropTypes from "prop-types";
import {
  MdPerson,
  MdContentCopy,
  MdCheck,
  MdOutlineThumbDown,
} from "react-icons/md";
import moment from "moment";
import Markdown from "../Markdown";
import ChatGptSvg from "../../assets/chatgpt.svg";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import TextToSpeech from "../TextToSpeech";

const Message = (props) => {
  const { id, createdAt, text, ai = false, badResponse } = props.message;
  const { toggleResponse, chatId } = props;

  const { isCopied, handleCopyClick } = useCopyToClipboard();

  console.log(badResponse ? "Remove Feedback" : "Bad Response");

  return (
    <div
      key={id}
      className={`flex items-end my-2 gap-2 ${
        ai ? "flex-row-reverse justify-end" : "flex-row justify-end"
      }`}
    >
      <div
        className={`w-screen overflow-hidden chat ${
          ai ? "chat-start" : "chat-end"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full border border-slate-400 p-1.5">
            {ai ? (
              <img src={ChatGptSvg} />
            ) : (
              <MdPerson className="w-6 h-full m-auto" color="#01ab83" />
            )}
          </div>
        </div>
        <div className="chat-bubble text-neutral-content">
          <Markdown markdownText={text} />
          <div className="flex justify-between mt-2 mb-1">
            <div className={`${ai ? "text-left" : "text-right"} text-xs`}>
              {moment(createdAt).calendar()}
            </div>
            {ai && (
              <div className="flex justify-center space-x-2 items-center">
                <div
                  className="tooltip tooltip-right hover:cursor-pointer"
                  data-tip={isCopied ? "Copied" : "Copy"}
                  onClick={() => handleCopyClick(text)}
                >
                  {isCopied ? <MdCheck /> : <MdContentCopy />}
                </div>
                <div
                  className="tooltip tooltip-right hover:cursor-pointer"
                  data-tip={badResponse ? "Remove Feedback" : "Bad Response"}
                  onClick={() => toggleResponse(chatId, id)}
                >
                  {badResponse ? (
                    <MdOutlineThumbDown color="red" />
                  ) : (
                    <MdOutlineThumbDown />
                  )}
                </div>
                <TextToSpeech text={text} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.number.isRequired,
    text: PropTypes.string,
    ai: PropTypes.bool,
  }).isRequired,
};
