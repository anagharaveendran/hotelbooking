
//Function to update price .................................................
function totalPay(){
    let adultNumber = document.getElementById("adult_no");
let totalAmount = document.getElementById("total");
let fromDate = document.getElementById("from_date");
let toDate = document.getElementById("to_date");

const diffInMilliseconds = Math.abs(new Date(fromDate.value) - new Date(toDate.value));
let final = diffInMilliseconds/86400000;
totalAmount.value ="Rs."+ (parseInt(adultNumber.value) + parseInt(final))*1000;
}


//API .............................................
let url = new URLSearchParams(window.location.search);
const API_URL = "https://travel-advisor.p.rapidapi.com/";
const Host = "travel-advisor.p.rapidapi.com";
const Key = "3209e07ad6msh3997da04ac2cd5ap15fa39jsn714aec6ac542";


// To fetch hotel Details ..............................................
let HotelListAPI = () => {
   let xhr = new XMLHttpRequest();

   xhr.addEventListener("readystatechange", function () {
       if (this.readyState === this.DONE) {
           let result = JSON.parse(this.responseText).data;
           console.log(result);
           let locations = [];
           hotelList = result.filter(item => item.result_type == "lodging");
            hotelList.forEach(item => {
               locations.push([item.result_object.name + "<br><a href=\"detail.html?id=" + item.result_object.location_id + "\">Book Hotel</a>", item.result_object.latitude, item.result_object.longitude]);

            });
    }

   });
   xhr.open("GET", API_URL + "locations/search?&query=" + url.get('cityName'));
   xhr.setRequestHeader("x-rapidapi-host", Host);
   xhr.setRequestHeader("x-rapidapi-key", Key);

   xhr.send();
}

HotelListAPI();
