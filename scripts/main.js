function isBellaTheCutest (){

alert("Running analysis on current sociopolitical climate to determine approximate atmopheric concentration of Bella cuteness molocules.......")
alert("Loading......")
alert("Yep, she's still awesome.")
}

var myImg = document.querySelector('#bella');
var myImgDescription = document.getElementById('action');
var media1Description = document.getElementById('action1');
var media2Description = document.getElementById('action2');
var media1 = document.querySelector('.dance1');
var media2 = document.querySelector('.dance2');

/* Set Username*/
function setUsrname(usrname){
	var name = prompt("Please enter your name.")
	return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); 
}

myImg.onclick = function () {
	var mySrc = myImg.getAttribute('src');
	if(mySrc === 'media/bella-pose.jpg') {
		myImg.setAttribute('src','media/bella-pose2.jpg');
		media1.setAttribute('src', 'media/sing1.mp4');
		media2.setAttribute('src', 'media/sing2.mp4');
		myImgDescription.textContent = "SINGS";
		media1Description.textContent = "KOREAN BEYONCE?";
		media2Description.textContent = "NEEDS TO RELEASE HER NEXT ALBUM";
	} else {
		myImg.setAttribute('src', 'media/bella-pose.jpg');
		media1.setAttribute('src', 'media/dance1.mp4');
		media2.setAttribute('src', 'media/dance2.mp4');
		myImgDescription.textContent = "DANCES";
		media1Description.textContent = " HIP HOP GODDESS ";
		media2Description.textContent = " TEACHES ";
	}
}
/*Welcome Message: Get Time of Day and Name and greet user */
function currentTime(){
		usrname = setUsrname();
		let hour = new Date().getHours();
		let amPM = hour >= 12 ? 'pm' : 'am';
		if (amPM === "am") {
			if (hour > 5) {
				document.querySelector('.greeting').textContent = "Good Morning, " + usrname
			} else {
				document.querySelector('.greeting').textContent = "I hope you sleep soon, " + usrname
			}
		} else if (hour >= 12 && hour < 17) {
			document.querySelector('.greeting').textContent = "Good Afternoon, " + usrname
		} else if (hour >= 17 && hour < 20 ) {
			document.querySelector('.greeting').textContent = "Good Evening, " + usrname
		} else {
			document.querySelector('.greeting').textContent = "Having a nice night " + usrname + "?"
		}
	}
currentTime();