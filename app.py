from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

from calculator import add

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    num1 = int(request.form['num1'])
    num2 = int(request.form['num2'])
    result = num1 + num2
    return jsonify({'result': result})


if __name__ == '__main__':
    app.run()
