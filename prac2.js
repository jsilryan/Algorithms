let arr = [3, 5,1, 8, 5]

function countingSort(arr) {
    // Write your code here
    // let max = 0
    // for (let i = 0; i < arr.length; i += 1) {
    //     if (arr[i] > max) {
    //         max = arr[i]
    //     }
    // }

    let newArray = Array(100).fill(0)
    for (let i = 0; i < arr.length; i += 1){
        newArray[arr[i]] += 1
    }
    return newArray
}
const inputString = "63 54 17 78 43 70 32 97 16 94 74 18 60 61 35 83 13 56 75 52 70 12 24 37 17 0 16 64 34 81 82 24 69 2 30 61 83 37 97 16 70 53 0 61 12 17 97 67 33 30 49 70 11 40 67 94 84 60 35 58 19 81 16 14 68 46 42 81 75 87 13 84 33 34 14 96 7 59 17 98 79 47 71 75 8 27 73 66 64 12 29 35 80 78 80 6 5 24 49 82";

// Split the string into an array of strings
const values = inputString.split(' ');

// Convert each string element to an integer
const arrayFromValues = values.map(value => parseInt(value, 10));

console.log(countingSort(arrayFromValues))


function twoStrings(s1, s2) {
    // Write your code here
    let graph = {}
    let ans = "NO"
    for (let i = 0; i < s1.length; i++) {
        if (!graph[s1[i]] ) {
            graph[s1[i]] = []
            graph[s1[i]].push(1)
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (!graph[s2[i]]) {
            graph[s2[i]] = []
            graph[s2[i]].push(2)
        }
        else {
            if (graph[s2[i]].includes(2)) {
                continue
            }
            else {
                graph[s2[i]].push(2)
            }
        }
    }

    for (let key in graph) {
        if (ans === "NO") {
            if (graph[key].includes(1) && graph[key].includes(2)) {
                ans = "YES"
            }
        }
    }
    return ans
}

let s1 = "alpha"
let s2 = "male"
console.log(twoStrings(s1, s2))

function isAnagram (str1, str2) {
    // split on nothing means take every letter as an item in the array on its own
    // join to make them a string
    // toLowerCase -> case insensitive
    let sorted1 = str1.split('').sort().join('').toLowerCase()
    let sorted2 = str2.split('').sort().join('').toLowerCase()
    return (sorted1 === sorted2)

}

console.log(isAnagram('ryan', 'ayra'))
console.log(isAnagram('hello', 'loelh'))

function fact(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return fact(n-1)
}

function calculateCombinationsCount(n) {
    // Function to calculate the number of combinations for 'n' items
    return n * (n - 1) / 2;
}

function sherlockAndAnagrams(s) {
    // Write your code here
    let len = s.length
    let graph = {}
    let arr = []
    let totalCount = 0
    for (let i = 0; i < len; i += 1) {
        arr.push(s[i])
        for (let j = i+1; j < len; j += 1) {
            let newString = arr[(arr.length)-1] + s[j]
            let sorted = newString.split('').sort().join('').toLowerCase()
            arr.push(sorted)
        }
    }

    for (let i = 0; i < arr.length; i += 1) {
        if (!(arr[i] in graph)) { 
            graph[arr[i]] = 1
        }
        else {
            graph[arr[i]] += 1
        }
    }

    for (let key in graph) {
        let count = graph[key];
        let combinationsCount = calculateCombinationsCount(count);
        totalCount += combinationsCount;
    }

    return totalCount

}

console.log(sherlockAndAnagrams('kkkk'))
// console.log(sherlockAndAnagrams('ifailuhkqq'))