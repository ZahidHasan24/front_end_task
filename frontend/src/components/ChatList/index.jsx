import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

const ChatList = ({ conversationList, paramsId, clearChat, className }) => {
  const navigate = useNavigate();
  return (
    <nav className={`flex max-h-[60vh] w-full flex-col ${className}`}>
      <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto">
        <div className="flex flex-col">
          <ul className="menu rounded-box space-y-2">
            {conversationList?.map((item, index) => (
              <li
                key={item.id}
                className={`${
                  item?.id === paramsId &&
                  "cursor-pointer sidebar-active outline-2 outline-transparent outline-offset-2 rounded-md"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div onClick={() => navigate(`/${item.id}`)}>
                    <span className="mr-1">{index + 1}.</span>
                    <span>{item.text?.slice(0, 15)}</span>
                  </div>

                  <MdDeleteOutline
                    size={20}
                    className="text-red-500 ml-5"
                    onClick={() => {
                      clearChat(item.id);
                      window.location.replace("/");
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ChatList;
