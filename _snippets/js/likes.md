# Likes

```js
const showLikes = (names, maxVisibleNames = 3) => {
	if (names.length === 0) {
		return "no one likes this"
	}

	if (names.length === 1) {
		return `${names[0]} likes this`
	}

	if (names.length > 1 && names.length <= maxVisibleNames) {
		const last = names.pop()
		return `${names.join(', ')} and ${last} like this`
	}

	if (names.length > maxVisibleNames) {
		const visibleLikes = names.slice(0, (maxVisibleNames - 1));
		const numericalLikes = names.slice((maxVisibleNames - 1) - names.length);
		return `${visibleLikes.join(', ')} and ${numericalLikes.length} others like this`
	}
}


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

```