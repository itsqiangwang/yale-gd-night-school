// let menuItems = document.querySelectorAll("#menu-items ul li");

// var x_incrArr = [
//   (x_incr0 = 1),
//   (x_incr1 = 1),
//   (x_incr2 = 1),
//   (x_incr3 = 1),
//   (x_incr4 = 1),
//   (x_incr5 = 1),
//   (x_incr6 = 1),
//   (x_incr7 = 1),
// ];

// var y_incrArr = [
//   (y_incr0 = 1),
//   (y_incr1 = 1),
//   (y_incr2 = 1),
//   (y_incr3 = 1),
//   (y_incr4 = 1),
//   (y_incr5 = 1),
//   (y_incr6 = 1),
//   (y_incr7 = 1),
// ];

// function frame() {
//   for(i = 0; i < menuItems.length; i++){
//     let menuItems_height = menuItems[i].offsetHeight;
//     let menuItems_width = menuItems[i].offsetWidth;
//     let left = menuItems[i].offsetLeft;
//     let top = menuItems[i].offsetTop;
//     let win_height = window.innerHeight;
//     let win_width = window.innerWidth;

//     if (left <= 0 || left + menuItems_width >= win_width) {
//       x_incrArr[i] = ~x_incrArr[i] + 1;
//     }
//     if (top <= 0 || top + menuItems_height >= win_height) {
//       y_incrArr[i] = ~y_incrArr[i] + 1;
//     }

//     menuItems[i].style.top = menuItems[i].offsetTop + y_incrArr[i];
//     menuItems[i].style.left = menuItems[i].offsetLeft + x_incrArr[i];
//   }
// }
// setInterval(frame, Math.floor(Math.random() * (50 - 10) + 10));

const items = document.querySelectorAll("li");

function animateItems() {
  items.forEach((item) => {
    const speed = 0.75;
    let directionX = Math.random() * 2 - 1; // Random direction between -1 and 1
    let directionY = Math.random() * 2 - 1; // Random direction between -1 and 1
    let left = window.innerWidth / 2;
    let top = window.innerHeight / 2;

    function moveItem() {
      left += speed * directionX;
      top += speed * directionY;

      if (left < 0 || left + item.clientWidth > window.innerWidth) {
        directionX *= -1;
      }

      if (top < 0 || top + item.clientHeight > window.innerHeight) {
        directionY *= -1;
      }

      item.style.left = left + "px";
      item.style.top = top + "px";

      requestAnimationFrame(moveItem);
    }

    moveItem();
  });
}

animateItems();
