$(document).ready(function(){
    $("h1").hover(function(){
        $(this).css("background-color", "black");
        $(this).css("color", "white");
        $(this).text("This Header is under the mouse cursor!");  
    }, function(){
        $(this).css("background-color", "white");
        $(this).css("color", "black");
        $(this).text("This is a Header");
    });
    
}); 