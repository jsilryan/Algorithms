class node:
    def __init__(self, data = None):
        self.data = data
        self.next = None

class linked_list:
    def __init__(self):
        self.head = node() # Doesn't have an index (data), acts as a placeholder to show the first value of the linked list

    def append(self, data):
        new_node = node(data)
        cur = self.head # Starting at the left most point of the list
        while cur.next != None:
            cur = cur.next
        cur.next = new_node

    def length(self):
        cur = self.head
        total = 0
        while cur.next != None:
            total += 1
            cur = cur.next
        return total
    
    def display(self):
        elements = []
        cur_node = self.head
        while cur_node.next != None:
            cur_node = cur_node.next
            elements.append(cur_node.data)
        print(elements)

    # Extract a value from index
    def get(self, index):
        if index >= self.length() or index < 0:
            print("Index out of range!")
            return None
        cur_idx = 0
        cur_node = self.head
        while True:
            cur_node = cur_node.next
            if cur_idx == index:
                return cur_node.data
            cur_idx += 1

    def erase(self, index):
        if index >= self.length() or index < 0:
            print("Index out of range!")
            return None
        cur_idx = 0
        cur_node = self.head
        while True:
            last_node = cur_node
            cur_node = cur_node.next
            if cur_idx == index:
                last_node.next = cur_node.next
                return
            cur_idx += 1

my_list = linked_list()
my_list.display()

my_list.append(43)
my_list.append(3)

my_list.display()
print(f'Length: {my_list.length()}')

my_list.get(-1)

my_list.append(9)
my_list.append(10)
my_list.display()

my_list.erase(2)
my_list.display()

# Watch the matrix
# A girl is never special to a guy right a way, a man is.
# This is because we are auditioning for the vagina; sth innately that we are better than.