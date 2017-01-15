const express = require('express');
const router = new express.Router();

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
				email: user.email,
				name: user.name,
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