import React from "react";
import { useState } from "react";
import styles from "./BottomArea.module.css";
import image from "./icons/photo.svg";
import send from "./icons/send.svg";

function BottomArea({ uploadMessage, uploadImage }) {
  const [message, updateMessage] = useState("");
  const triggerMessageUpload = () => {
    uploadMessage && /\S/.test(message)
      ? uploadMessage(message)
      : console.error(" Function Undefined in Bottom Area");
    updateMessage("");
  };

  /**
   *
   * @param {Event} e
   */

  const handleKeyPress = (e) => {
    if (e.shiftKey) {
      switch (e.keyCode) {
        case 13:
          triggerMessageUpload();
          break;
        default:
      }
    }
  };
  return (
    <div className={styles.BottomArea}>
      <div className={styles.chatInputContainer}>
        <textarea
          type="text"
          value={message}
          className={styles.inputarea}
          placeholder={"Enter the text..."}
          onChange={(e) => {
            updateMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            handleKeyPress(e);
          }}
        ></textarea>
        <img
          src={send}
          alt={"Send"}
          className={`${styles.iconproperty} ${styles.send}`}
          onClick={(e) => {
            triggerMessageUpload();
          }}
        ></img>
      </div>
      <img
        src={image}
        alt={"UploadImage"}
        className={`${styles.iconproperty} ${styles.image}`}
        onClick={() => {}}
      ></img>
    </div>
  );
}
export default BottomArea;
