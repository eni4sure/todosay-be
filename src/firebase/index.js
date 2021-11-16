const { initializeApp } = require("firebase/app");
const adminSDK = require('firebase-admin');
const firebaseCredentials = require("./todosay-firebase-sdk.json");

adminSDK.initializeApp({
    credential: adminSDK.credential.cert(firebaseCredentials)
});

const userSDK = initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
});

module.exports = { adminSDK, userSDK };