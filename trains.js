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
var now=moment().format("h:mma");
console.log(now);



//intial load from Firebase
dataRef.on("child_added", function(snapshot){
	console.log(snapshot.val().trainName);
	$("#trainTable > tbody").append("<tr><td>" + snapshot.val().trainName + 
	"</td><td>" + snapshot.val().destination + 
	"</td><td>" + snapshot.val().frequency + 
	"</td><td>" + snapshot.val().nextTrain + 
	"</td><td>" + snapshot.val().minRemaining + 
	"</td></tr>");


},function(errorObject){

		console.log("Errors handled: " + errorObject.code)
});

//click event for submit button to add train

$("#addTrain").on("click",function(){
	trainName=$("#train-name").val().trim();
	destination=$("#destination").val().trim();
	frequency=$("#frequency").val().trim();
	time=$("#first-time").val().trim();

	//math here
	var firstTime= moment(time,"hh:mm").subtract(1, "years");
		console.log(firstTime);

	var currentTime = moment();
		console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

	var diffTime = moment().diff(moment(firstTime), "minutes");
		console.log("DIFFERENCE IN TIME: " + diffTime);

	var tRemainder = diffTime % frequency; 
		console.log(tRemainder);

	var minRemaining = frequency - tRemainder;
		console.log("MINUTES TILL TRAIN: " + minRemaining);

	var nextTrain = moment().add(minRemaining, "minutes").format("hh:mm a");
	console.log(nextTrain);

	// nextTrain=(minRemaining + now);
	// console.log(nextTrain);



	
	//frequency=val().moment().unix();
	//time=val.moment().unix();
	//console.log(frequency);
	//console.log(time);

	//push to firebase
	dataRef.push({
		trainName: trainName,
		destination: destination,
		time: time,
		frequency: frequency,
		nextTrain: nextTrain,
		minRemaining: minRemaining,
		});

	//clear forms
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