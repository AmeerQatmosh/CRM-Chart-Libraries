
// Google Charts


// Pie Chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPieChart);

function drawPieChart() {

  var data = google.visualization.arrayToDataTable([
    ['Status', 'numbers'],
    ['Connected',     5],
    ['Converted',      52],
    ['Interested',  25],
    ['New', 20],
    ['Not Qualified',    10],
    ['Qualified', 9]
  ]);

  var options = {
    title: 'Statuses expected customer'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

// Bar Chart
// google.charts.load('current', {'packages':['bar']});
// google.charts.setOnLoadCallback(drawBarChart);
// function drawBarChart() {

//     // Set Data
//     var data = google.visualization.arrayToDataTable([
//       ['Date', 'Mhl'],
//       ['Italy',55],
//       ['France',49],
//       ['Spain',44],
//       ['USA',24],
//       ['Argentina',15]
//     ]);
    
//     // Set Options
//     var options = {
//         title:'Opportunities'
//     };
    
//     // Draw
//     var chart = new google.visualization.BarChart(document.getElementById('barchart'));
//     chart.draw(data,options);
    
// }

// Charts.js

