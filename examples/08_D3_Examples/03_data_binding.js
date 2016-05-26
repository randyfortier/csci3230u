window.onload = function() {
	var dataValues = [100, 250];
	var canvas = d3.select("svg");
	
	// test exit()
	canvas.selectAll("rect")
	      .data(dataValues)
		  .exit()
		    .attr("fill", "gray");

	// test update
	canvas.selectAll("ellipse")
	      .data(dataValues)
		  .attr("fill", "green");
			
	// test enter()
	canvas.selectAll("circle")
          .data(dataValues)
          .enter()
            .append("circle")
		    .attr("fill", "red")
		    .attr("stroke", "black")
			.attr("stroke-width", "2")
            .attr("r", 50)
            .attr("cx", 600)
			.attr("cy", function(data, index) {
				return data;
			});

};