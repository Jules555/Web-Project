

function box() {
    alert("you want to see more about the book?");

}

document.getElementById("first-para").onclick= box;

$("h1").dblclick(function () {
    $(this).css({"color":"white",backgroundColor:"green",fontSize:"45px"})
    $(this).fadeOut();
    $(this).fadeIn();
    
});

$("#train").mouseenter(function () {
    alert("welcome to the Train section");
});

$("p").mouseenter(function () {
    $(this).css({"color":"red","font-size":"25px"});
});
$("p").mouseleave(function () {
    $(this).css({"color":"black","font-size":"16px"});
});

$("h3").click(function () {
    $(this).animate({fontSize:"23px"})
})
