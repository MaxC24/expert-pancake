import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Dashboard = ({secretData}) => {
	return (<Card className="container">
		<CardTitle
			title="Dashboard"
			subtitle="you can see this page only if authenticated."
		/>

		{ secretData && <CardText 
			style={{ fontSize: '16px', color:'green'}}>{secretData}
			</CardText>
		}
	</Card>)
}

export default Dashboard;