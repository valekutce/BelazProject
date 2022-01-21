$(document).ready(function (){
    let ques = document.querySelectorAll('.ques');
    let quesAnswers = document.querySelectorAll('.ques-answer');

    for (let a = 0; a < ques.length; a++) {
        ques[a].addEventListener('click', function(){
            ques[a].classList.remove('ques__activ');
            this.classList.add('ques__activ');
            for (let i = 0; i < quesAnswers.length; i++) {
                quesAnswers[i].style.display = 'none';
                
            }
            let quesAnswer = this.children;
            for (const quesAns of quesAnswer) {
                quesAns.style.display = 'inline-block';
            }
        });   
    }

    for (let i = 0; i < ques.length; i++) {
        ques[i].addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.matches('.ques-answer') || target && target.matches('span.close')) {
                for (let i = 0; i < quesAnswers.length; i++) {
                    quesAnswers[i].style.display = 'none';
                    ques[i].classList.remove('ques__activ');
                }
            }
        });   
    }

let questMore = document.querySelector('.quest-more'),
questPrev = document.querySelector('.quest-prev'),
loadImg = document.querySelector('.quest-more span img'),
questionsTwo = document.querySelector('.questions-two'),
questionsOne = document.querySelector('.questions-one');

questMore.addEventListener('click', function() {
    loadImg.classList.add('loader__active');
    setTimeout(function(){
        questMore.style.display = 'none';
        questionsOne.style.display = 'none';
        questionsTwo.style.display = 'block';
        questPrev.style.display = 'block';
    }, 1000);
});

questPrev.addEventListener('click', function() {
        questMore.style.display = 'flex';
        questPrev.style.display = 'none';
    setTimeout(function() {
        loadImg.classList.remove('loader__active');
        questionsOne.style.display = 'block';
        questionsTwo.style.display = 'none';
    }, 1000);
});

let submit1 = document.getElementById('submit1'),
emqil1 = document.getElementById('emqil1'),
tel1 = document.getElementById('tel1'),
thankYou = document.querySelector('.block-thankYou'),
clockRotate = document.querySelector('.block-thankYou span.oclock');

submit1.addEventListener('click', function(event) {
    event.preventDefault();
    setTimeout(function(){
        if (emqil1.value != "" && tel1.value != "") {
            thankYou.classList.add('block-thankYou_active');
        }
    }, 1000);
    setTimeout(function(){
        clockRotate.classList.add('clockRotate');
    },1300);
    setTimeout(function(){
        emqil1.value = "";
        tel1.value = "";
    },2300);
});


});
