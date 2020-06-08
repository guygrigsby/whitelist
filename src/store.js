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
export const putMessage = async (author, image_uri, text) => {
  return db
    .collection('chunks')
    .add({
      author,
      image_uri,
      text,
    })
    .then(function (docRef) {
      return docRef;
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
};

export const getFromDB = (collection) => {
  const getOptions = {
    source: 'default',
  };
  return db
    .collection(collection)
    .get(getOptions)
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => {
        const message = doc.data();
        message.title = doc.id;
        return message;
      });
    })
    .then((coll) => {
      return coll;
    })
    .catch((error) => {
      console.error('FETCH Error:', error);
    });
};
