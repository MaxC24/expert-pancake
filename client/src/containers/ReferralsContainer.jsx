import React from 'react';
import ReferralsForm from '../components/ReferralsForm.jsx';

class ReferralsContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            referral: '',
            errors: {}
        }
        this.changeReferral = this.changeReferral.bind(this);
    }

    changeReferral(event) {
		const referral = event.target.value;
		this.setState({
			referral
		})
	}

    render() {
        return (
            <ReferralsForm
                onChange={this.changeReferral}
				errors={this.state.errors}
                referral={this.state.referral}
            />
        )
    }

}

export default ReferralsContainer;