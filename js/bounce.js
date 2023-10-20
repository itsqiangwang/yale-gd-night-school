// const items = document.querySelectorAll("nav ul li");

// function animateItems() {
//   items.forEach((item) => {
//     const speed = 1;
//     let directionX = Math.random() * 2 - 1; // Random direction between -1 and 1
//     let directionY = Math.random() * 2 - 1; // Random direction between -1 and 1
//     let left = window.innerWidth / 2;
//     let top = window.innerHeight / 2;

//     function moveItem() {
//       left += speed * directionX;
//       top += speed * directionY;

//       if (left < 0 || left + item.clientWidth > window.innerWidth) {
//         directionX *= -1;
//       }

//       if (top < 0 || top + item.clientHeight > window.innerHeight) {
//         directionY *= -1;
//       }

//       item.style.left = left + "px";
//       item.style.top = top + "px";

//       requestAnimationFrame(moveItem);
//     }

//     moveItem();
//   });
// }

// animateItems();

const items = document.querySelectorAll("nav ul li");
const defaultSpeed = 1;
let speed = defaultSpeed;

function animateItems() {
  items.forEach((item) => {
    let directionX = Math.random() * 2 - 1;
    let directionY = Math.random() * 2 - 1;
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

    item.addEventListener("mouseenter", () => {
      // Decrease the speed on hover
      speed = defaultSpeed / 4; // You can adjust the division factor to control the speed reduction
    });

    item.addEventListener("mouseleave", () => {
      // Restore the default speed when the mouse leaves
      speed = defaultSpeed;
    });

    moveItem();
  });
}

animateItems();
