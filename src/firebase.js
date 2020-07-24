import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyAvwBPwqRtq7TUxhmW1glmy57n1_uk_DVs",
        authDomain: "fb-messenger-clone-908ee.firebaseapp.com",
        databaseURL: "https://fb-messenger-clone-908ee.firebaseio.com",
        projectId: "fb-messenger-clone-908ee",
        storageBucket: "fb-messenger-clone-908ee.appspot.com",
        messagingSenderId: "143976741141",
        appId: "1:143976741141:web:7c49b79c12493c8ed9911c"
})

 const db = firebaseApp.firestore()

 export default db 