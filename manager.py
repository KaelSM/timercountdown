from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/submit', methods=['POST'])
def submit():
    subject = request.form.get('subject')
    return redirect(url_for('index'))

@app.route('/index')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
