
let navLinks = $('.nav__link');

function hideSidebar() {
    $('.sidebar').css("left", "-200px");
    $('.nav-button').html("&rarr;");
}

function showSidebar() {
    $('.sidebar').css("left", "0px");
    $('.nav-button').html("&larr;");
}

navLinks.each(function(index,value){
    console.log(value)
    $(value).click(function() {
        console.log(this)
        $('.active').toggleClass('active swingHorizontal');
        $(this).toggleClass('active swingHorizontal');
        hideSidebar();
    })

})


// nav-button

$('.nav-button').click(function() {
    let element = $(this);
    let sidebar = $('.sidebar')
    console.log(sidebar.css("left"))
    if(sidebar.css("left") == "0px") 
        hideSidebar();
    else 
        showSidebar();
})