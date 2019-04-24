import firebase from 'firebase'

let config = {
  apiKey: "AIzaSyD8mdSNGUGx3pVjO1IlBZW6IjCNY8oTp6c",
  authDomain: "management-50086.firebaseapp.com",
  databaseURL: "https://management-50086.firebaseio.com",
  projectId: "management-50086",
  storageBucket: "management-50086.appspot.com",
  messagingSenderId: "657667101152"
};
firebase.initializeApp(config)

export default firebase