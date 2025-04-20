# 71
my_variable = ()
print(type(my_variable))

# 72
movie_rank = ("닥터 스트레인지", "스플릿", "럭키")
print(movie_rank)

# 73
num = (1, ) # 괄호와 함께 하나의 정숫값을 저장하면 튜플이 아닌 int로 인식함. 하나의 데이터를 저장하는 경우 , 를 넣어줘야한다.
print(type(num))

# 74
# 예상 튜플은 원소의 값을 변경할 수 없다.
# >> t = (1, 2, 3)
# >> t[0] = 'a'
# Traceback (most recent call last):
#   File "<pyshell#46>", line 1, in <module>
#     t[0] = 'a'
# TypeError: 'tuple' object does not support item assignment


# 75
# 예상 t 가 바인딩 하는 데이터 타입은 튜플. 튜플은 괄호와 함께 데이터를 정의해야 하지만 사용자 편의를 위해 괄호 없이도 동작한다.
t = 1, 2, 3, 4

# 76
t = ('a', 'b', 'c')
t = ('A', 'b', 'c') # 튜플의 값은 변경할 수 없기 때문에 새로운 튜플을 만들고 t 라는 변수를 업데이트 해야한다. 기존의 튜플 t 는 자동으로 삭제된다.
print(t)

# 77
interest = ('삼성전자', 'LG전자', 'SK Hynix')
interest_list = list(interest)
print(interest_list)

# 78
interest = ['삼성전자', 'LG전자', 'SK Hynix']
interest_tuple = tuple(interest)
print(interest_tuple)

# 79
# 예상 apple banana cake
temp = ('apple', 'banana', 'cake')
a, b, c = temp
print(a, b, c)

# 80
even_num = tuple(range(2, 100, 2))
print(even_num)