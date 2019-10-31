const IDENTITY = 'Group27';
const TOKEN = '895784ca-f09d-4242-a523-4beff6fa4221';

// Customer
// Get Customer ID
export const getCustomerID = (username, callback) => {
	//Regex Validation
	if(!username.match(/.+/)){
		return {OK: false}
	}

	let  url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/"+username;
	fetch(url,{
	    method: 'GET',
	    headers: {
	        method: 'GET',
	        identity: IDENTITY,
	        token: TOKEN,
	        'mode': 'no-cors',
	        'Access-Control-Allow-Origin': "*",
	    }
	})
	.then((res) => {
	    return res.json();
	})
	.then((resJson) => {
	    callback(resJson);
	});
}


// Get Customer Details
export const getCustomerDetails = (customerId, callback) => {
	//Regex Validation
	if(!customerId.match(/.+/)){
		return {OK: false}
	}

	let  url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/"+customerId+"/details";
	fetch(url,{
	    method: 'GET',
	    headers: {
	        method: 'GET',
	        identity: IDENTITY,
	        token: TOKEN,
	        'mode': 'no-cors',
	        'Access-Control-Allow-Origin': "*",
	    }
	})
	.then((res) => {
	    return res.json();
	})
	.then((resJson) => {
	   	callback(resJson);
	});
}

// Transactions
// Get Transaction Details
export const getTransactionDetails = (accountId, fromDate, toDate, callback) => {
	//Regex Validation
	if(!accountId.match(/.+/)){
		return {OK: false}
	}

	let  url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/transactions/"+accountId+"?from="+fromDate+"&to="+toDate;
	fetch(url,{
	    method: 'GET',
	    headers: {
	        method: 'GET',
	        identity: IDENTITY,
	        token: TOKEN,
	        'mode': 'no-cors',
	        'Access-Control-Allow-Origin': "*",
	    }
	})
	.then((res) => {
	    return res.json();
	})
	.then((resJson) => {
	   	callback(resJson);
	});
}

// Accounts
// Get List of Deposit Accounts
export const getDepositAccounts = (customerId, callback) => {
	//Regex Validation
	if(!customerId.match(/.+/)){
		return {OK: false}
	}

	let  url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/"+customerId;
	fetch(url,{
	    method: 'GET',
	    headers: {
	        method: 'GET',
	        identity: IDENTITY,
	        token: TOKEN,
	        'mode': 'no-cors',
	        'Access-Control-Allow-Origin': "*",
	    }
	})
	.then((res) => {
	    return res.json();
	})
	.then((resJson) => {
	   	callback(resJson);
	});
}
// Get Balance of a Deposit Account
export const getDepositAccBalance = (accountId, month=0, year=2018, callback) => {
	//Regex Validation
	if(!accountId.match(/.+/)){
		return {OK: false}
	}

	let  url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/"+accountId+"/balance?month="+month+"&year="+year;
	fetch(url,{
	    method: 'GET',
	    headers: {
	        method: 'GET',
	        identity: IDENTITY,
	        token: TOKEN,
	        'mode': 'no-cors',
	        'Access-Control-Allow-Origin': "*",
	    }
	})
	.then((res) => {
	    return res.json();
	})
	.then((resJson) => {
	   	callback(resJson);
	});
}
// Get List of Credit Accounts
export const getCreditAccounts = (customerId, callback) => {
	//Regex Validation
	if(!customerId.match(/.+/)){
		return {OK: false}
	}

	let  url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/credit/"+customerId;
	fetch(url,{
	    method: 'GET',
	    headers: {
	        method: 'GET',
	        identity: IDENTITY,
	        token: TOKEN,
	        'mode': 'no-cors',
	        'Access-Control-Allow-Origin': "*",
	    }
	})
	.then((res) => {
	    return res.json();
	})
	.then((resJson) => {
	   	callback(resJson);
	});
}

// Get Outstanding Balance of a Credit Account
export const getCreditAccBalance = (accountId, callback) => {
	//Regex Validation
	if(!accountId.match(/.+/)){
		return {OK: false}
	}

	let  url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/credit/"+accountId+"/balance";
	fetch(url,{
	    method: 'GET',
	    headers: {
	        method: 'GET',
	        identity: IDENTITY,
	        token: TOKEN,
	        'mode': 'no-cors',
	        'Access-Control-Allow-Origin': "*",
	    }
	})
	.then((res) => {
	    return res.json();
	})
	.then((resJson) => {
	   	callback(resJson);
	});
}

// Marketing
// Get List of Marketing Messages
export const getMarketingMessages = (callback) => {
	let  url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/marketing";
	fetch(url,{
	    method: 'GET',
	    headers: {
	        method: 'GET',
	        identity: IDENTITY,
	        token: TOKEN,
	        'mode': 'no-cors',
	        'Access-Control-Allow-Origin': "*",
	    }
	})
	.then((res) => {
	    return res.json();
	})
	.then((resJson) => {
	   	callback(resJson);
	});
}

// Get Details of a Marketing Message
export const getMessageDetails = (id, callback) => {
	//Regex Validation
	if(!id.match(/.+/g)){
		return {err: true}
	}

	let  url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/marketing/"+id;
	fetch(url,{
	    method: 'GET',
	    headers: {
	        method: 'GET',
	        identity: IDENTITY,
	        token: TOKEN,
	        'mode': 'no-cors',
	        'Access-Control-Allow-Origin': "*",
	    }
	})
	.then((res) => {
	    return res.json();
	})
	.then((resJson) => {
	   	callback(resJson);
	});
}

// Message
// Get Personal Messages
export const getPersonalMessages = (id, callback) => {
	//Regex Validation
	if(!id.match(/.+/)){
		return {OK: false}
	}

	let  url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/message/"+id;
	fetch(url,{
	    method: 'GET',
	    headers: {
	        method: 'GET',
	        identity: IDENTITY,
	        token: TOKEN,
	        'mode': 'no-cors',
	        'Access-Control-Allow-Origin': "*",
	    }
	})
	.then((res) => {
	    return res.json();
	})
	.then((resJson) => {
	   	callback(resJson);
	});
}