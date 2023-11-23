'use client'
import React from "react";
import MultiRangeSlider from "../components/MultiRangeSlider/MultiRangeSlider";


export default function Home() {
	let [value, setValue] = React.useState({ min: 0, max: 100 });

	return (
		<div className="slider">
			<div className="inputSlider">
				<input type="text" value={value.min} />
				<input type="text" value={value.max} />
			</div>
			<MultiRangeSlider min={0} max={100} step={5} value={value} onChange={setValue} />
		</div >
	)
}
