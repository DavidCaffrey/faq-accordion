let question = document.getElementsByClassName('question');

let answers = document.getElementsByClassName('answer');

const arrowRotate = [
    { transform: 'rotate(0)' },
    { transform: 'rotate(-180deg)' },
    { transform: 'rotate(0)' },
];

const arrowTimings = {
    duration: 2000,
    iterations: 1
}



for (let i = 0; i < question.length; i++) {

    question[i].addEventListener('click', function() {
        this.classList.toggle('active');
        this.childNodes[1].childNodes[0].animate(arrowRotate, arrowTimings);
        let answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            for (let i = 0; i < answers.length; i++) {
                answers[i].style.display = 'none';
            }
            answer.style.display = 'block';
            answer.style.margin = '0 0 0 0';
        }
    });
}