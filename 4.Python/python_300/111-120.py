# 111
# user = input("입력: ")
# print(user * 2)

# 112
# user = input("숫자를 입력하세요: ")
# print(int(user) + 10)

# 113
# user = input("숫자를 입력하세요: ")
# if int(user) % 2 == 0:
#     print("짝수")
# else:
#     print("홀수")

# 114
# user = input("숫자를 입력하세요: ")
# if int(user) + 20 <= 255:
#     print("출력값:", int(user) + 20)
# else:
#     print("출력값: 255")

# 115
# user = input("숫자를 입력하세요: ")
# if int(user) - 20 > 255:
#     print(255)
# elif 0 > int(user) - 20:
#     print(0)
# else:
#     print(int(user) - 20)

# 116
# user = input("시간을 입력하세요: ")
# if user[3:] == "00":
#     print("정각 입니다.")
# else:
#     print("정각이 아닙니다.")
# if user[-2:] == "00":
#     print("정각 입니다.")
# else:
#     print("정각이 아닙니다.")

# 117
# fruit = ["사과", "포도", "홍시"]
# user = input("좋아하는 과일은?: ")
# if user in fruit:
#     print("정답입니다.")
# else:
#     print("오답입니다.")

# 118
# warn_investment_list = ["Microsoft", "Google", "Naver", "Kakao", "SAMSUNG", "LG"]
# user = input("종목명을 입력하세요: ")
# if user in warn_investment_list:
#     print("투자 경고 종목입니다.")
# else:
#     print("투자 경고 종목이 아닙니다.")

# 119
# fruit = {"봄" : "딸기", "여름" : "토마토", "가을" : "사과"}
# user = input("제가 좋아하는 계절은: ")
# if user in fruit.keys():
#     print("정답입니다.")
# else:
#     print("오답입니다.")
# if user in fruit:
#     print("정답입니다.")
# else:
#     print("오답입니다.")

# 120
fruit = {"봄" : "딸기", "여름" : "토마토", "가을" : "사과"}
user = input("좋아하는 과일은?: ")
if user in fruit.values():
    print("정답입니다.")
else:
    print("오답입니다.")