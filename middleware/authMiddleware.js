const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Mono = require('../models/Mono');

const requireAuth = ( req, res, next) => {
	const token = req.cookies.jwt;

	// check if jwt exists & is verified
	if (token) {
		jwt.verify(token, process.env['TOKEN'], (err, decodedToken) => {
			if (err) {
				console.log(err.message);
				res.redirect('/login');
			}else{
				// console.log(decodedToken);
				next();
			}
		});
	}else{
		res.redirect('/login');
	}
}


const checkUser = (req, res, next) => {
	const token = req.cookies.jwt;

	if (token) {
		jwt.verify(token, process.env['TOKEN'], async (err, decodedToken) => {
			if (err) {
				console.log(err.message);
				res.locals.user = null;
				next();
			}else{
				let user = await User.findById(decodedToken.id)
				res.locals.user = user;

				let monoAccount = await Mono.findOne({ userId:user.id })
				res.locals.mono = {
					data: monoAccount,
					// publicKey: process.env['MONO_SECRET_KEY']
				}
				
				next();
			}
		});
	}else{
		res.locals.user = null;
		res.locals.mono = null;
		next();
	}
}


module.exports = { requireAuth, checkUser };