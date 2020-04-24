'use strict';
const colors = require("colors");
const dictionary = require("./dictionary");
const getFeel = temperature => {
	if(temperature<5){
		return 'shivering cold';
	}else if(temperature>=5 && temperature<15){
		return 'pretty cold';
	}else if(temperature>=15 && temperature <25){
		return 'moderately cold';
	}else if(temperature>=25 && temperature<32){
		return 'quite warm';
	}else if(temperature>=32 && temperature<40){
		return 'very hot';
	}else{
		return 'super hot';
	}

}

const getPrefix = (conditionCode, tense = "present") => {
	let findPrefix = dictionary[tense].find(item => {
		if(item.codes.indexOf(Number(conditionCode)) > -1){
			return true;
		}
	});
	return findPrefix.prefix || "";
}

const currentWeather= response => {
	if(response.location){
		const{
			location,condition,code,temperature
		} = response;
		return `Right now, ${getPrefix(code)} ${condition.toLowerCase().red} in ${location}. It is ${getFeel(Number(temperature))} at ${String(temperature).red} degrees Celsius..`
	}
}
module.exports = {currentWeather}
