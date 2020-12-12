import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAup2-DCadUtZ5aKmdshahiiS-8D9cRXJ8",
    authDomain: "floriculturafb-1dea2.firebaseapp.com",
    projectId: "floriculturafb-1dea2",
    storageBucket: "floriculturafb-1dea2.appspot.com",
    messagingSenderId: "97416001520",
    appId: "1:97416001520:web:c975c951c52b4c8f6ccf35"
};

var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();