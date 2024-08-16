function iniciarMap(){
    var coord = {lat:9.856101 ,lng: -84.0906575};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}