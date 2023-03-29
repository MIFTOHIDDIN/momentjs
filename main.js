let time = new Date()

let hours = time.getHours()
let hour = hours >= 0 && hours <= 9 ? hours = "0" + hours : hours

let minute = time.getMinutes()
let minutes = minute >= 0 && minute <= 9 ? minute = "0" + minute : minute

let second = time.getSeconds()
let seconds = second >= 0 && second <= 9 ? second = "0" + second : second

let date = time.getDate()
let dates = date >= 0 && date <= 9 ? date = "0" + date : date

let month = time.getMonth() + 1
let months = month >= 0 && month <= 9 ? month = "0" + month : month
let monthNoZero = time.getMonth() + 1

let year = time.getFullYear()


let monthByName = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]


let getWeeks = time.getDay()
let weeksName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



let hourAmPm = hour >= 12 ? "PM" : "AM"

hour = hour % 12 || 12




function moment() {

    const format = (prop) => {
        

        if (prop == "LT") {

            console.log(`${hour}:${minutes} ${hourAmPm}`);

        } else if (prop == "LTS") {
            console.log(`${hour}:${minutes}:${seconds} ${hourAmPm}`);
        } else if (prop == "L") {
            console.log(`${months}/${dates}/${year} `);
        }
        else if (prop == "l") {
            console.log(`${monthNoZero}/${dates}/${year} `);
        } else if (prop == "LL") {
            console.log(`${monthByName[time.getMonth()]} ${dates}, ${year} `);
        } else if (prop == "ll") {
            console.log(`${monthByName[time.getMonth()].slice(0, 3)} ${dates}, ${year} `);
        } else if (prop == "LLL") {
            console.log(`${monthByName[time.getMonth()]} ${dates}, ${year} ${hour}:${minutes} ${hourAmPm} `);
        } else if (prop == "lll") {
            console.log(`${monthByName[time.getMonth()].slice(0, 3)} ${dates}, ${year} ${hour}:${minutes} ${hourAmPm} `);
        } else if (prop == "LLLL") {
            console.log(`${weeksName[time.getDay()]}, ${monthByName[time.getMonth()]} ${dates}, ${year} ${hour}:${minutes} ${hourAmPm} `);
        } else if (prop == "llll") {
            console.log(`${weeksName[time.getDay()].slice(0,3)}, ${monthByName[time.getMonth()].slice(0,3)} ${dates}, ${year} ${hour}:${minutes} ${hourAmPm} `);
        }else if(prop == "MMMM Do YYYY, h:mm:ss a"){
            console.log(`${monthByName[time.getMonth()]} ${dates}th ${year}, ${hour}:${minutes}:${seconds} ${hourAmPm.toLowerCase()}`);
        }else if(prop == "dddd"){
            console.log(`${weeksName[time.getDay()]}`);
        }else if(prop == "MMM Do YY"){
            console.log(`${monthByName[time.getMonth()].slice(0, 3)} ${dates}th ${year.toString().slice(2,4)}`);
        }else if(prop == 'YYYY [escaped] YYYY'){
            console.log(`${year} escaped ${year}`);
        }

    }
    return { format }
}
moment().format('YYYY [escaped] YYYY')