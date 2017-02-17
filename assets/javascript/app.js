// $(document).ready(function(){

window.onload = function(){
	console.log(timer.seconds);
	$(".timeRemaining span").html(timer.seconds + " ");
	$(".startButtonWrapper").show();
	$(".gamePlayArea").hide()
	$(".finalScreen").hide();
	$("#startButton").on("click", timer.start);

}
	var answersArray = ["Oboe", "kingOfSwing", "turningBack", "bebop"];
	var userAnswers = [];
	var timeCounter;
	var correctCounter = 0;
	var unansweredCounter = 0;
	var numClicks = 0;

		var timer = {
			seconds:30,
			min:0,

			start: function(){
				//var timeCounter = 
				//setInverval(function(){console.log("setinterval")}, 1000);
				// $("#startButtonWrapper").hide();
				// $(".gamePlayArea").toggle();
				var test;
				test = function() {  };
				setInterval(timer.secondsCounter, 1000);
				console.log("start function");
				$(".startButtonWrapper").hide();
				$(".gamePlayArea").show();
				$(".timeRemaining span").html(timer.seconds + " ");
				
			},

			secondsCounter: function(){
				timer.seconds = timer.seconds - 1;
				//console.log(timer.seconds);
				$(".timeRemaining span").html(timer.seconds + " ");
				
				if (timer.seconds === 0){
					finalScreen();

				}
			},
		

		};
		
	$("input").on("click", function(){
		var chosenAnswer = this.value;
		userAnswers.push(chosenAnswer);	
			for (i = 0; i < answersArray.length; i ++){
				if (chosenAnswer == answersArray[i]){
					correctCounter++;
				}
			}
		});

		console.log(userAnswers);

		function finalScreen(){
			$(".gamePlayArea").hide();
			$(".finalScreen").show();
			$("#correctAnswers span").html(correctCounter);
			incorrectCounter = answersArray.length - correctCounter;
			$("#incorrectAnswers span").html(incorrectCounter);
		};

		
		console.log(answersArray);