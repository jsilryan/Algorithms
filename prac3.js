// Lexicographic Order
var values = [0,1,2]

// 1. Find the largest x such that P[x] < P[x+1] - element closest to the end of the array where the number is less than the last number -> 2 
// 0,1,2,5,6,8,4,3 -> 6 -> i = 4
// If there is no such x, P is the last permutation
function lexi(vals) {
    var largestI = -1
    for (var i = 0; i < vals.length; i++) {
        if (vals[i] < vals[i+1]) {
            largestI = i
        }
    }
    if (largestI == -1) {
        console.log("Finished!")
        return 
    }
    // 2. Find the largest y such that P[x] < P[y]
    var largestJ = -1
    for (var j = 0; j < vals.length; j++) {
        if (vals[largestI] < vals[j]) {
            largestJ = j
        }
    }

    // 3. Swap P[x] and P[y]
    swap(vals, largestI, largestJ)

    // 4. Reverse from largestI + 1 to the end
    var endArray = vals.splice(largestI + 1) // Get specific things from the array and also remove them from the initial array
    endArray.reverse()
    vals = vals.concat(endArray)
    console.log(vals) 
    // lexi(vals)
}

function swap(a, i, j) {
    var temp = a[i]
    a[i] = a[j]
    a[j] = temp
}

let values1 = [2,3,5,1, 4]
console.log(lexi(values1))

// Out of all permutations that are greater than P, the smallest one has the longest possible prefix in common with P
// Suppose that we split a permutation P into a prefix P1 and a suffix P2. The permutation P is the lexicographically greatest of all permutations with the prefix P1 if and only if P2 is sorted in descending order.
// If we want to create a permutation that is greater than P and we want to keep the longest possible prefix of P unchanged, we have to find the shortest possible suffix that is not sorted in descending order. - Step 1
// When incrementing P, we need to replace P[x] by the next larger value.
// The values P[x+1] through P[n] currently have to be sorted in descending order. Hence, the rightmost of all values that are greater than P[x] is also the smallest one among them.