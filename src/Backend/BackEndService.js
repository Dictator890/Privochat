import { firestore } from "firebase";
import { messageStructure_config } from "../Configurations";
const { default: firebasedatabase } = require("./Firebase/FireBaseConfig");

export const getRoomInformation = (database_name, stateStore) => {
  firebasedatabase.collection(database_name).onSnapshot((snapshot) => {
    stateStore(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }))
    );
  });
};
export const getSingleRoomInformation = (database_name, roomId, stateStore) => {
  firebasedatabase
    .collection(database_name)
    .doc(roomId)
    .onSnapshot((snapshot) => {
      stateStore(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
};

export const AddtoCollection = (db_name, data) => {
  firebasedatabase
    .collection(db_name)
    .add(data)
    .then((result) => {});
};

export const getMessages = (databaseName, roomId, storageFunction) => {
  firebasedatabase
    .collection(databaseName)
    .doc(roomId)
    .collection("messages")
    .orderBy("timestamp", "asc")
    .onSnapshot((snapshot) => {
      storageFunction(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          message: doc.data().message,
          name: doc.data().name,
          timestamp: doc.data().timestamp,
          email: doc.data().email,
        }))
      );
    });
};

export const sendMessages = (database_name, roomId, Message) => {
  firebasedatabase
    .collection(database_name)
    .doc(roomId)
    .collection("messages")
    .add(Message);
};
export const DatabaseMessageStructure = messageStructure_config;

export const getLastMessage = (databaseName, roomId, storageFunction) => {
  firebasedatabase
    .collection(databaseName)
    .doc(roomId)
    .collection("messages")
    .orderBy("timestamp", "desc")
    .limit(1)
    .onSnapshot((snapshot) => {
      storageFunction(snapshot.docs[0]?.data().message.slice(0, 31) || " ");
    });
};
