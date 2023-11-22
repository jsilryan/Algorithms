class HashTable:
    def __init__(self):
        self.MAX = 10
        self.arr = [None for i in range(self.MAX)]

    def get_hash(self, key):
        hash = 0
        for char in key:
            hash += ord(char)
        return hash % self.MAX
    
    def __getitem__(self, key):
        h = self.get_hash(key)
        for element in self.arr[h]:
            if element[0] == key:
                return element[1] # If it doesn't find, it will automatically return 1
    
    def __setitem__(self, key, val):
        h = self.get_hash(key)
        # Create a linked list -> In python, it is a normal list
        # First check if the key exists
        found = False
        # Initialize the list if it's None
        if self.arr[h] is None:
            self.arr[h] = []

        for idx, element in enumerate(self.arr[h]):
            if len(element) == 2 and element[0] == key:
                self.arr[h][idx] = (key, val)
                found = True
                break
        if not found:
            self.arr[h].append((key, val))

    def __delitem__(self, key):
        h = self.get_hash(key)
        for index, element in enumerate(self.arr[h]):
            if element[0] == key:
                del self.arr[h][index]

t = HashTable()

t["march 6"] = 120
t["march 8"] = 67
t["march 9"] = 4
t["march 17"] = 459

print(t["march 6"])
print(t["march 17"])

print(t.arr)

del t['march 17']

print(t.arr)

# Exercise
