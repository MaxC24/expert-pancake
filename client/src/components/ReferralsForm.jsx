import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const ReferralsForm = ({onChange, errors, referral}) => {
    return (
        <div>
            <TextField
                floatingLabelText="Email"
                errorText={errors.email}
                onChange={onChange}
                value={referral}
            />
        </div>
    )
} 

export default ReferralsForm;