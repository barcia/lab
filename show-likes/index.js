const showLikes = likesArr => {
	const maxVisibleLikes = 3
	let string

	if (likesArr.length === 0) {
		string = "no one likes this"
	}

	if (likesArr.length === 1) {
		string = `${likesArr[0]} likes this`
	}

	if (likesArr.length > 1 && likesArr.length <= maxVisibleLikes) {
		const last = likesArr.pop()
		string = `${likesArr.join(', ')} and ${last} like this`
	}

	if (likesArr.length > maxVisibleLikes) {
		const visibleLikes = likesArr.slice(0, maxVisibleLikes);
		const numericalLikes = likesArr.slice(maxVisibleLikes - likesArr.length);
		numericalLikes.push(visibleLikes.pop())
		string = `${visibleLikes.join(', ')} and ${numericalLikes.length} others like this`
	}

	return string;
}


// Test
likes0 = []
likes1 = ["Peter"]
likes2 = ["Jacob", "Alex"]
likes3 = ["Max", "John", "Mark"]
likes4 = ["Alex", "Jacob", "Mark", "Max"]
likes5 = ["Alex", "Jacob", "Mark", "Max", "John", "Mark", "Alex", "Jacob", "Mark", "Max", "John"]

console.log(showLikes(likes0))
console.log(showLikes(likes1))
console.log(showLikes(likes2))
console.log(showLikes(likes3))
console.log(showLikes(likes4))
console.log(showLikes(likes5))