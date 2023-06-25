document.addEventListener('DOMContentLoaded', function() {
  var submitButton = document.querySelector('#submit');
  if (submitButton) {
    submitButton.addEventListener('click', function(e) {
      e.preventDefault();
      var subject = document.querySelector('#subject').value;
      var datetime = document.querySelector('#datetime').value;
      window.location.href = '/index?subject=' + encodeURIComponent(subject) + '&datetime=' + encodeURIComponent(datetime);
    });
  }
});
