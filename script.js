function updateClock() {

	var now = new Date();
	var dayname = now.getDay(),
		month = now.getMonth(),
		date = now.getDate(),
		year = now.getFullYear(),
		hours = now.getHours(),
		min = now.getMinutes(),
		sec = now.getSeconds(),
		period = "AM";

	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

	if (hours == 0)
		hours = 12;

	if (hours > 12) {
		// hours  = hours -12;
		period = "PM";
	}

	// add 0 in the beginning of number if less than 10
	hours = (hours < 10) ? "0" + hours : hours;
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? '0' + sec : sec;

	document.getElementById("dayname").innerHTML = days[dayname];
	document.getElementById("month").innerHTML = months[month];
	document.getElementById("daynum").innerHTML = date;
	document.getElementById("year").innerHTML = year;
	document.getElementById("hour").innerHTML = hours;
	document.getElementById("minutes").innerHTML = min;
	document.getElementById("seconds").innerHTML = sec;
	document.getElementById("period").innerHTML = period;

}

function digiClock() {
	updateClock();
	window.setInterval("updateClock()", 1);
}

digiClock();
