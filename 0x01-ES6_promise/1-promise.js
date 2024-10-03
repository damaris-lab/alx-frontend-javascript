export default function getResponseFromAPI() {
	return new promise((resolve, reject) => {
		if (success) {
			resolve({status: 200, body: 'Success'});
		}else {
			reject(Error('The fake API is not working currently');
		}
	});
}
