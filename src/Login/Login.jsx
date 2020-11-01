import React, { useEffect } from "react";
import styles from "./Login.module.css";
import chaticon from "./icons/ChatIcon.svg";
import ChatImage from "./icons/ChatImage.svg";
import {
  Authentication,
  checkIfUseralreadyLoggedIn,
} from "../Backend/AuthenticationService";
import {
  generateUserIDStorage,
  UserIDStorageOperation,
  useUserIDStorageValue,
} from "../DataLayers/UserIdStorage";
import { useDebugValue } from "react";

function Login({}) {
  const [{}, trigger] = useUserIDStorageValue();
  const loginSuccess = (result) => {
    trigger(
      generateUserIDStorage(
        result.user.email,
        result.user.emailVerified,
        result.user.phoneNumber,
        result.user.displayName,
        result.user.photoURL,
        UserIDStorageOperation.UPDATE_DATA
      )
    );
  };
  const loginFailure = (error) => {
    alert("An error occured while signing in");
  };
  useEffect(() => {
    checkIfUseralreadyLoggedIn(loginSuccess);
  }, []);
  return (
    <div className={styles.coverageScreen}>
      <div className={styles.MenuBar}>
        <div className={styles.icon}>
          <img src={chaticon} alt={"Login"} className={styles.image}></img>
          <h1 className={styles.Title}>Privochat</h1>
        </div>
        <button
          className={`${styles.LoginButton} `}
          onClick={(e) => {
            Authentication(loginSuccess, loginFailure);
          }}
        >
          Google Sign In
        </button>
      </div>
      <a href="https://www.freepik.com/vectors/box">Icons by-Freepik.com</a>
      <div className={styles.bodyArea}>
        <img src={ChatImage} alt={"Login"} className={styles.descImage}></img>
        <div className={styles.description}>
          <h2>Now Chat with anyone you want,anywhere anytime</h2>
        </div>
      </div>
    </div>
  );
}
export default Login;
