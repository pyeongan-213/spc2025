score = 75

if score > 80:
    print("A")
elif score > 70:
    print("B")
elif score > 60:
    print("C")
else:
    print("F")

# password = input("비밀번호를 입력하시오: ")
# if (len(password) >= 8):
#     print("정상")
# else:
#     print("비밀번호가 너무 짧습니다.")

filename = "example.txt.png.hwp"    # endswith로 대답하니까 앞의 확장자가 뭐가 붙든 마지막걸로 판단

if filename.endswith(".txt"):
    print("텍스트 파일입니다.")
elif filename.endswith(".jpg") or filename.endswith(".png"):
    print("이미지 파일입니다.")
else:
    print("모르는 파일입니다.")