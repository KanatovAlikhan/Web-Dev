a = int(input())
b = int(input())
for num in range(1, int(b ** 0.5) + 1):
    square = num ** 2
    if square >= a:
        print(square, end=" ")