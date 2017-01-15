const express = require('express');
const router = new express.Router();
const Referral = require('mongoose').model('Referral');
const User = require('mongoose').model('User');

router.get('/dashboard', (req, res) => {
	res.status(200).json({
		email: req.user.email,
		name: req.user.name,
		referrals: req.user.referrals
	});
});

router.put('/referrals', (req, res) => {
	Referral.findOne(req.body)
	.then(referral => {
		
		if(!referral) {
			return Referral.create(req.body);
		} else {
			const error = new Error();
			error.message = 'The user has been already referred';
			throw error;
		}
	})
	.then(referral => {
		return referral.addToUser(req.user);
	})
	.then(user => {
		return User.populate(user, 'referrals');
	})
	.then(popUser => {
		res.status(200).json({
			referrals: popUser.referrals
		})
	})
	.catch(err => {
		console.log('Error: ', err.message);
		res.status(401).json({
			errors: {
				message: err.message
			}
		})
	})
})

module.exports = router;