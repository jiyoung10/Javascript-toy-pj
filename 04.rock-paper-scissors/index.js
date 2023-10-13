//button 요소 3개를 배열의 형식과 비슷하게 가져옴
const buttons = document.querySelectorAll('button');
const userChoice = document.querySelector('.you-choice');
const computerChoice = document.querySelector('.computer-choice');
const winner = document.querySelector('.result');

const choice = ['가위', '바위', '보'];

const show = (user, computer, result) => {
    userChoice.innerText = user;
    computerChoice.innerText = computer;
    winner.innerText = result;
};

const game = (user, computer) => {
    let message;

    if(user === computer) {
        message = '무승부';
    }else {
        switch (user + computer){
            case '바위가위':
            case '보바위':
            case '가위보':
                message = '사용자 승리!';
                break;
            case '바위보':
            case '보가위':
            case '가위바위':
                message = '컴퓨터 승리!';
                break;
         }
    }

    show(user, computer, message);
};

const play = (event) => {
    const user = event.target.innerText;
    const radomIndex = Math.floor(Math.random()*3);
    const computer = choice [radomIndex];

    userChoice.innerText = user;
    computerChoice.innerText = computer;
    game(user, computer);
};

buttons.forEach((button) => {
    button.addEventListener('click', play);
});

//Math.random() : 난수를 랜덤으로 생성하는 메서드
//Math.floor : 주어진 숫자와 같거나 작은 정수 중 가장 큰 수를 반환하는 메서드
//Math.round(Math.random());



