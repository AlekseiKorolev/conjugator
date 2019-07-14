const data = require("./base.json");
//const data = require("https://github.com/ghidinelli/fred-jehle-spanish-verbs/blob/master/jehle_verb_lookup.json");

const myData = JSON.stringify(data);
const myObj = JSON.parse(myData);
export const verbs = {};
export const persons = {};
export const moods = {};
export const tenses = {};

export const dict = {};

Object.keys(myObj).map(keys => {// level of cojugared verbos
	for(let item in myObj[keys]){// array into conjugared verbo
		Object.keys(myObj[keys][item]).map(key => {// keys into this array
			verbs[myObj[keys][item].infinitive] = {};
			persons[myObj[keys][item].performer] = {};
			moods[myObj[keys][item].mood] = {};
			tenses[myObj[keys][item].tense] = {};
		})
	}
});

Object.keys(myObj).map(keys => {// level of cojugared verbos
	for(let item in myObj[keys]){// array into conjugared verbo
		Object.keys(myObj[keys][item]).map(key => {// keys into this array
			dict[myObj[keys][item].infinitive] = {};
		})
	}
});
Object.keys(myObj).map(keys => {// level of cojugared verbos
	for(let item in myObj[keys]){// array into conjugared verbo
		Object.keys(myObj[keys][item]).map(key => {// keys into this array
			dict[myObj[keys][item].infinitive][myObj[keys][item].performer] = {};
		})
	}
});
Object.keys(myObj).map(keys => {// level of cojugared verbos
	for(let item in myObj[keys]){// array into conjugared verbo
		Object.keys(myObj[keys][item]).map(key => {// keys into this array
			dict[myObj[keys][item].infinitive][myObj[keys][item].performer][myObj[keys][item].mood] = {};
		})
	}
});
Object.keys(myObj).map(keys => {// level of cojugared verbos
	for(let item in myObj[keys]){// array into conjugared verbo
		Object.keys(myObj[keys][item]).map(key => {// keys into this array
			dict[myObj[keys][item].infinitive][myObj[keys][item].performer][myObj[keys][item].mood][myObj[keys][item].tense] = keys;
		})
	}
});
