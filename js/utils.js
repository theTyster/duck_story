"use strict";
//for testing usage only.
const refresh = function pageRefresher(time){
	let re = () => location.reload();
	setTimeout(re, time);
}


//let testerButton = 


//duck Object for duck quality persistance
const duck = {
	water: document.querySelectorAll("pre.water_flow"),
	illust: document.querySelector("pre#duck"),
};


//commonly used tags
const page = {
	body:  document.querySelector("body"),
	container: document.getElementsByClassName("container"),
	duckInput: document.querySelector("input#duck_color")
};


const phase = function(tag) {
	this.tag = document.querySelector(tag),
	this.fn = function() {
		this.tag.style.visibility = "unset";
		this.tag.style.opacity = 1;
	}
};


const ranNumG = function randomNumberGenerator(max){
	return Math.floor(Math.random() * max);
}


const makeArray = function arrayFromMaxIndex(maxIndex, useKeysBool){
	if (useKeysBool){
	return [...Array(maxIndex).keys()].map((x) => ++x);
	}
	else {
	return [...Array(maxIndex).keys()];
	}
}


let shuffle = function fisherYatesArrayShuffler(inputArr){
	let applyShuffler = () => {
		let len = inputArr.length;
		let placeholder;
		while (len){
			let ran = ranNumG(len--);
			[inputArr[ran], inputArr[len]] = [inputArr[len], inputArr[ran]];
		}
		return inputArr;
	}
	return applyShuffler(...inputArr);
}

// remember that the arg is a range 1-100.
const makeItRain = function letItRain(storminess) {
	const hiddenRaindrops = 20;
	storminess = Math.floor(hiddenRaindrops*(storminess/100));
	const rainArray = shuffle(makeArray(storminess, false));
	const shuffledDrops = shuffle(makeArray(hiddenRaindrops, true));
	let rDropIteration = rainArray.length - 1;


	const rainfall = function rainFromASetRange(){
		let rainSelector = document.querySelector(`#rain_${shuffledDrops[rainArray[rDropIteration]]}`);
		rainSelector.style.display = "unset";
		rainSelector.style.opacity = 1;
	}

	new Promise((next) =>{
		if(rDropIteration){
			setTimeout(() => {
				next();
			}, 777);
		}
		else throw new Error("What a beautiful sunny day.");
	})
	.then(() =>{
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("Getting a little drizzly...");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("Getting a little drizzly...");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("Getting a little drizzly...");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("Getting a little drizzly...");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("It's raining.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("It's raining.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("It's raining.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("It's raining.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("It's raining.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("It's raining pretty hard.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("It's raining pretty hard.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("It's raining pretty hard.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("It's raining pretty hard.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("It's raining pretty hard.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("It's raining pretty hard.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("The storm rages.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("The storm rages.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("The storm rages.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("The storm rages.");
		});
	})
	.then(() => {
		rainfall();
		return new Promise((next) => {
			if(rDropIteration--){
				setTimeout(() => {
					next();
				}, 777);
			}
			else throw new Error("The storm rages.");
		});
	})
	.catch((e) => console.log(e));
};
