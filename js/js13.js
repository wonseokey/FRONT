const p1 = document.getElementById('p1');
        
p1.onclick = p1_clicked;

function p1_clicked() {
    p1.innerText = 'good job!'
} 

const ta01 = document.getElementById("ta01");

// # addEventListener로 추가하는 이벤트들은 덮어쓰지 않고 계속 추가된다.
const ta01_clcik_handler1 = (event_information) => {
    alert('Textarea를 클릭하셨습니다.\n');
};
const ta01_clcik_handler2 = (event_information) => {
    alert('Textarea를 클릭하셨습니다.2\n');
    console.log(event_information);
};

ta01.addEventListener('click', ta01_clcik_handler1);
ta01.addEventListener('change', ta01_clcik_handler2);
ta01.addEventListener('keyup', (e) => {
    console.log('변화가 있었습니다.', e);
});

// # 이벤트 삭제 (* 어떤 이벤트의 어떤 함수를 삭제할 지 정확하게 전달해줘야 함)
ta01.removeEventListener('click', ta01_clcik_handler1);
ta01.removeEventListener('click', ta01_clcik_handler2);

const outter = document.getElementById('outter');
const inner = document.getElementById('inner');
const statusBar = document.getElementById('status-bar');

let clicked_count = 1;
// # 이벤트 영여깅 겹칠 때의 이벤트 처리 현상 (이벤트 전파)
//  - 이벤트가 nested -> parent로 전파되도록 설정하는 것을 event Bubbling이라고 한다.
//  - 이벤트가 parent -> nested로 전파되도록 설정하는 것을 event Capturing이라고 한다.
outter.addEventListener('click', (e) => {
    statusBar.innerHTML += `<h3>${clicked_count++}. outter clicked!</h3>`;
}, false);
inner.addEventListener('click', (e) => {
    statusBar.innerHTML += `<h3>${clicked_count++}. innerDiv clicked!</h3>`;
    e.stopPropagation();
}, false);

// 안쪽의 이벤트를 클릭하더라도 바깥 이벤트가 선택되는것을 이용할 수 있다.
const transport = document.getElementById('transport');

// transport.addEventListener('click', (e) => {   
//     console.log(e.target.tagName);
// }, true);

transport.addEventListener('click', (e) => {   
    if (e.target.tagName === 'INPUT') {
        alert(`클릭하신 버튼은 ${e.target.value}입니다.`);
    }
}, false);