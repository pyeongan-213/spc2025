# 121
# user = input("알파벳을 하나 입력하시오: ")
# if user.islower():
#     print(user.upper())
# else:
#     print(user.lower())

# 122
# user = input("score를 입력하시오: ")
# if 100 >= int(user) > 80:
#     print("grade is A")
# elif 80 >= int(user) > 60:
#     print("grade is B")
# elif 60 >= int(user) > 40:
#     print("grade is C")
# elif 40 >= int(user) > 20:
#     print("grade is D")
# else:
#     print("grade is E")

# 123
# user = input("입력: ")
# exchange = {"달러": 1167, "엔": 1.096, "유로": 1268, "위안": 171}
# num, currency = user.split()
# print(float(num) * exchange[currency], "원")

# 124
# user = input("숫자 3개를 입력하시오: ")
# num1, num2, num3 = user.split()
# num1 = input("input number1: ")
# num2 = input("input number2: ")
# num3 = input("input number3: ")
# num1 = int(num1)
# num2 = int(num2)
# num3 = int(num3)
# if num1 >= num2 and num1 >= num3:
#     print(num1)
# elif num2 >= num1 and num2 >= num3:
#     print(num2)
# else:
#     print(num3)

# 125
# user = input("휴대전화 번호 입력: ")
# phone = user.split("-")
# if phone[0] == "011":
#     print("당신은 SKT 사용자 입니다.")
# elif phone[0] == "016":
#     print("당신은 KT 사용자 입니다.")
# elif phone[0] == "019":
#     print("당신은 LGU 사용자 입니다.")
# elif phone[0] == "010":
#     print("당신은 알수없음 사용자 입니다.")
# num = number.split("-")[0]
# if num == "011":
#     com = "SKT"
# elif num == "016":
#     com = "KT"
# elif num == "019":
#     com = "LGU"
# else:
#     com = "알수없음"
# print(f"당신은 {com} 사용자입니다.")

# 126
# user = input("우편번호를 입력하시오: ")
# if user[2:3] in ["0", "1", "2"]:
#     print("강북구")
# elif user[2:3] in ["3", "4", "5"]:
#     print("도봉구")
# elif user[2:3] in ["6", "7", "8", "9"]:
#     print("노원구")

# 127
# user = input("주민번호를 입력하시오: ")
# num, gender = user.split('-')
# if int(gender[0]) in [1, 3]:
#     print("남자")
# elif int(gender[0]) in [2, 4]:
#     print("여자")
# 주민번호 = 주민번호.split("-")[1]
# if 주민번호[0] == "1" or 주민번호[0] == "3":
#     print("남자")
# else:
#     print("여자")

# 128
# user = input("주민번호를 입력하시오: ")
# loca = user.split('-')[1]
# if "00" <= loca[1:3] <= "08":
#     print("서울")
# elif "09" <= loca[1:3] <= "12":
#     print("부산")
# 뒷자리 = 주민번호.split("-")[1]
# if 0 <= int(뒷자리[1:3]) <= 8:
#     print("서울입니다.")
# else:
#     print("서울이 아닙니다.")

# 129
# user = input("주민번호를 입력하시오: ")
# num, currency = user.split('-')
# calc = (int(num[0]) * 2 + int(num[1]) * 3 + int(num[2]) * 4 + int(num[3]) * 5 + int(num[4]) * 6 + int(num[5]) * 7 + int(currency[0]) * 8 + int(currency[1]) * 9 
#         + int(currency[2]) * 2 + int(currency[3]) * 3 + int(currency[4]) * 4 + int(currency[5]) * 5) % 11
# if int(currency[6]) == 11 - calc:
#     print("유효한 주민등록번호 입니다.")
# else:
#     print("유효하지 않은 주민등록번호 입니다.")

# 130
import requests
btc = requests.get("https://api.bithumb.com/public/ticker/").json()['data']
gap = float(btc['max_price']) - float(btc['min_price'])
op = float(btc['opening_price'])
mp = float(btc['max_price'])

if (op+gap) > mp:
    print("상승장")
else:
    print("하락장")