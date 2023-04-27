"use strict";

//constructor used for showing and hiding objects. Uses the computed transition time as the timer for sleeping the integrated promise.
const displayFunc = function(tag) {
	this.tag = document.querySelector(tag),
	this.show = async function(seconds = 1){
		this.tag.style.display = "block";
		await sleep(seconds * 1);
	},
	this.hide = async function(seconds = .5){
		this.tag.style.display = "none";
		await sleep(seconds * 1);
	}
};

//declares the object for easter egg features.
const bonusLevel = {}

//tags to ascii graphics
const ascii = {
	water: new displayFunc("#waterBody"),
	duck: new displayFunc("#duck"),
	frog: new displayFunc("#frog"),
	dog: new displayFunc("#dog"),
	hog: new displayFunc("#hog"),
	eggnog: new displayFunc("#eggnog")
};


// custom sleep function.
async function sleep(time){ return new Promise((resolve) => setTimeout(resolve, time * 1000)); }

// Listens for Enter to be pressed before continuing.
const listen4Enter = function(){
	return new Promise((resolve) => {
		document.addEventListener("keyup", function enterInputListener(event){
			if (event.key === "Enter"){
				document.removeEventListener("keyup", enterInputListener);
				resolve();
			}
		});
	})
}


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



const makeItRain = function letItRain(storminess) { // remember that the arg is a range 1-100.
	const hiddenRaindrops = 20;
	storminess = Math.floor(hiddenRaindrops*(storminess/100));
	const rainArray = shuffle(makeArray(storminess));
	const shuffledDrops = shuffle(makeArray(hiddenRaindrops, "Add 1"));

	let delayedRain = async () => {
		try {
			for (let rDropIteration = rainArray.length - 1; rDropIteration > -1; rDropIteration--){
				await sleep(7.77);
				let rainSelector = document.querySelector(`#rain_${shuffledDrops[rainArray[rDropIteration]]}`);
				rainSelector.style.display = "unset";
				rainSelector.style.opacity = 1;
			}
		}
		catch (e){
			console.log(e);
		}
	}
	delayedRain();
}


	const checkColorInput = async function checkInputForColor(inputSelector, asciiObj){
		const colorizeAscii = () => {
			inputSelector.style.backgroundColor = inputSelector.value;
			asciiObj.color = inputSelector.value;
			asciiObj.tag.style.color = asciiObj.color;
			//a little easter egg in case anyone puts in the same color that is used for the background later on.
			if (inputSelector.value === "paleTurquoise"){
				bonusLevel.enabled = true;
				//saves input to memory.
				localStorage.setItem("duck", JSON.stringify(asciiObj));
			}
		}

		//moves helper text to after the input box. If the input box is in an inline class.
		if (inputSelector.parentNode.classList.toString() === "inline"){
			inputSelector.parentNode.after(helper);
			inputSelector.parentNode.after(hm)
			inputSelector.parentNode.after(no)
			inputSelector.parentNode.after(yes)
		}
		else{
			inputSelector.after(helper);
		}
		await listen4Enter(); // wait for enter to be hit after inputing the color
		page.helper.hide();

		//blocks the input while it is being checked.
		inputSelector.disabled = true;
		await page.hm.show(); 
		await page.hm.hide();

		// event listener verifies the input. If the transition on duckColorInput occurred after colorizeAscii ran, then transitionend will detect it.
		inputSelector.addEventListener("transitionend", storyStartListener, {once: true});

		//Colors the Duck based on the input.
		//saves details to object and local storage.
		colorizeAscii(); 

		const inputRegex = /#/gu;
		// checks if the background color has a value.
		if (!inputSelector.style.backgroundColor){
			await page.no.show();
			await page.no.hide();
			inputSelector.disabled = false;
			checkColorInput(inputSelector, asciiObj);
		}
		//checks to ensure that no hex colors were used and that the duck is not colored white.
		switch(true){
			case inputSelector.style.backgroundColor === "white":
			case Boolean(inputSelector.value.match(inputRegex)):{
				await page.no.show();
				await page.no.hide();
				inputSelector.disabled = false;
				checkColorInput(inputSelector, asciiObj);
				break;
			}
		}
	}
