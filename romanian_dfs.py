import numpy as np

class Edge():
    total_instances = 0
    instances = []
    def __init__(self, src, dest, weight):
        self.src = src
        self.dest = dest
        self.weight = weight
        
         # Initialize instance-specific variables
        self.instance_total = 0
        self.instance_list = []

        # Increment the class variable for total instances
        Edge.total_instances += 1
        # Increment the instance-specific variable for total instances
        self.instance_total += 1

        # Append the instance to the class variable instances list
        Edge.instances.append(self)
        # Append the instance to the instance-specific instances list
        self.instance_list.append(self)

vertex = 5
matrix = np.zeros((vertex+1,vertex+1))

edge1 = Edge(1, 4, 2)
edge2 = Edge(2, 5, 8)
edge3 = Edge(3, 1, 10)
edge4 = Edge(3, 4, 5)
edge5 = Edge(3, 5, 6)
edge6 = Edge(4, 2, 15)

for instance in Edge.instances:
    start = instance.src
    end = instance.dest
    weight = instance.weight
    matrix[start][end] = weight

for i in range(1, vertex+1):
    for j in range(1, vertex+1):
        if matrix[i][j] != 0:
            print(f"[{i}, {j}]: {matrix[i][j]}")

edges = [
    ['A', 'B', 10],
    ['A', 'C', 5],
    ['C', 'B', 3],
    ['B', 'D', 1],
    ['C', 'D', 9],
    ['C', 'E', 2],
    ['E', 'D', 6],
    ['E', 'A', 2]
]

graph1 = {}

graph1['A'] = [
    {'neighbor': 'B', 'dist' : 10}, 
    {'neighbor' : 'C', 'dist' : 5}
]
graph1['C'] = [
    {'neighbor': 'B', 'dist' : 3},
    {'neighbor' : 'D', 'dist' : 9},
    {'neighbor' : 'E', 'dist': 2}
]
graph1['B'] = [
    {'neighbor' : 'D', 'dist': 1}
]
graph1['E'] = [
    {'neighbor' : 'D', 'dist': 6},
    {'neighbor' : 'A', 'dist': 2}
]
graph1['D'] = [
    {'neighbor' : None, 'dist': None}
]

cost = {}
cost['A'] = float('inf')
cost['B'] = float('inf')
cost['C'] = float('inf')
cost['D'] = float('inf')
cost['E'] = float('inf')

nodes = []

for i, edge in enumerate(edges):
    for j, node in enumerate(edge[:2]):
        if node not in nodes:
            nodes.append(node)

total_cost = 0
visited = []
neighbors = []
shortest_neighbor = None
def shortest_path(graph, src, dest):
    for i, neighbor in enumerate(graph[src]):
        neighbors.append(neighbor['neighbor'])
        cost = total_cost + neighbor['dist']
        total_cost = total_cost + cost[neighbor['neighbor']]
    for i, neighbor in enumerate(graph[src]):
        if shortest_neighbor:
            if cost[neighbor] < shortest_neighbor['cost']:
                shortest_neighbor = neighbor['neighbor']
        else:
            shortest_neighbor = neighbor['neighbor']
    visited.append(src)

        
