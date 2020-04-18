
var btnLoupe = document.querySelector(".loupe_btn");
var formLoupe = document.querySelector(".header_search");
var loginLoupe = formLoupe.querySelector("[name=search]");
var btnEntrance = document.querySelector(".entrance_btn");
var formEntrance = document.querySelector(".entrance_wrapp");
var btnBasket = document.querySelector(".basket_btn");
var formBasket = document.querySelector(".basket_menu");
var loginEntrance = formEntrance.querySelector("[name=login]");
var passEntrance = formEntrance.querySelector("[name=password]");
var btnFeedBackOpen = document.querySelector(".feedback_form-btn");
var btnFeedBackClose = document.querySelector(".feedback_close");
var feedbackForm = document.querySelector(".feedback_wrapper");
var loginFeedback = feedbackForm.querySelector("[name=login]");
var emailFeedback = feedbackForm.querySelector("[name=email]");
var storage = localStorage.getItem("login");


// Поиск

btnLoupe.addEventListener("click",function(evt){
    
    if(formLoupe.classList.contains("display-show")){
        evt.preventDefault();
        formLoupe.classList.remove("display-show");
        btnLoupe.blur();
    }else{
        formLoupe.classList.add("display-show");
        formEntrance.classList.remove("display-show");
        formBasket.classList.remove("display-show");
        loginLoupe.focus();
        btnLoupe.blur();
}
});

// Корзина

btnBasket.addEventListener("click",function(evt){
    if(formBasket.classList.contains("display-show")){
        evt.preventDefault();
        formBasket.classList.remove("display-show");
        btnBasket.blur();
    }else{
        formBasket.classList.add("display-show");
        formEntrance.classList.remove("display-show");
        formLoupe.classList.remove("display-show");
        btnBasket.blur();
    }
});

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (error) {
    isStorageSupport = false;}

// Форма входа

btnEntrance.addEventListener("click",function(evt){
    if(formEntrance.classList.contains("display-show")){
        evt.preventDefault();
        formEntrance.classList.remove("display-show");
        formEntrance.classList.remove("display-error");
        btnEntrance.blur();
    }else{
        formEntrance.classList.add("display-show");
        btnEntrance.blur();
        loginEntrance.focus();
        formBasket.classList.remove("display-show");
        formLoupe.classList.remove("display-show");
        if(storage){
            loginEntrance.value = storage;
            passEntrance.focus();
        }else{
            loginEntrance.focus();
        }
    }
});

formEntrance.addEventListener("submit", function(evt){
    if(!loginEntrance.value || !passEntrance.value){
    evt.preventDefault();
        formEntrance.classList.remove("display-error");
        formEntrance.offsetWidth = formEntrance.offsetWidth;
        formEntrance.classList.add("display-error");
    }else{
        if(isStorageSupport){
            localStorage.setItem("login",loginEntrance.value);
            passEntrance.focus();
        }else{
            loginEntrance.focus();
        }
    }
});

//Форма Обратной Связи

btnFeedBackOpen.addEventListener("click",function(evt){

    feedbackForm.classList.add("display-show");
    if(storage){
        loginFeedback.value = storage;
        emailFeedback.focus();
    }else{
        loginFeedback.focus();
    }

});

btnFeedBackClose.addEventListener("click", function(){
    feedbackForm.classList.remove("display-show");
});

//Закрытие окон с клавиатуры 

window.addEventListener("keydown",function(evt){
    if(evt.keyCode === 27){
        if(feedbackForm.classList.contains("display-show")){
            evt.preventDefault;
            feedbackForm.classList.remove("display-show");
        }
    }
});



//Слайдер


var dots = document.querySelectorAll(".switch");
var BgFirst = document.querySelector(".slider_bg_first");
var BgSecond = document.querySelector(".slider_bg_second");
var BgThird = document.querySelector(".slider_bg_third");
var Bg = document.querySelector(".slider_bg");
var Body = document.querySelector(".main_page");
var SliderText = document.querySelector(".slider_heading-text");



    
    dots[0].addEventListener("click",function(){
        if(!dots[0].hasAttribute("disabled")){
            dots[0].setAttribute("disabled", "disabled");
            Bg.classList.add("slider_bg_first");
            SliderText.textContent = "Крем-брюле и пломбир с малиновым джемом";
            Bg.classList.remove("slider_bg_second" , "slider_bg_third");
            Body.style.backgroundColor = '#86a092';
            dots[1].removeAttribute("disabled");
            dots[2].removeAttribute("disabled");
        }
    });  

    dots[1].addEventListener("click",function(){
        if(!dots[1].hasAttribute("disabled")){
            dots[1].setAttribute("disabled", "disabled");
            Bg.classList.add("slider_bg_second");
            SliderText.textContent = "Шоколадный пломбир и лимонный сорбет ";
            Bg.classList.remove("slider_bg_first" , "slider_bg_third");
            Body.style.backgroundColor = '#8996a6';
            dots[0].removeAttribute("disabled");
            dots[2].removeAttribute("disabled");
        }
    });  

    dots[2].addEventListener("click",function(){
        if(!dots[2].hasAttribute("disabled")){
            dots[2].setAttribute("disabled", "disabled");
            Bg.classList.add("slider_bg_third");
            SliderText.textContent = "Пломбир с помадкой и клубничный щербет";
            Bg.classList.remove("slider_bg_first" , "slider_bg_second");
            Body.style.backgroundColor = '#9d8b84';
            dots[0].removeAttribute("disabled");
            dots[1].removeAttribute("disabled");
        }
    });  

//Ниспадающее меню

var dropMenu = document.querySelector(".drop-down_list");
var dropBtn = document.querySelector(".drop_btn");

dropBtn.addEventListener("click",function(){
    dropMenu.style.display = "block";
});
dropBtn.addEventListener("mouseenter",function(){
    dropMenu.style.display = "block";
});
dropBtn.addEventListener("mouseleave",function(){
    dropMenu.style.display = "none";
});
dropBtn.addEventListener("mouseleave",function(){
    dropMenu.style.display = "none";
});
