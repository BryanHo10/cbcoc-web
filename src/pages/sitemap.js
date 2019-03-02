import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"

import {Link} from "gatsby"

// We probably want the index controller.  For now I'm okay with us making each page -- that'd work and be easy and perforamnce-wise it seems it'll compile the same.
// However from a design / code-style perspective the controller is more modular and preferable.




function rebuildTable(tableData) {

	console.log("TEST");


	var addTable = function(parentTable){
		console.log("A");

		var table = document.createElement('table');
		if(parentTable){
			parentTable.appendChild(table);	
		}

		table.className = 'table';

		var tableBody = document.createElement('tbody');

		table.appendChild(tableBody);
		table = tableBody;

		return table;
	}
	// var testing = JSON.parse(txt);

	// console.log(testing);

	// var tableJSON = JSON.parse(tableData);

	//Always 1 length - 1 cell
	var addRow = function(table, rowData){
		var row = document.createElement('tr');
		var cell = document.createElement('td');
		cell.innerHTML = rowData;
		row.appendChild(cell);

		table.appendChild(row);
	}

	var getRowData = function(table, current) {

		console.log("rd");


		var display = current['display'];
		var url = current['url'];

		var rowData = '<div class="link-location"><Link to=/"' + url + '">' + display + '</Link></div>';
		addRow(table, rowData);

		var children = current['children'];

		if(children){

			var childTable = addTable(table);
			// TODO : fix this -- parents need to encapsulate children
			// addRow(table, childTable);



			// table.appendChild(childTable);

			children.map( 
				function(x) {
					getRowData(childTable, x);
				});
		}
	}

	var mainTable = addTable(null);

	getRowData(mainTable, tableData);

};



// The sitemap can also be JSON -- it'd be better to dynamically generate this.
// For now I just noob hardcoded it for visualization.


//tree data structure

//DFS generate sitemap

var x = {"display" : "Home",
		"url" : "home",

		"children" : [
				{"display" : "Calendar",
				"url" : "calendar"},

				{"display" : "Statement Of Faith",
				"url" : "statement-of-faith"},

				{"display" : "Vision",
				"url" : "vision"},

				{"display" : "Staff",
				"url" : "staff",
				"children" : [
					{"display" : "Tony Leung",
					"url" : "staff-tony-leung"},

					{"display" : "Ryan Cheung",
					"url" : "staff-ryan-cheung"},

					{"display" : "Eugene Kim",
					"url" : "staff-eugene-kim"}
					]},

				{"display" : "Visit",
				"url" : "visit",
				"children" : [
					{"display" : "English Sermons",
					"url" : "sermons-english"},

					{"display" : "Mandarin Sermons",
					"url" : "sermons-mandarin"},

					{"display" : "Bilingual Sermons",
					"url" : "sermons-bilingual"}
					]},

				{"display" : "Mission Trips",
				"url" : "missions",
				"children" : [
					{"display" : "Tijuana",
					"url" : "missions-tijuana"},

					{"display" : "Pala",
					"url" : "missions-pala"},

					{"display" : "Many Farms",
					"url" : "missions-many-farms"},

					{"display" : "Honduras",
					"url" : "missions-honduras"},

					{"display" : "Belize",
					"url" : "missions-belize"},

					{"display" : "East Asia",
					"url" : "missions-east-asia"}
					]},

				{"display" : "Fellowship Groups",
				"url" : "fellowship-groups",
				"children" : [
					{"display" : "CYF",
					"url" : "fellowship-cyf"},

					{"display" : "CT",
					"url" : "fellowship-ct"},

					{"display" : "CLAY",
					"url" : "fellowship-clay"},

					{"display" : "CYF",
					"url" : "fellowship-cyf"},

					{"display" : "CYF",
					"url" : "fellowship-cyf"},

					{"display" : "CYF",
					"url" : "fellowship-cyf"},

					{"display" : "CYF",
					"url" : "fellowship-cyf"},

					{"display" : "CYF",
					"url" : "fellowship-cyf"}
					]},

				{"display" : "Upcoming Events",
				"url" : "events-upcoming",
				"children" : [
					{"display": "Event-X",
					"url" : "event-x"},

					{"display" : "Past Events",
					"url" : "events-past"}
					]}
			]};

export default () => (
  <div style={{ color: `teal` }}>
  <Toolbar/>

  {rebuildTable(x)}
    

  <FooterNav/>
</div>
)

