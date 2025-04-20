# 191
data = [
    [ 2000,  3050,  2050,  1980],
    [ 7500,  2050,  2050,  1980],
    [15450, 15050, 15550, 14900]
]
for x in data:
    for y in x:
        print(y * 1.00014)

# 192
for x in data:
    for y in x:
        print(y * 1.00014)
    print('-'*4)

# 193
result = []
for x in data:
    for y in x:
        result.append(y * 1.00014)
print(result)

# 194
result = []
for x in data:
    lis = []
    for y in x:
        lis.append(y * 1.00014)
    result.append(lis)
print(result)

# 195
ohlc = [["open", "high", "low", "close"],
        [100, 110, 70, 100],
        [200, 210, 180, 190],
        [300, 310, 300, 310]]
for x in ohlc[1:]:
    print(x[3])

# 196
ohlc = [["open", "high", "low", "close"],
        [100, 110, 70, 100],
        [200, 210, 180, 190],
        [300, 310, 300, 310]]
for x in ohlc[1:]:
    if x[3] > 150:
        print(x[3])

# 197
for x in ohlc[1:]:
    if x[3] >= x[0]:
        print(x[3])

# 198
volatility = []
for x in ohlc[1:]:
    volatility.append(x[1] - x[2])
print(volatility)

# 199
for x in ohlc[1:]:
    if x[3] > x[0]:
        print(x[1] - x[2])

# 200
sum = 0
for x in ohlc[1:]:
    sum += x[3] - x[0]
print(sum)