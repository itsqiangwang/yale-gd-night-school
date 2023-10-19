let dvd = document.querySelectorAll("#menu-items ul li");
var x_incrArr = [
  x_incr0 = 1,
  x_incr1 = 1,
  x_incr2 = 1,
  x_incr3 = 1,
  x_incr4 = 1,
  x_incr5 = 1,
  x_incr6 = 1,
  x_incr7 = 1,
];

var y_incrArr = [
  y_incr0 = 1,
  y_incr1 = 1,
  y_incr2 = 1,
  y_incr3 = 1,
  y_incr4 = 1,
  y_incr5 = 1,
  y_incr6 = 1,
  y_incr7 = 1,
];

function frame() {
  for(i = 0; i < dvd.length; i++){
    let dvd_height = dvd[i].offsetHeight;
    let dvd_width = dvd[i].offsetWidth;
    let left = dvd[i].offsetLeft;
    let top = dvd[i].offsetTop;
    let win_height = window.innerHeight;
    let win_width = window.innerWidth;
  
    if (left <= 0 || left + dvd_width >= win_width) {
      x_incrArr[i] = ~x_incrArr[i] + 1;
    }
    if (top <= 0 || top + dvd_height >= win_height) {
      y_incrArr[i] = ~y_incrArr[i] + 1;
    }

    dvd[i].style.top = dvd[i].offsetTop + y_incrArr[i];
    dvd[i].style.left = dvd[i].offsetLeft + x_incrArr[i];
  }

  // speed = Math.floor(Math.random() * (20 - 10) + 10);
  // return speed;
}
var speed = Math.floor(Math.random() * (20 - 10) + 10);
setInterval(frame, speed);

// const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
//   let timeout;

//   const runInterval = () => {
//     const timeoutFunction = () => {
//       intervalFunction();
//       runInterval();
//     };

//     const delay =
//       Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

//     timeout = setTimeout(timeoutFunction, delay);
//   };

//   runInterval();

//   return {
//     clear() {
//       clearTimeout(timeout);
//     },
//   };
// };

// setRandomInterval(frame, 100, 200);