import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyDBziSfRr-_jy9SwPqcHy5798o5_CXnMTs",
  authDomain: "react-sec03-078.firebaseapp.com",
  projectId: "react-sec03-078",
  storageBucket: "react-sec03-078.appspot.com",
  messagingSenderId: "101152720348",
  appId: "1:101152720348:web:fba0ffc7341d05e52a7b19"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BJzq8AbasC2DRVnnitLqoIGO45hKn4mMSnBH6uK86LQwzmeyCqODvPpHA5IGdUsEeu-Io-NFLDH_9pW44bB2yUQ"
);

export { messaging };
