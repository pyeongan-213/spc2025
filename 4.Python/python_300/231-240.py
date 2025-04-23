# 231
# 예상 에러. 함수 내부에서 사용한 변수는 함수 밖에서 접근할 수 없음. 함수 내부에서 계산한 값을 전달하기 위해선 return을 사용해야 함.
# def n_plus_1 (n) :
#     result = n + 1

# n_plus_1(3)
# print (result)

# 232
# def make_url(url):
#     print("www." + url + ".com")
def make_url(string) :
    return "www." + string + ".com"

make_url("naver")

# 233
# def make_list(li):
#     lis = []
#     for x in li:
#         lis.append(x)
#     return lis
def make_list (string) :
    return list(string)

make_list("abcd")

# 234
def pickup_even(string):
    my_list = []
    for x in string:
        if x % 2 == 0:
            my_list.append(x)
    return my_list

pickup_even([3, 4, 5, 6, 7, 8])

# 235
def convert_int (string) :
    return int(string.replace(',', ''))

convert_int("1,234,567")

# 236
# 예상 22
def 함수(num) :
    return num + 4

a = 함수(10)
b = 함수(a)
c = 함수(b)
print(c)

# 237
# 예상 22
def 함수(num) :
    return num + 4

c = 함수(함수(함수(10)))
print(c)

# 238
# 예상 140
def 함수1(num) :
    return num + 4

def 함수2(num) :
    return num * 10

a = 함수1(10)
c = 함수2(a)
print(c)

# 239
# 예상 16
def 함수1(num) :
    return num + 4

def 함수2(num) :
    num = num + 2
    return 함수1(num)

c = 함수2(10)
print(c)

# 240
# 예상 28
def 함수0(num) :
    return num * 2

def 함수1(num) :
    return 함수0(num + 2)

def 함수2(num) :
    num = num + 10
    return 함수1(num)

c = 함수2(2)
print(c)