$(function(){

    
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop;
    
    let nav = $('#nav');
    let navToggle = $("#navToggle");
    
    /* Header fixed*/
    
    checkScroll(scrollPos, introH);
    
    $(window).on("scroll load  resize", function(){
        
            let introH = intro.innerHeight();
            scrollPos = $(this).scrollTop();
            
    });
    
    function checkScroll(scrollPos, introH){
        if( scrollPos > introH ){
                header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    }
    
    
    /* Smooth Scroll */
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        nav.remove("#show");
        
        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
        
    });
    
    /* Nav Toggle */
    
    
    
    $("#navToggle").on("click", function(event){
        event.preventDefault();
        
        nav.toggleClass("show");
    });
    
    /* Reviws */
    
    let slider = $("#reviewsSlider");
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});


















