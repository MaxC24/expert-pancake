import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const ReferralsForm = ({onChange, errors, referral, onSubmit}) => {
    return (
        <div>
        <form action="/" onSubmit={onSubmit}>
            <TextField
                floatingLabelText="Email"
                errorText={errors.message}
                onChange={onChange}
                value={referral}
            />
            <div className="button-line">
                <RaisedButton type="submit" label="Submit" primary />
            </div>
        </ form>
        </div>
    )
} 

export default ReferralsForm;