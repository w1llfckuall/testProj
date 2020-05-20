"use strict";
//Function for towns HEADER 
(function(){
    let value = document.querySelector('.townSlide');
    let towns = document.querySelectorAll(".dropDownTowns a")
    let dropDownMenu = document.querySelector(".dropDownTowns");
    towns.forEach(function(town){
        town.onclick = () =>{
            value.innerHTML = town.textContent;
        }
    })
})();
//Function for sizes in first Block
(function(){
    let sizes = document.querySelectorAll(".menuSizes button");
    let pickedSize = document.getElementById("pickedSize");
    let result = 0;
    sizes.forEach(function(size){
        size.onclick = () =>{
            pickedSize.innerHTML = size.textContent;
            result = String(size.textContent).split(" ").join("");
            console.log(result);
        }
    })
    })();
//Function for firstBlock images
(function(){
    let sizes = document.querySelectorAll(".menuSizes button");
    let pickedSize = document.getElementById("pickedSize");
    let result = 0;
    sizes.forEach(function(size){
        size.onclick = () =>{
            pickedSize.innerHTML = size.textContent;
            result = String(size.textContent).split(" ").join("");
            console.log(result);
        }
    })
    })();
//Function for firstBlock images
(function(){
    
    let picked1 = document.querySelector(".picked1");
    let picked2 = document.querySelector(".picked2");
    let picked3 = document.querySelector(".picked3");
    let forPolotno = document.querySelector(".innerS");
    let result = document.getElementById("polotno");
    let width1 ="450px";
    let height1 = "15" + "em";
    let width2 = "300px";
    let height2 = "16" + "em";
    let width3 = "550px";
    let height3 = "15" + "em";
    let fileChoose = document.getElementById('choose');
    let check1;
    let check2;
    let check3;
    let form = "";
    let buttons = document.querySelectorAll(".buttonsOption button");
    buttons[0].addEventListener('click' , function(e){
        e.preventDefault();
        if(buttons[0].classList.contains('is-active')){
        buttons[0].classList.remove('is-active');
        picked1.classList.remove('is-active');
        picked1.style.opacity = "0";
        }
        else{
        buttons[0].classList.add('is-active');
        picked1.classList.add('is-active');
        picked1.style.opacity = "1";
        forPolotno.style.width = width1;
        forPolotno.style.height = height1;
        check1 = true;
        check2 = false;
        check3 = false;
        form = "rectangle";
        buttons[1].classList.remove('is-active');
        picked2.classList.remove('is-active');
        picked2.style.opacity = "0";
        buttons[2].classList.remove('is-active');
        picked3.classList.remove('is-active');
        picked3.style.opacity = "0";
        }
    })
    buttons[1].addEventListener('click' , function(e){
        e.preventDefault();
        if(buttons[1].classList.contains('is-active')){
        buttons[1].classList.remove('is-active');
        picked2.classList.remove('is-active');
        picked2.style.opacity = "0";
        }
        else{
        buttons[1].classList.add('is-active');
        picked2.classList.add('is-active');
        picked2.style.opacity = "1";
        forPolotno.style.width = width2;
        forPolotno.style.height = height2;
        check1 = false;
        check2 = true;
        check3 = false;
        form = "box";
        buttons[0].classList.remove('is-active');
        picked1.classList.remove('is-active');
        picked1.style.opacity = "0";
        buttons[2].classList.remove('is-active');
        picked3.classList.remove('is-active');
        picked3.style.opacity = "0";
        }
    })
    buttons[2].addEventListener('click' , function(e){
        e.preventDefault();
        if(buttons[2].classList.contains('is-active')){
        buttons[2].classList.remove('is-active');
        picked3.classList.remove('is-active');
        picked3.style.opacity = "0";
        }
        else{
        buttons[2].classList.add('is-active');
        picked3.classList.add('is-active');
        picked3.style.opacity = "1";
        forPolotno.style.width = width3;
        forPolotno.style.height = height3;
        check1 = false;
        check2 = false;
        check3 = true;
        form = "panorama";
        buttons[0].classList.remove('is-active');
        picked1.classList.remove('is-active');
        picked1.style.opacity = "0";
        buttons[1].classList.remove('is-active');
        picked2.classList.remove('is-active');
        picked2.style.opacity = "0";
        }
    })
    fileChoose.onclick = () =>{
        if(check1 === true){
            document.querySelector('.filestyle').addEventListener('change', function() {
                let fileName = $(this).val().split('/').pop().split('\\').pop();
                let fileNameS = String(fileName).replace(".png" , ".webp");
                result.src = "/img/" + `${fileNameS}`;
                result.style.width = width1;
                result.style.height = height1; 
            });
        }
        if(check2 === true){
            document.querySelector('.filestyle').addEventListener('change', function() {
                let fileName = $(this).val().split('/').pop().split('\\').pop();
                let fileNameS = String(fileName).replace(".png" , ".webp");
                result.src = "/img/" + `${fileNameS}`;
                result.style.width = width2;
                result.style.height = height2; 
            });
        }
        if(check3 === true){
            document.querySelector('.filestyle').addEventListener('change', function() {
                let fileName = $(this).val().split('/').pop().split('\\').pop();
                let fileNameS = String(fileName).replace(".png" , ".webp");
                result.src = "/img/" + `${fileNameS}`;
                result.style.width = width3;
                result.style.height = height3; 
            });
        }
    }
    return form;
    
})(); 
/*
 document.querySelector('.filestyle').addEventListener('change', function() {
                    let fileName = $(this).val().split('/').pop().split('\\').pop();
                    let fileNameS = String(fileName).replace(".png" , ".webp");
                    let result = document.getElementById("polotno");
                    result.src = "/img/" + `${fileNameS}`;
                    result.style.width = width 
                });

*/
//Function for busket add items
(function(){
    let btnAdd = document.getElementById("addToBasket");
    let count = 0;
    let price = document.getElementById("price");
    let countBuys = document.getElementById("countOfBuys");
    btnAdd.onclick = () =>{
        count++;
        countBuys.innerHTML = parseInt(count);
    }
})();
//function for sticky menu in first block
function removeMenu(){
    let mainNav = document.getElementById("containerFirst")
    let mainNavoff = mainNav.offsetTop;
        if (window.pageYOffset >= mainNavoff) {
            mainNav.classList.add("is-active")
        } if(window.pageYOffset <= mainNavoff) {
            mainNav.classList.remove("is-active");
    }
} 
window.onscroll = function() {removeMenu()};
//SLICK
$(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows:true,
        autoPlay:true,
        autoPlaySpeed:1000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
});