const Node = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const LinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new Node(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function mergeLists(head1, head2) {
    let list = new SinglyLinkedList()
    let listCopy = list
    // let num = 0
    while (head1 || head2) {
        if (!head1){
            list.insertNode(head2.data)
            head2 = head2.next
            continue
        }
        else if (!head2) {
            list.insertNode(head1.data)
            head1 = head1.next
            continue
        }
        if(head1.data <= head2.data) {
            list.insertNode(head1.data)
            head1 = head1.next
        } 
        else {
            list.insertNode(head2.data)
            head2 = head2.next
        }
        // num++
        // console.log(`Done: ${num}`)
    }

    return listCopy.head
}

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

function heapSort (A,n) {
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


function cookies(k, A) {
    // Write your code here
    let iterations = 0
    while (A.length > 1) {
        let lessK = 0
        for (let m = 0; m < A.length; m++) {
            if (A[m] < k) {
                lessK++
            }
        }
        if (lessK > 0) {
            A = heapSort(A, A.length)
            let smallest = A[0]
            let next = A[1]
            let sweetness = smallest + (2*next)
            // Splice method takes two parameters: the index at which to start changing the array and the number of elements to remove
            A.splice(0, 2)
            // To add a value to index 0 of an array in JavaScript, you can use the unshift method.
            A.unshift(sweetness)
            // console.log(A)
            iterations++
        }
        else {
            return iterations
        }
    }
    return -1
}

let A = [2,7,3,6,4,6]
let A2 =[1,2,3,9,10,12]
let A3 = [52, 96, 13, 37]
let A4 = [13, 47, 74, 12, 89, 74, 18, 38]
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
];

let A6 = [2,3,4,1,5]

console.log(cookies(22803452, A5))