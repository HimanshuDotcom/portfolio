
let navLinks = $('.nav__link');

// window.addEventListener('resize',()=> {
//     if(window.innerWidth > 1020)
//         $('.sidebar').css("left", "0px");
// })

function hideSidebar() {
    $('.sidebar').css("left", "-250px");
    $('.nav-button').html("&rarr;");
}

function showSidebar() {
    $('.sidebar').css("left", "0px");
    $('.nav-button').html("&larr;");
}

// active link 
navLinks.each(function(index,value){
    console.log(value)
    $(value).click(function() {
        console.log(this)
        $('.active').toggleClass('active swingHorizontal');
        $(this).toggleClass('active swingHorizontal');
        hideSidebar();
    })

})


// click on nav-buton

$('.nav-button').click(function() {
    let sidebar = $('.sidebar');
    if(sidebar.css("left") == "0px") 
        hideSidebar();
    else 
        showSidebar();
})
