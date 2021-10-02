function viewMore(){
    document.getElementById("viewLess").style.display = "block";
    document.getElementById("viewMore").style.display = "none";
    document.getElementById("secondCard").style.display = "flex";
    document.getElementById("secondCard").style.flexDirection = "row";

}

function viewLess(){
    document.getElementById("viewLess").style.display = "none";
    document.getElementById("viewMore").style.display = "block";
    document.getElementById("secondCard").style.display = "none";

}