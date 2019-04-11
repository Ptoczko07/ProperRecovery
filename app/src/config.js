import Firebase from "firebase";

let config = {
  apiKey: "AIzaSyCNioRAajicsFvxYcgLJvNLcB-5vLPqUlY",
  authDomain: "properrecovery.firebaseapp.com",
  databaseURL: "https://properrecovery.firebaseio.com",
  projectId: "properrecovery",
  storageBucket: "properrecovery.appspot.com",
  messagingSenderId: "278567486317"
};

let app = Firebase.initializeApp(config);
export const db = app.database();
