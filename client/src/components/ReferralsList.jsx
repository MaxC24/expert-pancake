import React from 'react';

const ReferralList = ({referrals}) => {
    console.log(referrals);
    return (
        <ul> 
            <li>Hello</li>
            { referrals.map((ref, i) => { 
                    return(<li key={i} >{ ref.email }</li>) 
                }) 
            }
        </ul>
    )
}

export default ReferralList;