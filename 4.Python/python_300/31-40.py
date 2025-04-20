# 31
# 예상 34
a = "3"
b = "4"
print(a + b)

# 32
# 예상 HiHiHi
print("Hi" * 3)

# 33
print('-' * 80)

# 34
t1 = 'python'
t2 = 'java'
print((t1 + " " + t2 + " ") * 4)

# 35
name1 = "김민수" 
age1 = 10
name2 = "이철희"
age2 = 13
print("이름: %s 나이: %s\n이름: %s 나이: %s" % (name1, age1, name2, age2))

# 36
print("이름: {} 나이: {}\n이름: {} 나이: {}".format(name1, age1, name2, age2))

# 37
print(f"이름: {name1} 나이: {age1}\n이름: {name2} 나이: {age2}")

# 38
상장주식수 = "5,969,782,550"
num = int(상장주식수.replace(",",""))
print(num, type(num))

# 39
분기 = "2020/03(E) (IFRS연결)"
print(분기[0:7])    # print(분기[:7])

# 40
data = "   삼성전자    "
print(data.strip())