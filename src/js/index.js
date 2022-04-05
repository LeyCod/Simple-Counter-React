//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../assets/Styles/index.css";

//import your own components
import Counter from "./component/Counter/Counter.jsx";

//render your react application

let sum = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

setInterval(() => {
	if (sum < 60) {
		seconds = sum;
	} else {
		seconds = 0;
		minutes++;
		sum = 0;
	}

	if (minutes == 60) {
		hours++;
		minutes = 0;
	}

	if (hours == 24) {
		days++;
		hours = 0;
	}

	if (days == 365) {
		days = 0;
	}

	ReactDOM.render(
		<Counter
			seconds={seconds}
			minutes={minutes}
			hours={hours}
			days={days}
		/>,
		document.querySelector("#app")
	);

	sum++;
}, 1000);
