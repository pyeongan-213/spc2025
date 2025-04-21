# 211
# 예상 안녕\nHi
def 함수(문자열) :
    print(문자열)

함수("안녕")
함수("Hi")

# 212
# 예상 7\n15
def 함수(a, b) :
    print(a + b)

함수(3, 4)
함수(7, 8)

# 213
# 예상 
# def 함수(문자열) :
#     print(문자열)
# 함수()
# TypeError: 함수() missing 1 required positional argument: '문자열'

# 214
# 예상 a, b 는 같은 타입을 입력받아 덧셈 연산을 적용해야하는데 다른 타입의 값을 입력받았기 때문에 에러가 생긴다.
# def 함수(a, b) :
#     print(a + b)

# 함수("안녕", 3)
# TypeError: must be str, not int

# 215
def print_with_smile(user):
    print(user + ":D")

# 216
print_with_smile('안녕하세요')

# 217
def print_upper_price(price):
    print(price * 1.3)

# 218
def print_sum(a, b):
    print(a, "+", b, "=", a + b)

# 219
def print_arithmetic_operation(a, b):
    print(f'{a} + {b} = {a + b}')
    print(f'{a} - {b} = {a - b}')
    print(f'{a} * {b} = {a * b}')
    print(f'{a} / {b} = {a / b}')
print_arithmetic_operation(3, 4)

# 220
def print_max(a, b, c):
    # max_val = 0
    # if a > max_val :
    #     max_val = a
    # if b > max_val :
    #     max_val = b
    # if c > max_val :
    #     max_val = c
    # print(max_val)
    print(max(a, b, c))
print_max(1,2,3)