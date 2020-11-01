import React, { createContext, useContext, useReducer } from "react";

export const UserIDStorageContext = createContext();

export const UserIDStorageProvider = ({ reducer, initialValue, children }) => (
  <UserIDStorageContext.Provider value={useReducer(reducer, initialValue)}>
    {children}
  </UserIDStorageContext.Provider>
);

export const useUserIDStorageValue = () => useContext(UserIDStorageContext);

export const UserIDStorageOperation = {
  UPDATE_DATA: "UPDATE_DATA",
  RESET_DATA: "RESET_DATA",
};

export const UserIDInitialConfig = {
  email: null,
  emailVerified: false,
  phone: null,
  name: null,
  displayPictureURL: null,
  action: null,
};

export const UserIDStorageReducer = (prevState, action) => {
  switch (action.action) {
    case UserIDStorageOperation.UPDATE_DATA:
      return {
        ...prevState,
        email: action.email,
        emailVerified: action.emailVerified,
        phone: action.phone,
        name: action.name,
        displayPictureURL: action.displayPictureURL,
      };
    case UserIDStorageOperation.RESET_DATA:
      return UserIDInitialConfig;
    default:
      return prevState;
  }
};

export const generateUserIDStorage = (
  email,
  isEmailVerified,
  PhoneNumber,
  UserName,
  displayPictureURL,
  action
) => ({
  action: action,
  email: email,
  emailVerified: isEmailVerified,
  phone: PhoneNumber,
  name: UserName,
  displayPictureURL: displayPictureURL,
});
