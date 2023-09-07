let button;
let person = prompt('Please, enter your name!');
let gallery;
let paintings;
let curtains;
let score = 0;
let count = 0;
let finalScore;
let h1;
let h2;
let input;
let shadow;
let buttonMore;
let p;

const paintingInfo = [
	{ title: 'Self-portrait', surname: 'Rembrandt', year: 1659 },
	{ title: 'The starry night', surname: 'Van gogh', year: 1889 },
	{ title: 'The Birth of Venus', surname: 'Boticelli', year: 1485 },
	{ title: 'Nighthawks', surname: 'Hopper', year: 1942 },
	{ title: 'Mona Lisa', surname: 'da Vinci', year: 1485 },
	{ title: 'Guernica', surname: 'Picasso', year: 1937 },
	{ title: 'The Young Lady with Gloves', surname: 'Lempicka', year: 1930 },
	{ title: 'American Gothic', surname: 'Wood', year: 1930 },
];

const main = () => {
	prepareElements();
	prepareEvents();
	showName();
};

const prepareElements = () => {
	button = document.querySelector('.start');
	alert = document.querySelector('.alert-info');
	h2 = document.querySelector('h2');
	gallery = document.getElementById('gallery');
	paintings = document.getElementsByClassName('painting');
	curtains = document.getElementsByClassName('curtain');
	input = document.querySelector('input');
	popup = document.getElementById('popup');
	finalScore = document.getElementById('final-score');
	intro = document.querySelector('.intro');
	shadow = document.getElementsByClassName('shadow');
	buttonMore = document.querySelector('.more');
	p = document.createElement('p');
};

const prepareEvents = () => {
	button.addEventListener('click', startQuiz);
	input.addEventListener('keyup', checkEnter);
	buttonMore.addEventListener('click', showMore);
};

const showName = () => {
	h2.innerText = `Hello ${person}`;
};

const startQuiz = () => {
	paintings[count]
		.getElementsByClassName('curtain')[0]
		.classList.add('curtain-up');

	if (input.value == !'') {
		checkEnter();
	}
};

function checkEnter(e) {
	const isEnter = e.which == 13 || e.keyCode == 13;
	if (isEnter) {
		checkInput();
	}
}

const checkInput = () => {
	if (input.value !== '') {
		checkTheAnswer();
	}
	if (input.value === '') {
		//wyswietl wiadomosc!!!!!!!!!
	}
};

const clear = () => {
	input.value = '';
};

const checkTheAnswer = () => {
	let answer = input.value.toLowerCase();
	let surname = paintingInfo[count].surname.toString().toLowerCase();
	if (surname === answer) {
		count = count + 1;
		score = score + 1;
		setTimeout(clear, 1000);
		if (count == 7) {
			setTimeout(endQuiz, 1500);
		}
		startQuiz();
	}

	if (surname !== answer) {
		count = count + 1;
		setTimeout(clear, 1000);
		if (count == 7) {
			setTimeout(endQuiz, 1500);
		}
		startQuiz();
	}
};

const endQuiz = () => {
	intro.classList.add('hide');
	h2.innerText = `your score is: ${score}/8. Would you like to learn more about these artworks? If the answer is yes, click the button below`;
	moreButton();
};

moreButton = () => {
	buttonMore.style.display = 'flex';
};

showMore = () => {
	for (i = 0, all = shadow.length; i < all; i++) {
		shadow[i].classList.add('show');

		shadow[
			i
		].innerText = `${paintingInfo[i].surname}, ${paintingInfo[i].title}, ${paintingInfo[i].year}`;
	}

	const noAnswerAlert = () => {
		alert.innerText = 'You need to put the surname first!';
	};
};
document.addEventListener('DOMContentLoaded', main);
