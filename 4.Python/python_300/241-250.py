# 241
import datetime

now = datetime.datetime.now()
print(now)

# 242
print(type(now), now)

# 243
for x in range(5, 0, -1):
    delta = datetime.timedelta(days=x)
    date = now - delta
    print(date)

# 244
print(now.strftime("%H:%M:%S"))

# 245
date = datetime.datetime.strptime("2020-05-04", "%Y-%m-%d")
print(type(date), date)

# 246
import time

# while True:
#     now = datetime.datetime.now()
#     print(now)
#     time.sleep(1)

# 247
# 1. import 모듈
# 2. import 모듈 as 이름
# 3. from 모듈 import 함수명
# 3. from 모듈 import *

# 248
import os

dir = os.getcwd()
print(dir, type(dir))

# 249
tx = os.rename("C:/users/pyan/Desktop/python.txt", "C:/users/pyan/Desktop/after.txt")

# 250
import numpy

for i in numpy.arange(0, 5, 0.1):
    print(i)