import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';

class DashboardPage extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			secretData: '',
			errors: {},
			referral: ''
		};

		this.changeReferral = this.changeReferral.bind(this);
	}

	changeReferral(event) {
		const referral = event.target.value;
		this.setState({
			referral
		})
	}

	componentWillMount() {
		const xhr = new XMLHttpRequest();
		xhr.open('get', '/api/dashboard');
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
		xhr.responseType = 'json';
		xhr.addEventListener('load', () => {
			if(xhr.status === 200) {
				this.setState({
					secretData: xhr.response
				});
			}
		});
		xhr.send();
	}

	render() {
		return (<Dashboard 
				secretData={this.state.secretData} 
				onChange={this.changeReferral}
				errors={this.state.errors}
			/>);
	}
}

export default DashboardPage;