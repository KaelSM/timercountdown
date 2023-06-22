
# Timer Flip Cards Animated Date Count Down

Is a simple date counter that can be implemented as a widget to any webpage, for a countdown to a specific date of the end of a sale, or a big event such as a webpage for a wedding. It is made with Vue.js, HTML5 and CSS

# To-do:
- [x] Countdown flipping cards
- [x] Work with selected date and not restart when re-loaded
- [ ] Once is done, stop the time and send a notification
- [ ] customize an input with button to set a date (or dropdown with calendar)
- [ ] start the counter and create a subscribe to be emailed about days left 
- [ ] once timer is done  and the notification is closed, prompt the user for a new date
- [ ] custumize the email  


## Set Date

To set your custom date, you just need to modify one line in the JS file

```bash
const countDate = new Date("June 8, 2023 14:00:00").getTime();
```

## Usage

You can add the html as it is and the js with your date modification to your webpage, and it will work as expected, if size needs to be updated to be smaller, just needs to be changed in the css with it's container, same with colors, it is highly customizable.

## Future
Planning to implement an animation/notification once reaching the date selected for the countdown. 
As well as a subscribe option for the user to be email/text with daily reminders(optional) or just notifying when the date is near, and then on the final countdown as well.
 
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## Credits
This project was insipired by this tutorial in youtube by Web Dev SImplified, added functionality so it didnt only work with minutes and seconds, but with an actual date and kept the time even if the page is refreshed.

[video Link](https://www.youtube.com/watch?v=p_6IuhmBsfc)

## License

[MIT](https://choosealicense.com/licenses/mit)

