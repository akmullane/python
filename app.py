from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def calculate():
    num1 = int(request.json['num1'])
    num2 = int(request.json['num2'])
    result = num1 + num2
    return jsonify({'result': result})

# if __name__ == '__main__':
#     app.run()
