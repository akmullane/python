from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate/<int:num1>/<int:num2>')
def calculate(num1, num2):
    result = num1 + num2
    return f"The result of the calculation is: {result}"

if __name__ == '__main__':
    app.run()
