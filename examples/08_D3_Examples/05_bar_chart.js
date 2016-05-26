d3.json('sales_data.json', function(salesData) {
	var width = 500;
	var height = 500;
	
	var widthScale = d3.scale.linear()
							 .domain([0, 2188])
							 .range([0, width - 100]);

	var heightScale = d3.scale.linear()
							  .domain([0, salesData.length])
							  .range([0, height - 100]);

	var colourScale = d3.scale.linear()
							  .domain([978, 2188])
							  .range(["red", "blue"]);

	var axis = d3.svg.axis()
					 .ticks(5)
					 .scale(widthScale);

	var canvas = d3.select("body")
				   .append("svg")
				   .attr("width", width)
				   .attr("height", height)
				   .append("g")
				   .attr("transform", "translate(20, 0)");
				   
	/*
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
	*/
	
	var bars = canvas.selectAll("rect")
					 .data(salesData)
					 .enter()              // fewer DOM elements than data
						.append("rect")
						.attr("width", function(data) { return widthScale(data.sales); })
						.attr("height", function(data, index) { return heightScale(.5); })
						.attr("fill", function(data) { return colourScale(data.sales); })
						.attr("y", function(data, index) { return heightScale(index); });

	canvas.append("g")
		  .attr("transform", "translate(0, 400)")
		  .call(axis);
});

    