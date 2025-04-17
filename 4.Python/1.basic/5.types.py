x = 5
y = "Hello"
z = [1, 2, 3]

print(type(x))
print(type(y))
print(type(z))

print("x는 숫자냐?", isinstance(x, int))
print("x는 글자냐?", isinstance(x, str))
print("y는 글자냐?", isinstance(y, str))

class A:
    pass

class B(A): # B라는 객체는 A를 상속받는다 class B extends A
    pass

class C:
    pass

b = B() # 객체를 실체화 instantiation

print(isinstance(b, A)) # true
print(isinstance(b, B)) # true
print(isinstance(b, C)) # false

a = A()
print(isinstance(a, A)) # true
print(isinstance(a, B)) # false
print(isinstance(a, C)) # false