google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  // Set Data
  var data = google.visualization.arrayToDataTable([
    ["Programming Language", "Popularity"],
    ["Python", 30],
    ["Java", 20],
    ["JavaScript", 40],
    ["C/C++", 10],
  ]);
  // Set Options
  var options = {
    title: "Programing Languages",
  };
  // Draw Chart
  var chart = new google.visualization.PieChart(
    document.getElementById("myChart")
  );
  chart.draw(data, options);
}

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
