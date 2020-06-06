import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA1VIO0cFvbCwz5_PSlUhUcDz_w_E_9bvk',
  authDomain: 'whitelist-279401.firebaseapp.com',
  databaseURL: 'https://whitelist-279401.firebaseio.com',
  projectId: 'whitelist-279401',
  storageBucket: 'whitelist-279401.appspot.com',
  messagingSenderId: '846580013105',
  appId: '1:846580013105:web:e2f2050ae27cf388011d10',
  measurementId: 'G-ZDFFP515NQ',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

//if (window.location.hostname === 'localhost') {
//  db.settings({
//    host: 'localhost:8080',
//    ssl: false,
//  });
//}

export const putMessage = async (author, image_uri, text) => {
  db.collection('chunks')
    .add({
      author,
      image_uri,
      text,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
};

export const getFromDB = async (callback) => {
  console.log('fetching');
  const getOptions = {
    source: 'default',
  };
  db.collection('chapters')
    .where('visibility', '==', 'public')
    .get(getOptions)
    .then((querySnapshot) => {
      console.log('FETCH then', querySnapshot);
      querySnapshot.forEach((doc) => {
        const message = doc.data();
        console.log(`${doc.id} => ${message}`);
        callback(message);
      });
    })
    .catch((error) => {
      console.error('FETCH Error:', error);
    });
};
