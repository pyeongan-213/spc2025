# 251
# 클래스는 하나의 설계도로, 하나의 타입을 정의하는 방법. 클래스에는 관련있는 데이터와 함수를 한 데 모아 정의할 수 있음. 클래스로 만들어진 결과물을 객체라고 함.

# 252
class Human:
    pass

# 253
class Human:
    pass

areum = Human()

# 254
class Human:
    def __init__(self):
        print("응애응애")

areum = Human()

# 255
class Human:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

areum = Human("아름", 25, "여자")
print(areum.name)

# 256
class Human:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

areum = Human("아름", 25, "여자")
print(areum.age)

# 257
class Human:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def who(self):
        print(f"이름: {self.name} 나이: {self.age} 성별: {self.gender}")

areum = Human("아름", 25, "여자")
areum.who()

# 258
class Human:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def who(self):
        print(f"이름: {self.name} 나이: {self.age} 성별: {self.gender}")

    def setInfo(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

areum = Human("불명", "미상", "모름")
areum.who()

areum.setInfo("아름", 25, "여자")
areum.who()


# 259
class Human:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def __del__(self):
        print('나의 죽음을 알리지 말라.')

areum = Human("아름", 25, "여자")
del(areum)

# 260
# 예상 myStock.print() 가 이 경우 OMG.print(myStock)로 호출된다. 파이썬에서 자동으로 객체가 첫번째 자리로 넘어간다.
# class OMG : 
#     def print() :
#         print("Oh my god")

# >>> >>> myStock = OMG()
# >>> myStock.print()
# TypeError Traceback (most recent call last)
# <ipython-input-233-c85c04535b22> in <module>()
# ----> myStock.print()

# TypeError: print() takes 0 positional arguments but 1 was given