var data = run();

var margin = {top: 20, right: 100, bottom: 30, left: 10},
    width = (data.length * 21) - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .rangeRound([height, 0]);

var color = d3.scale.ordinal()
    .range(["#9999ff", "#ff9933"]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(".0%"));

var svg = d3.select("div#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

color.domain(["Blue", "Orange"]);

data.forEach(function(d) {
  var y0 = 0;
  d.colors = color.domain().map(function(name) { 
    return {name: name}; 
  });
  d.colors.forEach(function(d2, i) {
    d2.y0 = y0;
    y0 = d[i+1]; 
    d2.y1 = y0 + d2.y0; 
  });
});

x.domain(data.map(function(d) {
  return d[0]; 
}));

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

var cycle = svg.selectAll(".cycle")
    .data(data)
  .enter().append("g")
    .attr("class", "cycle")
    .attr("transform", function(d) { 
      console.log("x(d[0]): " + x(d[0]));
      return "translate(" + x(d[0]) + ",0)"; 
    });

cycle.selectAll("rect")
    .data(function(d) { return d.colors; })
  .enter().append("rect")
    .attr("width", x.rangeBand())
    .attr("y", function(d) { return y(d.y1); })
    .attr("height", function(d) { return y(d.y0) - y(d.y1); })
    .style("fill", function(d) { return color(d.name); });

