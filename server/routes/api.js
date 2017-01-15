const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
	res.status(200).json({
		message: 'You are authorized to see this secret message',
		email: req.user.email
	});
});

module.exports = router;