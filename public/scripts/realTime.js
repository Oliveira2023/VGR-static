    
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://vgr-veiculos-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


function writeUserData( name, km) {
    const db = getDatabase();
    set(ref(db, 'veiculo1'), {
      nome: name,
      km: km
    });
    console.log("data written")
  }
  writeUserData('nomeJS', 'kmjs');
module.exports = {
    database
}