function updateDateTime() {
  var currentdateElement = document.getElementById('date-time');
  var currenttimeElement = document.getElementById('date-time');

  var now = new Date();

  var daysofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();

  dateTimeElement.innerHTML = 'Tanggal: ' + date + ' - Waktu: ' + time;
}

updateDateTime();

setInterval(updateDateTime, 1000);
