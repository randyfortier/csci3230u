d3.json('sales_data.json', function(salesData) {
    var canvas = d3.select("body")
                   .append("svg")
                   .attr("width", 500)
                   .attr("height", 300)
				   .attr("style", "background-color: #f0f0ff");
	
    canvas.selectAll("circle")
          .data(salesData)
          .enter()
                .append("circle")
                .attr("cx", function(data, index) { 
					return index * 50 + 50; 
				})
                .attr("cy", function(data, index) { 
					return 300 - (data.sales / 10); 
				})
                .attr("r", 10)
                .attr("fill", "blue");
});

d3.csv('sales_data.csv', function(salesData) {
    var canvas = d3.select("body")
                   .append("svg")
                   .attr("width", 500)
                   .attr("height", 300)
				   .attr("style", "background-color: #fff0f0");

   canvas.selectAll("circle")
          .data(salesData)
          .enter()
                .append("circle")
                .attr("cx", function(data, index) { 
					return index * 50 + 50; 
				})
                .attr("cy", function(data, index) { 
					return 300 - (data.sales / 10); 
				})
                .attr("r", 10)
                .attr("fill", "red");
});