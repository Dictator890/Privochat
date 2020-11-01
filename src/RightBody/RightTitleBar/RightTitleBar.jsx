import React from "react";
import styles from "./RightTitleBar.module.css";
import AccountPicture from "../icons/AccountPicture.svg";
function RightTitleBar({ roomName, ProfileURL }) {
  return (
    <div className={styles.RightTitleBar}>
      <div className={styles.leftcontainer}>
        <img
          src={ProfileURL || AccountPicture}
          alt={"Profile Pic"}
          className={styles.profilePhoto}
        ></img>
        <p className={styles.profileName}>{roomName}</p>
      </div>
    </div>
  );
}
export default RightTitleBar;
