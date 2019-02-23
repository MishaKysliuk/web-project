
if (!hasTouch()) {
    document.body.className += ' hasHover';
} else {
    document.querySelector('.navigation-list').addEventListener('click', event => {
        const navItem = event.target.closest('.navigation-item');
        if (navItem) {
            navItem.classList.toggle('dropdown-opened');
        }
    })
}

function hasTouch() {
    return 'ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0;
}



document.querySelector('.navigation-mobile-icon').addEventListener('click', function () {
    const nav = document.querySelector('.navigation-list');
    const icon = document.querySelector('.navigation-mobile-icon i');

    icon.classList.toggle('ion-navicon-round');
    icon.classList.toggle('ion-close-round');
    nav.classList.toggle('in');
});

document.querySelectorAll('.link-dropdown-container').forEach(element => {
    element.addEventListener('click', e => {
        const navItem = e.target.closest('.navigation-item');
        const dropdownLink = e.target.closest('.link-dropdown-container');

        if (dropdownLink) {
            const dropdownMenu = navItem.querySelector('.dropdown-menu');

            if (dropdownMenu.clientHeight === 0) {
                dropdownMenu.style.height = dropdownMenu.scrollHeight + 'px';
            } else {
                dropdownMenu.style.height = "0";
            }
            dropdownLink.classList.toggle('opened');
        }
    });
});


let curQuestionIndex = 1;

document.querySelectorAll('.answer-button').forEach(element => {
   element.addEventListener('click', () => {
       const curQuestion = document.querySelector(`#question-${curQuestionIndex}`);
       const nextQuestion = document.querySelector(`#question-${++curQuestionIndex}`);
       curQuestion.classList.toggle('question-left');
       nextQuestion.classList.toggle('question-right');
       if (curQuestionIndex !== 1) {
           document.querySelector('.step-back').classList.remove('hide');
       } else {
           document.querySelector('.step-back').classList.add('hide');
       }
       document.querySelector(`#step-${curQuestionIndex - 1}`).classList.add('done');
       document.querySelector(`#step-${curQuestionIndex}`).classList.add('choice');
   });
});

document.querySelector('.step-back').addEventListener('click', () => {
    if (curQuestionIndex > 1) {
        const curQuestion = document.querySelector(`#question-${curQuestionIndex}`);
        const prevQuestion = document.querySelector(`#question-${--curQuestionIndex}`);
        curQuestion.classList.toggle('question-right');
        prevQuestion.classList.toggle('question-left');
        if (curQuestionIndex !== 1) {
            document.querySelector('.step-back').classList.remove('hide');
        } else {
            document.querySelector('.step-back').classList.add('hide');
        }
        document.querySelector(`#step-${curQuestionIndex + 1}`).classList.remove('choice');
        document.querySelector(`#step-${curQuestionIndex}`).classList.remove('done');
        document.querySelector(`#step-${curQuestionIndex}`).classList.add('choice');
    }
});

function addQuestions() {
    const questionsContainer = document.querySelector('.quiz-questions');

    getQuizQuestions().forEach(question => {
        const questionClassName = question.id === 1 ? 'question' : 'question question-right';
        const questionHtml = `
            <div id="question-${question.id}" class="${questionClassName}">${question.question}</div>
        `;
        questionsContainer.insertAdjacentHTML('beforeend', questionHtml);
    });
}

addQuestions();

function getQuizQuestions() {
    return [
        {
            id: 1,
            question: 'Is anonymity the most important feature to you?',
        },
        {
            id: 2,
            question: 'Does it matter if transactions are slow to process through your payment method?',
        },
        {
            id: 3,
            question: 'Some casinos might allow deposits through certain payment methods but require you to use a different withdrawal method. Is this a problem for you?'
        }
    ];
}
