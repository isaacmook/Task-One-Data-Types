// Exercise One
let firstname = "Mick"
let surname = "Jenkins"
let age = 28
const subject = "Development"

let greeting = "Hello, my name is "+ firstname + " " + surname + " I am " + age + " years old and I am studying " + subject + "."

console.log(greeting)

// Exercise Two
let numOne = 1 
let numTwo = 2
let numThree = 3 
let numFour = 4
let answer = 0

answer = numOne + numTwo / numThree * numFour

console.log(answer)

// Exercise Three 
let timmyAmount = 10
let susanAmount = 25

let timmyTaxPercentage = 0.15
let susanTaxPercentage = 0.26

let timmyTaxAmount = timmyAmount * timmyTaxPercentage
let susanTaxAmount = susanAmount * susanTaxPercentage

let timmyRemainingAmount = timmyAmount - timmyTaxAmount
let susanRemainingAmount = susanAmount - susanTaxAmount

let totalTaxAmount = timmyTaxAmount + susanTaxAmount

console.log("The Tax Man will claim " + "R" + totalTaxAmount + " from Timmy & Susan")

// Exercise Four
let markJohn = 0
let markTim = 0 
let markAlfie = 0 
let markGwen = 0

markJohn = 66
markTim = 81
markAlfie = 92
markGwen = 78

let marksTotal = markAlfie + markGwen + markJohn + markTim
let marksAverage = marksTotal / 4

console.log("The sudents average is: " + marksAverage + "/100")

markJohn += 7
markTim += 7
markAlfie += 7
markGwen += 7

marksTotal = markAlfie + markGwen + markJohn + markTim
let updatedAverage = marksTotal / 4

console.log("The sudents updated average is: " + updatedAverage + "/100")