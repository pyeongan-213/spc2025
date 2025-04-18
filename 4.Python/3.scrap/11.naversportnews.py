# https://sports.news.naver.com/index

# 미션1. 뉴스의 타이틀(제목)만 가져와서 출력한다
# 미션2. 해당 뉴스의 원본 URL을 가져온다 (그래서, 그 URL을 클릭했을때 해당 사이트로 갈 수 있도록)
import requests
from bs4 import BeautifulSoup

url = 'https://sports.news.naver.com/index'

response = requests.get(url)
data = response.text

soup = BeautifulSoup(data, 'html.parser')

news = soup.select('.today_list > li')
# print(len(news_titles))

for n in news:
    a_tag = n.select_one('a')
    # print(a_tag['title'].strip()) # a태그의 프로퍼티로 가져온다

    # title = n.select_one('.title')    # 클래스명 title로 가져온다
    # print(title.text)

    strong = n.select_one('strong') # 태그로 가져온다
    print(strong.text)

    news_detail_url = a_tag['href']
    print(news_detail_url)

    news_detail = requests.get(news_detail_url)
    soup = BeautifulSoup(news_detail.text, 'html.parser')
    print(soup)

    article = soup.select('#comp_news_article')
    print('유레카!', article)
    detail_content = article.select('span').text
    break

# 미션3-1. 해당 뉴스 기사 페이지의 상세 내용도 가져오기 
# 미션3-2. 간 기사 내용의 앞에 100글자만 화면에 출력하기
# 미션3-3. 내가 짠 코드가 구조가 좋은지 살펴보기 (함수화가 잘 되어 있으나...)   # 3번미션도 추천뉴스와 같이 동적인 기사라 읽어올 수 없음

# 미션4. 네이버 스포츠 뉴스, 스크롤 아래로 내리다보면, "추천뉴스" 섹션이 있음.
# 미션4-1. 왜 이건 대체 안될까?