var data_1981 = [1.26, 1.42, 0.165, 6.57];
var data_2017 = [3.21, 3.65, 0.443, 17];
var dataset = data_2017;

var chart = d3.select(".chart");
var bar = chart.selectAll("div");

var change_space = document.getElementById("change");
var div_chart = document.getElementsByClassName("chart");

change_space.addEventListener("click", function(e){
  chart.selectAll("div").remove();
  if (dataset == data_2017) {
    dataset = data_1981;
  }
  else {
    dataset = data_2017;
  }
  var barUpdate = bar.data(dataset);
  var barEnter = barUpdate.enter().append("div");

  barEnter.transition().duration(5000).style("width", function(d) {
    return d * 65 + "px"; });
  barEnter.text(function(d) { return d; });
})
