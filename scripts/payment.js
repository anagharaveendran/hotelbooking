//Payment button alert message ............................
function message(){
    alert("Hi your booking is successfull !!")
}

// Hotel Details Function ...............................
//API .............................................
let url = new URLSearchParams(window.location.search);
const API_URL = "https://travel-advisor.p.rapidapi.com/";
const Host = "travel-advisor.p.rapidapi.com";
const Key = "3209e07ad6msh3997da04ac2cd5ap15fa39jsn714aec6ac542";


// To fetch hotel Details ..............................................
let HotelDetails = () => {
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

HotelDetails();
