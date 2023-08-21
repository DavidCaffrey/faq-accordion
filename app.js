let question = document.getElementsByClassName('question');

let answers = document.getElementsByClassName('answer');

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', function() {
        this.classList.toggle('active');
        this.chi
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