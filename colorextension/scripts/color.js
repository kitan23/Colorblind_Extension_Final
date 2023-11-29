/*
 * CS360 Group Project
 * @author: Kerry Wang, Jayden Fedoroff, Ryan Crist, Kien Tran
 * @date:   October 27, 2023
 * @desc:  This file contains the code for the colorblind extension.
 */

let filterName = 0;

let greenInverted = false;
let redInverted = false;
let blueInverted = false;
let greenDeleted = false;
let redDeleted = false;
let blueDeleted = false;
let redSliderVal = 0;
let blueSliderVal = 0;
let greenSliderVal = 0;
let darkOrOriginal = "original";
let originalImages = true;
let deu = false;
let pro = false;
let ach = false;
let tri = false;


function createRGBSlider(colorValue) {
	return `<input type="range" min="0" max="255" value = "0" class="rbgslider" id="${colorValue}">
	                <p style="color:black;"> ${colorValue} <span id="${colorValue}Value">0</span></p>`;
}

function createResetButton() {
	return `<button type="button" id="reset">Reset</button>`;
}

function createButtonWithFunction(buttonName, func) {
	return `<button type="button" class="versionButton" func="${func.name}">${buttonName}</button>`;
}


function createButton0(buttonName) {
	//filterName = 0;
	//console.log("change filter name to 0");
	return `<button type="button" id="revertColor">${buttonName}</button>`;
}

function createButton1(typeName) {
	return `<button type="button" id="SavePreset">${typeName}</button>`;
}

function createButton2(typeName) {
	return `<button type="button" id="LoadPreset">${typeName}</button>`;
}

function createButton3(typeName) {
	return `<button type="button" id="blackWhite">${typeName}</button>`;
}


function createButton5(buttonName) {
	//filterName = 5;
	//console.log("change filter name to 5");
	return `<button type="button" id="deuter">${buttonName}</button>`;
}

function createButton6(buttonName) {
	//filterName = 6;
	//console.log("change filter name to 6");
	return `<button type="button" id="protan">${buttonName}</button>`;
}

function createButton7(buttonName) {
	//filterName = 7;
	//console.log("change filter name to 7");
	return `<button type="button" id="tritan">${buttonName}</button>`;
}

function createButton8(buttonName) {
	//filterName = 8;
	//console.log("change filter name to 8");
	return `<button type="button" id="achoma">${buttonName}</button>`;
}

// Create a mapping object
// const funcMap = {
//     toggleWhiteOnBlackTheme: toggleWhiteOnBlackTheme,
//     // loopThroughImgs: loopThroughImgs,
//     // savePreset: savePreset,
//     // loadPreset: loadPreset
// };

//CITE: https://www.w3schools.com/css/css_grid.asp
//DESC: Used to learn how to create a grid layout menu.
let menu = `
	<div id="colorBlindMenu">
	<div class="choiceItem">${createButton3("Toggle Black White Theme")}</div>
	<div class="choiceItem">${createButton1("Save Preset")}</div>
	<div class="choiceItem">${createButton2("Load Preset")}</div>
	<div class="choiceItem">${createButton0("Revert Images")}</div>
	<div class="choiceItem">${createButton5("Deuteranopia")}</div>
	<div class="choiceItem">${createButton7("Tritanopia")}</div>
	<div class="choiceItem">${createButton8("Achromatopsia")}</div>
	<div class="choiceItem">${createButton6("Protanopia")}</div>
	<div class="choiceItem">${createResetButton()}</div>
	<div class="choiceItem">${createRGBSlider("Red")}</div>
	<div class="choiceItem">${createRGBSlider("Green")}</div>
	<div class="choiceItem">${createRGBSlider("Blue")}</div>
	</div>
	`;

$("body").prepend(menu);
$("body").prepend(
	`<button type="button" id="optionsButton">Color Blind Options</button>`
);

document.querySelector("#colorBlindMenu").addEventListener("click", function (event) {
	if (event.target.matches(".versionButton")) {
		const func = event.target.getAttribute("func");
		console.log("BUTTON CLICKED");
		console.log(func);
		if (funcMap[func]) {
			console.log("YES");
			funcMap[func]();
		}
	}
});

//BETA: Creates a popup describing the colorblind mode and a sample image (it currently isn't loading)
//         let popup = `
// 		<div id="popupMenu">
// 		<p> Placeholder </p>
// 		</div>
// 		`;
//         $("body").prepend(popup);
//         $("body").prepend(
//             `<img src="deuteranopia.jpg" class="exampleImage" id="deu" width="200" height="250"></img>`
//         );
//         $("body").prepend(
//             `<img src="protanopia.jpg" class="exampleImage" id="pro" width="200" height="250"></img>`
//         );
//         $("body").prepend(
//             `<img src="tritanopia.jpg" class="exampleImage" id="tri" width="200" height="250"></img>`
//         );
//         $("body").prepend(
//             `<img src="achromatopsia.jpg" class="exampleImage" id="ach" width="200" height="250"></img>`
//         );
//         const colorblindPopup = document.getElementById("popupMenu");
//         const deuImg = document.getElementById("deu");
//         const proImg = document.getElementById("pro");
//         const triImg = document.getElementById("tri");
//         const achImg = document.getElementById("ach");


const colorBlindButton = document.getElementById("optionsButton");
const colorBlindMenu = document.getElementById("colorBlindMenu");
colorBlindButton.addEventListener("click", function () {
	if (colorBlindMenu.style.visibility == "hidden") {
		colorBlindMenu.style.visibility = "visible";
	} else {
		colorBlindMenu.style.visibility = "hidden";
	}
});


// function to toggle black text on white background theme
const linksList = document.getElementsByTagName("a");
let linksColorList = [];
for (var i = 0; i < linksList.length; i++) {
	if (linksList[i].href) {
		linksColorList.push(linksList[i].style.color);
	}
}

function toggleWhiteOnBlackTheme() {
	console.log("toggle white on black theme");

	if (document.body.classList.contains("whiteOnBlack")) {
		document.body.classList.remove("whiteOnBlack");
		console.log("toggle to BlackOnWhite");

		for (var i = 0; i < linksList.length; i++) {
			if (linksList[i].href) {
				linksList[i].style.color = linksColorList[i];
			}
		}
	} else {
		document.body.classList.add("whiteOnBlack");
		console.log("toggle to whiteOnBlack");
		darkOrOriginal = "dark";
		for (var i = 0; i < linksList.length; i++) {
			if (linksList[i].href) {
				linksList[i].style.color = "#3cabee";
			}
		}
	}
}


// --------------------Interactive functions-----------------------------
const resetPageBtn = document.getElementById("reset");
resetPageBtn.addEventListener('click', (event) => {
	this.location.reload();
	let colorBlindMenu = document.getElementById("colorBlindMenu");
	colorBlindMenu.style.visibility = "visible";
});


const blackWhiteBtn = document.getElementById("blackWhite");
blackWhiteBtn.addEventListener('click', (event) => {
	toggleWhiteOnBlackTheme();
});




// CITE: Stackoverflow
// URL:https://stackoverflow.com/questions/43233115/chrome-content-scripts-arent-working-domcontentloaded-listener-does-not-execut
// We learned that DOMContentLoaded would not work for injecting script after the event you are listening for fires.
// CITE: Mozilla
// URL: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
// HELP: We learned how to make code listens for messages from another part of your extension, so we can listen for DOMContentLoaded in our js extension.
chrome.runtime.onMessage.addListener(
	function(data) {
		if (data.message == "loaded") { // if tab loaded, then ...

			// -------------------------------Iterate through images and create canvas elements---------------------------
			const imagesList = document.querySelectorAll("img");
			var imgIndex = 0
			const nameID = "canvas";

			// CITE: Mozilla
			// URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
			// HELP: forEach() is used for array -- executes code once for each element in given array.
			imagesList.forEach((image, index) => {
				const thisCanvas = document.createElement('canvas');

				var thisNameID = `${nameID}${imgIndex}`;
				thisCanvas.id = `${thisNameID}`;
				thisCanvas.style.position = "absolute"; // position relative to document body
				thisCanvas.style.zIndex = "1000"; // high z-index so canvas can always stay on top of original image on web page

				imgIndex += 1; // canvas counter

				// Append canvas to the parent element of the current image
				const parent = image.parentNode; // BETA
				parent.appendChild(thisCanvas); // BETA

				const canvasContent = thisCanvas.getContext('2d');

				// ------------------------------Color filter functions---------------------------------
				// Func 1 -- color-blind mode Func: changeContrast: change the contrast of image
				const changeContrast = (contrast, thisData, index) => {
					// CITE: Oseiskai; Francis G. Loch
					// URL: https://www.dfstudios.co.uk/articles/programming/image-programming-algorithms/image-processing-algorithms-part-5-contrast-adjustment/
					// URL2: https://math.stackexchange.com/questions/906240/algorithms-to-increase-or-decrease-the-contrast-of-an-image
					// HELP: find a math model to increase contrast
					var factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
					thisData[index] = factor * (thisData[index] - 128) + 128;
					thisData[index + 1] = factor * (thisData[index + 1] - 128) + 128;
					thisData[index + 2] = factor * (thisData[index + 2] - 128) + 128;
				};

				// Func 2 -- color-blind mode Func: tritan: second method to deal with colorblind contrast for tritanopia: add mathmatically calculated contrast to increase color contrast for all pixels and also dynamically apply more contrast to R and G value
				const tritan = () => {
					console.log("tritanopia method 2");
					// CITE: Mozilla
					// URL: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
					// HELP: We learned how to get RGBA values of pixels of images into a list.
					// Syntax: .getImageData(sx, sy, sw, sh)
					const imageInfoList = canvasContent.getImageData(
						0,
						0,
						thisCanvas.width,
						thisCanvas.height
					); // a list of R,G,B,A of all pixels on images
					const imageInfoLength = imageInfoList.data.length;
					const thisData = imageInfoList.data;
					for (let index = 0; index < imageInfoLength; index += 4) {
						// TASK: increase contrast
						changeContrast(64, thisData, index); // contrast we can use from [0, 255]

						// don't do absolute value, there are four cases
						var factor = (259 * (48 + 255)) / (255 * (259 - 48));
						if (index != 0) {
							// ex. #FAA0A0 to #CAA000 (C-F: contrast able to see) 0FAh - 0CAh = 48d = 30h
							if (thisData[index - 4] - thisData[index] <= 48) {
								thisData[index - 4] =
									factor * (thisData[index - 4] - 128) + 128;
							} else if (thisData[index] - thisData[index - 4] <= 48) {
								thisData[index] = factor * (thisData[index] - 128) + 128;
							}
							// ex. #FAA0A0 TO FAD000 (A-D: contrast able to see) 0D0h - 0A0h = 48d = 30h
							if (thisData[index - 4 + 1] - thisData[index + 1] <= 48) {
								thisData[index - 4 + 1] =
									factor * (thisData[index - 4 + 1] - 128) + 128;
							} else if (thisData[index] - thisData[index - 4 + 1] <= 48) {
								thisData[index + 1] =
									factor * (thisData[index + 1] - 128) + 128;
							}
						}
					}
					// CITE: Mozilla
					// URL: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData
					// HELP: We learned how to paint altered images onto canvas.
					// Syntax: .putImageData(imageData, dx, dy)
					canvasContent.putImageData(imageInfoList, 0, 0);
				};

				// Func 3 -- color-blind mode Func: deutan: using the second method deal with colorblind contrast for deuteranopia: add mathmatically calculated contrast to increase color contrast for all pixels and also dynamically apply more contrast to R and B value
				const deutan = () => {
					console.log("deuteranopia method 2");
					// CITE: Mozilla
					// URL: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
					// HELP: We learned how to get RGBA values of pixels of images into a list.
					// Syntax: .getImageData(sx, sy, sw, sh)
					const imageInfoList = canvasContent.getImageData(
						0,
						0,
						thisCanvas.width,
						thisCanvas.height
					); // a list of R,G,B,A of all pixels on images
					const imageInfoLength = imageInfoList.data.length;
					const thisData = imageInfoList.data;
					for (let index = 0; index < imageInfoLength; index += 4) {
						// TASK: increase contrast
						changeContrast(64, thisData, index); // contrast we can use from [0, 255]

						// don't do absolute value, there are four cases
						var factor = (259 * (48 + 255)) / (255 * (259 - 48));
						if (index != 0) {
							// ex. #FAA0A0 to #CAA000 (C-F: contrast able to see) 0FAh - 0CAh = 48d = 30h
							if (thisData[index - 4] - thisData[index] <= 48) {
								thisData[index - 4] =
									factor * (thisData[index - 4] - 128) + 128;
							} else if (thisData[index] - thisData[index - 4] <= 48) {
								thisData[index] = factor * (thisData[index] - 128) + 128;
							}
							// ex. #FAA0A0 TO FAD000 (A-D: contrast able to see) 0D0h - 0A0h = 48d = 30h
							if (thisData[index - 4 + 2] - thisData[index + 2] <= 48) {
								thisData[index - 4 + 2] =
									factor * (thisData[index - 4 + 2] - 128) + 128;
							} else if (thisData[index] - thisData[index - 4 + 2] <= 48) {
								thisData[index + 2] =
									factor * (thisData[index + 2] - 128) + 128;
							}
						}
					}
					// CITE: Mozilla
					// URL: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData
					// HELP: We learned how to paint altered images onto canvas.
					// Syntax: .putImageData(imageData, dx, dy)
					canvasContent.putImageData(imageInfoList, 0, 0);
				};

				// Func 4 -- color-blind mode Func: protan: using the second method deal with colorblind contrast for deuteranopia: add mathmatically calculated contrast to increase color contrast for all pixels and also dynamically apply more contrast to G and B value
				const protan = () => {
					console.log("protanopia method 2");
					// CITE: Mozilla
					// URL: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
					// HELP: We learned how to get RGBA values of pixels of images into a list.
					// Syntax: .getImageData(sx, sy, sw, sh)
					const imageInfoList = canvasContent.getImageData(
						0,
						0,
						thisCanvas.width,
						thisCanvas.height
					); // a list of R,G,B,A of all pixels on images
					const imageInfoLength = imageInfoList.data.length;
					const thisData = imageInfoList.data;
					for (let index = 0; index < imageInfoLength; index += 4) {
						// TASK: increase contrast
						changeContrast(64, thisData, index); // contrast we can use from [0, 255]

						// don't do absolute value, there are four cases
						var factor = (259 * (48 + 255)) / (255 * (259 - 48));
						if (index != 0) {
							// ex. #FAA0A0 to #CAA000 (C-F: contrast able to see) 0FAh - 0CAh = 48d = 30h
							if (thisData[index - 4 + 1] - thisData[index + 1] <= 48) {
								thisData[index - 4 + 1] =
									factor * (thisData[index - 4 + 1] - 128) + 128;
							} else if (thisData[index + 1] - thisData[index - 4 + 1] <= 48) {
								thisData[index + 1] =
									factor * (thisData[index + 1] - 128) + 128;
							}
							// ex. #FAA0A0 TO FAD000 (A-D: contrast able to see) 0D0h - 0A0h = 48d = 30h
							if (thisData[index - 4 + 2] - thisData[index + 2] <= 48) {
								thisData[index - 4 + 2] =
									factor * (thisData[index - 4 + 2] - 128) + 128;
							} else if (thisData[index] - thisData[index - 4 + 2] <= 48) {
								thisData[index + 2] =
									factor * (thisData[index + 2] - 128) + 128;
							}
						}
					}
					// CITE: Mozilla
					// URL: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData
					// HELP: We learned how to paint altered images onto canvas.
					// Syntax: .putImageData(imageData, dx, dy)
					canvasContent.putImageData(imageInfoList, 0, 0);
				};

				// Func 5 -- color-blind mode Func: archrom: using the second method deal with colorblind contrast for archromatopsia: add mathmatically calculated contrast to increase color contrast for all pixels
				const archrom = () => {
					console.log("achromatopsia method 2");
					// CITE: Mozilla
					// URL: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
					// HELP: We learned how to get RGBA values of pixels of images into a list.
					// Syntax: .getImageData(sx, sy, sw, sh)
					const imageInfoList = canvasContent.getImageData(
						0,
						0,
						thisCanvas.width,
						thisCanvas.height
					); // a list of R,G,B,A of all pixels on images
					const imageInfoLength = imageInfoList.data.length;
					const thisData = imageInfoList.data;
					for (let index = 0; index < imageInfoLength; index += 4) {
						// TASK: increase contrast
						changeContrast(128, thisData, index); // contrast we can use from [0, 255]
					}
					// CITE: Mozilla
					// URL: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData
					// HELP: We learned how to paint altered images onto canvas.
					// Syntax: .putImageData(imageData, dx, dy)
					canvasContent.putImageData(imageInfoList, 0, 0);
				};


				// Func 6 -- Slider Func: sliderChangeGreen: change the G value according to slider's value
				// Arguments: valueG is the value from slider G
				const sliderChangeGreen = (valueG) => {
					console.log("Slider changed Green");
					const imageData = canvasContent.getImageData(0, 0, thisCanvas.width, thisCanvas.height);
					const data = imageData.data;

					for (let index = 0; index < data.length; index += 4) {
						data[index + 1] = valueG;
					}
					canvasContent.putImageData(imageData, 0, 0);
				};

				// Func 7 -- Slider Func: sliderChangeRed: change the R value according to slider's value
				// Arguments: valueR is the value from slider R
				const sliderChangeRed = (valueR) => {
					console.log("Slider changed Red");

					const imageData = canvasContent.getImageData(0, 0, thisCanvas.width, thisCanvas.height);
					const data = imageData.data;

					for (let index = 0; index < data.length; index += 4) {
						data[index] = valueR;
					}
					canvasContent.putImageData(imageData, 0, 0);
				};

				// Func 8 -- Slider Func: sliderChangeBlue: change the B value according to slider's value
				// Arguments: valueB is the value from slider B
				const sliderChangeBlue = (valueB) => {
					console.log("Slider changed Blue");
					const imageData = canvasContent.getImageData(0, 0, thisCanvas.width, thisCanvas.height);
					const data = imageData.data;

					for (let index = 0; index < data.length; index += 4) {
						data[index + 2] = valueB;
					}
					canvasContent.putImageData(imageData, 0, 0);
				};

				// Func 9 -- Revert image color to original by deleting canvas
				const RevertImageToOri = () => {
					const allCanvas = document.querySelectorAll("canvas");
					const listLen = allCanvas.length;
					// for (let index = 0; index < listLen; index++) {
					//allCanvas[index].parentNode.removeChild(allCanvas[index]);

					canvasContent.drawImage(thisImage, 0, 0, thisCanvas.width, thisCanvas.height);
					//}
				};


				// --------------------Interactive functions-----------------------------
				// 1. R, G, B Slider change image colors:
				//CITE: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_rangeslider
				//DESC: Used to learn how to create a slider and store its value.
				const redSlider = document.getElementById("Red");
				const greenSlider = document.getElementById("Green");
				const blueSlider = document.getElementById("Blue");

				redSlider.addEventListener('input', (event) => {
					sliderChangeRed(redSlider.value);
				});
				greenSlider.addEventListener('input', (event) => {
					sliderChangeGreen(greenSlider.value);
				});
				blueSlider.addEventListener('input', (event) => {
					sliderChangeBlue(blueSlider.value);
				});

				// 2. Four colorblind modes
				const deuModeBtn = document.getElementById("deuter");
				const triModeBtn = document.getElementById("tritan");
				const proModeBtn = document.getElementById("protan");
				const achModeBtn = document.getElementById("achoma");
				const revertBtn = document.getElementById("revertColor");

				deuModeBtn.addEventListener('click', (event) => {
					deu = true;
					ach = false;
					pro = false;
					tri = false;
					deutan();
				});
				triModeBtn.addEventListener('click', (event) => {
					deu = false;
					ach = false;
					pro = false;
					tri = true;
					tritan();
				});
				proModeBtn.addEventListener('click', (event) => {
					deu = false;
					ach = false;
					pro = true;
					tri = false;
					protan();
				});
				achModeBtn.addEventListener('click', (event) => {
					deu = false;
					ach = true;
					pro = false;
					tri = false;
					archrom();
				});
				revertBtn.addEventListener('click', (event) => {
					RevertImageToOri();
				});

				const resetPageBtn = document.getElementById("reset");
				resetPageBtn.addEventListener('click', (event) => {
					this.location.reload();
					let colorBlindMenu = document.getElementById("colorBlindMenu");
					colorBlindMenu.style.visibility = "visible";
				});

				const savePresetBtn = document.getElementById("SavePreset");
				const loadPresetBtn = document.getElementById("LoadPreset");

				savePresetBtn.addEventListener('click', (event) => {
					console.log("yes");
					let allSettings = {
						greenInvert: greenInverted,
						redInvert: redInverted,
						blueInvert: blueInverted,
						greenDelete: greenDeleted,
						redDelete: redDeleted,
						blueDelete: blueDeleted,
						redSlider: redSliderVal,
						blueSlider: blueSliderVal,
						greenSlider: greenSliderVal,
						darkOriginal: darkOrOriginal,
						originalImage: originalImages,
						protran: pro,
						deuter: deu,
						tritan: tri,
						achro: ach,
					};

					localStorage.setItem("allSettings", JSON.stringify(allSettings));
					console.log("All settings saved:");
					console.log(localStorage.getItem("allSettings"));
				});

				loadPresetBtn.addEventListener('click', (event) => {
					let retrieved = JSON.parse(localStorage.getItem("allSettings"));
					console.log("Loading Preset");
					console.log(retrieved);
					if (retrieved.darkOriginal == "dark") {
						console.log("h");
						toggleWhiteOnBlackTheme();
					}
					// if (retrieved.greenInvert == true) {
					// 	loopThroughImgs();
					// 	loopThroughImgs();
					// }
					// if (retrieved.redInvert == true) {
					// 	loopThroughImgs();
					// }
					// if (retrieved.blueInvert == true) {
					// 	loopThroughImgs();
					// }
					// if (retrieved.greenDelete == true) {
					// 	loopThroughImgs();
					// }
					// if (retrieved.redDelete == true) {
					// 	loopThroughImgs();
					// }
					// if (retrieved.blueDelete == true) {
					// 	loopThroughImgs();
					// }
					// if (retrieved.originalImage == true) {
					// 	RevertImageToOri();
					// }
					if (retrieved.achro == true) {
						filterName = 8;
						archrom();
					}
					if (retrieved.protran == true) {
						filterName = 6;
						protan();
					}
					if (retrieved.deuter == true) {
						filterName = 5;
						deutan();
					}
					if (retrieved.tritan == true) {
						filterName = 7;
						tritan();
					}
				});




				// --------------------------Draw the current image on current canvas----------------------
				const thisImage = new Image();
				thisImage.src = image.src;
				thisImage.crossOrigin = "Anonymous";
				thisImage.onload = () => {
					console.log("hi");
					thisCanvas.width = image.width;
					thisCanvas.height = image.height;
					var topCoordImage = image.offsetTop;
					var leftCoordImage = image.offsetLeft;
					thisCanvas.style.top = topCoordImage + "px";
					thisCanvas.style.left = leftCoordImage + "px";
					canvasContent.drawImage(thisImage, 0, 0, thisCanvas.width, thisCanvas.height);
				};
			});
//});
		}
});
