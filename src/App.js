import "./App.css";
import LeftBody from "./LeftBody/LeftBody";
import RightBody from "./RightBody/RightBody";
import React from "react";
import Login from "./Login/Login";
import { useUserIDStorageValue } from "./DataLayers/UserIdStorage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CurrentRoomStorageValue } from "./DataLayers/CurrentRoomStorage";

function App() {
  const [{ email }, trigger] = useUserIDStorageValue();
  const [{ id }, dispatch] = CurrentRoomStorageValue();
  return (
    <div>
      {!email ? (
        <Login userIdStorage={() => {}}></Login>
      ) : (
        <div className="App">
          <div className={"leftBodyWidth"}>
            <LeftBody></LeftBody>
          </div>
          <div className={"rightBodyWidth"}>
            <RightBody id={id}></RightBody>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
