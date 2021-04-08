$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })

    // toggle menu/navbar script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
    })

    // typing animation

    var typed= new Typed(".typing",{
        strings:["Graphics Designer", "Developer", "3D Artist", "Freelancer"],
        typeSpeed:100,
        backSpeed: 60,
        loop: true
    })

    var typed= new Typed(".typing-2",{
        strings:["Graphics Designer", "Developer", "3D Artist", "Freelancer"],
        typeSpeed:100,
        backSpeed: 60,
        loop: true
    })
});