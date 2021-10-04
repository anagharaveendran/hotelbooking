
//City Card View More Function ......................................
function viewMore(){
    document.getElementById("viewLess").style.display = "block";
    document.getElementById("viewMore").style.display = "none";
    document.getElementById("secondCard").style.display = "flex";
    document.getElementById("secondCard").style.flexDirection = "row";

}


//City Card View Less Function ........................................
function viewLess(){
    document.getElementById("viewLess").style.display = "none";
    document.getElementById("viewMore").style.display = "block";
    document.getElementById("secondCard").style.display = "none";

}

//Search City Function ...............................................
function searchCity(){
    let city = document.getElementById("cityDelhi").innerText;
    localStorage.setItem("cityName",city);
}