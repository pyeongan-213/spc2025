import requests
from bs4 import BeautifulSoup
import csv
import json
from urllib.parse import urlparse, urljoin
import os

BASE_URL = 'https://www.moviechart.co.kr'
MOVIERANK_URL = urljoin(BASE_URL, '/rank/realtime/index/image')
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
}

response = requests.get(MOVIERANK_URL, headers=HEADERS)
response.raise_for_status()
soup = BeautifulSoup(response.text, 'html.parser')

movies = []
movies_json = []

# 이미지를 저장할 디렉토리 생성
os.makedirs('thumbnails', exist_ok=True)

movie_cards = soup.select('div.movieBox li.movieBox-item')
print('무비카드 개수:', len(movie_cards))

# 
def sanitize_filename(name):
    import re   # 로컬에 선언해도 되고 맨 위에 선언해도 되고 (보통 후자가 더 일반적이기는 함)
    return re.sub(r'[\\/*?:"<>| ]','_', name)   # r = replace (앞에 조건에 온 특수문자들을 _ 밑줄로 표현)


for card in movie_cards:
    title_tag = card.select_one('div.movie-title h3')
    img_tag = card.select_one('img')
    link_tag = card.select_one('a')

    title = title_tag.text.strip() if title_tag else '제목없음'
    image_url = img_tag['src'] if img_tag and img_tag.has_attr('src') else '이미지 없음'

    thumbnail_url = urljoin(BASE_URL, image_url)
    image_data = requests.get(thumbnail_url, headers=HEADERS).content
    if len(image_data) > 0:
        safe_filename = sanitize_filename(title)
        filename = f"thumbnails/{safe_filename}.jpg"
        with open(filename, 'wb') as f: #   wb 에서의 b는 바이너리 데이터
            f.write(image_data)

    detail_link = 'https://www.moviechart.co.kr' + link_tag['href'] if link_tag else '링크없음'

    print(f"제목: {title}, 이미지: {image_url}, 상세페이지: {detail_link}")

    movies.append([title, image_url, detail_link])
    movies_json.append({
        "title": title,
        "image_url": image_url,
        "detail_link": detail_link
    })

csv_filename = 'movie_chart.csv'
with open(csv_filename, 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['제목', '이미지URL', '상세링크'])
    writer.writerows(movies)

print(f"CSV 저장 완료: {csv_filename}")

json_filename = 'movie_chart.json'
with open(json_filename, 'w', encoding='utf-8') as f:
    json.dump(movies_json, f, ensure_ascii=False, indent=4)

print(f"JSON 저장 완료: {json_filename}")

