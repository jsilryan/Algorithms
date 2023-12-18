import math
import os
import random
import re
import sys

matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
m = len(matrix)
n = len(matrix[0])

def matrixRotation(matrix, r, m, n):
    mat = []
    k = min(m, n) // 2 # Compute number of layers

    # Get elements from the layer
    for i in range(k):
        temp = []
        for j in range(i, n-1-i): # Element that preceeds the layer
            temp.append(matrix[i][j])
        for j in range(i, m-1-i):
            temp.append(matrix[j][n-1-i])
        for j in range(n-1-i, i, -1): # Bottom row in reverse order - n-1-i (second last element in the row till i)
            temp.append(matrix[m-1-i][j]) # try n-1-i later
        for j in range(m-1-i, i, -1):
            temp.append(matrix[j][i])

        mat.append(temp)

    # Rotate elements and place it in original matrix
    for i in range(k):
        row = mat[i]
        # Find index after rotation
        idx = r % len(row) # Starting point
        def inc():
            return (idx+1) % len(row)
            # assign new rotated elements

        for j in range(i, n-1-i): 
            matrix[i][j] = row[idx]
            idx = inc()
        for j in range(i, m-1-i):
            matrix[j][n-1-i] = row[idx]
            idx = inc()
        for j in range(n-1-i, i, -1): 
            matrix[m-1-i][j] = row[idx]
            idx = inc()
        for j in range(m-1-i, i, -1):
            matrix[j][i] = row[idx]
            idx = inc()

    # Print matrix with space in between
    for row in matrix:
        print(*row)

matrixRotation(matrix, 2, m, n)