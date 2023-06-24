from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    subject = "Countdown to pick up Krasus"  # Set the subject here
    return render_template('home.html', subject=subject)

@app.route('/countdown')
def countdown():
    date = "June 23, 2023 11:15:00"  # Set the date and time here
    return render_template('countdown.html', date=date)

if __name__ == '__main__':
    app.run(debug=True)