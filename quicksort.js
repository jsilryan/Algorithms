function partition(arr, lb, ub) {
    pivot = arr[lb]
    start = lb
    end = ub
    while (start < end) {
        while(arr[start] <= pivot) {
            start++
        }
        while (arr[end] > pivot) {
            end--
        }
        if (start < end) {
            swap(arr, start, end)
        }
    }
    swap(arr, lb, end)
    return end
}

function swap(arr, a, b) {
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function quickSort(arr, lb, ub) {
    if (lb < ub) {
        let pos = partition(arr, lb, ub)
        quickSort(arr, lb, pos-1)
        quickSort(arr, pos+1, ub)
    }
    return arr
}

const arr = [189, 75, 223, 459, 3, -20, 19, 86]
let len = arr.length
const arr2 = quickSort(arr, 0, len-1)
console.log(arr2)

