
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`);
});
document.addEventListener('click', () => {
  cursor.classList.add("expand");
  setTimeout(() => cursor.classList.remove("expand"), 500);
});

/* window.addEventListener("load", () => {
  const boxes = document.querySelectorAll(".box");
  const box2Rect = boxes[1].getBoundingClientRect();
  const centerX = box2Rect.left + box2Rect.width / 2;
  const centerY = box2Rect.top + box2Rect.height / 2;

  boxes.forEach((box, i) => {
    const rect = box.getBoundingClientRect();
    const boxCenterX = rect.left + rect.width / 2;
    const boxCenterY = rect.top + rect.height / 2;
    const finalOffsetX = boxCenterX - centerX;
    const finalOffsetY = boxCenterY - centerY;
    box.style.transition = "none";
    box.style.transform = `translate(${-finalOffsetX}px, ${-finalOffsetY}px)`;
    box.style.opacity = (i === 1) ? "1" : "0";
    box.style.zIndex = (i === 1) ? "10" : "5";
  });
  setTimeout(() => {
    boxes.forEach((box, i) => {
      box.style.transition = `transform 1s ease-out ${i * 0.15}s, opacity 1s ease-out ${i * 0.15}s`;
      box.style.transform = `translate(0px, 0px)`;
      box.style.opacity = "1";
    });
  }, 100);
});
*/