def Xor(x, y):
    return (x + y) % 2 
x, y = map(int, input().split())
print(Xor(x, y))
