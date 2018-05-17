function toggleMenu(){
    var element = document.querySelector(".bar");
    element.classList.toggle("show");


    element = document.querySelector(".bar");
    element.classList.toggle("animation");

}

function myMap() {
    var myCenter = new google.maps.LatLng(57.6903042,11.974533400000041);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 5};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
  }
