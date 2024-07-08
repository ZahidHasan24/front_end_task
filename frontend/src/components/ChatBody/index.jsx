import Template from "../Template";
import Message from "../Message";
import Loader from "../Loader";

const ChatBody = ({
  messageList,
  template,
  loading,
  messagesEndRef,
  setFormValue,
  toggleResponse,
  chatId,
}) => {
  return (
    <section className="flex flex-col flex-grow w-full px-4 overflow-y-scroll sm:px-10 md:px-32">
      {messageList?.length > 0 ? (
        messageList?.map((message, index) => (
          <Message
            key={index}
            message={{ ...message }}
            toggleResponse={toggleResponse}
            chatId={chatId}
          />
        ))
      ) : (
        <div className="flex my-2">
          <div className="w-screen overflow-hidden min-h-screen flex items-center justify-center">
            <div className="flex items-center justify-center space-x-12">
              {template.map((item, index) => (
                <Template key={index} item={item} setFormValue={setFormValue} />
              ))}
            </div>
          </div>
        </div>
      )}
      {loading && <Loader />}
      <span ref={messagesEndRef}></span>
    </section>
  );
};

export default ChatBody;
