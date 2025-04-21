# 201
def print_coin():
    print('비트코인')
print_coin()

# 202
print_coin()

# 203
for x in range(100):
    print_coin()

# 204
def print_coins():
    for x in range(100):
        print('비트코인')

# 205
# 예상 함수 호출을 함수 정의 이전에 했기 때문에 에러가 난다.
# hello()
# def hello():
#     print("Hi")

# 206
# 예상 A\nB\nC\nA\nB
def message() :
    print("A")
    print("B")

message()
print("C")
message()

# 207
# 예상 A\nC\nB
print("A")

def message() :
    print("B")

print("C")
message()

# 208
# 예상 A\nC\nB\nE\nD
print("A")
def message1() :
    print("B")
print("C")
def message2() :
    print("D")
message1()
print("E")
message2()

# 209
# 예상 B\nA
def message1():
    print("A")

def message2():
    print("B")
    message1()

message2()

# 210
# 예상 B\nC\nB\nC\nB\nC\nA
def message1():
    print("A")

def message2():
    print("B")

def message3():
    for i in range (3) :
        message2()
        print("C")
    message1()

message3()