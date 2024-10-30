# Question5 This program has a bug that causes an error when executed.
# Please instruct GitHub Copilot to fix this bug.

# Variable definitions
a = 10
b = 1  # Changed to avoid division by zero
c = 5
d = 2

# Complex calculation logic
result1 = a + c - d
result2 = a * d / c
result3 = (a + b) * (c - d)

# Calculation involving division by zero
if b != 0:
	result4 = a / b
else:
	result4 = None  # Handle division by zero case

# Output the results
print("Result 1:", result1)