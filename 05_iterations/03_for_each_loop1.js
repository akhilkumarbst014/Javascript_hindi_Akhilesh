const coding = ["js","ruby","java","python","cpp"]

// function ke format me
coding.forEach( function (item) {// This is callBack
    console.log(item);
})


console.log("********************");

// Arrow function ke format me
coding.forEach( (val) => {
    console.log(val);
})

console.log("********************");

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);

console.log("********************");

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

console.log("*********************");
// Object in array access by for each loop

const mycoding = [
    {
        langName : "javascript",
        lanFileName : "js",
    },
    {
        langName : "java",
        lanFileName : "java",
    },
    {
        langName : "python",
        lanFileName : "py",
    }
]

mycoding.forEach( (item) => {
    console.log(item.langName);
    console.log(item.lanFileName);
})