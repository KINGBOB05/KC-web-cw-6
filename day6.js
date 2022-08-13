alert(`welcome to my grades calculator`) 

let grade = prompt (`enter your grade`) 

console.log (grade)

if (grade >= 90 && grade <= 100 ) {
 console.log (`امتياز`)

} else if (grade >= 80 && grade < 90) {
    console.log (`جيد جدا`)

} else if (grade >= 70 && grade < 80 ) {
    console.log(`جيد`)

} else if (grade >= 60 && grade < 70) {
 console.log(`مقبول`)

} else if (grade >= 50 && grade < 60) {
    console.log(`ضعيف`)

} else if (grade < 50 ) {
    console.log(`راسب`)
} 
// javascript not java