// Oject de-Structuring 

const course = {
    cousername:"js in hindi",
    price:"999",
    courseInstruction:"Akhil"
}
course.courseInstruction
//or
const {courseInstruction} = course
console.log(courseInstruction);
//or
const {courseInstruction: instructor} = course/// Object d-structuing occuring
console.log(instructor);

/// JSON API Concept


// API kuch nahi hai aapke paas kuch values aate hai backend se aur aap un values ko kaise likhte hai
// phle saari ki saari xml file me aati thi pr abhi JSON file me aati hai

// Structure of JSON
// {
//     "name":"Akhilesh",// Keys also be in string form
//     "cousername":"js in hindi",
//     "price":"free"
// }

// JSON in array format
[
    {},
    {},
    {}
]

// Study And goThough on these website
// https://api.github.com/users/hiteshchoudhary
// https://randomuser.me/
// https://jsonformatter.org/