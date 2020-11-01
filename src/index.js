import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./theme.css";
import {
  UserIDInitialConfig,
  UserIDStorageProvider,
  UserIDStorageReducer,
} from "./DataLayers/UserIdStorage";
import {
  CurrentRoomStorageInitialValue,
  CurrentRoomStorageProvider,
  CurrentRoomStorageReducer,
} from "./DataLayers/CurrentRoomStorage";


ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
    <UserIDStorageProvider
      reducer={UserIDStorageReducer}
      initialValue={UserIDInitialConfig}
    >
      <CurrentRoomStorageProvider
        reducer={CurrentRoomStorageReducer}
        initialValue={CurrentRoomStorageInitialValue}
      >
        <App />
      </CurrentRoomStorageProvider>
    </UserIDStorageProvider>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
