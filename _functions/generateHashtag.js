const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const generateHashtag = str => {
	if (str.trim().length === 0) return false

	const words = str.trim().split(' ')

	const capitalizedWords = words.map(word => capitalize(word))

	const hashtag =`#${capitalizedWords.join('')}`

	if (hashtag.length > 140) return false

	return hashtag
}