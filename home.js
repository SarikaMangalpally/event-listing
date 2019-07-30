$("document").ready(() => {
  var eventList = storage.getItem("lists");
  eventList = JSON.parse(eventList);
  console.log(eventList);
  if (eventList !== null) {
    eventList.forEach(item => {
      $("#test").append(buildListItem(item));
    });
  } else {
    console.log("no events!");
  }
});

function buildListItem(item) {
  return `
		<li id="${item.id}">
		<a href="event.html?id=${item.id}">
        <div  class="events">
			<div id="startday">
				${item.startday}
			</div>
			<div id="content">
				<label for="eventname">
					${item.eventname}
				</label><br>
				<label for="place">
					${item.place}
				</label>
			</div>
		</div>
		</a>
		</li>
    `;
}
