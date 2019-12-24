let a = parseInt(prompt('Enter length of a side', ''));
let b = parseInt(prompt('Enter length of b side', ''));
let c = parseInt(prompt('Enter length of c side', ''));
if (!a || !b || !c) {
	console.log('Input values should be ONLY numbers');
} else if (a<=0 || b<=0 || c<=0) {
	console.log('A triangle must have 3 sides with a positive definite length');
} else if (a+b<=c || a+c<=b || b+c<=a){
	console.log('Triangle doesn’t exist');
} else {
	if (a === b && b === c) {
		console.log('It is equilateral triangle');
	} else if (a === b || a === c || b === c) {
		console.log('It is isosceles triangle');
	} else {
		console.log('It is scalene triangle');
	}
}