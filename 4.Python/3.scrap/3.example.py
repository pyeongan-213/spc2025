import requests

url = 'https://example.com'

response = requests.get(url)
data = response.text

# 이 결과는 무슨 포멧인가? 자료구조로 볼때 html이 아니라 text 문자열임 String
print(data)