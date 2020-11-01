import React, { createContext, useContext, useReducer } from "react";
/**
 *Get the current data in the context Layer consisting of the current room details
 */
export const CurrentRoomStorage = createContext();

export const CurrentRoomStorageProvider = ({
  reducer,
  initialValue,
  children,
}) => (
  <CurrentRoomStorage.Provider value={useReducer(reducer, initialValue)}>
    {children}
  </CurrentRoomStorage.Provider>
);

export const CurrentRoomStorageValue = () => useContext(CurrentRoomStorage);

export const CurrentRoomStorageInitialValue = { id: null, name: null };

export const CurrentRoomStorageOperation = {
  UPDATE_ROOM: "UPDATE_ROOM",
  RESET_ROOM: "RESET_ROOM",
};

export const CurrentRoomStorageReducer = (prevState, action) => {
  switch (action.action) {
    case CurrentRoomStorageOperation.UPDATE_ROOM:
      return {
        ...prevState,
        id: action.id,
        name: action.name,
      };
    case CurrentRoomStorageOperation.RESET_ROOM:
      return CurrentRoomStorageInitialValue;
    default:
      return prevState;
  }
};
