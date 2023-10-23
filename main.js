let btnMenu = document.querySelector(".icon");
let menuPhone = document.querySelector(".menu-phone");
let menuPhoneList = document.querySelectorAll(".menu-phone li");

let opacityLayer = document.querySelector(".opacity-layer");

let scrollTopBtn= document.querySelector('.scroll-top');


btnMenu.addEventListener('click' , e => {
    if(menuPhone.style.display == 'none') {
        menuPhone.style.display = 'block';
        opacityLayer.style.display= 'block';
        menuPhoneList.forEach(ele => {
            ele.addEventListener('click' , e => {
                menuPhone.style.display = 'none';
                opacityLayer.style.display= 'none';
            });
        });
    } else  {
        menuPhone.style.display = 'none';
        opacityLayer.style.display= 'none';
    }
});
window.addEventListener('scroll' , e => {
    if(window.scrollY > 600) {
        scrollTopBtn.style.display = 'block';
        scrollTopBtn.addEventListener('click' , e => {
            window.scrollTo({
                top : 0 ,
                behavior : "smooth"
            })
        })
    } else {
        scrollTopBtn.style.display = 'none'
    }
})