const dfs = (graph, source) => {
    const stack = [source]
    while (stack.length > 0) {
        const current = stack.pop()
        console.log(current)
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}

const dfs_recursive = (graph, source) => {
    console.log(source)
    for (let neighbor of graph[source]) {
        dfs_recursive(graph, neighbor)
    }
}

const bfs = (graph, source) => {
    const queue = [source]
    while (queue.length > 0) {
        const current = queue.shift() // Removes first element in the queue
        console.log(current)
        if (graph[current]) {
            for (let neighbor of graph[current]) {
                queue.push(neighbor) // Adds an element to the queue
            }
        }
    }
}

const graph = {
    a : ['b', 'c'],
    b : ['d'],
    c : ['e'],
    d : ['f'],
    e : [],
    f : []
}

const graph1 = {
    a: ['b', 'c'],
    b: ['d', 'e'],
    c: ['f'],
    d: [],
    e: [],
    f: []
}

// dfs_recursive(graph, 'a')
// bfs(graph, 'a')

bfs(graph1, 'a')

// HasPath - acyclic
const hasPath = (graph, src, dest) => {
    if (src === dest) return true

    // graph[src] will return a list of the neighbors
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dest) === true) {
            return true
        }
    }
    return false
}

// Has Path - BFS
const hasPathBFS = (graph, src, dest) => {
    const queue = [src]

    while (queue.length > 0) {
        const current = queue.shift()
        if (current === dest) return true

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }

    return false
}

console.log(hasPath(graph1, 'a', 'h'))
console.log(hasPathBFS(graph1, 'a', 'e'))

// Undirected path -> To avoid infinite recursion, mark a node as visited
// Time -> O(e) -> 
// Space -> O(n) -> Storing all nodes
// a -> b -> c -> d -> e

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    return hasPath2(graph, nodeA, nodeB, new Set()) // In O(1), I can add sth and check for something in the set. Array -> O(n)  
}

const hasPath2 = (graph, src, dest, visited) => {
    if (src === dest) return true
    if (visited.has(src)) return false // Guards against infinite loop

    visited.add(src)

    for (let neighbor of graph[src]) {
        if (hasPath2(graph, neighbor, dest, visited) === true) {
            return true
        }
    }

    return false
}

const buildGraph = (edges) => {
    const graph = {} // JS Object

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

console.log(undirectedPath(edges, 'j', 'm'))

// Connected components count
// Whenever I complete a traversal in the graph, add count + 1. If a node is visited, skip it and keep the count as before. 
const connectComponentsCount = (graph) => {
    const visited = new Set()
    let count = 0
    for (let node in graph) {
        if (explore(graph, node, visited) === true) {
            count += 1
        }
    }

    return count
}


const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false // Use string to check if the set has the string version of the keys. In an object, the key is turned to a string 

    visited.add(String(current))

    for (let neighbor of graph[current]){
        explore(graph, neighbor, visited)
    }

    return true // After all neighbor calls
}

const graph2 = {
    0: [8,1,5],
    1: [0],
    5: [0,8],
    8: [0,5],
    2: [3,4],
    3: [2,4],
    4:[3,2]
} 

console.log(`Components: ${connectComponentsCount(graph2)}`)

// Largest Component -> Size
// Have a variable that stores largest count

const largestCount = (graph) => {
    const visited = new Set()
    const countSet = []

    for (let node in graph) {
        // let count = 0
        newCount = exploreComponents(graph, node, visited)
        countSet.push(newCount)
    }

    const largestComp = findLargestValue(countSet)
    return largestComp
}

function findLargestValue(arr) {
    if (arr.length === 0) {
      // Handle the case where the array is empty
      return undefined;
    }
  
    // Using the spread operator (...) to spread array elements as arguments to Math.max
    return Math.max(...arr);
}

const exploreComponents = (graph, current, visited) => {
    if (visited.has(String(current))) return 0

    visited.add(String(current))
    let size = 1

    for (neighbor of graph[current]) {
        size += exploreComponents(graph, neighbor, visited)
    }

    return size
}

console.log(`Largest Component Size: ${largestCount(graph2)}`)

// Shortest Path -> Breadth first search is better - undirected path
const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    const visited = new Set([ nodeA ])
    const queue = [[nodeA, 0]]

    while (queue.length > 0) {
        const [ node, distance ] = queue.shift()

        if (node === nodeB) return distance
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push([neighbor, distance + 1])
            }
        }
    }

    return -1 // Return -1 if the path is not there
}

const edges3 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

console.log(`Shortest path length: ${shortestPath(edges3, 'w', 'g')}`)

const buildGraph1 = (edges) => {
    const graph = {}

    for (let edge in edges) {
        const [a, b] = edge
        if(!(a in graph)) graph[a] = [] 
        if(!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}

// Island COunt
/* Takes in a grid containing Ws (water) and Ls (Land) 
It should return then number of islands on the grid
An island is vertically or horizontally connected region of land
Any undirected form of graph, use the visited const
Time: O(rc)
Space: O(rc)
*/
const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]

const islandCount = (grid) => {
    const visited = new Set()
    let count = 0
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            if (exploreIslands(grid, r, c, visited) === true) {count += 1}
        }
    }
    return count
}

const exploreIslands = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length
    const colInbounds = 0 <= c && c < grid.length
    if (!rowInbounds || !colInbounds) return false

    if (grid[r][c] === 'W') return false

    const pos = r + ',' + c
    if (visited.has(pos)) return false
    visited.add(pos)

    exploreIslands(grid, r-1, c, visited)
    exploreIslands(grid, r+1, c, visited)
    exploreIslands(grid, r, c-1, visited)
    exploreIslands(grid, r, c+1, visited)

    return true
}

console.log(`Island Count: ${islandCount(grid)}`)

// Minimum Island
const minimumIsland = (grid) => {
    const visited = new Set()
    let minSize = Infinity
    for (let r = 0; r < grid.length; r += 1) {
        for(let c = 0; c < grid[0].length; c += 1) {
            const size = exploreIslandsMin(grid, r, c, visited)
            if (size > 0 && size < minSize) { // If left at size < minSize, it will take in 0 whereby 0 represents only water values which are not part of islands hence size > 0
                minSize = size
            }
        }
    }

    return minSize
}

const exploreIslandsMin = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length
    const colInbounds = 0 <= c && c < grid.length
    if (!rowInbounds || !colInbounds) return 0

    if (grid[r][c] === 'W') return 0

    const pos = r + ',' + c
    if (visited.has(pos)) return 0
    visited.add(pos)

    let size = 1
    size += exploreIslandsMin(grid, r-1, c, visited)
    size += exploreIslandsMin(grid, r+1, c, visited)
    size += exploreIslandsMin(grid, r, c-1, visited)
    size += exploreIslandsMin(grid, r, c+1, visited)

    return size
}

console.log(`Minimum Island: ${minimumIsland(grid)}`)

/*
const s = new Set()
s.add([1,3]) // I can't console log (s.has([1,3])) since it will return false, the array of literals will be a different array in memory
SO:
s.add('1,3')
console.log(s.has('1,3')) // will return true
*/

// 'I envy everyone you've never met'
// 'I can only explain it to you, I can'y understand it for you'
// 'You are like the crust on a bread, everyone touches you but no one wants you'
// 'Somewhere out there there's a tree whose single purpose on earth is to replace the oxygen you waste. Go find it and apologizr'
// 'I hope you lose weight so there'll be less of you'

m = 4
cost = [2,1,3,5,6]
function whatFlavors(cost, money) {
    // Write your code here
    const flavors = []
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