
// let data = {
//   "auth": { "reactivate": false, "username": "ali111111@gmail.com", "password": "12345678" }
// }
// async function getToken() {
//   const response = await fetch("https://api.crystalknows.com/v3/user_token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   });
//   const dts = await response.json();
//   return dts.data.token;
// }

// // const fetchData = async () => {
// //   const token = await getToken();
// //   const response = await fetch('https://api.crystalknows.com/graphql', {
// //     method: 'POST',
// //     credentials: 'include',
// //     headers: {
// //       'authorization': `Bearer ${token}`,
// //       'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify({ query: `{ snapshot(uuid: "${uuid}") { personality { discTypeText }, profile { id, first_name, last_name, job_title, personality { disc_type, archetype }, qualities, sources } } }` })
// //   })
// //   const data = await response.json();
// //   console.log(data);
// // }
// // fetchData()


// const profile = async () => {
//   const token = await getToken()
//   const response = await fetch('https://api.crystalknows.com/v3/profiles/4cbf6ee0-3fe4-4510-ac0f-6cca7102e8e5/overview', {
//     method: 'GET',
//     credentials: 'include',
//     headers: {
//       'authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     },
//   });
//   console.log(response)
//   // const data = await response.json()
//   // console.log(data)
// }
// profile()

//  Sizga number (yil) turiga kiruvchi va string (oy nomi) turiga kiruvchi 2 ta o’zgaruvchi berilgan. Sizning vazifangiz berilgan oy nomiga bog’liq ravishda shu oydagi kunlar sonini chiqarib berishdan iborat. Bu masalani yechishda switch / case statementdan foydalanishingiz kerak. Kabisa yilini ham hisobga oling!



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
