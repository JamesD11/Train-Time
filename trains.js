console.log("test");


//Global variables
//------------------------------------------------
var dataRef = new Firebase("https://train-homework-app.firebaseio.com/");

var trainName="";
var destination="";
var time=0;
var frequency=0;
var nextTrain=0;
var minRemaining=0;
var now=moment().format("HH:mm");
console.log(now);

//intial load from Firebase
dataRef.on("value", function(snapshot){
	console.log(snapshot.val());
	console.log(snapshot.val());
	//$("#table-body").html(snapshot.val().trainName);
	//$("#table-body").html(snapshot.val().destination);
	//$("#table-body").html(snapshot.val().time);

},function(errorObject){

		console.log("Errors handled: " + errorObject.code)
	});



//click event for submit button to add train

$("#addTrain").on("click",function(){
	trainName=$("#train-name").val().trim();
	destination=$("#destination").val().trim();
	frequency=$("#frequency").val().trim();
	time=$("#first-time").val().trim();


	console.log(trainName);
	console.log(destination);
	console.log(time);
	console.log(frequency);

	//nextTrain=moment().add('mm', ).fromNow();

	//push to firebase
	/*dataRef.push({
		trainName: trainName,
		destination: destination,
		time: time,
		frequency: frequency,
		nextTrain: nextTrain,
		});*/
		

	//append new train to old list
	$("#trainTable > tbody").append("<tr><td>" + trainName + 
	"</td><td>" + destination + 
	"</td><td>" + frequency + 
	"</td><td>" + nextTrain + 
	"</td><td>" + minRemaining + 
	"</td></tr>");

	
	$("#train-name").val("");
	$("#destination").val("");
	$("#frequency").val("");
	$("#first-time").val("");

	
		// add empty call for your forms

	return false;
});


	


//	},function(errorObject){

		//console.log("Errors handled: " + errorObject.code)
//	})