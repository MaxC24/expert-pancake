import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';
import { Link, IndexLink } from 'react-router';

const Dashboard = ({secretData}) => {
	return (<Card className="container">
		<CardTitle
			title="Dashboard"
			subtitle="you can see this page only if authenticated."
		/>

		{ secretData && (
			<div>
				<CardText 
					style={{ fontSize: '16px', color:'green'}}>{secretData.message}
				</CardText>
				<CardText
					style={{ fontSize: '20px'}}
				>
					{ secretData.email }
				</CardText> 
			</div> )
		}
		{ 
		  Auth.isUserAuthenticated() && ( <Link to="/logout">LOG OUT</Link> ) 
      	}
	</Card>)
}

export default Dashboard;