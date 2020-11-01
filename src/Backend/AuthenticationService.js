import firebase from "firebase";
import { auth, authProvider } from "./Firebase/FireBaseConfig";

export const Authentication = (sucessFunction, failurefunction) => {
  auth
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then((success) => {
      auth
        .signInWithPopup(authProvider)
        .then((result) => {
          sucessFunction(result);
        })
        .catch((error) => {
          failurefunction(error);
        });
    })
    .catch((err) => {
      console.log("Unable to login");
    });
};
export const checkIfUseralreadyLoggedIn = (sucessfunction) => {
  auth.onIdTokenChanged((user) => {
    if (user) {
      sucessfunction({ user });
    }
  });
};

export const signOut = (sucessFunction, failurefunction) => {
  auth
    .signOut()
    .then(() => {
      sucessFunction();
    })
    .catch(() => {
      failurefunction();
    });
};
