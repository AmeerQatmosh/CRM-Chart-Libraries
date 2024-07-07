
// |------------------------------- Google Charts - Pie Chart -------------------------------| 

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawPieChart);

 // Callback that creates and populates a data table, instantiates the bar chart, passes in the data and draws it.
function drawPieChart() {

  var data = google.visualization.arrayToDataTable([
    ['Status', 'numbers'],
    ['Connected', 5],
    ['Converted', 52],
    ['Interested', 25],
    ['New', 20],
    ['Not Qualified', 10],
    ['Qualified', 9]
  ]);

  // Set chart options
  var options = {
    title: 'Statuses expected customer'
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

// |------------------------------- Google Charts - Column Chart --------------------------------|

        
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Date', 'number'],
    ['07/01/2024', 50],
    ['07/02/2024', 40],
    ['07/03/2024', 50],
    ['07/04/2024', 30],
    ['07/05/2024', 20],
    ['07/06/2024', 45],
    ['07/07/2024', 10],
    ['07/08/2024', 40]
  ]);
  
  var options = {
    title: 'Leads',
    hAxis: {
      textStyle: { color: 'transparent' }, // Hide x-axis labels
      ticks: [] // Remove ticks
  },
  vAxis: {
      title: 'Density',
      textStyle: { color: 'black' }
  }
  };
  
  var chart = new google.visualization.ColumnChart(document.getElementById('myColumnChart'));
  chart.draw(data, options);
}

// |------------------------------- Chart.js - Pie Chart -------------------------------| 

var ctx = document.getElementById('myPieChart').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Converted', 'Qualified', 'New', 'Interested','Not Qualified', 'Connected' ],
        datasets: [{
            label: '',
            data: [52, 9, 20, 25, 10, 5],
            backgroundColor: [
                'rgb(162, 211, 223)',
                'rgb(1, 117, 6)',
                'rgb(1, 0, 243)',
                'rgb(131, 234, 137)',
                'rgb(255, 0, 2)',
                'rgb(254, 155, 8)'
            ],
            pointStyle: 'circle', // Change point style to circle
            pointRadius: 5 // Optional: Adjust point radius
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true, // Use circular points
                  boxWidth: 8, // Width of the legend item
                  boxHeight: 8, // Height of the legend item
                  padding: 20, // Padding between legend items
                },
            },
            tooltip: {
                enabled: true
            }
        }
    }
});

// |------------------------------- Chart.js - Bar Chart -------------------------------| 

var ctx = document.getElementById('myBarChart').getContext('2d');
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['07/01/2024', '07/02/2024', '07/03/2024', '07/04/2024', '07/05/2024', '07/06/2024','07/07/2024','07/08/2024'],
    datasets: [{
      label: 'Opportunities',
      data: [40, 20, 12, 39, 10, 40, 39, 80],
      backgroundColor: [
        'rgb(246, 110, 111)'
      ],
     }]    
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      scales: {
        x:{
          ticks: {
            display: false // Hide x-axis labels
            }
          },
        y:{
            beginAtZero: true
          }
        },
        
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true, // Use circular points
                  boxWidth: 8, // Width of the legend item
                  boxHeight: 8, // Height of the legend item
                  padding: 20, // Padding between legend items
                },
            },
            tooltip: {
                enabled: true
            }
        }
    }
});

// |------------------------------- Plotly.js - Chart  -------------------------------| 






// |------------------------------- D3.js - Chart  -------------------------------| 




// |------------------------------- ApexCharts - Chart  -------------------------------| 