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
