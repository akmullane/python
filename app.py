# from flask import Flask, render_template, request, jsonify

# app = Flask(__name__)

# @app.route('/')
# def home():
#     return render_template('index.html')

# @app.route('/calculate', methods=['POST'])
# def calculate():
#     num1 = int(request.json['num1'])
#     num2 = int(request.json['num2'])
#     result = num1 + num2
#     return jsonify({'result': result})

# if __name__ == '__main__':
#     app.run()
def add(num1, num2):
    return num1 + num2

def subtract(num1, num2):
    return num1 - num2

def multiply(num1, num2):
    return num1 * num2

def divide(num1, num2):
    if num2 != 0:
        return num1 / num2
    else:
        return "Error: Division by zero is not allowed"

def main():
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))

    print("Addition:", add(num1, num2))
    print("Subtraction:", subtract(num1, num2))
    print("Multiplication:", multiply(num1, num2))
    print("Division:", divide(num1, num2))

if __name__ == '__main__':
    main()
