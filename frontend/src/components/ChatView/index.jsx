import { useState, useRef, useEffect, useContext } from "react";
import { replaceProfanities } from "no-profanity";
import apiEndpoint from "../../service";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { template, aiAssitantList } from "../../constant";
import { ChatContext } from "../../context/chatContext";
import Toast from "../../utils/toast";
import Assistant from "../Assistant";
import ChatForm from "../ChatForm";
import ChatBody from "../ChatBody";

const ChatView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const messagesEndRef = useRef();
  const inputRef = useRef();
  const [formValue, setFormValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiAssitant, setAiAssistant] = useState(
    location?.state ? location?.state?.aiAssitant : aiAssitantList[0]
  );
  const [messages, addMessage, , toggleResponse] = useContext(ChatContext);
  const [messageList, setMessageList] = useState([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (params?.id && params?.id !== "") {
      setMessageList(messages[params?.id]);
    }
  }, [messages, params]);

  const updateMessage = (newValue, ai = false, chatId) => {
    const id = Date.now() + Math.floor(Math.random() * 1000000);
    const newMsg = {
      id: id,
      createdAt: Date.now(),
      text: newValue,
      ai: ai,
      badResponse: false,
    };
    addMessage(chatId, newMsg);
    if (!params?.id) {
      const newMessageList = messageList?.length > 0 ? [...messageList] : [];
      newMessageList.push(newMsg);
      setMessageList(newMessageList);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    const loggedIn = window.localStorage.getItem("authToken");
    if (!loggedIn) {
      window.location.replace("/login");
      return;
    }

    const cleanPrompt = replaceProfanities(formValue);

    if (cleanPrompt !== "") {
      const id = Date.now() + Math.floor(Math.random() * 1000000);

      const newMsg = cleanPrompt;
      setLoading(true);
      setFormValue("");
      updateMessage(newMsg, false, params?.id ? params?.id : id);

      try {
        if (aiAssitant === aiAssitantList[0]) {
          const res = await apiEndpoint.Chat.poetic({ message: cleanPrompt });
          res && params?.id
            ? updateMessage(res.response, true, params.id)
            : updateMessage(res.response, true, id);
          res && !params?.id && navigate(`/${id}`, { state: { aiAssitant } });
        } else {
          const res = await apiEndpoint.Chat.grumpy({ message: cleanPrompt });

          res && params?.id
            ? updateMessage(res.response, true, params.id)
            : updateMessage(res.response, true, id);
          res && !params?.id && navigate(`/${id}`, { state: { aiAssitant } });
        }
      } catch (error) {
        console.log(error);
        Toast.error("There is some problem occurred. Please try again later");
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <main className="relative flex flex-col h-screen p-1 overflow-hidden">
      <Assistant
        aiAssitantList={aiAssitantList}
        setAiAssistant={setAiAssistant}
        aiAssitant={aiAssitant}
      />
      <ChatBody
        messageList={messageList}
        template={template}
        loading={loading}
        messagesEndRef={messagesEndRef}
        setFormValue={setFormValue}
        toggleResponse={toggleResponse}
        chatId={params?.id}
      />
      <ChatForm
        sendMessage={sendMessage}
        inputRef={inputRef}
        formValue={formValue}
        setFormValue={setFormValue}
        loading={loading}
      />
    </main>
  );
};

export default ChatView;
