# 81
scores = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
# a, b, c, d, e, f, g, h, *i = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
# valid_score = [a, b, c, d, e, f, g, h]
*valid_score, _, _ = scores
print(valid_score)

# 82
scores = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
a, b, *valid_score = scores # _, _, *valid_score = scores
print(valid_score)

# 83
scores = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
_, *valid_score, _ = scores #  a, *valid_score, b = scores
print(valid_score)

# 84
temp = {}
print(type(temp))

# 85
icecream = {"메로나": 1000, "폴라포": 1200, "빵빠레": 1800}
print(icecream)

# 86
icecream["죠스바"] = 1200
icecream["월드콘"] = 1500
print(icecream)

# 87
ice = {'메로나': 1000,
       '폴로포': 1200,
       '빵빠레': 1800,
       '죠스바': 1200,
       '월드콘': 1500}
print("메로나 가격:", ice["메로나"])

# 88
ice = {'메로나': 1000,
       '폴로포': 1200,
       '빵빠레': 1800,
       '죠스바': 1200,
       '월드콘': 1500}
ice["메로나"] = 1300
print(ice["메로나"])

# 89
ice = {'메로나': 1000,
       '폴로포': 1200,
       '빵빠레': 1800,
       '죠스바': 1200,
       '월드콘': 1500}
del ice["메로나"]
print(ice)

# 90
# 예상 누가바를 icecream dict에 추가할때 value 값인 가격을 설정하지 않아서 에러가 남.(딕셔너리에 없는 키를 사용해서 인덱싱 하면 에러가 난다.)
# >> icecream = {'폴라포': 1200, '빵빠레': 1800, '월드콘': 1500, '메로나': 1000}
# >> icecream['누가바']
# Traceback (most recent call last):
#   File "<pyshell#69>", line 1, in <module>
#     icecream['누가바']
# KeyError: '누가바'