import React, { useEffect, useState } from "react";
import styles from "./ChatComponent.module.css";
import AccountPicture from "../icons/AccountPicture.svg";
function ChatComponent({
  DisplayPictureURL,
  lastmessagegetter,
  Name,
  lastActiveTime,
  clickAction,
}) {
  const [lastMessage, updateLastMessage] = useState("");
  useEffect(() => {
    if (updateLastMessage) {
      lastmessagegetter(updateLastMessage);
    }
  }, []);
  return (
    <div
      className={styles.container}
      onClick={(e) => {
        clickAction(e);
      }}
    >
      <img
        src={DisplayPictureURL || AccountPicture}
        alt={"Profile"}
        className={styles.profilePhoto}
      />
      <div className={styles.informationArea}>
        <p>{Name || ""}</p>
        <div className={styles.spacing}></div>
        <p className={styles.lastMessage}>{lastMessage || ""}</p>
      </div>
      <div className={styles.lastTime}>{lastActiveTime || ""}</div>
    </div>
  );
}
export default ChatComponent;
