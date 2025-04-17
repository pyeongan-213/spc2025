print('- 1 -')

for i in range(1, 6):
    print(i * "*")
    
print('- 2 -')

for i in range(1, 6):
    print(((5 - i) * " ") + (i * "*"))

print('- 3 -')

for i in range(0, 5):
    print(((4 - i)  * " ") + ((i + 1) * "*") + (i * "*"))

print('- 4 -')

for i in range(0, 5):
    print(((4 - i)  * " ") + (i * "*") + ((i + 1) * "*"))
for i in range(1, 5):
    print((i * " ") + ("*" * (9 - (i * 2))))