$(function (){

    $(' .customers .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        margin:10,
        nav:true,
        dots:true,
        rtl:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })
    
    
    $('.send-mes .owl-carousel').owlCarousel({
        loop:true,
        margin:4,
        nav:false,
        rtl:true,
        autoWidth:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })


    $('.companies .owl-carousel').owlCarousel({
        loop:true,
        margin:8,
        nav:false,
        rtl:true,
        autoWidth:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:8
            }
        }
    })



    $('.short-message-car .owl-carousel').owlCarousel({
        loop:false,
        margin:20,
        nav:false,
        rtl:true,
        items : 2,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })

}

)

