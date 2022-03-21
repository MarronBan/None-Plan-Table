import React from "react"

function C() {
	const handleClick = (e) => {
		e.stopPropagation()
		console.log("C")
	}
	return (
		<div
			onClick={(e) => {
				handleClick(e)
			}}
		>
			点我C
		</div>
	)
}

function B() {
	const handleClick = () => {
		console.log("B")
	}
	return (
		<div
			onClick={() => {
				handleClick()
			}}
		>
			点我B
			<C></C>
		</div>
	)
}

export default function A() {
	const handleClick = () => {
		console.log("A")
	}
	return (
		<div
			onClick={() => {
				handleClick()
			}}
		>
			点我A
			<B></B>
		</div>
	)
}
