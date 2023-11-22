import sys
from heapq import heapify, heappush, heappop
inf = sys.maxsize

class Romanian_DFS():
    def __init__(self, graph, src, dest):
        self.graph = graph
        self.src = src
        self.dest = dest
        self.shortest_distance = []
        self.shortest_path = []
        self.new_nodes = []

    def dfs_recursive(self, new_src):
        if new_src not in self.new_nodes:
            self.new_nodes.append(new_src)
            neighbors = self.graph[new_src]
            list_neighbors = list(neighbors.keys())
            for i, neighbor in enumerate(list_neighbors):
                self.dfs_recursive(neighbor)

        return self.new_nodes
    
    def create_node_data(self, nodes):
        node_data = {node: {'cost': inf, 'pred': []} for node in nodes}
        return node_data

    
    def dijkstra(self):
        if self.new_nodes == []:
            self.dfs_recursive(self.src)
            print(self.new_nodes)
        node_data = self.create_node_data(self.new_nodes)
        node_data[self.src]['cost'] = 0
        visited = []
        temp = self.src
        for i in range(len(node_data)-1):
            if temp not in visited:
                visited.append(temp)
                min_heap = []
                for j in self.graph[temp]:
                    if j not in visited:
                        cost = node_data[temp]['cost'] + self.graph[temp][j]
                        if cost < node_data[j]['cost']:
                            node_data[j]['cost'] = cost
                            node_data[j]['pred'] = node_data[temp]['pred'] + [temp]
                        heappush(min_heap, (node_data[j]['cost'], j))

            heapify(min_heap)
            temp = min_heap[0][1]

        self.shortest_path = node_data[self.dest]['pred'] + [self.dest]
        self.shortest_distance = node_data[self.dest]['cost']
        print(f"Shortest Distance: {str(self.shortest_distance)}")
        print(f"Shortest Path: {str(self.shortest_path)}" )


if __name__ == "__main__":
    graph = {
        'Amsterdam' : {'Beijing':2, 'Cairo':4},
        'Beijing' : {'Amsterdam':2, 'Cairo':3, 'Dubai':8},
        'Cairo' : {'Amsterdam':4, 'Beijing':3, 'Edinburgh':5, 'Dubai':2},
        'Dubai' : {'Beijing':8,'Cairo':2,'Edinburgh':11,'Frankfurt':22},
        'Edinburgh' : {'Cairo':5, 'Dubai':11, 'Frankfurt':1},
        'Frankfurt' : {'Dubai':22, 'Edinburgh':1}
    }

    # graph1 = {
    #     'Oradea':
    #     'Zerind':
    #     'Arad':
    #     'Timisoara':
    #     ''
    # }

    source = 'Amsterdam'
    dest = 'Frankfurt'
    romanian_1 = Romanian_DFS(graph, source, dest)
    romanian_1.dijkstra()