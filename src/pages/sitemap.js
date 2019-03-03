import React from "react"
import Toolbar from "../components/toolbar"
import FooterNav from "../components/footerNav"
import Leader_Card from "../components/leadership/bio-modal"

import {Link} from "gatsby"

// We probably want the index controller.  For now I'm okay with us making each page -- that'd work and be easy and perforamnce-wise it seems it'll compile the same.
// However from a design / code-style perspective the controller is more modular and preferable.


// The sitemap can also be JSON -- it'd be better to dynamically generate this.
// For now I just noob hardcoded it for visualization.

export default () => (
  <div style={{ color: `teal` }}>
  <Toolbar/>

  <table border="3" align="center">
  	<tr><td><Link to="/index">HOME</Link>

		<table border="2">

			<tr><td><Link to="/calendar">CALENDAR</Link></td></tr>

			<tr><td><Link to="/statement-of-faith">STATEMENT OF FAITH</Link></td></tr>

			<tr><td><Link to="/vision">VISION</Link></td></tr>

			<tr><td>
				<Link to="/staff">STAFF</Link>

						<table border="1">
							<tr><td><Link to="/staff-tony-leung">TONY LEUNG</Link></td></tr>
							<tr><td><Link to="/staff-ryan-cheung">RYAN CHEUNG</Link></td></tr>
							<tr><td><Link to="/staff-eugene-kim">EUGENE KIM</Link></td></tr>
						</table>
			</td></tr>

			<tr><td>
					<Link to="/visit">VISIT</Link>
						<table border="1">
							<tr><td><Link to="/sermons-english">ENGLISH SERMONS</Link></td></tr>
							<tr><td><Link to="/sermons-bilingual">BILINGUAL SERMONS</Link></td></tr>
							<tr><td><Link to="/sermons-mandarin">MANDARIN SERMONS</Link></td></tr>
						</table>
			</td></tr>

			<tr><td>
					<Link to="/missions">MISSION TRIPS</Link>
						<table border="1"><tr><td><Link to="/missions-tijuana">TIJUANA</Link></td></tr>
							<tr><td><Link to="/missions-pala">PALA</Link></td></tr>
							<tr><td><Link to="/missions-many-farms">MANY FARMS</Link></td></tr>
							<tr><td><Link to="/missions-honduras">HONDURAS</Link></td></tr>
							<tr><td><Link to="/missions-belize">BELIZE</Link></td></tr>
							<tr><td><Link to="/missions-east-asia">EAST ASIA</Link></td></tr>
						</table>
			</td></tr>

			<tr><td>
					<Link to="/fellowship-groups">FELLOWSHIP GROUPS</Link>
						<table border="1">
							<tr><td><Link to="/fellowship-cyf">CYF</Link></td></tr>
							<tr><td><Link to="/fellowship-ct">CT</Link></td></tr>
							<tr><td><Link to="/fellowship-clay">CLAY</Link></td></tr>
							<tr><td><Link to="/fellowship-yff">YFF</Link></td></tr>
							<tr><td><Link to="/fellowship-foj">FOJ</Link></td></tr>
							<tr><td><Link to="/fellowship-eaf">EAF</Link></td></tr>
							<tr><td><Link to="/fellowship-zion">ZION</Link></td></tr>
							<tr><td><Link to="/fellowship-mandarin">MANDARIN FELLOWSHIP</Link></td></tr>
						</table>
			</td></tr>

			<tr><td>
					<Link to="/upcoming">UPCOMING EVENTS</Link>
						<table border="1">
							<tr><td><Link to="/event-x">EVENT X</Link></td></tr>
							<tr><td><Link to="/past">PAST EVENTS</Link></td></tr>
						</table>
			</td></tr>

			</table>
		</td></tr>
		
	</table>

  <FooterNav/>
</div>
)
