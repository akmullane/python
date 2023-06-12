from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    num1 = int(data['num1'])
    num2 = int(data['num2'])
    result = num1 + num2
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run()
