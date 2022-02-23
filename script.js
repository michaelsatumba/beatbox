// alert('hello');

// function sound() {
// 	alert('sound');
// }

const audioA = new Audio('sounds/bassDrum.mp3');
const audioS = new Audio('sounds/snareDrum.mp3');
const audioD = new Audio('sounds/drumSticks.mp3');
const audioF = new Audio('sounds/mediumTomDrum.mp3');
const audioG = new Audio('sounds/china.mp3');
const audioH = new Audio('sounds/hiHat.mp3');
const audioJ = new Audio('sounds/gong.mp3');
const audioK = new Audio('sounds/kickDrum.mp3');
const audioL = new Audio('sounds/scratch.mp3');

window.addEventListener('keydown', (event) => {
	// if (event.key === 's') {
	// 	soundS();
	// }
	switch (event.key) {
		case 'a':
			soundA();
			break;
		case 's':
			soundS();
			break;
		case 'd':
			soundD();
			break;
		case 'f':
			soundF();
			break;
		case 'g':
			soundG();
			break;
		case 'h':
			soundH();
			break;
		case 'j':
			soundJ();
			break;
		case 'k':
			soundK();
			break;
		case 'l':
			soundL();
			break;

		default:
			break;
	}
});

function soundA() {
	audioA.play();
}

function soundS() {
	audioS.play();
}

function soundD() {
	audioD.play();
}

function soundF() {
	audioF.play();
}

function soundG() {
	audioG.play();
}

function soundH() {
	audioH.play();
}

function soundJ() {
	audioJ.play();
}

function soundK() {
	audioK.play();
}

function soundL() {
	audioL.play();
}
