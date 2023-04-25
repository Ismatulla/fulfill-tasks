

// Task 1

function daysOfMonths(year, month,) {
  let days
  switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      days = 31;
      console.log(`in ${year} year, ${month} consist of ${days} days`)
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      days = 30;
      console.log(`in ${year} year, ${month} consist of ${days} days`)
      break;
    case 'February':
      days = ((year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
      console.log(`in ${year} year, ${month} consist of ${days} days`)
      break;
    default:
      console.log('Invalid months name')
  }
}

daysOfMonths(22400, 'February')
daysOfMonths(1700, 'February');


// 2 
function oddNumbers(n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) console.log(n[i])
  }

}
oddNumbers([6, 3, 7, 19, 43, 4, 8, 12, 57, 64]);

// 3
function firstNnumbers(n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 1225 === 0) {
      console.log(`First number that can be divided to 1225 is ${n[i]}`)
      break
    }
  }
}
firstNnumbers([1230, 1225, 2450])

// 4
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let counter = ""
for (let i of num) {
  console.log(counter += i + ' ')
}
