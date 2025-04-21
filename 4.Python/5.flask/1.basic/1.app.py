from flask import Flask
from flask import request

app = Flask(__name__) # 내가 직접 이름 문자열로 써도 무방함

@app.route('/')
def home():
    return '<h1>Hello, Flask!</h1>'

@app.route('/user')
@app.route('/user/<int:user_id>')  # 인자를 숫자로만 받아서 int 타입으로 전달할거다
def user_home(user_id='Guest'):    
    return f'<h1>사용자 페이지! {user_id}</h1>'

@app.route('/admin/<username>') # 가변 인자(파라미터)
def admin_home(username="Admin"):   # 가변 인자를 함수 인자(아규먼트 = argument)로 받음
    return f'<h1>관리자 페이지! {username}</h1>'

# 쿼리 파라미터 처리는?
@app.route('/search')
def search():
    query = request.args.get('q')
    page = request.args.get('page', default=1)

    return f'검색중... 키워드: {query}, 페이지: {page}'

if __name__ == '__main__':  # 파이썬의 메인 함수 내 파일을 실행했을때 호출 다른 파일에서 나를 import 할때는 호출되지 않음
    app.run()