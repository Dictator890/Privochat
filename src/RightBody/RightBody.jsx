import styles from "./RightBody.module.css";
import React from "react";
import RightTitleBar from "./RightTitleBar/RightTitleBar";
import ChatArea from "./ChatArea";
import BottomArea from "./BottomBar/BottomArea";
import { database_name_config } from "../Configurations";
import { CurrentRoomStorageValue } from "../DataLayers/CurrentRoomStorage";
import {
  DatabaseMessageStructure,
  sendMessages,
} from "../Backend/BackEndService";
import { useUserIDStorageValue } from "../DataLayers/UserIdStorage";
import firebase from "firebase";

function RightBody() {
  const [roomData, triggerFunction] = CurrentRoomStorageValue();
  const [{ name, email }, triggerUser] = useUserIDStorageValue();
  return (
    <span>
      {roomData.name ? (
        <div className={styles.RightBody}>
          <RightTitleBar roomName={roomData.name}></RightTitleBar>
          <ChatArea></ChatArea>
          <BottomArea
            uploadMessage={(msg) => {
              sendMessages(
                database_name_config,
                roomData.id,
                DatabaseMessageStructure(
                  msg,
                  name,
                  firebase.firestore.FieldValue.serverTimestamp(),
                  email
                )
              );
            }}
          ></BottomArea>
        </div>
      ) : (
        <div className={styles.RightBody}></div>
      )}
    </span>
  );
}
export default RightBody;
