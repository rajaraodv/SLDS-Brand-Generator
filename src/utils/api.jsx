var Fetch = require('whatwg-fetch');

var Api = {
	get: function(url) {
		return fetch(url)
			.then(function(response) {
				return response.json();
			})
	},
	post: function(url, body) {
		return fetch(url, {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
			}).then(function(response) {
			return response.json();
		})
	},
	download: function(url, body) {
		return fetch(url, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
			}).then(function(response) {
			return response.json();
		})
	}
}

module.exports = window.api = Api;

