import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyD_JnU6t_8BEb_2a8cgWRA_oxLPbtSIJAU",
  authDomain: "sec03-68700.firebaseapp.com",
  projectId: "sec03-68700",
  storageBucket: "sec03-68700.appspot.com",
  messagingSenderId: "670125938593",
  appId: "1:670125938593:web:0f40bcedf0007433dc9de0",
  measurementId: "G-QH9GHPKCBG",
  appId: "1:1053691098913:web:0ba18adba127366f2d135b060"
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
  "BIra8t_OhD7C-wMJb3xk5CT_9t49wQmnHjV8udsMZIOvv9rekxrG_dAHqyojh3zzZcsVyQfBSZVdyoUpvS6Mktw"
);

export { messaging };
