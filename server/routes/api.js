const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
	res.status(200).json({
		email: req.user.email,
		name: req.user.name
	});
});

module.exports = router;