import { firebase } from "@react-native-firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBEl_Qj9DzR3B4w8Cfp1X8iN8R1c4dI3JY",
    authDomain: "reactnative-basic-c810b.firebaseapp.com",
    projectId: "reactnative-basic-c810b",
    storageBucket: "reactnative-basic-c810b.appspot.com",
    messagingSenderId: "842479112513",
    appId: "1:842479112513:web:b7803c3bbf69d85fcb91c0"
};


export const fireBaseApp =firebase.initializeApp(firebaseConfig);

