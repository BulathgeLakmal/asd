import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDvF2ummGjVOHPEqZtT4BpdcO2ticnYCyE",
    authDomain: "bethelinfo-68d5f.firebaseapp.com",
    projectId: "bethelinfo-68d5f",
    storageBucket: "bethelinfo-68d5f.appspot.com",
    messagingSenderId: "1043449980937",
    appId: "1:1043449980937:web:fbe751ca626815918e70d8",
    measurementId: "G-XV6X1E2NPQ"
  };

export default firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const emailsCollection = db.collection('emails');


export {
    db,
    emailsCollection,

}
