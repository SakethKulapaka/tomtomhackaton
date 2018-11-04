const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');

admin.initializeApp();

const app = express();
app.use(bodyParser.json());

app.post('/senddata', (req,res) => {
	//console.log(req.body.lat);
	admin.database().ref().child('bus1').push({
		long : req.body.long,
		lat : req.body.lat
	}).then((snapshot) => {
		res.send('received');
	});
});
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);