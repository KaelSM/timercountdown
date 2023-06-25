from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/', methods=['GET'])
def home():
    return render_template('home.html')

@app.route('/submit', methods=['POST'])
def submit():
    subject = request.form.get('subject')
    datetime = request.form.get('datetime')
    return redirect(url_for('index'))

@app.route('/index', methods=['GET'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
