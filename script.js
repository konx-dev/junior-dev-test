/* ScrollReveal */

ScrollReveal().reveal('.sr-image');
ScrollReveal().reveal('.sr-image-500', { delay: 500 });


/* Menu state check and button transform class toggle */

openMenu = () => {
    const x = document.getElementById("menuContainer");
    if (x.style.display === "none" || x.style.display === '') {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


buttonTransform = (x) => {
    x.classList.toggle("change");
}