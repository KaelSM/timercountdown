
# Timer Flip Cards Animated Date Count Down

This is a web application that displays a countdown timer for a specific event and celebrates the event with confetti when the timer reaches zero. The application is built using JavaScript and the tsparticles-confetti library to handle the countdown timer and confetti functionality.

# To-do:
- [x] Countdown flipping cards
- [x] Work with selected date and not restart when re-loaded
- [x] Once is done, stop the time and send a notification
- [x] customize an input with button to set a date (or dropdown with calendar)
- [x] add backend to connect the applications
- [x] home page to as well put a subject line and title notification to act with the subject and title as well as the main page
- [ ] start the counter and create a subscribe to be emailed about days left
- [ ] email notification to user once timer is done
- [ ] once timer is done  and the notification is closed, prompt the user for a new date
- [ ] custumize the email

open to any solution about fixing any bug or issue as well as suggestions on what to add next

## Installation
- Clone the repository to your local machine.
- nstall the required dependencies by running pip install -r requirements.txt.
- Run the application by executing python manager.py in your terminal.
- Open your web browser and navigate to http://localhost:5000.

## Set Date

To set your custom date, you just need to modify one line in the JS file

```bash
const countDate = new Date("June 8, 2023 14:00:00").getTime();
```

## Usage

- Open the 'home.html' file in your web browser.
- Enter the name of the event you want to countdown to in the input field.
- Select the date and time of the event using the date and time picker.
- Click the "Start Countdown" button to start the countdown timer.
- The countdown timer will display the remaining time until the event in days, hours, minutes, and seconds.
- When the countdown timer reaches zero, confetti will rain down on the screen to celebrate the event.
 
 ```bash
source venv/bin/activate
```
to start it and then for the server to run: 

 ```bash
python manager.py
```


keep in mind you need flask for python to use this.

## Customization

You can customize the appearance of the countdown timer and confetti by modifying the CSS styles in 'style.css' and the JavaScript code in 'countdown.js'.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## Credits
This project was insipired by this tutorial in youtube by Web Dev SImplified, added functionality so it didnt only work with minutes and seconds, but with an actual date and kept the time even if the page is refreshed.

-[video Link](https://www.youtube.com/watch?v=p_6IuhmBsfc)

-Confetti library is used from [here](https://confetti.js.org/more.html) 

## License

[MIT](https://choosealicense.com/licenses/mit)

