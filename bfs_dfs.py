class Searches():
    def __init__(
        self,
        graph,
        source
    ):
        self.graph = graph
        self.source = source
        self.result = []
        self.rec_result = []

    def bfs(self):
        self.result = []
        queue = [self.source]
        while (len(queue) > 0):
            current = queue.pop(0) # Pop the first element of a list
            self.result.append(current)
            for i, neighbor in enumerate(self.graph[current]):
                queue.append(neighbor)

        return self.result
    
    def dfs(self):
        self.result = []
        stack = [self.source]
        while (len(stack) > 0):
            current = stack.pop()
            self.result.append(current)
            for i, neighbor in enumerate(self.graph[current]):
                stack.append(neighbor)
        
        return self.result
    
    def dfs_recursive(self, source):
        self.rec_result.append(source)
        for i, neighbor in enumerate(self.graph[source]):
            self.dfs_recursive(neighbor)
        
        return self.rec_result


graph_1 = {}

graph_1['a'] = ['b', 'c']
graph_1['b'] = ['d']
graph_1['c'] = ['e']
graph_1['d'] = ['f']
graph_1['e'] = []
graph_1['f'] = []

results_1 = Searches(graph_1, 'a')
print(results_1.bfs())
print(results_1.dfs())
print(results_1.dfs_recursive('a'))