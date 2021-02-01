const Mono = require('../models/Mono');
const fetch = require('node-fetch');


module.exports.dashboard = async (req,res, next) => {

	if( res.locals.mono.data != null ){
		const url = `https://api.withmono.com/accounts/${res.locals.mono['data']['monoId']}/identity`

		const response = await fetch(url, { 
			method: 'GET', 
			headers: {
				'Content-Type': 'application/json',
				'mono-sec-key': process.env['MONO_SECRET_KEY']
			}
		});

		const data = await response.json();
		res.locals.dashboard = data;

		next();
	}else{
		next();
	}

}


module.exports.dashboardPost = async (req,res, next) => {
	// Retrieve code and user id from front end
	const { code, id } = req.body;
	url = "https://api.withmono.com/account/auth";

	if(code){
		// Retrieve mono id from front end
		const response = await fetch(url, { 
			method: 'POST',
			body: JSON.stringify({ code }),
			headers: {
				'Content-Type': 'application/json',
				'mono-sec-key': process.env['MONO_SECRET_KEY']
			}
		}).then(res_ => res_.json())
		  .then(function (res_) {
			res.status(200).json(res_)
		
			// try{
			const user = Mono({ userId: id, monoId: res_.id, monoCode: code }).save();
			res.status(200).json({ user })
			// }
			// catch (err){
			// 	res.status(400).json({ errors: "errors" });
			// }

		  })  
		  .catch(err => res.status(501).send("Error fetching id"));

		  
	}else{
		res.status(500).json({ error: "Error somewhere" })
	}


	
	// next();
}


module.exports.balances = async (req,res, next) => {
	if( res.locals.mono.data != null ){

		const url = `https://api.withmono.com/accounts/${res.locals.mono.data.monoId}`

		const response = await fetch(url, { 
			method: 'GET', 
			headers: {
				'Content-Type': 'application/json',
				'mono-sec-key': process.env['MONO_SECRET_KEY']
			}
		});

		const data = await response.json();
		res.locals.balances = data;

		next();
	}
	else{
		next();
	}
}

module.exports.transactions = async (req,res, next) => {
	if( res.locals.mono.data != null ){
		const url = req.query.page || `https://api.withmono.com/accounts/${res.locals.mono.data.monoId}/transactions`
		
		// const url = `https://api.withmono.com/accounts/5f171a530295e231abca1153/transactions`

		// const url = page

		const response = await fetch(url, { 
			method: 'GET', 
			headers: {
				'Content-Type': 'application/json',
				'mono-sec-key': process.env['MONO_SECRET_KEY']
			}
		});

		const data = await response.json();
		res.locals.transactions = data;
		next();
	}
	else{
		next();
	}

}

module.exports.alltransactions = async (req,res, next) => {
	if( res.locals.mono.data != null ){

		let url = `https://api.withmono.com/accounts/${res.locals.mono.data.monoId}/transactions`	
		// const url = `https://api.withmono.com/accounts/5f171a530295e231abca1153/transactions`
		let page = req.query.page || 1
		let finalUrl = url + `?page=${page}`

		const response = await fetch(finalUrl, { 
			method: 'GET', 
			headers: {
				'Content-Type': 'application/json',
				'mono-sec-key': process.env['MONO_SECRET_KEY']
			}
		});

		const data = await response.json();
		res.locals.transactions = data;

		next();

	}
	else{
		next();
	}

}