export function guid() {
	const s4 = () =>
		Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	return s4() + s4() + s4() + s4() + s4() + s4();
}

export function randomItem(arr) {
	return arr[Math.floor(Math.random()*arr.length)]
}

export function randomColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}