const clockFace = document.querySelector('#clockFace');
const stopBtn = document.querySelector('#stopBtn');
const pauseBtn = document.querySelector('#pauseBtn');

startBtn.addEventListener('click', StartTimer);

function StartTimer() {
  const date = new Date('December 17, 1995 00:00:00');
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();
  let milliseconds = date.getMilliseconds();

  const interval = setInterval(() => {
    milliseconds++;
    if (milliseconds === 10) {
      milliseconds = 0;
      second++;
    }
    if (second === 60) {
      second = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hour++;
      }
    }
    clockFace.textContent = `${hour} часов ${minutes} минут ${second} секунд ${milliseconds} доли секунд`;
  }, 100);

  pauseBtn.addEventListener('click', pauseTimer);
  function pauseTimer() {}

  stopBtn.addEventListener('click', stopTimer);
  function stopTimer() {
    clearInterval(interval);
  }
}
