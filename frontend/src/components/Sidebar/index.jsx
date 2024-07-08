import { useState, useEffect, useContext } from "react";
import { MdAdd, MdLogout } from "react-icons/md";
import { ChatContext } from "../../context/chatContext";

import { useParams } from "react-router-dom";
import ToggleTheme from "../ToggleTheme";
import ChatList from "../ChatList";
import SidebarHeader from "../SidebarHeader";

const SideBar = () => {
  const params = useParams();
  const [open, setOpen] = useState(true);
  const [messages, , clearChat] = useContext(ChatContext);

  function handleResize() {
    window.innerWidth <= 720 ? setOpen(false) : setOpen(true);
  }

  useEffect(() => {
    handleResize();
  }, []);

  const logout = () => {
    window.localStorage.removeItem("authToken");
    window.location.replace("/login");
  };

  const getConversationList = (messages) => {
    const result = [];
    for (const key in messages) {
      if (messages[key].length > 0) {
        result.push({
          id: key,
          text: messages[key][0].text,
        });
      }
    }
    return result;
  };
  const conversationList =
    Object.keys(messages)?.length > 0 ? getConversationList(messages) : [];

  return (
    <section
      className={`${
        open ? "w-80" : "w-16"
      } bg-neutral flex flex-col items-center gap-y-4 h-screen pt-4 relative duration-100 shadow-md`}
    >
      <SidebarHeader open={open} setOpen={setOpen} />

      <ul className="w-full menu rounded-box">
        <li>
          <a
            className="border border-black bg-tab hover:bg-tab"
            onClick={() => window.location.replace("/")}
          >
            <MdAdd size={15} className="tab-text-color" />
            <p className={`${!open && "hidden"} tab-text-color`}>New Chat</p>
          </a>
        </li>
      </ul>

      <ChatList
        conversationList={conversationList}
        paramsId={params?.id}
        clearChat={clearChat}
        className={`${!open ? "hidden" : ""}`}
      />

      <ul className="absolute bottom-0 w-full gap-1 menu rounded-box max-h-[20vh]">
        <li>
          <ToggleTheme open={open} />
        </li>
        <li>
          <a onClick={logout}>
            <MdLogout size={15} />
            <p className={`${!open && "hidden"}`}>Logout</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
