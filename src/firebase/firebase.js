 // Initialize Firebase
let firebase = require('firebase')

  var config = {
    apiKey: "AIzaSyB_v1xTx16ec7IthGuufuvAcAZwY0JWxP8",
    authDomain: "e-commerce-150bb.firebaseapp.com",
    databaseURL: "https://e-commerce-150bb.firebaseio.com",
    projectId: "e-commerce-150bb",
    storageBucket: "e-commerce-150bb.appspot.com",
    messagingSenderId: "416430460078"
  };
  firebase.initializeApp(config);

  export const storageRef = firebase.storage()

//   //get element
//   var uploader = document.getElementById("uploader")
//   var fileButton = document.getElementById("fileButton")


  
  //lister for file selection
// fileButton.addEventListener("change", (data)=>{
//     ///get file
//     var file = data.target.files[0]
//     //create a storage ref
//     var storageRef = firebase.storage().ref("item_photos/"+ file.name)

//     //photos
//       //  - img.jpg
//       //  - img2.jpg 
    
//     //upload
//     storageRef.put(file)

//     //update progess bar
//     task.on("state_changed", 
    
//     function progess(snapshot){
//         var percentage = snapshot.bytesTransferred / snapshot.totalBytes* 100
//         uploader.value = percentage
//     },
    
//     function error(err){

//     },
//     function complete(){

//     } 
//     )
// })