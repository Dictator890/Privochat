import React from "react";
import styles from "./ChatSend.module.css";
function ChatSend({ Message, sentTime, email }) {
  return (
    <div className={styles.container}>
      <div className={styles.receiveTime}>
        <p>{sentTime}</p>
      </div>
      <div className={styles.chatContainer}>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{Message}</p>
      </div>
    </div>
  );
}
export default ChatSend;
