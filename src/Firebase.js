import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDqna6sjqdHq3c3QM3xWbVB7IIzvJHyIXs',
  authDomain: 'alocker-bd7b8.firebaseapp.com',
  projectId: 'alocker-bd7b8',
  storageBucket: 'alocker-bd7b8.appspot.com',
  messagingSenderId: '156208158049',
  appId: '1:156208158049:web:4663075964f1379e73a120',
  measurementId: 'G-BHQ9B5QDCL'
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };