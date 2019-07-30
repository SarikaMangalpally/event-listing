$(document).ready(() => {
  var eventList = storage.getItem("lists");
  eventList = JSON.parse(eventList);
  console.log(eventList);
  console.log(window.location);
  var url = window.location.href;
  console.log(url);
  //var param = ;
  var params = window.location.search.split("?id=");
  console.log(params);
  var idvalue = params[1];
  console.log(idvalue);
  eventList.filter(item => {
    if (item.id === parseInt(idvalue)) {
      console.log(item);
      return $("#eventdata").append(showEventdata(item));
    }
  });
});
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 17.385044, lng: 78.486671 },
    zoom: 8
  });
}
function showEventdata(item) {
  console.log(item);
  return `
		<div id="day_name">
       <p>${item.startday} ${item.eventname}</p>
    </div>
    <div id="map-page">
      <div id="map"></div>
    </div>
    <div id="eventdetails">
        <h3>Details</h3>
        <p>${item.startday} ${item.strattime} - ${item.endday} ${
    item.endtime
  }</p>
        <p>
        <i class = "fa fa-map-maker" aria-hidden="false">
            ${item.place}
        </i>
        </p>
    </div>
    `;
}
