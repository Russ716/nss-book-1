

// console.log("*** All Note Topics ***")
/*
    ! Define a variable named `notes` and assign a value of an empty array
*/
//Fill the array with several starter objects that have
//the following properties.
let notes = [{
    //id (number)
    id: 1,
    // * text (string)
    text: "The Color of Magic",
    //  * author (string)
    author: "Terry Pratchett",
    // * date (string)
    date: "24-Nov, 1983",
    //  * topics (array of strings)
    topics: ["fantasy", "fiction", "humor", "comedy", "science fiction", "magic", "adventure", "high fantasy", "novels", "satire"]
},
{
   
    id: 2,
    text: "The Light Fantastic",
    author: "Terry Pratchett",
    date: "2-Jun, 1986",
    topics: ["fantasy", "fiction", "humor", "comedy", "science fiction", "magic", "adventure", "audiobook", "novels"]
},
{
    
    id: 3,
    text: "Mistborn, The Final Empire",
    author: "Brandon Sanderson",
    date: "17-Jul, 2006",
    topics: ["fiction", "high fantasy", "epic fantasy", "magic", "science fiction", "young adult", "adventure"]
},
]
// console.log(notes)

let new1 = {
    id: 4,
    text: "The Cat in the Hat",
    author: "Dr. Seuss",
    date: "12-Mar, 1957",
    topics: ["childrens", "picture book", "classics", "fiction", "poetry", "animals"]
}
let new2 = {
    id: 5,
    text: "Where the Wild Things Are",
    author: "Maurice Sendak",
    date: "9-Apr 1963",
    topics: ["childrens", "picture book", "classics", "fantasy", "animals"]
}
let new3 = {
    id: 6,
    text: "Ulysses",
    author: "James Joyce",
    date: "2-Feb 1922",
    topics: ["fiction", "literature", "classics", "novels", ]
}
notes.push(new1)
notes.push(new2)
notes.push(new3)

// console.log(notes)
// foir each note, grab all the topics of that note
// then grab all unique topics from next notes??
// then display list of each unique topic??

//! let allTopics = []
// console.log("*** Average Topics Per Note ***")
//! let totalTopics = 0
/*
for (const note of notes) {
    let numberTopics = note.topics.length
    //console.log(numberTopics)
    totalTopics += numberTopics
    let averageTopics = totalTopics / 
    console.log(averageTopics)
    //console.log(totalTopics)
    for (const topic of note.topics){
        // allTopics = topic.split(",")
        // totalTopics = allTopics.join(",")
        // console.log(allTopics)
        // totalTopics
        // console.log(totalTopics)
        // console.log(totalTopics.length)
        //console.log(note.topic)
    }
}
*/

// Add a new section of output where you can see, on average, how many topics the author are applying to each post.
/* 
^let filteredNotes = []
let criteria = "classics"

for (const note of notes) {
    totalTopics = totalTopics + note.topics.length
    if (note.topics.includes(criteria)) { //Line 94 - Your task in this chapter is to filter all of the notes to find only the ones that have a specific topic assigned to it.
        filteredNotes.push(note)
    }
}
*/
/*
let averageTopics = totalTopics / notes.length
console.log(averageTopics)
console.log("*** Notes with the Classics topic ***")
console.log(filteredNotes)
*/

let sectionedTopics = []
/*
//!HTML NOTE ARTICLES 
let sectionedTopics = []
let filteredText = []
console.log("***  Note Articles  ***")
for(const note of notes) {
    if (note.text.includes("")) {
        filteredText.push(note.text)
        sectionedTopics.push(note.topics.join("</section> \n<section>"))
        //TODO WHY DOES THIS NOT WORK: filteredText = filteredText.join("</article> \n<article>")
        console.log(`<article>${filteredText}</article>\n<section>${sectionedTopics}</section>`)
    }
}
//sectionedTopics = sectionedTopics.join("</section> \n<section>")
//console.log(filteredText)
*/ 

//!NOTE TOPIC subSECTIONS
// Update the code that you wrote in the last section to include each topic, 
//contained in a child <section> element for each note. You will need to use a nested for..of loop again. 
//TODO Also, update the output to be a multi-line string using string templates.

/*let filteredText = []
console.log("***  Note Articles  ***")
for(const note of notes) {
    if (note.text.includes("")) {
        filteredText.push(note.text)
    }
    for (const topic of note.topics){
        sectionedTopics.push(note.topics)
         allTopics = topic.split(",")
         totalTopics = allTopics.join(",")
         //?console.log(filteredText)
         //?console.log(allTopics)
         //totalTopics
         //console.log(totalTopics)
        filteredText.push (note.topics)
        filteredText.join("</article> <article>")
    }
}
console.log(filteredText)
console.log(allTopics)
 //filteredText = filteredText.join("</article> \n<article>")
 //console.log(filteredText)
// console.log(`<article>${filteredText}\n<section>${sectionedTopics}</section>\n</article>`)
*/

/*
for (const note of notes) {
    let numberTopics = note.topics.length
    //console.log(numberTopics)
    totalTopics += numberTopics
    let averageTopics = totalTopics / 
    console.log(averageTopics)
    //console.log(totalTopics)
    for (const topic of note.topics){
        // allTopics = topic.split(",")
        // totalTopics = allTopics.join(",")
        // console.log(allTopics)
        // totalTopics
        // console.log(totalTopics)
        // console.log(totalTopics.length)
        //console.log(note.topic)
    }
}*/
let filteredText = []
let filteredTopics = []
//! book 1 leionids toys final note sections
for (const note of notes) {
    if (note.text.includes("")) {
        //^ join the texts with article tags
        
        filteredText.push(note.text)
    }
    
    //^ join the topics with section tags (and \n breaks)    
for (const topic of note.topics) {
    sectionedTopics = note.topics.join("</section> \n <section>")
}
    filteredText.push(sectionedTopics)
    }

filteredText =
console.log(filteredText)
//console.log(filteredTopics) // unused currently. 