//-------PART1--------------

const stringA = 'Hello'
const stringB = 'World'
const sentence = `${stringA} ${stringB}`
console.log(sentence)



//-------PART2----------------

const multiply = (a = 1, b = 1) => a * b;
console.log(multiply(6,6));
console.log(multiply(2,5))
console.log(multiply(5))


//-------PART3----------------

const average = (...args) => {

	const sum = args.reduce((sum, arg) => {
	return sum + arg
	})

return (`${sum / args.length}`)
}

console.log(average(1))
console.log(average(1, 3))
console.log(average(1, 3, 6, 6))
console.log(average(9, 10, 12, 20))


//-------PART4----------------

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
const average1 = (...args) => {

	const sum = args.reduce((sum, arg) => {
	return sum + arg
	})

return (`${sum / args.length}`)
}
console.log(average1 (...grades))


//-------PART5----------------


const table = [1, 4,'Iwona', false, 'Nowak']
const [ , , firstName,  , lastName] = table
console.log(firstName, lastName)
