import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getMessages } from "../Backend/BackEndService";
import { database_name_config } from "../Configurations";
import { CurrentRoomStorageValue } from "../DataLayers/CurrentRoomStorage";
import { useUserIDStorageValue } from "../DataLayers/UserIdStorage";
import styles from "./ChatArea.module.css";

import ChatReceive from "./ChatReceive/ChatReceive";
import ChatSend from "./ChatSend/ChatSend";

function ChatArea() {
  const [{ id, name }, triggerFunction] = CurrentRoomStorageValue();
  const [messages, updateMessages] = useState([]);
  const [{ email }, Usertrigger] = useUserIDStorageValue();
  useEffect(() => {
    if (id) {
      getMessages(database_name_config, id, updateMessages);
    }
  }, [id]);
  return (
    <div className={styles.ChatArea}>
      {messages.map((message) =>
        message.email === email ? (
          <ChatSend
            Message={message.message}
            sentTime={new Date(message.timestamp?.toDate()).toUTCString()}
            key={message.id}
            id={message.id}
            email={message.email}
          ></ChatSend>
        ) : (
          <ChatReceive
            Message={message.message}
            receivedTime={new Date(message.timestamp?.toDate()).toUTCString()}
            key={message.id}
            id={message.id}
            email={message.email}
          ></ChatReceive>
        )
      )}
    </div>
  );
}
export default ChatArea;
