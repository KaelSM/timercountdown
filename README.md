
# Timer Flip Cards Animated Date Count Down

Is a simple date counter that can be implemented as a widget to any webpage, for a countdown to a specific date of the end of a sale, or a big event such as a webpage for a wedding. It is made with Vue.js, HTML5 and CSS

# To-do:
- [x] Countdown flipping cards
- [x] Work with selected date and not restart when re-loaded
- [x] Once is done, stop the time and send a notification
- [x] customize an input with button to set a date (or dropdown with calendar)
- [ ] add backend to connect the applications
- [ ] home page to as well put a subject line and title notification to act with the subject and title as well as the main page
- [ ] start the counter and create a subscribe to be emailed about days left
- [ ] email notification to user once timer is done
- [ ] once timer is done  and the notification is closed, prompt the user for a new date
- [ ] custumize the email

open to any solution about fixing any bug or issue as well as suggestions on what to add next


## Set Date

To set your custom date, you just need to modify one line in the JS file

```bash
const countDate = new Date("June 8, 2023 14:00:00").getTime();
```

## Usage

You can add the html as it is and the js with your date modification to your webpage, and it will work as expected, if size needs to be updated to be smaller, just needs to be changed in the css with it's container, same with colors, it is highly customizable.

When reaching the end of the countdown, a notification window will appear and prompt a text congratulating, as well as using a js library to throw confetti when reaching the end.

Also added a home page where the user can put their email (if they want) and requiered to put subject line and datepicker with hours that will set the application subject and date.

 using python as backend to run the enviroment use
 
 ```bash
source venv/bin/activate
```

keep in mind you need flask for python to use this.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## Credits
This project was insipired by this tutorial in youtube by Web Dev SImplified, added functionality so it didnt only work with minutes and seconds, but with an actual date and kept the time even if the page is refreshed.

-[video Link](https://www.youtube.com/watch?v=p_6IuhmBsfc)

-Confetti library is used from [here](https://confetti.js.org/more.html) 

## License

[MIT](https://choosealicense.com/licenses/mit)

