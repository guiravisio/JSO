
/* Abre e fecha navegação */
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () =>  {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x" , "bi-list");
    body.classList.toggle("menu-nav-active");
})

/* Fecha ao selecionar nav */
const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () =>{
        if(body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x" , "bi-list");
        }
    })
})

/* Animação */

const item = document.querySelectorAll("[data-anime");

const animeScroll = () => {
  const windowTop = window.scrollY + window.innerHeight * 0.85; 
  
  item.forEach(element => {
    if (windowTop > element.offsetTop){
      element.classList.add("animate");
    }
  })

}

animeScroll()

window.addEventListener("scroll", ()=>{
  animeScroll();
})

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviando = document.querySelector('#btn-enviando')

btnEnviar.addEventListener("click", ()=>{
  btnEnviando.style.display = "block";
  btnEnviar.style.display = "none"
})

setTimeout(()=>{
  document.querySelector('#lerta').style.display = 'none';

}, 5000)

$('.slider-responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });