import { useState, useEffect } from "react";

const useMessageCollection = () => {
  const [messageCollection, setMessageCollection] = useState({});

  useEffect(() => {
    const storedMessages = JSON.parse(
      window.localStorage.getItem("messageCollection")
    );

    if (storedMessages) {
      setMessageCollection(storedMessages);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(messageCollection)?.length > 0) {
      window.localStorage.setItem(
        "messageCollection",
        JSON.stringify(messageCollection)
      );
    }
  }, [messageCollection]);

  const addMessage = (id, message) => {
    setMessageCollection((prev) => ({
      ...prev,
      [id]: prev[id] !== undefined ? [...prev[id], message] : [message],
    }));
  };

  const clearChat = (id) => {
    if (id !== "") {
      const msgCollection = { ...messageCollection };
      delete msgCollection[id];

      window.localStorage.setItem(
        "messageCollection",
        JSON.stringify(msgCollection)
      );
      setMessageCollection(messageCollection);
    }
  };

  const toggleResponse = (chatId, msgId) => {
    setMessageCollection((prev) => {
      const chat = prev[chatId];
      if (chat) {
        const updatedChat = chat.map((message) =>
          message.id === msgId
            ? { ...message, badResponse: !message.badResponse }
            : message
        );
        return { ...prev, [chatId]: updatedChat };
      }
      return prev;
    });
  };

  return { messageCollection, addMessage, clearChat, toggleResponse };
};

export default useMessageCollection;
