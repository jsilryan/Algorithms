import numpy 
import matplotlib.pyplot as plt

# Assuming Coordinate is a class with x and y attributes
class Coordinate:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# Example coordinates list
# coords = [
#     Coordinate(x=1, y=2),
#     Coordinate(x=3, y=4),
#     Coordinate(x=5, y=6),
#     Coordinate(x=7, y=8),
# ]
# fig, ax = plt.subplots(figsize=(10, 10))
# # Loop over pairs of consecutive elements
# for first, second in zip(coords[:-1], coords[1:]):
#     print(f"Line segment from ({first.x}, {first.y}) to ({second.x}, {second.y})")
#     ax.plot([first.x, second.x], [first.y, second.y], 'b')

# plt.show()

# Generate random coordinates
num_coordinates = 5  # You can change this to the desired number of coordinates
coords1 = [Coordinate(numpy.random.uniform(0, 10), numpy.random.uniform(0, 10)) for _ in range(num_coordinates)]

# Print the coordinates
for i, coord in enumerate(coords1):
    print(f"Coordinate {i + 1}: ({coord.x}, {coord.y})")