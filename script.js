const field = document.getElementById("field");
const ball = document.getElementById("ball");

field.addEventListener("click", (event) => {
  const fieldRect = field.getBoundingClientRect();
  console.log(fieldRect);

const borderWidth = parseInt(getComputedStyle(field).borderWidth,10)
console.log(borderWidth);

  const clickX = event.clientX - fieldRect.left - borderWidth;
  const clickY = event.clientY - fieldRect.top - borderWidth;

  const ballRadius = ball.offsetWidth / 2;

  let newLeft = clickX - ballRadius;
  let newTop = clickY - ballRadius;

  const maxLeft = field.clientWidth - ball.offsetWidth;
  const maxTop = field.clientHeight - ball.offsetHeight;

  if(newLeft < 0){
    newLeft = 0
  }
  if(newLeft > maxLeft){
    newLeft = maxLeft
  }
  if(newTop < 0){
    newTop = 0
  }
  if(newTop > maxTop){
    newTop = maxTop
  }

  ball.style.left = `${newLeft}px`;
  ball.style.top = `${newTop}px`;

});
