import * as React from 'react';
import RootLayout from "./src/components/RootLayout";
import "@fontsource/spinnaker";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp9VBbyvEqiqIUuXfymgQhSbxfS3iOxEI",
  authDomain: "niortweb.firebaseapp.com",
  databaseURL: "https://niortweb.firebaseio.com",
  projectId: "niortweb",
  storageBucket: "niortweb.appspot.com",
  messagingSenderId: "342355226765",
  appId: "1:342355226765:web:8c3fb5ab31e36dcd7272c4",
  measurementId: "G-S8XPD39PT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


