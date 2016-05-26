window.onload = function() {
	d3.select("body").style("background-color", "black");
	
	var colours = ['blue', 'red', 'green', 'yellow', 'orange'];
	d3.selectAll("p")
	  .style("color", function(data, index) { return colours[index]; });
	d3.select("body")
	  .append("p")
	  .attr("id", "dynamicParagraph")
	  .text("This is a brand new paragraph")
	  .style("color", "white");
};
