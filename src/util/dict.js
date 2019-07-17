const data = require("./base.json");
//const data = require("https://github.com/ghidinelli/fred-jehle-spanish-verbs/blob/master/jehle_verb_lookup.json");

const myData = JSON.stringify(data);
const myObj = JSON.parse(myData);

const Dict = {};

for(let keys in myObj){// level of cojugared verbos
	for(let item in myObj[keys]){// array into conjugared verbo
		Dict[myObj[keys][item].infinitive] = {};
	}
};

for(let keys in myObj){// level of cojugared verbos
	for(let item in myObj[keys]){// array into conjugared verbo
		Dict[myObj[keys][item].infinitive][myObj[keys][item].performer] = {};
	}
};

for(let keys in myObj){// level of cojugared verbos
	for(let item in myObj[keys]){// array into conjugared verbo
		Dict[myObj[keys][item].infinitive][myObj[keys][item].performer][myObj[keys][item].mood] = {};
	}
};

for(let keys in myObj){// level of cojugared verbos
	for(let item in myObj[keys]){// array into conjugared verbo
		Dict[myObj[keys][item].infinitive][myObj[keys][item].performer][myObj[keys][item].mood][myObj[keys][item].tense] = keys;
	}
};

export default Dict;
