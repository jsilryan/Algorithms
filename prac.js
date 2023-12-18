m = 4
cost = [2,1,3,5,6]
function whatFlavors(cost, money) {
    // Write your code here
    let flavors = []
    for (let i = 0; i < cost.length; i += 1) {
        for (let j = 0; j < cost.length; j += 1) {
            if (i !== j) {
                let newSum = cost[i] + cost[j]
                if (newSum === money) {
                    flavors = []
                    flavors.push(i+1)
                    flavors.push(j+1)
                }
            }
        }
    }
    flavors.sort((a, b) => a - b)

    let a = flavors[0]
    let b = flavors[1]

    console.log(`${a} ${b}`)
}

whatFlavors(cost, m)

let arr = [1,2,3,4,5]
d = 4

function rotLeft(a, d) {
    // Write your code here
    const newPos = []
    const newArr = []
    for (let i = 0; i < a.length; i += 1) {
        let pos = i
        pos = (pos - d + a.length)
        newPos.push((Math.abs(pos) % a.length))
    }
    for (let i = 0; i < a.length; i += 1) {
        newArr[newPos[i]] = a[i]
    }
    return newArr

}

console.log(`New Array: ${rotLeft(arr, d)}`)

let arr1 = [2,5,1,3,4]
let arr2 = [1,2,5,3,4,7,8,6]
function minimumBribes(q) {
    // Write your code here
    let totalBribes = 0
    let chaotic = 0
    for (let i = 0; i < q.length; i += 1) {
        let count = 0
        for (let j = 0; j < q.length; j += 1) {
            if (j > i) {
                if (q[i] > q[j]) {
                    count += 1
                }
            }
        }
        if (count > 2) {
            console.log('Too chaotic')
            chaotic += 1
            return
        }
        totalBribes += count
    }
    if(chaotic === 0){
        console.log(totalBribes)
        return 
    }
}

console.log(minimumBribes(arr1))
console.log(minimumBribes(arr2))

function minBribes2 (q) {
    const newQ = [...q]
    let i = 0
    let j = 1
    let pos = 0
    let totalBribes = 0
    let chaotic = false
    let individualTotals = {}

    while (pos < q.length) {
        const left = newQ[i + pos]
        const right = newQ[j + pos]
        if (left > right) {
            newQ[i+pos] = right
            newQ[j+pos] = left
            totalBribes++

            if (individualTotals[left]) {
                individualTotals[left] ++
            }
            else {
                individualTotals[left] = 1
            }
            pos > 0 ? pos-- : pos++
        }
        else {
            pos++
        }
    }

    for (let key in individualTotals) {
        if (individualTotals[key] > 2) {
            chaotic = true
        }
    }

    if (chaotic) {
        console.log('Too chaotic')
    } else {
        console.log(totalBribes)
    }
    return
}

function plusMinus(arr) {
    // Write your code here
    let positive = 0
    let negative = 0
    let zero = 0
    let frac_pos = 0
    let frac_neg = 0
    let frac_zero = 0
    let len = arr.length

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > 0) {positive += 1}
        else if (arr[i] < 0) {negative += 1}
        else {zero += 1}
    }
    
    frac_pos = positive / len
    frac_neg = negative /len
    frac_zero = zero / len

    console.log(frac_pos.toFixed(6))
    console.log(frac_neg.toFixed(6))
    console.log(frac_zero.toFixed(6))

    return

}

let arr3 = [1,1,0,-1,-2]

console.log(plusMinus(arr3))

function miniMaxSum(arr) {
    // Write your code here
    let arrMax = arr.slice(0, 4);
    let arrMin = arr.slice(0, 4);
    let smallest = arr[0]
    let largest = arr[0]
    let posMin = 0
    let posMax = 0
    let sumMin = 0
    let sumMax = 0

    for (let i = 0; i < arr.length-1; i += 1) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            posMin = i
        }
        if (arr[i] > largest) {
            largest = arr[i]
            posMax = i
        }
    }
    if (arr[4] < largest) {
        arrMin[posMax] = arr[4]
    }
    if (arr[4] > smallest) {
        arrMax[posMin] = arr[4]
    }
    for (let i = 0; i < arrMin.length; i += 1) {
        sumMin += arrMin[i]
    }
    for (let i = 0; i < arrMax.length; i += 1) {
        sumMax += arrMax[i]
    }
    console.log(`${sumMin} ${sumMax}`)
    return
}

let arr4 = [3, 5, 9, 1, 7]
console.log(`Min Max: ${miniMaxSum(arr4)}`)

function timeConversion(s) {
    // Write your code here
    var lastPart = s.slice(-2)
    var firstPart = s.substring(0,2)
    // console.log(lastPart, firstPart)
    let newString
    if (lastPart === "AM"){
        if (firstPart === '12') {
            newString = "00" + s.substring(2, s.length-2)
        }
        else {
            newString = s.substring(0, s.length-2)
        }
    }
    else if (lastPart === "PM") {
        if (firstPart === '12') {
            newString = s.substring(0, s.length-2)
        }
        else {
            var newHour = parseInt(firstPart)
            newHour = newHour + 12
            newString = newHour.toString() + s.substring(2, s.length-2)
        }
    }
    return newString
}

var time = '12:01:00AM'

console.log(timeConversion(time))

function lonelyinteger(a) {
    // Write your code here
    const graph = {}
    let lone 
    for (let i = 0; i < a.length; i += 1) {
        if (!graph[a[i]]) {
            graph[a[i]] = 1
        }
        else {
            graph[a[i]] += 1
        }
    }
    for (let i = 0; i < a.length; i += 1) {
        if (graph[a[i]] === 1) {
            lone = a[i]
        }
    }

    return lone
}

let arr5 = [1,2,3,4,3,2,1]

console.log(lonelyinteger(arr5))

function diagonalDifference(arr) {
    // Write your code here
    let leftRight = 0
    let rightLeft = 0
    let diff = 0
    
    for (let i = 0; i < arr.length; i += 1) {
        leftRight += arr[i][i]

        let j = (arr.length-1) - i
        rightLeft += arr[i][j]
    }
    diff = Math.abs(leftRight - rightLeft)
    return diff
}

let arr6 = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
]

console.log(diagonalDifference(arr6))