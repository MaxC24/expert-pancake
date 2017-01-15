import React from 'react';
import ReferralsForm from '../components/ReferralsForm.jsx';
import Auth from '../modules/Auth';

class ReferralsContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            errors: {},
            referrals: []
        }
        this.changeReferral = this.changeReferral.bind(this);
        this.processForm = this.processForm.bind(this);
    }

    changeReferral(event) {
		const email = event.target.value;
		this.setState({
			email
		})
	}

    processForm(event) {
        event.preventDefault();

        const email = encodeURIComponent(this.state.email);
        const formData = `email=${email}`;
        const xhr = new XMLHttpRequest();
        xhr.open('put', '/api/referrals')
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if(xhr.status === 200 ) {
                this.setState({
                    errors: {},
                    email: '',
                    referrals: xhr.response.referrals
                });
                console.log(this.state.referrals);
            } else {
                console.log('ERRRRROORRRRR', xhr.response.errors);
                this.setState({
                    errors: xhr.response.errors
                });
            }
        })
        xhr.send(formData);
    }

    render() {
        return (
            <ReferralsForm
                onChange={this.changeReferral}
				errors={this.state.errors}
                referral={this.state.email}
                onSubmit={this.processForm}
            />
        )
    }

}

export default ReferralsContainer;