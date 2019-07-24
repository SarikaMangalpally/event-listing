$(document).ready(() => {
  console.log(window.location);
  var url = window.location.href;
  console.log(url);
  //var param = ;
  var params = window.location.search.split("?id=");
  var idvalue = params[1];
  console.log(idvalue);
  eventList.filter(item => {
    if (item.id === parseInt(idvalue)) {
      console.log(item);
      return $("#eventdata").append(showEventdata(item));
    }
  });
});

function showEventdata(item) {
  console.log(item);
  return `
		<div id="day_name">
       <p>${item.startday} ${item.eventname}</p>
    </div>
    <div id="googlemap">
        GoogleMap
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
