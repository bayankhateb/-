'use strict';
// name: ביאן חטיב 
// id: 326107646
// name:  אמיר חרירי
// id : 327679049

// task 1
const box = document.getElementById("hoverBox");

  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "orange";
  });

  // task 2
  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "lightgray";
  });

  // task 3
   const btn = document.getElementById("clickBtn");
  const countSpan = document.getElementById("clickCount");
  let count = 0;

  btn.addEventListener("click", () => {
    count++;
    countSpan.textContent = count;
  });