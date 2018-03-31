function isBellaTheCutest (){

alert("Running analysis on current sociopolitical climate to determine approximate atmopheric concentration of Bella cuteness molocules.......")

if (1 === 1) {
	alert("Get your sunglasses ready, cuz its another shiny day of chillin with Bella. B)")
} else {
	alert("Get your blankies out, cuz today we staying in and chillin with Bella. :3")
}
}

var myImg = document.querySelector('img');
var myImgDescription = document.getElementById('action');



myImg.onclick = function () {
	var mySrc = myImg.getAttribute('src');
	if(mySrc === 'images/bella-pose.jpg') {
		myImg.setAttribute('src','images/bella-pose2.jpg');
		myImgDescription.textContent = "SINGS";
	} else {
		myImg.setAttribute('src', 'images/bella-pose.jpg');
		myImgDescription.textContent = "DANCES";
	}
}