const patternDict = [{
	pattern: '\\b(?<greeting>Hi|Hello|Hey|Heya|Hi|Hola)\\b',
	intent: 'Hello'
},
{
	pattern: '\\b(Bye|Bubye|Quit|Exit|Close|End|Tata|Goodbye)\\b',
	intent: 'Exit'
},
{
	pattern: 'in\\s\\b(?<city>.+)',
	intent: 'CurrentWeather'
}];
module.exports = patternDict;
