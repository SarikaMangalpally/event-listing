var storage = localStorage;
$(document).ready(event => {
  //storage.removeItem("lists");
  $("#submit").on("click", event => {
    event.preventDefault();
    var result = checkValidity();
    var obj = {
      id: "",
      eventname: $("#event-name").val(),
      startday: $("#start-day").val(),
      starttime: $("#start-time").val(),
      endday: $("#end-day").val(),
      endtime: $("#end-time").val(),
      place: $("#place").val()
    };
    if (result) {
      if (storage !== undefined) {
        console.log(obj);
        if (!storage.getItem("lists")) {
          storage.setItem("lists", JSON.stringify([]));
          var element = addToStorage(obj);
          $("#test").append(items(obj));
        } else {
          element = addToStorage(obj);
          $("#test").append(items(obj));
          window.location = "home.html";
        }
      } else {
        console.log("localstorage is not defined");
      }
    }
  });
  $("#cancel").on("click", event => {
    event.preventDefault();
    var url = "home.html";
    window.location = url;
  });
});
function addToStorage(obj) {
  var li = storage.getItem("lists");
  li = JSON.parse(li);
  var id = li.length;
  obj.id = id;
  var li = storage.getItem("lists");
  li = JSON.parse(li);
  console.log(li);
  li.push(obj);
  storage.setItem("lists", JSON.stringify(li));
  console.log(storage);
}
function items(obj) {
  console.log(obj.id);
  return `
  <li id="${obj.id}">
  <a href="event.html?id=${obj.id}">
      <div  class="events">
    <div id="startday">
      ${obj.startday}
    </div>
    <div id="content">
      <label for="eventname">
        ${obj.eventname}
      </label><br>
      <label for="place">
        ${obj.place}
      </label>
    </div>
  </div>
  </a>
  </li>
  `;
}
function checkValidity() {
  var name = $("#event-name").val();
  var sd = $("#start-day").val();
  var st = $("#start-time").val();
  var ed = $("#end-day").val();
  var et = $("#end-time").val();
  var p = $("#place").val();
  var result = true;
  if (name === "") {
    $("#eventname").text("event name can't be empty");
    result = false;
  }
  if (sd === "") {
    $("#startday").text("on which day event starts");
    result = false;
  }
  if (st === "") {
    $("#starttime").text("at what time event starts");
    result = false;
  }
  if (ed === "") {
    $("#endday").text("on which day event ends");
    result = false;
  }
  if (et === "") {
    $("#endtime").text("at what tim event concludes");
    result = false;
  }
  if (p === "") {
    $("#Place").text("where is the event happening");
    result = false;
  }
  return result;
}
