window.onload = function(){
    
    document.querySelector('h1').onmouseover = h1OnMouseOver;
    document.querySelector('h1').onmouseout = h1OnMouseOut;
};

function h1OnMouseOver(){
    this.innerHTML = "The mouse is over ";
    this.style.color = "white";
    this.style.backgroundColor = "black";
}

function h1OnMouseOut(){
    this.innerHTML = "This is a header";
    this.style.color = "black";
    this.style.backgroundColor = "white";
}