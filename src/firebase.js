let firebase = require("firebase");
var config = {
  apiKey: "AIzaSyBbE7jSBdSfmiAjEiERcyrzim8xn3R6u6I",
  authDomain: "shoppingcart-a181d.firebaseapp.com",
  databaseURL: "https://shoppingcart-a181d.firebaseio.com",
  projectId: "shoppingcart-a181d",
  storageBucket: "shoppingcart-a181d.appspot.com",
  messagingSenderId: "475738473080"
};
firebase.initializeApp(config);
let defaultApp = firebase.initializeApp(config);
let defaultDatabase = defaultApp.database();
// export default defaultDatabase;
console.log(defaultDatabase.ref("/products").once('value').then(function(snapshot) {
    console.log(snapshot.val());
}));