function minHeapify(A, n, i) {
    let smallest = i
    let left = 2 * i + 1
    let right = 2 * i + 2
    if (left < n && A[left] < A[smallest]) {
        smallest = left
    }
    if (right < n && A[right] < A[smallest]) {
        smallest = right
    }
    if (smallest !== i) {
        let temp = A[i]
        A[i] = A[smallest]
        A[smallest] = temp
        minHeapify(A, n, smallest)
    }
}

function heappop(heap) {
    const root = heap[0];
    const lastElement = heap.pop();

    if (heap.length > 0) {
        heap[0] = lastElement;
        minHeapify(heap, heap.length, 0);
    }

    return root;
}

function heappush(heap, element) {
    heap.push(element);
    let i = heap.length - 1;

    while (i > 0) {
        const parent = Math.floor((i - 1) / 2);

        if (heap[i] < heap[parent]) {
            // [heap[i], heap[parent]] = [heap[parent], heap[i]];
            let temp = heap[i]
            heap[i] = heap[parent]
            heap[parent] = temp
            i = parent;
        } else {
            break;
        }
    }
}

function cookies(k, A) {
    // Write your code here
    let n = A.length
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        minHeapify(A, n, i);
    }
    let iterations = 0
    while (true) {
        let x = heappop(A)
        if (x >= k) {
            return iterations
        }
        if (A.length > 0) {
            let y = heappop(A)
            let sweetness = x + 2 * y
            heappush(A, sweetness)
            iterations++
        }
        else {
            return -1
        }
    }

}

let A6 = [2,3,4,1,5]
let A5 = [
    9660, 9902, 5775, 2183, 3974, 7742, 576, 8786, 7615, 5575,
    6287, 5495, 161, 3520, 344, 805, 786, 3802, 4843, 7424, 634,
    7916, 6989, 3499, 1216, 1293, 9965, 6299, 7899, 4763, 7272,
    9785, 8469, 395, 1034, 8763, 8003, 9464, 5081, 2064, 4401,
    6850, 8792, 1603, 7547, 3354, 8827, 887, 8151, 2470, 9995,
    7228, 8198, 5600, 1829, 8814, 5282, 3930, 2481, 6873, 9165,
    497, 2158, 1752, 878, 8448, 7862, 7685, 7988, 3536, 8227,
    8863, 8663, 1823, 8510, 7065, 6927, 610, 4220, 7096, 7685,
    6992, 976, 5081, 2389, 1844, 9843, 8741, 9582, 3479, 420,
    4136
]; // k = 22803452

console.log(cookies(22803452, A5))