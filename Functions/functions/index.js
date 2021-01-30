const config = require('./config');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase = require('firebase');
const {v4: uuid} = require("uuid");
admin.initializeApp();
const db = admin.firestore();
const app = require('express')();
const cors = require('cors');
app.use(cors());
firebase.initializeApp(config);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
 });
