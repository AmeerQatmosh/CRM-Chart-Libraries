// |---------------------------------------------------------------------------------------------| 
// |                                 1. Google Charts - Pie Chart                                | 
// |---------------------------------------------------------------------------------------------|  


google.charts.load('current', { 'packages': ['corechart'] });    // Load the Visualization API and the corechart package.
google.charts.setOnLoadCallback(drawPieChart); // Set a callback to run when the Google Visualization API is loaded.

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


// |---------------------------------------------------------------------------------------------| 
// |                              2. Google Charts - Column Chart                                | 
// |---------------------------------------------------------------------------------------------|  


google.charts.load('current', { 'packages': ['corechart'] });
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
      title: '',
      textStyle: { color: 'black' }
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('myColumnChart'));
  chart.draw(data, options);
}


// |---------------------------------------------------------------------------------------------| 
// |                                      3. Chart.js - Pie Chart                                | 
// |---------------------------------------------------------------------------------------------|  


var ctx = document.getElementById('myPieChart').getContext('2d');
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Converted', 'Qualified', 'New', 'Interested', 'Not Qualified', 'Connected'],
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

// |---------------------------------------------------------------------------------------------| 
// |                                      4. Chart.js - Bar Chart                                | 
// |---------------------------------------------------------------------------------------------|  

var ctx = document.getElementById('myBarChart').getContext('2d');
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['07/01/2024', '07/02/2024', '07/03/2024', '07/04/2024', '07/05/2024', '07/06/2024', '07/07/2024', '07/08/2024'],
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
      x: {
        ticks: {
          display: false // Hide x-axis labels
        }
      },
      y: {
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

// |---------------------------------------------------------------------------------------------| 
// |                                     5. Plotly.js - pie Chart                                | 
// |---------------------------------------------------------------------------------------------|  

// Data for the pie chart
var dataPlotlyPie = [{
  labels: ['Converted', 'Qualified', 'New', 'Interested', 'Not Qualified', 'Connected'],
  values: [52, 9, 20, 25, 10, 5],
  type: 'pie',
  marker: {
    colors: [
      'rgb(162, 211, 223)',
      'rgb(1, 117, 6)',
      'rgb(1, 0, 243)',
      'rgb(131, 234, 137)',
      'rgb(255, 0, 2)',
      'rgb(254, 155, 8)'
    ]
  }
}];

// Layout for the pie chart
var layoutPlotlyPie = {
  title: 'Statuses of expected customers',
  showlegend: true,
  legend: {
    x: 0,
    y: 1.0,
    bgcolor: 'rgba(255, 255, 255, 0.5)',
    bordercolor: 'rgba(255, 255, 255, 0)'
  }
};

// Plotting the pie chart
Plotly.newPlot('poltlyPieChart', dataPlotlyPie, layoutPlotlyPie);


// |---------------------------------------------------------------------------------------------| 
// |                                     6. Plotly.js - Bar Chart                                | 
// |---------------------------------------------------------------------------------------------| 

var dates = ['07/01/2024', '07/02/2024', '07/03/2024', '07/04/2024', '07/05/2024', '07/06/2024', '07/07/2024', '07/08/2024'];
var barvalues = [40, 20, 12, 39, 10, 40, 39, 80];
var ids = [1, 2, 3, 4, 5, 6, 7, 8];

var dataPlotlyBar = [{
    x: dates,
    y: barvalues,
    text: ids,  // Custom data (IDs)
    hovertemplate: 'Date: %{x}<br>Value: %{y}<br>ID: %{text}',  // Custom hover template
    type: 'bar',
    marker: {
      color: 'rgb(246, 110, 111)'
    },
}];

var layoutPlotlyBar = {
    title: 'Bar Chart with Click Events',
    xaxis: { title: 'Date' },
    yaxis: { title: 'Value' },
    barmode: 'group'
};

// Plotting the bar chart
Plotly.newPlot('barPlotlyChart', dataPlotlyBar, layoutPlotlyBar);


// Assuming 'barPlotlyChart' is the ID of your bar chart div
var barChart = document.getElementById('barPlotlyChart');

barChart.on('plotly_click', function(data) {
    if(data.points) {
        var point = data.points[0];
        var date = point.x;
        var value = point.y;
        var id = point.text; // Custom data (ID)

        console.log('Clicked on bar with date:', date);
        console.log('Value:', value);
        console.log('ID:', id);
    }
});


barChart.on('plotly_afterplot', function() {
    var labels = document.querySelectorAll('.bartext');

    labels.forEach(function(label, index) {
        label.on('click', function() {
            var date = dates[index];
            var id = ids[index];

            console.log('Clicked on label for date:', date);
            console.log('ID:', id);
        });
    });
});


//  // Data for the bar chart
//  var dataPlotlyBar = [{
//   x: ['07/01/2024', '07/02/2024', '07/03/2024', '07/04/2024', '07/05/2024', '07/06/2024', '07/07/2024', '07/08/2024'],
//   y: [40, 20, 12, 39, 10, 40, 39, 80],
//   type: 'bar',
//   marker: {
//     color: 'rgb(246, 110, 111)'
//   }
// }];

// // Layout for the bar chart
// var layoutPlotlyBar = {
//   title: 'Leads',
//   xaxis: {
//     title: 'Date'
//   },
//   yaxis: {
//     title: ''
//   },
//   barmode: 'group'
// };

// // Plotting the bar chart
// Plotly.newPlot('barPlotlyChart', dataPlotlyBar, layoutPlotlyBar);





// |---------------------------------------------------------------------------------------------| 
// |                                         7. D3.js - Pie Chart                                | 
// |---------------------------------------------------------------------------------------------|  

/// Data for the pie chart
const dataPie = [
  { label: 'Converted', value: 52, color: 'rgb(162, 211, 223)' },
  { label: 'Qualified', value: 9, color: 'rgb(1, 117, 6)' },
  { label: 'New', value: 20, color: 'rgb(1, 0, 243)' },
  { label: 'Interested', value: 25, color: 'rgb(131, 234, 137)' },
  { label: 'Not Qualified', value: 10, color: 'rgb(255, 0, 2)' },
  { label: 'Connected', value: 5, color: 'rgb(254, 155, 8)' }
];

// Dimensions and radius of the pie chart
const pieWidth = 600;
const pieHeight = 600;
const pieRadius = Math.min(pieWidth, pieHeight) / 2;

// Create an SVG element for the pie chart
const svgPie = d3.select("#pieChartD3")
  .append("svg")
  .attr("width", pieWidth)
  .attr("height", pieHeight)
  .append("g")
  .attr("transform", `translate(${pieWidth / 2}, ${pieHeight / 2})`);

// Create a pie function
const pieGenerator = d3.pie()
  .value(d => d.value)
  .sort(null);

// Create an arc function
const arcGenerator = d3.arc()
  .innerRadius(0)
  .outerRadius(pieRadius * 0.8);

// Create arcs and append them to the SVG
const arcsPie = svgPie.selectAll(".arc")
  .data(pieGenerator(dataPie))
  .enter()
  .append("g")
  .attr("class", "arc");

// Append path elements for each slice
arcsPie.append("path")
  .attr("d", arcGenerator)
  .attr("fill", d => d.data.color)
  .attr("stroke", "white")
  .on("mouseover", function (event, d) {
    // Show tooltip
    tooltipPie.transition()
      .duration(200)
      .style("opacity", .9);
    tooltipPie.html(`<strong>${d.data.label}</strong>: ${d.data.value}`)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 15) + "px");
  })
  .on("mouseout", function () {
    // Hide tooltip
    tooltipPie.transition()
      .duration(500)
      .style("opacity", 0);
  });

// Create a tooltip
const tooltipPie = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

// Create a legend under the #pieChartD3 div
const legendPie = d3.select("#pieChartD3")
  .append("div")
  .attr("class", "legend")
  .selectAll("div")
  .data(dataPie)
  .enter().append("div")
  .attr("class", "legend-item");

legendPie.append("div")
  .attr("class", "legend-color")
  .style("background-color", d => d.color);

legendPie.append("div")
  .attr("class", "legend-label")
  .text(d => d.label);




// |---------------------------------------------------------------------------------------------| 
// |                                      8. D3.js - Column Chart                                | 
// |---------------------------------------------------------------------------------------------|  


// Sample dataset (replace with your actual data)
const datasetColumn = [
  { date: '07/01/2024', number: 50 },
  { date: '07/02/2024', number: 40 },
  { date: '07/03/2024', number: 50 },
  { date: '07/04/2024', number: 30 },
  { date: '07/05/2024', number: 20 },
  { date: '07/06/2024', number: 45 },
  { date: '07/07/2024', number: 10 },
  { date: '07/08/2024', number: 40 }
];

// Dimensions of the chart area
const chartWidthColumn = 800;
const chartHeightColumn = 400;
const marginColumn = { top: 20, right: 30, bottom: 30, left: 40 };
const widthColumn = chartWidthColumn - marginColumn.left - marginColumn.right;
const heightColumn = chartHeightColumn - marginColumn.top - marginColumn.bottom;

// Create SVG element
const svgColumn = d3.select('#columnChartD3')
  .append('svg')
  .attr('width', chartWidthColumn)
  .attr('height', chartHeightColumn)
  .append('g')
  .attr('transform', `translate(${marginColumn.left}, ${marginColumn.top})`);

// X scale
const xScaleColumn = d3.scaleBand()
  .domain(datasetColumn.map(d => d.date))
  .range([0, widthColumn])
  .padding(0.2);

// Y scale
const yScaleColumn = d3.scaleLinear()
  .domain([0, d3.max(datasetColumn, d => d.number)])
  .nice()
  .range([heightColumn, 0]);

// X axis
svgColumn.append('g')
  .attr('transform', `translate(0, ${heightColumn})`)
  .call(d3.axisBottom(xScaleColumn));

// Y axis
svgColumn.append('g')
  .call(d3.axisLeft(yScaleColumn));

// Bars with transitions and hover effects
svgColumn.selectAll('.bar')
  .data(datasetColumn)
  .enter().append('rect')
  .attr('class', 'bar')
  .attr('x', d => xScaleColumn(d.date))
  .attr('width', xScaleColumn.bandwidth())
  .attr('y', heightColumn)
  .attr('height', 0)
  .attr('fill', 'steelblue')
  .on('mouseover', function (event, d) {
    d3.select(this)
      .attr('fill', 'orange');
    tooltipColumn.transition()
      .duration(200)
      .style('opacity', .9);
    tooltipColumn.html(`<strong>Date:</strong> ${d.date}<br/><strong>Value:</strong> ${d.number}`)
      .style('left', (event.pageX + 10) + 'px')
      .style('top', (event.pageY - 15) + 'px');
  })
  .on('mouseout', function (d) {
    d3.select(this)
      .attr('fill', 'steelblue');
    tooltipColumn.transition()
      .duration(500)
      .style('opacity', 0);
  })
  .transition()
  .duration(800)
  .attr('y', d => yScaleColumn(d.number))
  .attr('height', d => heightColumn - yScaleColumn(d.number));

// Add labels
svgColumn.selectAll('.text')
  .data(datasetColumn)
  .enter().append('text')
  .text(d => d.number)
  .attr('class', 'text')
  .attr('x', d => xScaleColumn(d.date) + xScaleColumn.bandwidth() / 2)
  .attr('y', heightColumn)
  .attr('text-anchor', 'middle')
  .attr('font-family', 'sans-serif')
  .attr('font-size', '12px')
  .attr('fill', 'black')
  .transition()
  .duration(800)
  .attr('y', d => yScaleColumn(d.number) - 10);

// Create a tooltip
const tooltipColumn = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);




// |---------------------------------------------------------------------------------------------| 
// |                                 9. ApexCharts.js - Pie Chart                                | 
// |---------------------------------------------------------------------------------------------| 

// Data for the pie chart
var optionsPie = {
  series: [52, 9, 20, 25, 10, 5],
  labels: ['Converted', 'Qualified', 'New', 'Interested', 'Not Qualified', 'Connected'],
  colors: ['#a2d3df', '#017506', '#0100f3', '#83ea89', '#ff0002', '#fe9b08'],
  chart: {
    type: 'pie',
    height: 400
  },
  title: {
    text: 'Statuses of expected customers'
  },
  legend: {
    position: 'bottom'
  }
};

// Plotting the pie chart
var pieApexChart = new ApexCharts(document.querySelector("#pieApexChart"), optionsPie);
pieApexChart.render();



// |---------------------------------------------------------------------------------------------| 
// |                                10. ApexCharts.js - Bar Chart                                | 
// |---------------------------------------------------------------------------------------------| 

// Data for the bar chart
var optionsBar = {
  series: [{
    name: 'Opportunities',
    data: [40, 20, 12, 39, 10, 40, 39, 80]
  }],
  chart: {
    type: 'bar',
    height: 400
  },
  colors: ['#f66e6f'],
  xaxis: {
    categories: ['07/01/2024', '07/02/2024', '07/03/2024', '07/04/2024', '07/05/2024', '07/06/2024', '07/07/2024', '07/08/2024'],
    title: {
      text: 'Date'
    }
  },
  yaxis: {
    title: {
      text: ''
    }
  }
};

// Plotting the bar chart
var barApexChart = new ApexCharts(document.querySelector("#barApexChart"), optionsBar);
barApexChart.render();


