const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const divider = document.querySelector('.divider');

function clock() {
    //Date 객체 생성
    const now = new Date();

    hour.innerText = now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
};

//일정한 시간마다 동일한 작업을 반복하는 메서드 setInterval
//첫 번째 인자: 반복 수행할 함수/ 두번째 인자: 딜레이 시간
setInterval(clock, 1000); // 1초마다 clock 함수 실행


