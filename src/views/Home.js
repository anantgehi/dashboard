import { Col, Row } from "reactstrap"
import SalesChart from "../components/dashboard/SalesChart"
import Feeds from "../components/dashboard/Feeds"
import ProjectTables from "../components/dashboard/ProjectTable"

const Home = () => {
	return (
		<div>
			{/***Top Cards***/}

			{/***Sales & Feed***/}
			<Row>
				<Col sm="6" lg="6" xl="7" xxl="8">
					<SalesChart />
				</Col>
				<Col sm="6" lg="6" xl="5" xxl="4">
					<Feeds />
				</Col>
			</Row>
			{/***Table ***/}
			<Row>
				<Col lg="12">
					<ProjectTables />
				</Col>
			</Row>
			{/***Blog Cards***/}
		</div>
	)
}

export default Home
