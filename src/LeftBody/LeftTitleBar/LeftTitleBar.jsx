import styles from "./LeftTitleBar.module.css";
import React from "react";
import AccountPicture from "../icons/AccountPicture.svg";
import { AddtoCollection } from "../../Backend/BackEndService";
import { database_name_config } from "../../Configurations";
import cancelIcon from "../icons/exit.svg";

function LeftTitleBar({
  displayPictureURL,
  UserName,
  signOutFunction,
  signOutSuccess,
  signOutFailure,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.leftArea}>
        <img
          src={displayPictureURL || AccountPicture}
          alt={"Profile"}
          className={styles.profilePhoto}
        ></img>

        <p className={styles.profileName}>{UserName}</p>
      </div>
      <div className={styles.lastContainer}>
        <p
          className={styles.addBtn}
          onClick={(e) => {
            var roomName = prompt("Enter the room name");
            if (roomName) {
              if (/\S/.test(roomName)) {
                AddtoCollection(database_name_config, { name: roomName });
              } else {
                alert("Sorry Unable to create blank room");
              }
            }
          }}
        >
          +
        </p>
        <div></div>
        <img
          src={cancelIcon}
          alt={"Log out"}
          className={styles.exitIcon}
          onClick={(e) => {
            signOutFunction(signOutSuccess, signOutFailure);
          }}
        ></img>
      </div>
    </div>
  );
}

export default LeftTitleBar;
