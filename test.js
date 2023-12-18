function processString(input) {
    let result = '';

    for (let char of input) {
        if (char === '#') {
            result = result.slice(0, -1); 
        } else {
            result += char;
        }
    }

    return result;
}

function compareStrings(s1, s2) {
    // Write your code here
    
    // Processing '#' characters in s1
    var s1output = processString(s1)
    var s2output = processString(s2)
    
    if (s1output === s2output) {
        return 1
    } else {
        return 0
    }
}

let s1 = 'r#a#n#k#';
let s2 = '###';

console.log(compareStrings(s1, s2));

function convertToNumber(x) {
    const numericPart = x.match(/\d+/)[0];

    let number = parseInt(numericPart, 10);
    
    if (number < 10) {
        number = '0' + number
    }

    return number;
}

function preprocessDate(dates) {
    // Write your code here
    let newDates = []
    for (let i = 0; i < dates.length; i++) {
        let newDate = []
        const dateString = dates[i]
        const parts = dateString.split(' ');
        const day = parts[0];  // 1st
        const month = parts[1];  // Jan
        const year = parts[2]; 
        let newDay 
        let newMonth 
        let newYear = year
        newDay = convertToNumber(day)
        
        if (month === "Jan") {
            newMonth = '01'
        }
        else if (month === "Feb") {
            newMonth = '02'
        }
        else if (month === "Mar") {
            newMonth = '03'
        }
        else if (month === "Apr") {
            newMonth = '04'
        }
        else if (month === "May") {
            newMonth = '05'
        }
        else if (month === "Jun") {
            newMonth = '06'
        }
        else if (month === "Jul") {
            newMonth = '07'
        }
        else if (month === "Aug") {
            newMonth = '08'
        }
        else if (month === "Sep") {
            newMonth = '09'
        }
        else if (month === "Oct") {
            newMonth = '10'
        }
        else if (month === "Nov") {
            newMonth = '11'
        }
        else {
            newMonth = '12'
        }
        newDate.push(newYear)
        newDate.push(newMonth)
        newDate.push(newDay)
        
        const formattedDate = newDate.join('-')
        newDates.push(formattedDate)
    }
    return newDates
}

let date1 = ['16th Dec 1956']
console.log(preprocessDate(date1))
