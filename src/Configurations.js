const database_name_config = "rooms"; //THe name of the main collection
const firebaseConfig = {}; //Add your API key here
const messageStructure_config = (message, name, timestamp, email) => ({
  message: message,
  name: name,
  timestamp: timestamp,
  email: email,
}); 

export { firebaseConfig, database_name_config, messageStructure_config };
