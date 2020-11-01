import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import styles from "./ChatReceive.module.css";
function ChatReceive({ Message, receivedTime, email }) {
  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{Message}</p>
      </div>
      <div className={styles.receiveTime}>
        <p>{receivedTime}</p>
      </div>
    </div>
  );
}
export default ChatReceive;
