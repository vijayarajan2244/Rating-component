  $(document).on('click','.rating_li', function(){
    $(this).addClass("active").siblings().removeClass("active");
    let getActive = document.getElementsByClassName("active")[0];
    let getRating = getActive.innerText;
    let changeRating = document.getElementById("change_num");
    let getSubmitBtn = document.getElementById("submit");
    let zoomUse = document.getElementById("zoomuse");
    getSubmitBtn.addEventListener('click', ()=>{
        changeRating.innerText = getRating;
        setInterval(function() {
            zoomUse.classList.add("add_scale_p");
        }, 500);
    });
    if(getActive){
        getSubmitBtn.classList.remove("disabled");
        getSubmitBtn.classList.add("active_submit_btn");
    }
});
$(".submit_btn button").click(function(){
    $(".flip_inner").addClass("flip_toggle");
})
