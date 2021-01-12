const a = 123;

const person = {
    name: '길동',
    age: 123,
    kor: 90,
    eng: 80,
    math: 70,
    // object 내부에서 함수 선언하는 방법
    total: function() {
        return this.kor + this.eng + this.math
    },
    get_avg: function() {  
        return this.total() / 3;
    },
};