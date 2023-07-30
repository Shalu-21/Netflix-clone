let navbar = document.getElementById("navbar")

const toggle = () =>{
  if(navbar.style.display == "none"){
    navbar.style.display = "block"
    navbar.style.textAlign = "left"
  }

  else{
    navbar.style.display = "none"
  }
}

function carousel() {
  let carouselSlider = document.querySelector(".carousel-slider");
  let list = document.querySelector(".carousel-list");
  let item = document.querySelector(".carousel-item");
  let list2;

  const speed = 1;
  const width = list.offsetWidth;
  let x = 0;
  let x2 = width*2;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${x2}px`;
  }

  function moveFirst() {
    x -= speed;
    list.style.left = `${x}px`;

    if (x <= -width) {
      x = 0;
      list.style.left = `${x}px`;
    }

    requestAnimationFrame(moveFirst);
  }

  function moveSecond() {
    x2 -= speed;
    list2.style.left = `${x2}px`;

    if (x2 <= 0) {
      x2 = width*2;
      list2.style.left = `${x2}px`;
    }

    requestAnimationFrame(moveSecond);
  }

  function hover() {
    cancelAnimationFrame(a);
    cancelAnimationFrame(b);
  }

  function unhover() {
    a = requestAnimationFrame(moveFirst);
    b = requestAnimationFrame(moveSecond);
  }

  clone();

  let a = requestAnimationFrame(moveFirst);
  let b = requestAnimationFrame(moveSecond);

  carouselSlider.addEventListener("mouseover", hover);
  carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();
