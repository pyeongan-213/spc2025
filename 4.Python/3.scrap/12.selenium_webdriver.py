# pip install selenium
# pip install webdriver_manager

from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

from bs4 import BeautifulSoup

import time
import csv

driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))

driver.get('https://www.naver.com')

search_box = driver.find_element(By.NAME, 'query')
search_box.send_keys("Python programming")  # 글자 입력만 해라
search_box.submit() # 제출해라


time.sleep(5)

driver.save_screenshot('search_results.png')

html = driver.page_source   # 드라이버로부터 본인이 보고 있는 페이지를 달라고 한다
driver.quit()

soup = BeautifulSoup(html, 'html.parser')

books_div = soup.select_one('div.api_subject_bx._nshopping_book_pc > div.book_list_wrap._book_content_root > div')
a_tags = books_div.select('a.item_title')

# 내가 담고 싶은 배열
my_book_list = []

for book in a_tags:
    title = book.text.strip()
    link = book.get("href")
    my_book_list.append([title, link])

print(my_book_list)

with open("naver_books.csv", mode="w", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerow(['제목','링크'])    # 헤더 작성
    writer.writerows(my_book_list)  # 데이터 작성

# search_book = driver.find_element(By.CLASS_NAME, 'item_title')
# # print(search_book)
# search_book.get_property('search_book')
# print(search_book.text)
