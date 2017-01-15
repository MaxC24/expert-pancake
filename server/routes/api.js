const express = require('express');
const router = new express.Router();
const Referral = require('mongoose').model('Referral');

router.get('/dashboard', (req, res) => {
	res.status(200).json({
		email: req.user.email,
		name: req.user.name,
		referrals: req.user.referrals
	});
});

router.put('/referrals', (req, res) => {

	if(!req.user.referrals.include(req.body)){
		req.user.referrals.push(req.body);
		req.user.save()
		.then(user =>{
			res.status(200).json({
				referrals: user.referrals
			})
		})
		.catch( err=> {
			console.log(err.message);
		})
	} else {
		// send back error message
	}
})

module.exports = router;