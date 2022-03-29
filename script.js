$(function () {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    $("#back-place").hide();

    if (/iPhone/i.test(navigator.userAgent)) {
        $("footer").css("height","4rem");
    }

    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    $("#location-main").on("click tab",(e)=>{
        $("#location-info").toggleClass("fill");
        $("#back-place").toggle();
        $("#search-place").toggle();
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
    $("#search-place .fa-magnifying-glass").click(()=>{
        $("#location-info").toggleClass("hide");
        $("#location-btn").toggleClass("hide");
    })
    $("#pay-btn").click(()=>{
        if(!$("#chart").hasClass("not-fill")){
            window.location.assign("./pay.html");
        }
    })
})