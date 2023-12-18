import os
import sys
from heapq import heapify, heappush, heappop

def cookies(k, A):
    heapify(A)
    result = 0
    while True:
        x = heappop(A)

        if x >= k:
            return result
        
        if A:
            y = heappop(A)
            sweetness = x + 2 * y
            heappush(A, sweetness)
            result += 1
        else:
            return -1