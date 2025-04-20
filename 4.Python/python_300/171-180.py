# 171
price_list = [32100, 32150, 32000, 32500]
for x in range(4):
    print(price_list[x])
# for i in range(len(price_list)):
#     print(price_list[i])

# 172
price_list = [32100, 32150, 32000, 32500]
for i in range(len(price_list)):
    print(i, price_list[i])


# 173
price_list = [32100, 32150, 32000, 32500]
for i in range(len(price_list)):
    print(3 - i, price_list[i])

# 174
price_list = [32100, 32150, 32000, 32500]
for i in range(1, 4):
    print(90 + 10 * i, price_list[i])

# 175
my_list = ["가", "나", "다", "라"]
for i in range(len(my_list) - 1):
    print(my_list[i], my_list[i + 1])

# 176
my_list = ["가", "나", "다", "라", "마"]
for i in range(len(my_list) - 2):
    print(my_list[i], my_list[i + 1], my_list[i + 2])

# 177
my_list = ["가", "나", "다", "라"]
for i in [2, 1, 0] :
    print(my_list[i+1], my_list[i])

# 178
my_list = [100, 200, 400, 800]
for i in range(len(my_list) - 1):
    print(abs(my_list[i+1] - my_list[i]))

# 179
my_list = [100, 200, 400, 800, 1000, 1300]
for i in range(1, len(my_list) - 1):
    print(abs(my_list[i-1] + my_list[i] + my_list[i+1]) / 3)

# 180
low_prices  = [100, 200, 400, 800, 1000]
high_prices = [150, 300, 430, 880, 1000]
volatility = []
for x in range(5):
    y = high_prices[x] - low_prices[x]
    volatility.append(y)
print(volatility)