function countDown() {
  var now = new Date();
  currentYear = (new Date()).getFullYear();
  
  var eventDate = new Date(currentYear, 11, 25);

  var currentTime = now.getTime();
  var eventTime = eventDate.getTime();

  var remTime = eventTime - currentTime;

  var s = Math.floor(remTime / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24);

  s %= 60;
  m %= 60;
  h %= 24;

  s = (s < 10) ? "0" + s : s;
  m = (m < 10) ? "0" + m : m;
  h = (h < 10) ? "0" + h : h;

  document.getElementById("seconds").innerText = s;
  document.getElementById("minutes").innerText = m;
  document.getElementById("hours").innerText = h;
  document.getElementById("days").innerText = d;

  setTimeout(countDown, 1000);
}

countDown();
