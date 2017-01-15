import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';
import { Link, IndexLink } from 'react-router';
import ReferralsContainer from '../containers/ReferralsContainer.jsx';

const Dashboard = ({secretData, errors, referral, onChange}) => {
	return (
	<Card className="container">
		<Link style={{marginLeft:"600px"}} to="/logout" >LOG OUT</Link> 
		<CardTitle
			title={ "Hi " + secretData.name }
		/>

		{ secretData && (
			<div>
				<CardText
					style={{ fontSize: '20px'}}
				>
					Refer someone:
					<ReferralsContainer />
				</CardText> 
				
			</div> )
		}
	</Card>)
}

export default Dashboard;