const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		index: {unique: true}
	},
	password: String,
	name: String,
	referrals: [{ type: mongoose.Schema.ObjectId, ref: 'Referral'}]
});

//method to compare the password in the request with the one in the db
UserSchema.methods.comparePassword = function(password, callback) {
	bcrypt.compare(password, this.password, callback);
};

//pre-save hook method

UserSchema.pre('save', function saveHook(next) {
	const user = this;

	if(!user.isModified('password')) return next();

	return bcrypt.genSalt((saltError, salt) => {
		if(saltError) { return next(saltError); }

		return bcrypt.hash(user.password, salt, (hashError, hash) => {
			if(hashError) { return next(hashError); }

			//replace the password string with hash value
			user.password = hash;

			return next();
		})
	})
})

module.exports = mongoose.model('User', UserSchema);
