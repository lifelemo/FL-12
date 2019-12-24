let a = parseFloat(prompt('Enter a', ''));
let b = parseFloat(prompt('Enter b', ''));
let c = parseFloat(prompt('Enter c', ''));
if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
	console.log('Invalid input data.');
} else {
	const four = 4;
	let D = b * b - four * a * c;
	
	if (D < 0) {
		console.log('No solution');
	} else if (D === 0) {
		let x = Math.round(-b / (a + a));
		console.log('x = ' + x);
	} else {
		let x1 = Math.round((-b + Math.sqrt(D)) / (a + a));
		let x2 = Math.round((-b - Math.sqrt(D)) / (a + a));
		console.log('x1 = ' + x1 + '; x2 = ' + x2);
	}
		
}