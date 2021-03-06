// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "deps/phoenix_html/web/static/js/phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

if ($("#legend1").length > 0){
  var randomScalingFactor = function(){ return Math.random() * 2};
  var randomMoneyFactor = function(){ return Math.round(Math.random() * 3000)};
  var barChartData = {
    labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets : [
      {
        label: "Care Plan",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(254,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
      },
      {
        label: "Purchased",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(254,191,45,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
      },
      {
        label: "Budget",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(122,254,246,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
      }
    ]
  }

  var lineData = {
      labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      datasets: [
          {
              label: "In-room Stocking",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(254,187,205,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data : [randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor()]
          },
          {
              label: "Purchased",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(254,191,45,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data : [randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor()]
          },
          {
              label: "Actual",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(122,254,246,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data : [randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor()]
          },
          {
              label: "Care Plan",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data : [randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor(),randomMoneyFactor()]
          }
      ]
  };

  var pieData3 = [
      {
          value: randomScalingFactor(),
          color:"#febf2d",
          highlight: "#FF5A5E",
          label: "Briefs"
      },
      {
          value: randomScalingFactor(),
          color: "#eb7d3d",
          highlight: "#5AD3D1",
          label: "Underwear"
      },
      {
          value: randomScalingFactor(),
          color: "#76ab4d",
          highlight: "#FFC870",
          label: "Pads"
      }
  ];

  var pieData = [
      {
          value: randomScalingFactor(),
          color:"#febf2d",
          highlight: "#FF5A5E",
          label: "Briefs"
      },
      {
          value: randomScalingFactor(),
          color: "#eb7d3d",
          highlight: "#5AD3D1",
          label: "Underwear"
      },
      {
          value: randomScalingFactor(),
          color: "#76ab4d",
          highlight: "#FFC870",
          label: "Pads"
      }
  ];

  var pieData2= [
      {
          value: randomScalingFactor(),
          color:"#5d9cd5",
          highlight: "#FF5A5E",
          label: "S/M/R"
      },
      {
          value: randomScalingFactor(),
          color: "#a2a5af",
          highlight: "#5AD3D1",
          label: "L/XL"
      },
      {
          value: randomScalingFactor(),
          color: "#ea7f3c",
          highlight: "#FFC870",
          label: "Bariatric (2X/3X)"
      }
  ];

  var pieData3= [
      {
          value: randomScalingFactor(),
          color:"#5d9cd5",
          highlight: "#FF5A5E",
          label: "S/M/R"
      },
      {
          value: randomScalingFactor(),
          color: "#a2a5af",
          highlight: "#5AD3D1",
          label: "L/XL"
      },
      {
          value: randomScalingFactor(),
          color: "#ea7f3c",
          highlight: "#FFC870",
          label: "Bariatric (2X/3X)"
      }
  ];

  var pieData4= [
      {
          value: randomScalingFactor(),
          color:"#5d9cd5",
          highlight: "#FF5A5E",
          label: "S/M/R"
      },
      {
          value: randomScalingFactor(),
          color: "#a2a5af",
          highlight: "#5AD3D1",
          label: "L/XL"
      },
      {
          value: randomScalingFactor(),
          color: "#ea7f3c",
          highlight: "#FFC870",
          label: "Bariatric (2X/3X)"
      }
  ];

  window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myBar = new Chart(ctx).Line(barChartData, {
      responsive : true,
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><div style=\"background-color:<%=datasets[i].strokeColor%>\"><%=datasets[i].label%></div><%if(datasets[i].label){%><%}%></li><%}%></ul>"
    });

    var ctx2 = document.getElementById("canvas2").getContext("2d");
    window.myRadar = new Chart(ctx2).Pie(pieData2, {
      responsive : true
    });

    var ctx6 = document.getElementById("canvas6").getContext("2d");
    window.myRadar = new Chart(ctx6).Pie(pieData3, {
      responsive : true
    });

    var ctx3 = document.getElementById("canvas3").getContext("2d");
    window.myLine = new Chart(ctx3).Line(lineData, {
      responsive : true,
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><div style=\"background-color:<%=datasets[i].strokeColor%>\"><%=datasets[i].label%></div><%if(datasets[i].label){%><%}%></li><%}%></ul>"
    });

    var ctx4 = document.getElementById("canvas4").getContext("2d");
    window.myPie = new Chart(ctx4).Pie(pieData, {
      responsive : true
    });

    var ctx5 = document.getElementById("canvas5").getContext("2d");
    window.myPie2 = new Chart(ctx5).Pie(pieData4, {
      responsive : true
    });

    $("#legend1").html(window.myBar.generateLegend());

    $("#legend2").html(window.myLine.generateLegend());
  }
}
