
    mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpc2huYWdsb2RoYSIsImEiOiJjanB4cWJ6c2YwcDdrM3hwaHJnMDE2emlwIn0.P-16drEXI3b9ssNBvxKyeA';
var  map
function mapinit(){
   map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
  });

  feedData() }



  function feedData() {
      fetch('https://photobucketapp-fdbc1.firebaseio.com/feed.json')
      .then((response) => {
          return response.json()
      })
      .then((data)=>{
          var ids = Object.keys(data)

          for (i=0;i<ids.length;i++){
              // create the popup
var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<p> Status : ' + data[ids[i]].status + ' </p> <img src=' + data[ids[i]].image + ' /> <p> Email : ' + data[ids[i]].email + ' </p>'
    );
     
    // create DOM element for the marker
    var el = document.createElement('div');
    el.id = 'marker';
     
    // create the marker
    new mapboxgl.Marker()
    .setLngLat([data[ids[i]].location.longitude, data[ids[i]].location.latitude])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);
          }
      })
  }
