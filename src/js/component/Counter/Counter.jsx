import React from "react";
import PropTypes from "prop-types";

//Style
import "./counter.css";

const Counter = (props) => {
	return (
		<div className="Container-fluid">
			<div className="row justify-content-center text-white">
				<div className="col-2 digit shadow p-2 me-1 rounded-3">
					<i class="far fa-clock #offset"></i>
				</div>
				<div className="col-2 digit shadow p-2 me-1 rounded-3">
					{props.days}
				</div>
				<div className="col-2 digit shadow p-2 me-1 rounded-3">
					{props.hours}
				</div>
				<div className="col-2 digit shadow p-2 me-1 rounded-3">
					{props.minutes}
				</div>
				<div className="col-2 digit shadow p-2 rounded-3">
					{props.seconds}
				</div>
			</div>
		</div>
	);
};

Counter.propTypes = {
	seconds: PropTypes.number,
	minutes: PropTypes.number,
	hours: PropTypes.number,
	days: PropTypes.number,
};

export default Counter;
