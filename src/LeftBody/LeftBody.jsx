import styles from "./LeftBody.module.css";
import React, { useReducer } from "react";
import LeftTitleBar from "./LeftTitleBar/LeftTitleBar";
import ChatComponent from "./ChatComponent/ChatComponent";
import {
  CurrentRoomStorageOperation,
  CurrentRoomStorageValue,
} from "../DataLayers/CurrentRoomStorage";
import { useState } from "react";
import { useEffect } from "react";
import { getLastMessage, getRoomInformation } from "../Backend/BackEndService";
import { database_name_config } from "../Configurations";
import {
  UserIDStorageOperation,
  useUserIDStorageValue,
} from "../DataLayers/UserIdStorage";
import { signOut } from "../Backend/AuthenticationService";

function LeftBody() {
  const [{}, trigger] = CurrentRoomStorageValue();
  const [rooms, updateRooms] = useState([]);
  const [UserData, UserDatatrigger] = useUserIDStorageValue();
  useEffect(() => {
    getRoomInformation(database_name_config, updateRooms);
  }, []);
  const signOutSucessfulCallback = () => {
    UserDatatrigger({ action: UserIDStorageOperation.RESET_DATA });
    trigger({ action: CurrentRoomStorageOperation.RESET_ROOM });
    alert("Signed Out Successfully");
  };
  const signOutFailureCallback = () => {
    alert(
      "An error occured while signing out.Please chek your network or try after some time"
    );
  };

  return (
    <div className={styles.container}>
      <LeftTitleBar
        UserName={UserData.name}
        displayPictureURL={UserData.displayPictureURL}
        signOutSuccess={signOutSucessfulCallback}
        signOutFailure={signOutFailureCallback}
        signOutFunction={signOut}
      ></LeftTitleBar>

      <div></div>
      {rooms.map((room) => {
        return (
          <ChatComponent
            key={room.id}
            Name={room.name}
            lastmessagegetter={(storageFunction) => {
              getLastMessage(database_name_config, room.id, storageFunction);
            }}
            clickAction={(e) => {
              trigger({
                id: room.id,
                name: room.name,
                action: CurrentRoomStorageOperation.UPDATE_ROOM,
              });
            }}
          ></ChatComponent>
        );
      })}
    </div>
  );
}

export default LeftBody;
