  // Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyDcJ5rKzt28X0-hRGFR05n12ZwB9TsIgOw",
    authDomain: "cam-nang-tuyen-sinh.firebaseapp.com",
    databaseURL: "https://cam-nang-tuyen-sinh.firebaseio.com",
    projectId: "cam-nang-tuyen-sinh",
    storageBucket: "cam-nang-tuyen-sinh.appspot.com",
    messagingSenderId: "1053266640612",
    appId: "1:1053266640612:web:5606cec6a9c382289e76f1",
    measurementId: "G-S54WJYMMME"
  };

  $(document).ready(()=>{
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var app = firebase.app();
 

    var db = firebase.firestore();

	console.log(db);

	// db.collection('major').add({
	// 	tuvantuyensinh: 'haha'
	// })

	db.collection("major").get().then((querySnapshot) => {
	    querySnapshot.forEach((doc) => {
	        console.log(doc);
	    });
	});
});


  // Initialize Firebase
  

  // var app = firebase.app();

  // var db = firebase.database();


  console.log('okkkkkkkkkkkk');
