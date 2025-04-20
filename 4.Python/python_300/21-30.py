# 21
letters = 'python'
print(letters[0], letters[2])

# 22
license_plate = "24가 2210"
print(license_plate[4:8])   # print(license_plate[-4:])

# 23
string = "홀짝홀짝홀짝"
print(string[::2])

# 24
string = "PYTHON"
print(string[::-1])

# 25
phone_number = "010-1111-2222"
print(phone_number.replace("-", " "))

# 26
phone_number = "010-1111-2222"
print(phone_number.replace("-", ""))

# 27
url = "http://sharebook.kr"
print(url[17:19]) # print(url[-2:])

# 28
# 예상 Python x 문자열은 수정할 수 없음
lang = 'python'
# lang[0] = 'P'
print(lang)

# 29
string = 'abcdfe2a354a32a'
print(string.replace('a', 'A'))

# 30
# 예상 aBcd x 문자열은 변경할 수 없는 자료형. replace를 사용하면 원본은 그대로 둔 채 새로운 문자열 객체를 생성함
string = 'abcd'
string.replace('b', 'B')
print(string)
