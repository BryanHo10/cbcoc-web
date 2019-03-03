import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"

import {Link} from "gatsby"

// We probably want the index controller.  For now I'm okay with us making each page -- that'd work and be easy and perforamnce-wise it seems it'll compile the same.
// However from a design / code-style perspective the controller is more modular and preferable.


// The sitemap can also be JSON -- it'd be better to dynamically generate this.
// For now I just noob hardcoded it for visualization.

/*
Refactor and use this when we have a base site working...

{"display" : "Home",
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
			
function rebuildTable(tableData) {



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

*/

export default () => (
  <div style={{ color: `teal` }}>
  <Toolbar/>

  <table border="3" align="center"><tbody>
  	<tr><td><Link to="/">HOME *</Link>

		<table border="2">
		<tbody>


			<tr><td>
				ABOUT

				<table border="1"><tbody>
					
					<tr><td><Link to="/vision">VISION *</Link></td></tr>
					<tr><td><Link to="/statement-of-faith">STATEMENT OF FAITH</Link></td></tr>
					<tr><td>
						<Link to="/leadership">LEADERSHIP *</Link>

								<table border="1"><tbody>
									<tr><td><Link to="/staff-tony-leung">TONY LEUNG</Link></td></tr>
									<tr><td><Link to="/staff-ryan-cheung">RYAN CHEUNG</Link></td></tr>
									<tr><td><Link to="/staff-eugene-kim">EUGENE KIM</Link></td></tr>
								</tbody></table>
					</td></tr>
				</tbody></table>

			</td></tr>



			<tr><td>
				MINISTRIES

				<table border="1"><tbody>
					<tr><td>
						<Link to="/fellowships">FELLOWSHIP GROUPS *</Link>
							<table border="1"><tbody>
								<tr><td><Link to="/fellowship-cyf">CYF</Link></td></tr>
								<tr><td><Link to="/fellowship-ct">CT</Link></td></tr>
								<tr><td><Link to="/fellowship-clay">CLAY</Link></td></tr>
								<tr><td><Link to="/fellowship-yff">YFF</Link></td></tr>
								<tr><td><Link to="/fellowship-foj">FOJ</Link></td></tr>
								<tr><td><Link to="/fellowship-eaf">EAF</Link></td></tr>
								<tr><td><Link to="/fellowship-zion">ZION</Link></td></tr>
								<tr><td><Link to="/fellowship-mandarin">MANDARIN FELLOWSHIP</Link></td></tr>
							</tbody></table>
					</td></tr>



					<tr><td>
						<Link to="/missions">MISSION TRIPS *</Link>
							<table border="1"><tbody>
								<tr><td><Link to="/missions-tijuana">TIJUANA</Link></td></tr>
								<tr><td><Link to="/missions-pala">PALA</Link></td></tr>
								<tr><td><Link to="/missions-many-farms">MANY FARMS</Link></td></tr>
								<tr><td><Link to="/missions-honduras">HONDURAS</Link></td></tr>
								<tr><td><Link to="/missions-belize">BELIZE</Link></td></tr>
								<tr><td><Link to="/missions-east-asia">EAST ASIA</Link></td></tr>
							</tbody></table>
					</td></tr>
				</tbody></table>
			</td></tr>

			<tr><td>
				EVENTS

				<table border="1"><tbody>
					<tr><td>
						<Link to="/events-upcoming">UPCOMING EVENTS *</Link>
							<table border="1"><tbody>
								<tr><td><Link to="/event-x">EVENT X</Link></td></tr>
								<tr><td><Link to="/events-past">PAST EVENTS</Link></td></tr>
							</tbody></table>
					</td></tr>
					<tr><td><Link to="/calendar">CALENDAR</Link></td></tr>
				</tbody></table>
			</td></tr>

			<tr><td>
				SERMONS

				<table border="1"><tbody>
					<tr><td><Link to="/sermons-english">ENGLISH SERMONS</Link></td></tr>
					<tr><td><Link to="/sermons-bilingual">BILINGUAL SERMONS</Link></td></tr>
					<tr><td><Link to="/sermons-mandarin">MANDARIN SERMONS</Link></td></tr>
				</tbody></table>
			</td></tr>

			<tr><td>
				<Link to="/visit">VISIT</Link>
			</td></tr>
		</tbody>
		</table>

		</td></tr>
		
	</tbody></table>

  <FooterNav/>
</div>
)
