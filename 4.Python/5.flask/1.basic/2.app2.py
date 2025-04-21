from flask import Flask, request, jsonify, make_response
# from flask import request
# from flask import jsonify

app = Flask(__name__)

users = [
    {'id': 1, 'name': 'Alice', 'age': 25, 'phone': '123-456-7890'},
    {'id': 2, 'name': 'Bob', 'age': 30, 'phone': '222-456-7890'},
    {'id': 3, 'name': 'Charlie', 'age': 35, 'phone': '333-456-7890'},
    {'id': 4, 'name': 'Alice', 'age': 35, 'phone': '444-456-7890'},
]

@app.route('/')
def main():
    return "메인"

@app.route('/users')
def get_users():
    return jsonify(users)   # 헤더에 application/json 도 넣고 dict로 json으로 변환하고 (물론, 똑같지만)

@app.route('/users/<int:user_id>')
def get_user_by_id(user_id):
    # user = None
    # for u in users:
    #     if u['id'] == user_id:
    #         user = u
    #         break   # 찾았으면 중단하는게, 효율적인 검색

    # 위에 있는 5줄짜리 코드를 한줄로 표현하기 - 그냥 참고용 (모던 파이썬 스타일 - 굳이 이렇게까지 안짜도 무방함)
    user = next((user for user in users if user['id'] == user_id), None)
    
    if user is not None:
        return jsonify(user)
    else:
        return jsonify({'error': 'User not found'}) # return jsonify({'error': 'User not found'}), 404 이렇게 보내면 404 에러 전달. 지금은 200 보내고 에러메시지 전달

@app.route('/search')   # /search?name=Alice
def search_user():
    query = request.args.get('name')
    if not query:
        data = {'error': 'Name is required! 한글테스트'}
        response = make_response(jsonify(data))
        response.headers["Content-type"] = "application/json; charset=utf-8"
        return response
    
    results = [user for user in users if query.lower() in user['name'].lower()]
    return jsonify(results)

if __name__ == "__main__":
    app.run()