mkad_len = 109
v = int(input())
t = int(input())
position = (v * t) % mkad_len
if position < 0:
    position += mkad_len
print(position)