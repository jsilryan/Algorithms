function maxHeapify(A, n, i) {
    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2
    if (left < n && A[left] > A[largest]) {
        largest = left
    }
    if (right < n && A[right] > A[largest]) {
        largest = right
    }
    if (largest !== i) {
        let temp = A[i]
        A[i] = A[largest]
        A[largest] = temp
        maxHeapify(A, n, largest)
    }
}

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
            i = parent;
        } else {
            break;
        }
    }
}

function maxHeapSort (A,n) {
    for (let i = Math.floor(n/2) -1; i > -1; i--) {
        maxHeapify(A, n, i)
    }
    for (let i = n-1; i > 0; i--) {
        let temp = A[i]
        A[i] = A[0]
        A[0] = temp
        maxHeapify(A, i, 0)
    }
    return A
}

function minHeapSort(A, n) {
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        minHeapify(A, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        // Swap the root (A[0]) with the current last element (A[i])
        let temp = A[0];
        A[0] = A[i];
        A[i] = temp;

        // Heapify the reduced heap (excluding the last element)
        minHeapify(A, i, 0);
    }
    return A;
}


let root = [2,1,4]
console.log(maxHeapSort(root, root.length))
