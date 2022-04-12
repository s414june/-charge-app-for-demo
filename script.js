$(function () {
    $("header").removeClass("small");
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    $("#back-place").hide();

    if (/iPhone|iphone/i.test(navigator.userAgent)) {
        document.documentElement.style.setProperty('--ios-bottom-space', `1rem`);
        // $("html").css("height", "calc(var(--vh))*100 + 75px"); //原本是72px...
    }

    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    $("#location-main").on("click",(e)=>{
        $("header").toggleClass("small");
        $("#location-info").toggleClass("fill");
        $("#back-place").toggle();
        $("#search-place").toggle();
        $("#recommend-icon").toggle();
    })
    // let lastScrollTop = 0;
    // $("#location-main").on("touchmove",(e)=>{
    //     let nowScrollTop = $(e.currentTarget).offsetY();
    //     if(nowScrollTop>lastScrollTop){
    //         $("#location-info").removeClass("fill");
    //     }
    //     else{
    //         $("#location-info").addClass("fill");
    //     }
    //     lastScrollTop = nowScrollTop;
    // })
    $("#back-place").click(()=>{
        $("header").removeClass("small");
        $("#recommend-icon").show();
        $("#location-info").removeClass("fill");
        $("#back-place").hide();
        $("#search-place").show();
    })
    $("#collection-btn").click(()=>{
        $("#collection-btn").children().toggleClass("pink");
    })
    // $("#back-history-btn").click(()=>{
    //     window.history.back();
    // })
    $("#show-location-icon").click(()=>{
        $("#location-info").toggleClass("hide");
        $("#location-btn").toggleClass("hide");
    })
    $("#pay-btn").click(()=>{
        window.location.assign("./pay.html");
        // if(!$("#chart").hasClass("not-fill")){
        // }
    })
})