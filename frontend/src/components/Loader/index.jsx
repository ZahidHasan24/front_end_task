import ChatGptSvg from "../../assets/chatgpt.svg";

const Loader = () => {
  return (
    <div className="flex items-end mt-4">
      <div className="chat-image avatar">
          <div className="w-10 rounded-full border border-slate-400 p-1.5">
          <img src={ChatGptSvg} />
          </div>
        </div>
      
      <div className="chat chat-start ">
        <div className="chat-bubble animate-pulse flex items-center justify-center space-x-2">
          <div className="h-2 w-2 bg-neutral-content rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 bg-neutral-content rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 bg-neutral-content rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
