--------------------------------------------------------
Space and Time Complexities Analysis with Big O Notation
--------------------------------------------------------
1. TIME COMPLEXITY - O(n):
    how much time it takes the algorithm to run when the input size increases.
    - O(1): Constant time - execution time doesn't change regardless of input size
            Example: accessing an array element by index
    - O(log n): Logarithmic - runtime grows logarithmically with input size -- better in the sense of large amount of inputs
                Example: binary search
    - O(n): Linear - runtime grows proportionally with input size
            Example: simple loop through all elements
    - O(n log n): Linearithmic - combines linear and logarithmic growth
                  Example: efficient sorting algorithms (merge sort, quick sort)
    - O(n²): Quadratic - runtime grows with the square of input size
             Example: nested loops, bubble sort
    - O(2ⁿ): Exponential - runtime doubles with each additional input element
             Example: recursive algorithms without memoization
    - O(n!): Factorial - extremely slow, grows with factorial of input size
             Example: generating all permutations

2. SPACE COMPLEXITY - O(n):
    Represents how much additional memory an algorithm requires as input size increases.
    Uses the same Big O notation as time complexity.
    - O(1): Constant space - uses fixed amount of memory regardless of input size
            Example: algorithm with only a few variables
    - O(n): Linear space - memory usage grows proportionally with input size
            Example: storing input in a new array
    - O(n²): Quadratic space - memory usage grows with square of input size
             Example: 2D arrays or matrices
    - O(log n): Logarithmic space - memory usage grows logarithmically
                Example: recursive call stack depth in binary search

KEY CONCEPTS:
    - Big O notation describes the worst-case scenario performance
    - It helps predict how algorithms scale with larger inputs
    - Important for choosing appropriate algorithms for different problem sizes

REFERENCES:
    - https://www.youtube.com/watch?v=BgLTDT03QtU - neetcode Big O | youtube
    - https://neetcode.io/roadmap - neetcode roadmap