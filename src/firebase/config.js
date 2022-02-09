import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCzqS5gs-prjaXwNymM-BOisMZpMpOBrGM',
  authDomain: 'thedojosite-8bf52.firebaseapp.com',
  projectId: 'thedojosite-8bf52',
  storageBucket: 'thedojosite-8bf52.appspot.com',
  messagingSenderId: '1044809289731',
  appId: '1:1044809289731:web:d4cf4444acb53e49cc7e36',
};

//   init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
