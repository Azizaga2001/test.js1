1)
//обьясни своими словами, что значит callback функция

//OBRATNAYA FUNCTIYA

2)
//выведи в консоли 'Привет я Alex и мне 19 лет' с помощью функций ниже и callback
function alertInfo(name, age) {
    console.log('Привет я Alex и мне 19 лет');
}

function userInfo() {
    let name = 'Alex';
    let age = 19;
    alertInfo(name, age)
}

userInfo();

3)
//какая из функций является функцией обратного вызова?
setTimeout(showMessage, timeout);

function showMessage() {
    console.log('Сообшение');
    startProgram();
}

function startProgram() {
    console.log('Запуск');
}

//setTimeout(showMessage, timeout)

4)
//передайте функции ниже функцию showMessage  в качестве параметра и вызовите ее
function startProgram() {
    console.log('Запуск');
}

5)
//что такое Promise?

6)
//создайте Promise функцию?

7)
//обьясни своими словами, что такое res и rej?
let count = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});

8)
//обьясни своими словами, что такое .then?
let count = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});

9)
//обьясни своими словами, что такое .then?
let count = new Promise(function(res, rej) {
    let a = 4;
    if (a > 3) {
        res('Число подходит');
    } else {
        rej('Число неподходит');
    }

    count.then (
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );
});

10)
//что значит асинхронный?

11)
//что делает async?

12)
//что делает await?