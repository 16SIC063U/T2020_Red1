const var IDENTITY = 'Group27';
const var TOKEN = '895784ca-f09d-4242-a523-4beff6fa4221';

// Customer
// Get Customer ID
export const getCustomerID(username) {
	let  url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/"+username;
	fetch(url,{
	    method: 'GET',
	    headers: {
	        method: 'GET',
	        identity: IDENTITY
	        token: TOKEN,
	        'mode': 'no-cors',
	        'Access-Control-Allow-Origin': "*",
	    }
	})
	.then((res) => {
	    return res.json()
	})
	.then((resJson) => {
	    console.log("Response", resJson.customerId);
	});
}

// Get Customer Details
export const getCustomerDetails(){

}

// Transactions
// Get Transaction Details
export const getTransactionDetails(){

}

// Accounts
// Get List of Deposit Accounts
export const getDepositAccounts(){

}
// Get Balance of a Deposit Account
export const getDepositAccBalance(){

}
// Get List of Credit Accounts
export const getCreditAccounts(){

}

// Get Outstanding Balance of a Credit Account
export const getCreditAccBalance(){
	
}

// Marketing
// Get List of Marketing Messages
export const getMarketingMessages(){
	
}

// Get Details of a Marketing Message
export const getMessageDetails(){
	
}

// Message
// Get Personal Messages
export const getPersonalMessages(){
	
}