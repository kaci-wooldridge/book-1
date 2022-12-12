/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [
    {id: 1, 
    text: "people", 
    author: "kc", 
    date: "november 8th", 
    topics: ["colors", "numbers", "letters"]
},
{
    id: 2,
    text: "animals",
    author: "kc",
    date: "november 8th",
    topics: ["colors", "numbers", "letters"]
}
]

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

const places = {
    id: 3,
    text: "places",
    author: "kc",
    date: "november 8th",
    topics: ["colors", "numbers", "letters"]

}
const things = {
    id: 4,
    text: "things",
    author: "kc",
    date: "november 8th",
    topics: ["colors", "numbers", "letters"]

}
const plants = {
    id: 5,
    text: "plants",
    author: "kc",
    date: "november 8th",
    topics: ["colors", "numbers", "letters", "type"]

}

notes.push(places, things, plants);
/*console.log(notes)

for(const note of notes){
    console.log(note.text)
}

console.log("***ALL NOTE TOPICS***")
for(const note of notes){
    for(const topic of note.topics){
        console.log(topic)
    }
}*/

// console.log("***AVERAGE TOPICS PER NOTE***")

// let totalTopics = 0

// for(const note of notes){
//     for(topic of note.topics){
//         totalTopics += 1
//     }
// }

// const averageTopics = totalTopics/notes.length
// console.log(averageTopics)

// const filteredNotes = []
// const criteria = "colors"

// for(const note of notes){
//     if(note.topics.includes(criteria)){
//         filteredNotes.push(note)
//     }
// }

// console.log(filteredNotes)

console.log("***  Note Articles  ***")

let emptyString = ""


for(const note of notes){
    emptyString += `\n<article> \n ${note.text} \n`
    for(const topic of note.topics){
        emptyString += `<section> ${topic} </section> \n` 
    }
    emptyString += `</article>`
}

console.log(emptyString)