import firebase from 'firebase'

const serviceInit = {
    apiKey: "AIzaSyC0OdEEufs7WXqAPH7cVku0nN_lUS5frQg",
    authDomain: "esouqi.firebaseapp.com",
    databaseURL: "https://esouqi.firebaseio.com",
    projectId: "esouqi",
    storageBucket: "esouqi.appspot.com",
    messagingSenderId: "165961683069",
    appId: "1:165961683069:web:7e0a15e14d232d526b6114",
    measurementId: "G-HWVBPJ1CSX"
}

export const app = firebase.initializeApp(serviceInit)
