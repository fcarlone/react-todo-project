import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: 'https://react-todo-2a51d.firebaseio.com',
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };

/*
Test Firebase connection
*/

// database.ref().set({
//   name: 'Frank Carlone',
//   location: {
//     city: 'Philadelphia',
//     state: 'PA'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('Error:', error)
// });


// database.ref().remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((error) => {
//     console.log('Error:', error);
//   });


// database.ref().once('value')
//   .then((snapshoot) => {
//     const val = snapshoot.val()
//     console.log(val);
//   }).catch((error) => {
//     console.log('Error:', error);
//   });

// database.ref().on('value', (snapshoot) => {
//   console.log(snapshoot.val());
// });

// database.ref('todos').push({
//   text: 'test firebase database',
//   completed: false,
//   completedAt: ''
// });

// database.ref('todos').push({
//   text: 'using the on method',
//   completed: false,
//   completedAt: ''
// });

// database.ref('todos/-LTU5LY5v_qnpGyOjPJ9').update({
//   completed: true,
//   completedAt: 'December, 11, 2018'
// });

// database.ref('todos/-LTU5LY5v_qnpGyOjPJ9').remove();

/*
Convert Firbase Database object into an array
using the on() method
on does not support Promises
*/
// database.ref('todos').on('value', (snapshot) => {
//   const todos = [];
//   snapshot.forEach((childSnapshot) => {
//     const key = childSnapshot.key;
//     const childData = childSnapshot.val();

//     todos.push({
//       id: key,
//       text: childData.text,
//       completed: childData.completed,
//       completedAt: childData.completedAt
//     });

//   });
//   console.log(todos)
// }, (e) => {
//   console.log('Error fetching data', e);
// });

// // child_changed
// database.ref('todos').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });
