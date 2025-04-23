# 221
def print_reverse(text):
    print(text[::-1])
print_reverse("python")

# 222
def print_score(a):
    print(sum(a) / len(a))
print_score ([1, 2, 3])

# 223
def print_even(num):
    for even in num:
        if even % 2 == 0:
            print(even)
print_even ([1, 3, 2, 10, 12, 11, 15])

# 224
def print_keys(person):
    for key in person.keys():
        print(key)

print_keys ({"이름":"김말똥", "나이":30, "성별":0})

# 225
my_dict = {"10/26" : [100, 130, 100, 100],
           "10/27" : [10, 12, 10, 11]}
def print_value_by_key(abc, string):
    print(abc[string])
print_value_by_key(my_dict, "10/26")

# 226
def print_5xn(line):
    chunk_num = int(len(line) / 5)
    for x in range(chunk_num + 1) :
        print(line[x * 5: x * 5 + 5])
    
print_5xn("아이엠어보이유알어걸")

# 227
def printmxn(line, num):
    chunk_num = int(len(line) / num)
    for x in range(chunk_num + 1) :
        print(line[x * num: x * num + num])

printmxn("아이엠어보이유알어걸", 3)

# 228
def calc_monthly_salary(annual_salary):
    print(int(annual_salary / 12))

calc_monthly_salary(12000000)

# 229
# 예상 왼쪽: 100\n오른쪽: 200
def my_print (a, b) :
    print("왼쪽:", a)
    print("오른쪽:", b)

my_print(a=100, b=200)

# 230
# 예상 왼쪽: 200\n오른쪽: 100
def my_print (a, b) :
    print("왼쪽:", a)
    print("오른쪽:", b)

my_print(b=100, a=200)