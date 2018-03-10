 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAuaTjBeE8v5pPqzRxdqzr79m-JbvZDvgg",
    authDomain: "fir-proj-a90e7.firebaseapp.com",
    databaseURL: "https://fir-proj-a90e7.firebaseio.com",
    projectId: "fir-proj-a90e7",
    storageBucket: "",
    messagingSenderId: "485101741662"
  };
  firebase.initializeApp(config);


  $("#submit").on ("click", function(){
      var trainName= $("#train-name-input").val().trim();
      var destination = $("#train-destination-input").val().trim();
      var trainTime=$ ("#first-train-time").val().trim();
      var frequency =$ ("#frequency").val().trim();
    var newTrain = {
        name:trainName, 
        destination: destination,
        trainTime: trainTime, 
        frequency: frequency 
    }

console.log (newTrain)

  })