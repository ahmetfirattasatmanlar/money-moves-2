import http from "./httpService";
// import queryString from 'query-string';
// import Airtable from 'airtable';
// import { message } from "antd";
// var base = new Airtable({apiKey: 'keyvWcdRs864e3vqn'}).base('app0fX9jxKMIGZG05');
var apiUrl = `https://api.airtable.com/v0/app0fX9jxKMIGZG05/`;
var apiKey = `?api_key=keyvWcdRs864e3vqn`;


export default {
	// Get Fields from a Table
	getPortfolioItems: async(params) => {
		let filterBy = []
		if(Object.keys(params).length > 0){
			Object.keys(params).map(function(key, index) {
				filterBy.push(params[key])
				return false
			});
			// Error somewhere around here
			return http.get(`${apiUrl}Portfolio${apiKey}&filterByFormula=Find(%22${filterBy[0]}%22%2C+tags)`);
		} else {
			return http.get(`${apiUrl}Portfolio${apiKey}`);
		}
	},
	getAllPortfolio: async(params = {}) => {
		return http.get(`${apiUrl}Portfolio${apiKey}`);
	},
	getPortfolioItem: async(params) => {
		let filterBy= []

		Object.keys(params).map(function(key, index) {
			filterBy.push(params[key])
			return false
		});
		return http.get(`${apiUrl}Portfolio${apiKey}&filterByFormula=Find(%22${filterBy[0]}%22%2C+portfolioitem)`);
	},
	getAllProjects: async(params) => {
		let filterBy = []
		if(params && Object.keys(params).length > 0){
			Object.keys(params).map(function(key, index) {
				filterBy.push(params[key])
				return false
			});
			return http.get(`${apiUrl}Projects${apiKey}&filterByFormula=Find(%22${filterBy[1]}%22%2C+${filterBy[0]})`);
		} else {
			return http.get(`${apiUrl}Projects${apiKey}`);
		}
	},
	getOngoingProjects: async(params) => {
		return http.get(`${apiUrl}Projects${apiKey}&view=DailyWork`)
	},
	getProject: async(params) => {
		// let filterBy = []
	},
	getColaborators: async() => {
		return http.get(`${apiUrl}Service%20Providers${apiKey}&view=Contract`)
	},
	getTags: async() => {
		return http.get(`${apiUrl}Tags${apiKey}`)
	}
	// sendSlackNotification:(params)=> {
	// 	return http.post('https://hooks.slack.com/services/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', JSON.stringify(params))
	// },
}
