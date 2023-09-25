from flask import Flask, render_template, request, redirect, url_for
import sqlite3
import smtplib
from email.mime.text import MIMEText
import threading
import time

app = Flask(__name__, static_folder='static', template_folder='templates')

# Set up a SQLite database
conn = sqlite3.connect('countdown.db')
cursor = conn.cursor()
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL
    );
''')
conn.commit()
conn.close()

# Store countdown end times in a dictionary
countdown_timers = {}

@app.route('/', methods=['GET'])
def home():
    return render_template('home.html')

@app.route('/submit', methods=['POST'])
def submit():
    email = request.form.get('em')
    subject = request.form.get('sub')
    date = request.form.get('DT')

    # Store the email in the database
    conn = sqlite3.connect('countdown.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO users (email) VALUES (?)', (email,))
    conn.commit()
    conn.close()

    # Parse the date and time to calculate the countdown duration
    countdown_end_time = time.mktime(time.strptime(date, '%Y-%m-%dT%H:%M'))
    current_time = time.time()
    countdown_duration = max(0, countdown_end_time - current_time)

    # Start the countdown timer in a separate thread
    countdown_timers[email] = threading.Timer(countdown_duration, send_countdown_email, args=(email, subject))
    countdown_timers[email].start()

    return redirect(url_for('index', subject=subject, date=date))

@app.route('/index', methods=['GET'])
def index():
    subject = request.args.get('subject')
    date = request.args.get('date')

    return render_template('index.html', subject=subject, date=date)

def send_countdown_email(email, subject):
    # Calculate countdown logic here
    # You can use JavaScript to handle the countdown on the client-side
    countdown_message = "Countdown message goes here."

    # Send the email
    send_email(email, subject, countdown_message)

def send_email(email, subject, countdown_message):
    msg = MIMEText(countdown_message)
    msg['Subject'] = subject
    msg['From'] = 'your_email@example.com'
    msg['To'] = email

    # Replace these with your SMTP server details (e.g., Gmail)
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587  # Port for TLS/STARTTLS
    smtp_username = 'your_gmail_username@gmail.com'  # Your Gmail email address
    smtp_password = 'your_gmail_password'  # Your Gmail password or an "App Password" if you have 2-Step Verification enabled

    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.sendmail('your_email@example.com', [email], msg.as_string())

if __name__ == '__main__':
    app.run(debug=True)
