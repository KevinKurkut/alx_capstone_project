#!usr/bin/python
from flask import Flask, render_template, request
import smtplib

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def send_email():
    sender= request.form['email']
    name= request.form['name']
    message = request.form['msg']


    return "Email sent successfully!"

if __name__ == '__main__':
    app.run(debug=True)
    