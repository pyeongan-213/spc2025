# 101
# 예상 bool 타입

# 102
# 예상 false
print(3 == 5)

# 103
# 예상 true
print(3 < 5)

# 104
# 예상 true
x = 4
print(1 < x < 5)

# 105
# 예상 true
print ((3 == 3) and (4 != 3))

# 106
# 예상 연산자 표기가 >= 이렇게 돼야 한다. 3은 4보다 작다.
# print(3 => 4)

# 107
# 예상 아무것도 출력 되지 않음.
if 4 < 3:
    print("Hello World")

# 108
# 예상 Hi, there. 출력됨.
if 4 < 3:
    print("Hello World.")
else:
    print("Hi, there.")

# 109
# 예상 1, 2, 4 출력됨.
if True :
    print ("1")
    print ("2")
else :
    print("3")
print("4")

# 110
# 예상 3, 5 출력됨.
if True :
    if False:
        print("1")
        print("2")
    else:
        print("3")
else :
    print("4")
print("5")