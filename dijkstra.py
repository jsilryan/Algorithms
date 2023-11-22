import sys
from heapq import heapify, heappush, heappop

def dijkstra(graph, src, dest):
    inf = sys.maxsize # Maximum value it can hold
    node_data = {
        'A' : {'cost':inf, 'pred':[]},
        'B' : {'cost':inf, 'pred':[]},
        'C' : {'cost':inf, 'pred':[]},
        'D' : {'cost':inf, 'pred':[]},
        'E' : {'cost':inf, 'pred':[]},
        'F' : {'cost':inf, 'pred':[]},
    }
    node_data[src]['cost'] = 0
    visited = []
    temp = src
    for i in range(len(node_data)-1):
        if temp not in visited:
            visited.append(temp)
            min_heap = []
            for j in graph[temp]:
                if j not in visited:
                    cost = node_data[temp]['cost'] + graph[temp][j]
                    if cost < node_data[j]['cost']:
                        node_data[j]['cost'] = cost
                        node_data[j]['pred'] = node_data[temp]['pred'] + list(temp)
                    heappush(min_heap, (node_data[j]['cost'], j))

        heapify(min_heap)
        temp = min_heap[0][1] # [0][0] will be the cost while [0][1] will be the node neighbor
    
    print(f"Shortest Distance: {str(node_data[dest]['cost'])}")
    print(f"Shortest Path: {str(node_data[dest]['pred'] + list(dest))}" ) # Predecessors will come before the last element; therefore add the last element too

if __name__ == "__main__":
    graph = {
        'A' : {'B':2, 'C':4},
        'B' : {'A':2, 'C':3, 'D':8},
        'C' : {'A':4,'B':3,'E':5,'D':2},
        'D' : {'B':8,'C':2,'E':11,'F':22},
        'E' : {'C':5, 'D':11, 'F':1},
        'F' : {'D':22, 'E':1}
    }

    source = 'A'
    dest = 'F'
    dijkstra(graph, source, dest)