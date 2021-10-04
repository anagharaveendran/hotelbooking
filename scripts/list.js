

//API .............................................
let url = new URLSearchParams(window.location.search);
const API_URL = "https://travel-advisor.p.rapidapi.com/";
const Host = "travel-advisor.p.rapidapi.com";
const Key = "3209e07ad6msh3997da04ac2cd5ap15fa39jsn714aec6ac542";


// To fetch hotel list ..............................................
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
               // console.log(item.result_object.name);

            });
    }

   });
   xhr.open("GET", API_URL + "locations/search?&query=" + url.get('cityName'));
   xhr.setRequestHeader("x-rapidapi-host", Host);
   xhr.setRequestHeader("x-rapidapi-key", Key);

   xhr.send();
}

HotelListAPI();

//List Of hotels ..................................................
function HotelListFunc(){
         var listDisplay = `<img src="${item.result_type.thumbnile}" alt="hotel_image" class="hotel_image">
                              <div class="hotel_view_details" style="margin-left: 0%;width: 50%; padding-left: 2%;">
                              <h3>${item.result_object.name}</h3>
                              <p><span class="fa fa-star star"></span>
                              <span class="fa fa-star star"></span>
                              <span class="fa fa-star star"></span>
                              <span class="fa fa-star star"></span>
                              <span class="fa fa-star star"></span>
                              </p>
                              <p>${item.result_object.address}</p>
                              </div>
                              </div>`
}

//Hotel map function .............................................................
function initMap() {
   var map;
   map = new google.maps.Map(document.getElementById("map-view"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
   });


}