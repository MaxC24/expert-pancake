import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Auth from '../modules/Auth';
import { Link, IndexLink } from 'react-router';

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
					
				</CardText> 
				<TextField
					floatingLabelText="Email"
					errorText={errors.email}
					onChange={onChange}
					value={referral}
				/>
			</div> )
		}
	</Card>)
}

export default Dashboard;