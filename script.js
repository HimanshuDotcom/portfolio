
let navLinks = $('.nav__link');

navLinks.each(function(index,value){
    console.log(value)
    $(value).click(function() {
        console.log(this)
        $('.active').toggleClass('active swingHorizontal');
        $(this).toggleClass('active swingHorizontal');
    })

})


// $('.toggler').click(function() {
//     $('.sidebar').toggle();
//     // $(".container").css("grid-template-columns", "[sidenav-start ] 27rem [sidenav-end full-start] minmax(5rem, 1fr) [center-start] repeat(8,[col-start] minmax(min-content, 15rem) [col-end]) [center-end] minmax(6rem,1fr) [full-end]");
// })